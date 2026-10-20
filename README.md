# dsh-clawhub-multiskill

<p align="center">
  <img src="docs/images/logo.svg" width="88" height="88" alt="dsh-clawhub-multiskill logo" />
</p>

<p align="center">
  <strong>DeepSeek Harness 原生 AI Agent 技能集市与多技能中文意图批量调度插件 (v1.1.0)</strong>
</p>

<p align="center">
  <a href="https://github.com/gsmqmwq1/dsh-clawhub-multiskill/releases"><img src="https://img.shields.io/badge/version-1.1.0-blue.svg?style=flat-square" alt="Version 1.1.0" /></a>
  <a href="./SKILL_SELECTION_STANDARD.md"><img src="https://img.shields.io/badge/curated%20skills-214%20verified-emerald.svg?style=flat-square" alt="214 Curated Skills" /></a>
  <a href="./SKILL_SELECTION_STANDARD.md"><img src="https://img.shields.io/badge/token%20budget-%3C%20800%20tokens-orange.svg?style=flat-square" alt="Token Budget" /></a>
  <a href="https://github.com/gsmqmwq1/dsh-clawhub-multiskill/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-purple.svg?style=flat-square" alt="MIT License" /></a>
  <a href="https://github.com/gsmqmwq1/dsh-clawhub-multiskill"><img src="https://img.shields.io/badge/DeepSeek%20Harness-Native%20Plugin-2563eb.svg?style=flat-square" alt="DeepSeek Harness Native" /></a>
</p>

---

## 📖 项目简介

`dsh-clawhub-multiskill` 是专为 **DeepSeek Harness (DSH)** 桌面客户端量身打造的双源极速 AI Agent 技能集市与输入框调度器。

插件严格甄选并收录了 **214 个真实高质量全球开源 AI Agent 技能规约包（覆盖 9 大核心业务领域）**。每个技能均建立在清晰的专家心智 (Persona)、阶梯式执行流程 (SOP) 与明确可落地的交付物规范之上。插件兼具云端索引轻量按需下载、热插拔安全停用、历史快照一键回退、本地自定义中文别名记忆以及聊天框毫秒级多选注入能力。

---

## 📸 核心界面效果实拍 (v1.1.0)

### 1. 全景技能集市与 macOS 扁平微胶囊设计
3 列黄金比例自适应卡片流，20+ 组无边框高对比度 Squircle 矢量图标体系，深浅双色模式自适应：
![全景技能集市](docs/images/market_overview.png)

### 2. 已安装生命周期管理与安全升级/回退
清晰三态子分段（全部已安装 / 启用中 / 已停用），原生模态二次确认卸载，支持作者版本检测与一键回退旧版：
![已安装技能管理](docs/images/installed_management.png)

### 3. 会话输入框悬浮多技能中文批量检索面板 (Composer Popover)
点击输入框右侧 `🧩 技能`，浮出极简原生 Sheet 面板，支持中文模糊搜索、多选框勾选与一键注入会话草稿：
![输入框悬浮多选面板](docs/images/composer_popover.png)

---

## ⚡ V1.0.0 与 V1.1.0 架构演进与对比

