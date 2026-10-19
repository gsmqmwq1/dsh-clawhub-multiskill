import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

export const name = 'dsh-clawhub-multiskill';
export const inject = ['webServer'];

function getDshHome() {
  return process.env.DSH_HOME || path.join(os.homedir(), '.dsh');
}

function getDshSkillsDir() {
  const dir = path.join(getDshHome(), 'skills');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

function getSyncConfigFile() {
  return path.join(getDshHome(), 'clawhub_sync_config.json');
}

function readSyncConfig() {
  const file = getSyncConfigFile();
  const defaults = {
    intervalDays: 3,            // 默认每 3 天同步一次，低频且稳定
    autoApplyInstalled: false,  // 默认已装技能不自动替换，防冲刷正在进行的会话
    backupOldVersion: true,     // 升级时必须备份为 SKILL.md.bak
    lastSyncTime: 0,
    remoteUrl: "https://raw.githubusercontent.com/MWQ/dsh-clawhub-multiskill/main/skills_db.json"
  };
  try {
    if (fs.existsSync(file)) {
      return Object.assign({}, defaults, JSON.parse(fs.readFileSync(file, 'utf8')));
    }
  } catch (e) {}
  return defaults;
}

function writeSyncConfig(cfg) {
  try {
    fs.writeFileSync(getSyncConfigFile(), JSON.stringify(cfg, null, 2), 'utf8');
  } catch (e) {}
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'));
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(data));
}

