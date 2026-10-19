# dsh-clawhub-multiskill

> **DeepSeek Harness 原生纯净 AI Agent 技能集市与多技能中文意图批量调度插件**
>
> 汇聚 **214 个经严格准入规范甄选的全球高质量开源 Agent 技能规约包**（覆盖 9 大核心垂直业务分类），每个技能均独立解决明确客制化痛点，杜绝任何模板数字编号充数与重复套壳。专为职场文档提效、科研学术写作、顶刊论文绘图、高维架构开发、UI设计、产品经理及多媒体运营量身打造。

---

## 🌟 核心特色与设计哲学

1. **纯正的 Agent 技能工作流规约 (Pure Agent Skill Standard)**
   - **严格区别于程序员调用的 npm/pip 软件代码库**：用户要的不是 FastAPI 或 React 的源代码，而是教会 DeepSeek 如何写出生产级代码或专业交付物的 **Prompt 规约包 (`SKILL.md`)**。
   - **规范化与标准化**：每一个技能均确立了清晰的专家心智 (Persona)、分步阶梯执行 SOP (Ladder Steps) 与刚性输出规范 (Output Spec)。
   - **详细准入标准见**：[`SKILL_SELECTION_STANDARD.md`](./SKILL_SELECTION_STANDARD.md)。

2. **极简轻量 · 按需极速下载**
   - **本地存储零冗余**：插件本身作为索引与调度中枢，本地只保留链接与精炼介绍，用什么才下什么。
   - **三态生命周期管控**：
     - **未下载 (Available)**：云端索引，本地零磁盘占用。
     - **启用中 (Active)**：本地就绪，可通过斜杠指令（如 `/dev-expert`、`/resume-ats-polisher`）或输入框快速调用。
     - **已停用 (Disabled)**：无损写入 `disable-model-invocation: true`，本地文件完整保留，AI 暂不加载。
     - **彻底卸载 (Deleted)**：通过原生质感模态弹窗确认后，一键从磁盘物理移除对应文件夹，释放存储空间。

3. **1:1 深度契合 DeepSeek Harness 原生设计质感**
   - **深浅色无缝自适应**：原生绑定 DSH Design System 颜色令牌（`--dsw-alias-bg`、`--dsw-alias-surface`、`--dsw-alias-border` 等），深色深邃静谧，浅色清透雅致。
   - **单色细线简笔画图标**：左侧栏为 `16x16` 原生细线拼图 SVG，输入框右下角为 `14x14` 单色拼图 + `技能` 文字，告别彩色 Emoji。
   - **告别系统默认 Win32 弹窗**：彻底废弃浏览器原生 `window.confirm` / `alert`，全面采用原生深浅色毛玻璃高质感模态弹窗。
   - **右上角胶囊操作钮与右侧平滑原生滚动条**：对齐原生卡片布局，支持右下角浮动回到顶部 `⌃` 按钮。

4. **高对比度红色醒目报错与诊断 (绝不静默吞错)**
   - 当遇到网络超时、GitHub 访问受阻或写入权限不足时，卡片内展开高对比度红色报警条，清晰指出根因并提供 `[🔄 立即重试]` 按钮，绝不卡死界面。

5. **动态自定义扩展 (持续进化)**
   - **GitHub / Raw URL 导入**：粘贴任何开源仓库或 Raw Markdown 链接，一键拉取并注册为本地 Skill。
   - **在线表单手工创建**：支持在线填写 ID、中文名称、斜杠指令与 Prompt 规则，一键保存。

6. **聊天输入框多技能中文意图检索与批量加载**
   - 点击输入框右下角 `🧩 技能`，输入中文意图（如“简历”、“PPT”、“周报”、“画图”、“写代码”、“专利”），支持多选并一键将对应的 `/<id1> /<id2> ` 注入聊天草稿。

---

## 📚 214 个精选高星技能分类架构

| 分类标识 | 分类名称 | 收录规模 | 代表性经典高星技能 |
| :--- | :--- | :--- | :--- |
| 🌟 | **破万星巅峰与最新趋势** | **34 个** | AutoGPT (171k★)、LangChain (98k★)、DeepSeek-R1 (86k★)、OpenAI Cookbook (62k★)、Dify (64k★)、GPT-Engineer (54k★)、vLLM (42k★) |
| 💻 | **专业编程系统与Python快速构建** | **32 个** | FastAPI 异步架构 (78k★)、Django 企业系统 (79k★)、Dev-Expert、Code Review、Ponytail 极简架构、SQL慢查询调优、Pytest测试套件 |
| 🔬 | **SCI 科研学术与数学建模** | **25 个** | CNS顶刊矢量图排版 (26k★)、SCI 审稿意见反驳信 (Rebuttal)、学术去AI润色、专利交底书、国赛美赛微分方程建模 |
| 🎨 | **UI设计与网页可视化前端** | **24 个** | Shadcn/UI (76k★)、Tailwind CSS (85k★)、ECharts 交互图表 (58k★)、Three.js 3D可视化 (102k★)、Framer Motion 动效 |
| 🏢 | **职场日常与文档批量自动化** | **25 个** | STAR 求职简历重塑、麦肯锡商业咨询 PPT 大纲、高情商量化周报/日报、Excel 动态数组与XLOOKUP公式、合同风险排查、企业SOP |
| 📊 | **数据清洗分析与图表呈现** | **20 个** | Pandas 自动化清洗流水线、SQL 执行计划调优、同期群留存 (Cohort)、A/B 测试统计检验、企业 DCF 现金流估值、RFM 客户细分 |
| 📑 | **产品经理 ERP 与工业 PID 规约** | **18 个** | 互联网大厂 PRD 需求文档全功能分支、全链路用户旅程地图 (User Journey)、OpenAPI 3.0 接口契约、MES 车间工单、B2B SaaS 权限 |
| 📱 | **新媒体短视频与流量运营** | **18 个** | 小红书爆款 SEO 埋词与下拉词截流、抖音前3秒留存脚本、微信公众号深度特稿、亚马逊 Listing 黄金五点、私域社群促活 SOP |
| 🌍 | **英语考培外刊与经典名著** | **18 个** | 雅思口语高分俚语与即兴拓展、GRE/GMAT 批判性写作逻辑谬误剖析、《经济学人》政经长文双语精读、跨国商务谈判、六级仔细阅读 |

---

## 📂 项目结构

```text
dsh-clawhub-multiskill/
├── package.json                   # 插件元信息与 Cordis/DSH 依赖声明
├── cordis.patch.yml               # Cordis 服务插槽声明
├── client.js                      # 浏览器端全量渲染逻辑 (含214技能数据库、深浅色CSS、全套原生模态弹窗)
├── SKILL_SELECTION_STANDARD.md   # 技能集市准入与评估 5 大黄金原则与审核 SOP
├── src/
│   ├── index.js                   # 服务端 API 路由 (已装查询/安装/开关/删除/GitHub拉取)
│   └── client.js                  # 客户端源码镜像
├── .gitignore                     # Git 忽略配置
└── README.md                      # 完整使用与架构指南
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
