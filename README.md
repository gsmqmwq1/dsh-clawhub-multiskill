# dsh-clawhub-multiskill

> **DeepSeek Harness 原生纯净 AI Agent 技能集市与多技能中文意图批量调度插件**
>
> 汇聚 **500+ 个全球精选高星开源 Agent Skill**（涵盖 8 大核心垂直业务分类 + 100+ 破万星巅峰与前沿趋势项目），专为科研学术、高维编程、系统架构、产品设计、新媒体短视频运营与外语权威考培量身打造。

---

## 🌟 核心特色与设计哲学

1. **纯粹的 Agent 技能集市 (Pure Skill Market)**
   - 严格区别于界面插件市场（如换肤、拖拽移动等），本插件**专精且纯粹服务于 AI 智能体技能 (`SKILL.md`)**。
   - 所有技能均来自全球真实的 GitHub 高星仓库，拒绝任何虚构或过时废弃项目，全面兼容主流与最新版 DeepSeek Harness。

2. **极简轻量 · 按需极速下载**
   - **本地存储零冗余**：插件本身作为索引中心，本地只保留链接与精炼介绍，用什么才下什么。
   - **三态生命周期管控**：
     - **未下载 (Available)**：云端索引，本地零磁盘占用。
     - **启用中 (Active)**：本地就绪，可通过斜杠指令（如 `/dev-expert`）或输入框快速调用。
     - **已停用 (Disabled)**：无损写入 `disable-model-invocation: true`，本地文件完整保留，AI 暂不加载。
     - **彻底卸载 (Deleted)**：一键从磁盘物理抹除对应文件夹，释放存储空间。

3. **1:1 深度契合 DeepSeek Harness 原生设计质感**
   - **深浅色无缝自适应**：原生绑定 DSH Design System 颜色令牌（`--dsw-alias-bg`、`--dsw-alias-surface`、`--dsw-alias-border` 等），深色深邃静谧，浅色清透雅致。
   - **单色细线简笔画图标**：左侧栏为 `16x16` 单色细线拼图 SVG，输入框右下角为 `14x14` 单色拼图 + `技能` 文字，拒绝彩色 Emoji 与重复闪电图标。
   - **右上角胶囊操作钮与右侧平滑原生滚动条**：对齐原生卡片布局，支持右下角浮动回到顶部 `⌃` 按钮。

4. **高对比度红色醒目报错与诊断 (绝不静默吞错)**
   - 当遇到网络超时、GitHub 访问受阻或写入权限不足时，卡片内展开高对比度红色报警条，清晰指出根因并提供 `[🔄 立即重试]` 按钮，绝不卡死界面。

5. **动态自定义扩展 (持续进化)**
   - **GitHub / Raw URL 导入**：粘贴任何开源仓库或 Raw Markdown 链接，一键拉取并注册为本地 Skill。
   - **在线表单手工创建**：支持在线填写 ID、中文名称、斜杠指令与 Prompt 规则，一键保存。

6. **聊天输入框多技能中文意图检索与批量加载 (Option B)**
   - 点击输入框右下角 `🧩 技能`，输入中文意图（如“画图”、“写代码”、“专利”、“周报”），支持多选并一键将对应的 `/<id1> /<id2> ` 注入聊天草稿。

---

## 📚 500+ 精选高星技能分类架构