| 维度 | V1.0.0 基础版本 | V1.1.0 全新架构版本 (当前版) | 价值收益 / 改进说明 |
| :--- | :--- | :--- | :--- |
| **视觉与交互规范** | 存在生硬灰色分割线、浅色下突兀的深黑底块、带框重底色图标 | **macOS / iOS 扁平微胶囊规范**：通透自适应白底/毛玻璃质感、20+ 组粗线 Squircle 矢量图标、深浅模式无缝融入 | 彻底消除视觉噪音与沉重感，与 DeepSeek Harness 原生界面浑然一体 |
| **操作区与卡片布局** | 卡片底部平铺 4~5 个分散按钮，并在卡片上放置与集市无关的 `💬 调用` 按钮 | **生命周期操作高度收敛**：高级运维选项收拢于右上角 `···` 菜单，右下角单一主动作胶囊 `[ 安装 ]` / `[ 立即升级 ]` / `[ 卸载 ]`；调用权统一归还输入框 | 界面呼吸感大幅提升，杜绝误触与认知负担 |
| **收藏与过滤专栏** | 缺乏收藏记忆机制，查找常用技能需反复滚动翻页 | **恢复「我的收藏 ★」独立专栏**：卡片支持一键星标收藏与持久化记忆，顶部一键直达 | 针对高频刚需技能实现秒级触达 |
| **版本安全与运维** | 单版本覆盖写入，升级若不满意无法挽回 | **安全备份与语义化对比**：升级前自动克隆 `SKILL.md.bak`，支持 `↩️ 回退旧版` 与 `🚫 屏蔽此技能更新` | 保护用户既有工作流稳定性，杜绝新版劣化风险 |
| **中文别名与搜索** | 仅支持原生英文 ID 查找，记忆成本高 | **本地中文别名持久化**：用户可在 `···` 菜单自定义中文名，升级永不覆盖，输入框支持中文别名毫秒过滤 | 彻底消除英文记忆负担，输入法更友好 |
| **云端在线更新机制** | 仅依赖本地写死数据，无法感知上游迭代 | **双层在线更新体系**：GitHub Actions 72 小时定时自动同步技能库 + 插件自身一键检测与自升级 | 保证技能库与核心代码的持续生命力 |

---

## 🔄 GitHub 在线更新与云端同步体系设计

插件构建了**数据层**与**核心逻辑层**解耦的双轨在线更新机制：

```mermaid
flowchart TD
    subgraph 云端生态 (GitHub Cloud)
        GA["GitHub Actions (每 72 小时 定时巡检)"]
        VAL["准入门禁 (Token预算 <=800, 格式校验, 唯一性去重)"]
        SDB["skills_db.json (云端核心技能索引库)"]
        REL["GitHub Releases / main 源码仓库"]
        GA --> VAL --> SDB
    end

    subgraph 本地客户端 (DeepSeek Harness)
        DSH_SRV["插件服务端 API (/api/clawhub/*)"]
        DSH_CLI["插件界面渲染 (Market UI & Composer)"]
        LOCAL_DIR["本地技能目录 (~/.dsh/skills)"]
        BAK_DIR["历史快照备份 (*.bak)"]
        CFG["用户别名与配置 (clawhub_skill_aliases.json)"]
    end

    SDB -.->|1. 低频安全拉取| DSH_SRV
    DSH_SRV -->|2. 对比已安装版本| DSH_CLI
    DSH_CLI -->|3. 用户触发升级| DSH_SRV
    DSH_SRV -->|4. 自动生成备份| BAK_DIR
    DSH_SRV -->|5. 写入新版规约| LOCAL_DIR
    REL -.->|插件自身版本检测| DSH_SRV
```

### 1. 技能库云端 72 小时动态同步 (Skills Market Auto-Sync)
- **定时自动化触发**：通过 GitHub Actions 定时流水线（模版配置位于 `scripts/sync-skills.yml`）每 72 小时定时运行，抓取全球高质量开源 Agent 技能。
- **5 大准入铁律把关**：
  1. 上下文预算控制在 $\le 800$ Tokens（文件体积 $\le 4\text{KB}$）。
  2. 必须具备标准 YAML Frontmatter（`name`, `description`, `version`, `token-budget`）。
  3. 规范的 Persona 心智设定、分步 SOP 阶梯流程与清晰的交付物规格（Markdown/LaTeX/代码）。
  4. 杜绝软件依赖包源码，仅收录规约包。
  5. GitHub 仓库 100% 独立去重，杜绝碎片化套壳。
- **客户端平滑拉取**：本地点击 `[ 🔄 检查更新 ]`，毫秒级比对本地版本与云端版本，标记 `待升级` 标签，绝不强行静默覆盖。

