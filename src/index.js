import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

export const name = 'dsh-clawhub-multiskill';
export const inject = ['webServer'];

function getDshSkillsDir() {
  const dshHome = process.env.DSH_HOME || path.join(os.homedir(), '.dsh');
  const dir = path.join(dshHome, 'skills');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
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
    // 1. 获取本地已安装技能列表及运行状态
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
            installed.push({
              id: skillId,
              name: nameMatch ? nameMatch[1].trim() : skillId,
              description: descMatch ? descMatch[1].trim() : '',
              disabled: isDisabled,
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
            finalContent = `---\nname: ${cleanId}\ndescription: ${description || name || cleanId}\nversion: "1.0.0"\n---\n\n# ${name || cleanId}\n\n${description || ''}\n`;
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