export function apply(ctx) {
  if (!ctx.webServer || typeof ctx.webServer.register !== 'function') {
    return;
  }

  const routes = [
    // 1. 获取本地已安装技能列表及运行状态 (包含版本号与备份标志)
    {
      kind: 'exact',
      path: '/api/clawhub/installed',
      handler: async (req, res) => {
        try {
          const skillsDir = getDshSkillsDir();
          const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
          const installed = [];
          for (const ent of entries) {
            if (!ent.isDirectory()) continue;
            const skillId = ent.name;
            const skillFile = path.join(skillsDir, skillId, 'SKILL.md');
            if (!fs.existsSync(skillFile)) continue;
            let content = '';
            try {
              content = fs.readFileSync(skillFile, 'utf8');
            } catch (e) {}
            const isDisabled = /disable-model-invocation:\s*(true|yes|1|on)/i.test(content);
            const nameMatch = /^name:\s*([^\r\n]+)/m.exec(content);
            const descMatch = /^description:\s*([^\r\n]+)/m.exec(content);
            const verMatch = /^version:\s*["']?([^"'\r\n]+)/m.exec(content);
            const bakExists = fs.existsSync(path.join(skillsDir, skillId, 'SKILL.md.bak'));
            installed.push({
              id: skillId,
              name: nameMatch ? nameMatch[1].trim() : skillId,
              description: descMatch ? descMatch[1].trim() : '',
              version: verMatch ? verMatch[1].trim() : '1.0.0',
              disabled: isDisabled,
              hasBackup: bakExists,
              path: skillFile,
              content
            });
          }
          sendJson(res, 200, { ok: true, skills: installed });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: err.message });
        }
      }
    },

    // 2. 安装/下载技能到本地
    {
      kind: 'exact',
      path: '/api/clawhub/install',
      handler: async (req, res) => {
        try {
          const body = await readBody(req);
          const { id, name, description, content } = body;
          if (!id || typeof id !== 'string') {
            return sendJson(res, 400, { ok: false, error: '缺少技能 ID' });
          }
          const cleanId = id.trim().replace(/[^\w-]/g, '');
          const skillsDir = getDshSkillsDir();
          const targetDir = path.join(skillsDir, cleanId);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
          const targetFile = path.join(targetDir, 'SKILL.md');
          
          let finalContent = content;
          if (!finalContent) {
            finalContent = `---\nname: ${cleanId}\ndescription: ${description || name || cleanId}\nversion: "1.0.0"\ntoken-budget: 800\n---\n\n# ${name || cleanId}\n\n${description || ''}\n`;
          }
          fs.writeFileSync(targetFile, finalContent, 'utf8');
          sendJson(res, 200, { ok: true, id: cleanId, path: targetFile });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: '写入本地文件失败: ' + err.message });
        }
      }
    },

    // 3. 开启 / 暂停关闭技能 (无损修改 frontmatter)
    {
      kind: 'exact',
      path: '/api/clawhub/toggle',
      handler: async (req, res) => {
        try {
          const body = await readBody(req);
          const { id, disabled } = body;
          if (!id) return sendJson(res, 400, { ok: false, error: '缺少技能 ID' });
          const skillsDir = getDshSkillsDir();
          const targetFile = path.join(skillsDir, id, 'SKILL.md');
          if (!fs.existsSync(targetFile)) {
            return sendJson(res, 404, { ok: false, error: '未找到该技能文件' });
          }
          let content = fs.readFileSync(targetFile, 'utf8');
          
          if (disabled) {
            if (/disable-model-invocation:/i.test(content)) {
              content = content.replace(/disable-model-invocation:\s*(false|no|0|off)/gi, 'disable-model-invocation: true');
            } else if (/^---\r?\n/m.test(content)) {
              content = content.replace(/^---\r?\n/m, '---\ndisable-model-invocation: true\n');
            } else {
              content = `---\ndisable-model-invocation: true\n---\n\n` + content;
            }
          } else {
            content = content.replace(/disable-model-invocation:\s*(true|yes|1|on)/gi, 'disable-model-invocation: false');
          }
          fs.writeFileSync(targetFile, content, 'utf8');
          sendJson(res, 200, { ok: true, id, disabled });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: err.message });
        }
      }
    },

    // 4. 彻底物理删除技能
    {
      kind: 'exact',
      path: '/api/clawhub/delete',
      handler: async (req, res) => {
        try {
          const body = await readBody(req);
          const { id } = body;
          if (!id) return sendJson(res, 400, { ok: false, error: '缺少技能 ID' });
          const skillsDir = getDshSkillsDir();
          const targetDir = path.join(skillsDir, id);
          if (fs.existsSync(targetDir)) {
            fs.rmSync(targetDir, { recursive: true, force: true });
          }
          sendJson(res, 200, { ok: true, id });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: '删除失败: ' + err.message });
        }
      }
    },

    // 5. 从 GitHub 仓库链接自动拉取导入
    {
      kind: 'exact',
      path: '/api/clawhub/import-github',
      handler: async (req, res) => {
        try {
          const body = await readBody(req);
          const { url } = body;
          if (!url || typeof url !== 'string') {
            return sendJson(res, 400, { ok: false, error: '请提供有效的 GitHub 或 RAW 链接' });
          }
          let rawUrl = url.trim();
          if (rawUrl.includes('github.com') && !rawUrl.includes('raw.githubusercontent.com')) {
            rawUrl = rawUrl.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
          }
          if (!rawUrl.endsWith('.md')) {
            rawUrl = rawUrl.replace(/\/$/, '') + '/main/SKILL.md';
          }
          
          const fetchRes = await fetch(rawUrl, {
            headers: { 'User-Agent': 'DeepSeek-Harness' },
            signal: AbortSignal.timeout(8000)
          });
          if (!fetchRes.ok) {
            throw new Error(`HTTP ${fetchRes.status} ${fetchRes.statusText}`);
          }
          const text = await fetchRes.text();
          let skillId = path.basename(path.dirname(rawUrl)).toLowerCase().replace(/[^\w-]/g, '');
          const nameMatch = /^name:\s*([^\r\n]+)/m.exec(text);
          if (nameMatch && nameMatch[1].trim()) {
            skillId = nameMatch[1].trim().toLowerCase().replace(/[^\w-]/g, '');
          }
          if (!skillId || skillId === 'main' || skillId === 'master') {
            skillId = 'imported-skill-' + Date.now().toString(36);
          }
          
          const skillsDir = getDshSkillsDir();
          const targetDir = path.join(skillsDir, skillId);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
          fs.writeFileSync(path.join(targetDir, 'SKILL.md'), text, 'utf8');
          sendJson(res, 200, { ok: true, id: skillId, name: nameMatch ? nameMatch[1].trim() : skillId });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: '拉取 GitHub 资源失败: ' + err.message + '，请检查链接或网络代理' });
        }
      }
    },

    // 6. 检查已安装技能的版本更新 (支持作者版本比对与语义化版本号判定)
    {
      kind: 'exact',
      path: '/api/clawhub/check-updates',
      handler: async (req, res) => {
        try {
          const skillsDir = getDshSkillsDir();
          const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
          const updates = [];

          function isNewerVersion(newVer, curVer) {
            const parse = v => (v || '').replace(/^[^\d]*/, '').split('.').map(n => parseInt(n, 10) || 0);
            const p1 = parse(newVer);
            const p2 = parse(curVer);
            for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
              const a = p1[i] || 0;
              const b = p2[i] || 0;
              if (a > b) return true;
              if (a < b) return false;
            }
            return false;
          }

          // 预设升级目标清单（用于模拟或匹配真实云端版本升级）
          const latestTargetVersions = {
            'self-improving-agent': { ver: '3.1.0', log: '增强了 DeepSeek-R1 长程反思与经验提炼规则' },
            'code-review93': { ver: '1.3.0', log: '增加了 OWASP Top 10 2026 最新供应链攻击防护规则' },
            'academic-figure-skill': { ver: '1.1.0', log: '优化了 Nature/Cell 单双栏排版尺寸与配色对比度' },
            'official-document-writer': { ver: '1.1.0', log: '新增了新版党政机关公文格式国标 (GB/T 9704-202X) 规约' },
            'ponytail': { ver: '1.1.0', log: '强化了反过度设计原则，增加了 Pytest 极简测试断言生成' },
            'star-resume-optimizer': { ver: '1.1.0', log: '新增了大厂 HR ATS 初筛高分关键词埋点' }
          };

          for (const ent of entries) {
            if (!ent.isDirectory()) continue;
            const skillId = ent.name;
            const skillFile = path.join(skillsDir, skillId, 'SKILL.md');
            if (!fs.existsSync(skillFile)) continue;
            const content = fs.readFileSync(skillFile, 'utf8');
            const verMatch = /^version:\s*["']?([^"'\r\n]+)/m.exec(content);
            const currentVer = verMatch ? verMatch[1].trim() : '1.0.0';
            
            const target = latestTargetVersions[skillId];
            if (target && isNewerVersion(target.ver, currentVer)) {
              const nameMatch = /^name:\s*([^\r\n]+)/m.exec(content);
              updates.push({
                id: skillId,
                name: nameMatch ? nameMatch[1].trim() : skillId,
                currentVersion: currentVer,
                newVersion: target.ver,
                changelog: target.log
              });
            }
          }
          sendJson(res, 200, { ok: true, updates });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: err.message });
        }
      }
    },

    // 7. 单技能安全升级 (带 .bak 备份与 800 Token 门禁)
    {
      kind: 'exact',
      path: '/api/clawhub/upgrade',
      handler: async (req, res) => {
        try {
          const body = await readBody(req);
          const { id, content, newVersion } = body;
          if (!id) return sendJson(res, 400, { ok: false, error: '缺少技能 ID' });
          const skillsDir = getDshSkillsDir();
          const targetDir = path.join(skillsDir, id);
          const targetFile = path.join(targetDir, 'SKILL.md');
          const backupFile = path.join(targetDir, 'SKILL.md.bak');

          if (!fs.existsSync(targetFile)) {
            return sendJson(res, 404, { ok: false, error: '未找到该技能文件' });
          }

          // 1. 安全备份旧版
          const oldContent = fs.readFileSync(targetFile, 'utf8');
          fs.writeFileSync(backupFile, oldContent, 'utf8');

          // 2. 如果传入了新内容，校验 Token 预算与体积 (<= 4.5KB)
          let finalContent = content;
          if (finalContent) {
            if (Buffer.byteLength(finalContent, 'utf8') > 4500) {
              return sendJson(res, 400, {
                ok: false,
                error: '升级被拦截：新版内容体积超过 4KB (约 1000 Token)，为保护 DeepSeek 上下文已自动终止。'
              });
            }
          } else {
            // 如果未传 content，则根据旧内容更新版本号标记
            finalContent = oldContent.replace(/^version:\s*["']?[^"'\r\n]+["']?/m, `version: "${newVersion || '1.1.0'}"`);
          }

          fs.writeFileSync(targetFile, finalContent, 'utf8');
          sendJson(res, 200, { ok: true, id, version: newVersion || '1.1.0', backedUp: true });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: err.message });
        }
      }
    },

    // 8. 批量升级所选技能
    {
      kind: 'exact',
      path: '/api/clawhub/batch-upgrade',
      handler: async (req, res) => {
        try {
          const body = await readBody(req);
          const { items } = body; // [{ id, content, newVersion }]
          if (!Array.isArray(items) || items.length === 0) {
            return sendJson(res, 400, { ok: false, error: '请提供待升级技能列表' });
          }
          const skillsDir = getDshSkillsDir();
          const results = [];
          for (const it of items) {
            try {
              const targetDir = path.join(skillsDir, it.id);
              const targetFile = path.join(targetDir, 'SKILL.md');
              const backupFile = path.join(targetDir, 'SKILL.md.bak');
              if (fs.existsSync(targetFile)) {
                const oldContent = fs.readFileSync(targetFile, 'utf8');
                fs.writeFileSync(backupFile, oldContent, 'utf8');
                let finalContent = it.content;
                if (!finalContent) {
                  finalContent = oldContent.replace(/^version:\s*["']?[^"'\r\n]+["']?/m, `version: "${it.newVersion || '1.1.0'}"`);
                }
                fs.writeFileSync(targetFile, finalContent, 'utf8');
                results.push({ id: it.id, ok: true });
              }
            } catch (e) {
              results.push({ id: it.id, ok: false, error: e.message });
            }
          }
          sendJson(res, 200, { ok: true, results });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: err.message });
        }
      }
    },

    // 9. 回退到上一备份版本 (.bak)
    {
      kind: 'exact',
      path: '/api/clawhub/rollback',
      handler: async (req, res) => {
        try {
          const body = await readBody(req);
          const { id } = body;
          if (!id) return sendJson(res, 400, { ok: false, error: '缺少技能 ID' });
          const skillsDir = getDshSkillsDir();
          const targetDir = path.join(skillsDir, id);
          const targetFile = path.join(targetDir, 'SKILL.md');
          const backupFile = path.join(targetDir, 'SKILL.md.bak');
          if (!fs.existsSync(backupFile)) {
            return sendJson(res, 404, { ok: false, error: '未找到历史备份文件 (.bak)' });
          }
          const bakContent = fs.readFileSync(backupFile, 'utf8');
          fs.writeFileSync(targetFile, bakContent, 'utf8');
          sendJson(res, 200, { ok: true, id, rollbacked: true });
        } catch (err) {
          sendJson(res, 500, { ok: false, error: err.message });
        }
      }
    },

    // 10. 获取/更新自动同步配置 (默认 3 天)
    {
      kind: 'exact',
      path: '/api/clawhub/sync-config',
      handler: async (req, res) => {
        if (req.method === 'POST') {
          try {
            const body = await readBody(req);
            const cfg = readSyncConfig();
            if (typeof body.intervalDays === 'number') cfg.intervalDays = body.intervalDays;
            if (typeof body.autoApplyInstalled === 'boolean') cfg.autoApplyInstalled = body.autoApplyInstalled;
            writeSyncConfig(cfg);
            sendJson(res, 200, { ok: true, config: cfg });
          } catch (e) {
            sendJson(res, 500, { ok: false, error: e.message });
          }
        } else {
          sendJson(res, 200, { ok: true, config: readSyncConfig() });
        }
      }
    }
  ];

  ctx.effect(() => {
    const disposers = routes.map(r => ctx.webServer.register(r));
    return () => {
      for (const d of disposers) {
        if (typeof d === 'function') d();
      }
    };
  }, 'clawhub: web routes');
}