### 2. 插件自身一键检测与自升级 (Plugin Self-Update)
- **版本微胶囊**：在技能集市顶部标题右侧设有精巧的 `v1.1.0` 胶囊徽章。
- **智能远程比对**：服务端 `/api/clawhub/plugin-version` 异步请求 GitHub 官方源比对 SemVer 语义化版本号。
- **一键自升级弹窗**：当检测到新版本发布时，弹出高质感原生模态弹窗，展示升级改动日志，用户点击 `[ ⚡ 立即一键升级 ]` 即可执行平滑拉取，完成后提示刷新窗口生效。

---

## 📚 214 个精选高星技能分类体系

所有技能均通过真实开源仓库校验，分类清晰无冗余：

| 分类图标 | 垂直分类名称 | 收录规模 | 经典代表技能 (星标与方向) |
| :---: | :--- | :---: | :--- |
| 🌟 | **破万星巅峰与最新趋势** | **34 个** | AutoGPT (171k★)、LangChain (98k★)、DeepSeek-R1 (86k★)、OpenAI Cookbook (62k★)、Dify (64k★)、GPT-Engineer (54k★)、vLLM (42k★) |
| 💻 | **专业编程系统与Python快速构建** | **32 个** | FastAPI 异步架构 (78k★)、Django 企业系统 (79k★)、Code Review 审计安全、Ponytail 极简架构、SQL 慢查询调优、Pytest 测试套件 |
| 🔬 | **SCI 科研学术与数学建模** | **25 个** | CNS 顶刊矢量图排版 (26k★)、SCI 审稿反驳信 (Rebuttal)、学术去 AI 润色、专利交底书撰写、微分方程美赛建模 |
| 🎨 | **UI设计与网页可视化前端** | **24 个** | Shadcn/UI (76k★)、Tailwind CSS (85k★)、ECharts 交互图表 (58k★)、Three.js 3D 渲染 (102k★)、Framer Motion 动效 |
| 🏢 | **职场日常与文档批量自动化** | **25 个** | STAR 求职简历重塑、麦肯锡咨询 PPT 大纲、量化高情商周报/日报、Excel 动态数组与高级公式、合同风险排查 |
| 📊 | **数据清洗分析与图表呈现** | **20 个** | Pandas 自动化清洗流水线、SQL 执行计划深度调优、同期群留存分析 (Cohort)、A/B 实验统计显著性检验、DCF 估值 |
| 📑 | **产品经理 ERP 与工业 PID 规约** | **18 个** | 互联网大厂 PRD 需求文档全链路、全场景用户旅程地图 (User Journey)、OpenAPI 契约、MES 车间工单流转、B2B SaaS 权限 |
| 📱 | **新媒体短视频与流量运营** | **18 个** | 小红书爆款 SEO 埋词与截流、抖音前3秒留存脚本、微信公众号深度特稿、亚马逊 Listing 黄金五点、私域运营促活 |
| 🌍 | **英语考培外刊与经典名著** | **18 个** | 雅思口语高分俚语与即兴拓展、GRE/GMAT 逻辑谬误剖析、《经济学人》政经长文双语精读、跨国商务谈判口语 |

---

## 📂 项目结构

```text
dsh-clawhub-multiskill/
├── package.json                   # 插件元信息与 Cordis/DSH 规范声明 (v1.1.0)
├── cordis.patch.yml               # Cordis 服务插槽注入声明
├── client.js                      # 客户端分发产物 (含 214 技能索引、macOS 扁平微胶囊 UI、多选调度面板)
├── skills_db.json                 # 214 个真实甄选技能元数据库 (严格 800 Token 预算)
├── SKILL_SELECTION_STANDARD.md   # 技能集市准入与评估 5 大黄金原则与规范
├── build.py                       # 跨平台全量 bundle 构建脚本
├── install.ps1                    # Windows 一键自动化安装与软链接脚本
├── assets/
│   └── logo.svg                   # 官方矢量 Logo 图标 (纯净无字蓝底微笑购物袋)
├── docs/
│   └── images/                    # 高清实拍界面截图与设计资产
│       ├── market_overview.png
│       ├── installed_management.png
│       └── composer_popover.png
├── scripts/
│   ├── sync_skills.py             # 本地/CI 自动化技能准入与 800 Token 门禁审核脚本
│   └── sync-skills.yml            # GitHub Actions 72 小时云端技能生态自动巡检工作流模版
├── src/
│   ├── index.js                   # 服务端 REST API (已装读取/安装/开关/删除/升级/回退/自检测)
│   └── client.js                  # 客户端开发源码
```