| 分类标识 | 分类名称 | 收录规模 | 代表性经典高星技能 |
| :--- | :--- | :--- | :--- |
| 🌟 | **破万星巅峰与最新趋势** | **102 个** | AutoGPT (171k★)、LangChain (98k★)、DeepSeek-R1 (86k★)、OpenAI Cookbook (62k★)、Dify (64k★)、GPT-Engineer (54k★) |
| 💻 | **编程系统与Python快速构建** | **68 个** | FastAPI AI 后端 (78k★)、Django 企业级架构 (79k★)、Streamlit 快速可视化 (35k★)、大型项目代码重构、SQL慢查询调优 |
| 🔬 | **科研学术与数学建模** | **67 个** | CNS顶刊矢量排版 (26k★)、论文创新点挖掘、PRISMA系统性综述、顶会代码复现助手、数模竞赛全流程 (国赛/美赛) |
| 🎨 | **UI设计与网页可视化前端** | **50 个** | Shadcn/UI (75k★)、Tailwind CSS (82k★)、ECharts 交互图表 (58k★)、Three.js 3D可视化 (102k★)、高转化SaaS首屏 |
| 📊 | **数据清洗分析与图表呈现** | **45 个** | Pandas EDA 探索分析、脏数据清洗流水线、Plotly 动态商业BI看板、多元统计推断与时间序列预测 |
| 📑 | **产品经理ERP与工业PID规约** | **45 个** | 互联网与工业PRD设计、ERP进销存业务蓝图、化工PID管道仪表图符规约、SaaS计费模型与MRD竞品分析 |
| 📱 | **新媒体短视频与流量运营** | **45 个** | 小红书爆款文案拆解、抖音完播率黄金脚本、公众号深度特稿、自媒体数据复盘与带货转化话术 |
| 🌍 | **英语考培外刊与经典名著** | **45 个** | 雅思口语/写作九分对标、托福综合写作模板、考研英语长难句逆向破解、经济学人精读与英美剧语境记忆 |
| 🏢 | **职场日常与文档批量自动化** | **41 个** | 体制内公文与发言稿、长篇会议纪要Action提取、高情商周报生成器、Excel VBA跨表批量合并、三线表排版 |

---

## 📂 项目结构

```text
dsh-clawhub-multiskill/
├── package.json              # 插件元信息与 Cordis/DSH 依赖声明
├── cordis.patch.yml          # Cordis 服务插槽声明
├── client.js                 # 浏览器端全量渲染逻辑 (含508数据库、深浅色CSS、模态弹窗)
├── src/
│   ├── index.js              # 服务端 API 路由 (已装查询/安装/开关/删除/GitHub拉取)
│   └── client.js             # 客户端源码镜像
├── .gitignore                # Git 忽略配置
└── README.md                 # 完整使用与架构指南
```

---

## 🚀 安装与启用指南

### 1. 本地插件软链接 (开发模式)
将当前目录软链接至 DSH 桌面插件目录：
```powershell
New-Item -ItemType Junction -Path "$HOME\.dsh\profiles\desktop\node_modules\dsh-clawhub-multiskill" -Target "C:\Users\MWQ\.dsh\plugins\dsh-clawhub-multiskill"
```

### 2. 在配置文件中挂载
确认 `$HOME\.dsh\profiles\desktop\package.json` 中的 `dependencies` 与 `dsh.profile.bundles` 已加入 `dsh-clawhub-multiskill`。

### 3. 重启 DeepSeek Harness
重启应用后：
- 左侧栏即刻呈现单色拼图图标的 **技能集市**。
- 会话输入框右下角显示单色拼图图标的 **技能** 批量调度按钮。

---

## 🛠️ 后端 API 规约

| 路由路径 | 请求方式 | 功能描述 | 请求参数 |
| :--- | :--- | :--- | :--- |
| `/api/clawhub/installed` | `GET` | 读取 `~/.dsh/skills` 下所有技能的安装与启用状态 | 无 |
| `/api/clawhub/install` | `POST` | 将 Skill 的 Markdown Prompt 写入本地目录 | `{ id, name, description, content }` |
| `/api/clawhub/toggle` | `POST` | 热开关：切换 `disable-model-invocation` 字段 | `{ id, disabled: boolean }` |
| `/api/clawhub/delete` | `POST` | 彻底物理移除技能目录 | `{ id }` |
| `/api/clawhub/import-github`| `POST` | 从 GitHub / Raw URL 自动拉取远程 SKILL.md | `{ url: string }` |

---

## 💡 如何上传至您自己的 GitHub 仓库

如果您需要将此插件上传至个人的 GitHub 账户以便后续迭代：

```bash
cd "C:\Users\MWQ\.dsh\plugins\dsh-clawhub-multiskill"
git init
git add .
git commit -m "feat: complete initial release of dsh-clawhub-multiskill with 508 skills"
git branch -M main
git remote add origin https://github.com/<您的用户名>/dsh-clawhub-multiskill.git
git push -u origin main
```

---

## 📄 License
MIT License