---

## 🚀 安装与使用指南

### 方法一：通过自动化脚本一键安装 (推荐)
打开 PowerShell 并执行仓库内置的快速安装脚本：
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\install.ps1
```
脚本将自动完成目录检查、依赖软链接建立与配置写入。

### 方法二：手动安装配置

1. **克隆仓库至本地插件目录**：
   ```powershell
   git clone https://github.com/gsmqmwq1/dsh-clawhub-multiskill.git "$HOME\.dsh\plugins\dsh-clawhub-multiskill"
   ```

2. **建立 DSH 桌面端软链接 (Junction)**：
   ```powershell
   New-Item -ItemType Junction -Path "$HOME\.dsh\profiles\desktop\node_modules\dsh-clawhub-multiskill" -Target "$HOME\.dsh\plugins\dsh-clawhub-multiskill"
   ```

3. **登记插件配置**：
   打开 `$HOME\.dsh\profiles\desktop\package.json`，在 `dependencies` 与 `dsh.profile.bundles` 中分别追加 `"dsh-clawhub-multiskill": "*"`。

4. **重启 DeepSeek Harness**：
   - 客户端左侧导航栏自动呈现单色拼图图标的 **技能集市**。
   - 对话输入框右下侧自动挂载单色拼图图标的 **技能** 批量调度面板。

---

## 🛠️ 后端 API 规范

所有接口均搭载在 DSH 内置的本地 Web 服务中，路由均挂载于 `/api/clawhub`：

| 接口路由 | 请求方式 | 功能作用 | 请求载荷 (Payload) / 说明 |
| :--- | :---: | :--- | :--- |
| `/api/clawhub/installed` | `GET` | 读取本地已安装技能列表、启用状态与别名 | 无 |
| `/api/clawhub/install` | `POST` | 将选定技能的 SKILL.md 写入本地技能目录 | `{ id, name, description, content }` |
| `/api/clawhub/toggle` | `POST` | 热开关：切换 `disable-model-invocation` 标记 | `{ id, disabled: boolean }` |
| `/api/clawhub/delete` | `POST` | 彻底物理移除技能目录 (经过模态弹窗确认) | `{ id }` |
| `/api/clawhub/check-updates` | `GET` | 检查已安装技能是否存在上游作者新版本 | 无 |
| `/api/clawhub/upgrade` | `POST` | 安全升级技能并自动生成 `.bak` 快照 | `{ id, content?, newVersion? }` |
| `/api/clawhub/batch-upgrade` | `POST` | 批量升级所选技能 | `{ items: [{ id, newVersion }] }` |
| `/api/clawhub/rollback` | `POST` | 从 `.bak` 备份文件一键还原历史旧版本 | `{ id }` |
| `/api/clawhub/alias` | `GET / POST`| 读取或持久化用户自定义的中文技能别名 | `{ id, alias }` |
| `/api/clawhub/sync-config` | `GET / POST`| 查询或更新 72 小时云端同步配置参数 | `{ intervalDays, autoApplyInstalled }` |
| `/api/clawhub/plugin-version` | `GET` | 联网比对 GitHub 仓库检查插件自身版本 | 无 |
| `/api/clawhub/plugin-self-update`| `POST` | 触发插件自升级 (`git pull origin main` / 覆盖更新) | 无 |
| `/api/clawhub/import-github` | `POST` | 从第三方 GitHub 仓库拉取远程 SKILL.md | `{ url }` |

---

## 📄 开源许可证与作者信息

- **项目作者**：[gsmqmwq1](https://github.com/gsmqmwq1)
- **开源协议**：[MIT License](./LICENSE)
- **准入准则**：详见 [`SKILL_SELECTION_STANDARD.md`](./SKILL_SELECTION_STANDARD.md)
