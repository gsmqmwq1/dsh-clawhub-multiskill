# 🛍️ DeepSeek 技能超市 (dsh-skills-market)

<p align="center">
  <img src="docs/images/logo.svg" width="96" height="96" alt="DeepSeek 技能超市 Logo" />
</p>

<p align="center">
  <strong>像逛应用商店一样，轻松检索、定制与快捷插入 DeepSeek 实战技能！</strong><br>
  支持关键词极速检索、分类索引浏览、自定义中文别名与聊天输入框多技能无缝增量插入。
</p>

<p align="center">
  <a href="https://github.com/gsmqmwq1/dsh-skills-market/releases"><img src="https://img.shields.io/badge/版本-v1.1.3-blue.svg?style=flat-square" alt="版本 v1.1.3" /></a>
  <img src="https://img.shields.io/badge/定位-技能索引与浏览器-brightgreen.svg?style=flat-square" alt="技能索引与浏览器" />
  <img src="https://img.shields.io/badge/费用-永久完全免费-orange.svg?style=flat-square" alt="完全免费" />
  <img src="https://img.shields.io/badge/开源协议-MIT-purple.svg?style=flat-square" alt="MIT" />
</p>

---

> 📌 **架构设计与版本演进说明 (Roadmap)**：
> - **当前 v1.1.3**：聚焦于 AI Agent 技能索引浏览、多场景检索、本地中文别名持久化编辑与输入框多技能快捷插入。
> - **后续版本演进**：目前部分外部上游开源技能仓库存在链接失效或下线情况。我们在收到社区反馈后，已启动全量有效性巡检与清洗工程；后续版本将直接随包内置核心精选技能的完整离线规约包（`SKILL.md`），彻底告别网络抓取依赖与空白占位，提供 100% 离线开箱即用的高品质体验。

---

## 💡 三句话看懂：这个插件是干什么的？

1. **技能分类索引与秒级搜索**：按 SCI 学术、职场办公、编程开发等 9 大日常场景归类整理开源 Agent 技能，支持中英文关键词极速模糊检索。
2. **专属中文别名自由定制**：英文长名字记不住？随时给技能改个顺手的中文外号（如将 `anti-defensive-writing` 标注为“论文去防御润色”），持久化存盘，升级不丢失！
3. **聊天框直接无感调用**：打字输入框右侧专属技能弹窗，勾选一个或多个技能，自动增量追加到当前对话末尾，绝不覆盖已有手打内容。

---

## 📸 真实长啥样？（看图 10 秒看懂）

### 1. 技能超市：像逛商场一样挑技能
界面清爽无杂质，217 个真实实用的技能按分类摆放，看中哪款点右下角 **「安装」** 就能马上用：
![技能超市全景](docs/images/market_overview.png)

### 2. 我的技能：已安装的随心管理
安装了哪些技能一清二楚。不想用了点 **「停用」**，有新版点 **「立即升级」**，对新版不满意还能 **「回退旧版」**：
![已安装技能管理](docs/images/installed_management.png)

### 3. 聊天框直接调用：最爽的高频玩法！
在平时聊天打字框旁边点一下，搜你想办的事（比如“周报”、“画图”、“审代码”），勾选一下就自动帮你叫出对应的 AI 专家；支持一次勾选多个或分批追加技能，绝不覆盖已有文本：
![输入框直接调用](docs/images/composer_popover.png)

---

## 🎁 都有哪些实用技能？（覆盖 9 大日常场景）

我们帮大家把关剔除了所有重复、无用的充数技能，严格精选出 **217 个真正能解决工作学习痛点的高质量技能**：

| 场景分类 | 技能数量 | 适合谁用？能帮你解决什么？ | 代表技能举例 |
| :--- | :---: | :--- | :--- |
| 🎓 **SCI 科研学术** | **26 个** | 研究生、科研人员、大学生 | **论文反防御性写作与去谦虚润色 (anti-defensive-writing)**、**CNS 顶刊科研图排版配色**、SCI 审稿反驳信（Rebuttal）、学术去 AI 味降重润色 |
| 💼 **职场与日常办公** | **25 个** | 白领、职场新人、HR、行政 | **STAR 求职简历重塑**、麦肯锡咨询级 PPT 大纲、量化高情商周报/日报、复杂 Excel 嵌套函数公式 |
| 💻 **编程开发与系统** | **32 个** | 程序员、全栈开发者、架构师 | **FastAPI 极速架构**、代码安全与漏洞审查、SQL 慢查询一键拯救、Pytest 测试自动化 |
| 🎨 **UI 与前端设计** | **24 个** | 前端开发、UI/UX 设计师 | **Tailwind CSS 页面速搭**、Shadcn/UI 现代化组件、ECharts 炫酷交互图表、Three.js 3D 渲染 |
| 📊 **数据分析与商业** | **20 个** | 数据分析师、业务运营、金融 | **Pandas 数据清洗流水线**、用户留存分析 (Cohort)、A/B 测试统计检验、企业 DCF 估值模型 |
| 📑 **产品经理与 PRD** | **18 个** | 产品经理、项目负责人 | **大厂标准化 PRD 需求文档**、全链路用户旅程地图 (User Journey)、OpenAPI 接口规范 |
| 📱 **新媒体与电商** | **18 个** | 博主、自媒体运营、跨境电商 | **小红书爆款标题排版与搜索截流**、抖音前 3 秒高留存脚本、公众号深度长文、亚马逊 Listing 黄金五点 |
| 🌍 **英语学习与考培** | **18 个** | 考研、雅思/托福考生、外企职员 | **雅思口语地道俚语与即兴应答**、GRE/GMAT 逻辑漏洞剖析、《经济学人》政经长文双语精读 |
| 🌟 **破万星行业标杆** | **34 个** | 探索前沿 AI 的所有人 | AutoGPT、LangChain、DeepSeek-R1、Dify、OpenAI Cookbook 等全球最著名的开源 Agent 项目 |

---

## 🚀 小白 1 分钟超简单安装教程

### 方式一：全自动一键安装（推荐，只需点一下键盘）

1. 在电脑键盘上按下快捷键 **`Win + X`**，在弹出的菜单里选择 **「终端」** 或 **「Windows PowerShell」**。
2. 复制并粘贴下面这行命令，敲一下 **回车（Enter）**：
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/gsmqmwq1/dsh-skills-market/main/install.ps1'))
   ```
   *(或者把项目下载到本地后，在文件夹里右键点击 `install.ps1` 选择「使用 PowerShell 运行」)*
3. 重启你的 **DeepSeek Harness** 客户端。大功告成！

---

### 方式二：手动配置（适合喜欢自己动手的同学）

1. **下载插件到电脑**：
   打开终端运行：
   ```powershell
   git clone https://github.com/gsmqmwq1/dsh-skills-market.git "$HOME\.dsh\plugins\dsh-skills-market"
   ```
2. **给 DeepSeek 连上这个插件**：
   ```powershell
   New-Item -ItemType Junction -Path "$HOME\.dsh\profiles\desktop\node_modules\dsh-skills-market" -Target "$HOME\.dsh\plugins\dsh-skills-market"
   ```
3. **登记插件**：
   打开记事本编辑 `$HOME\.dsh\profiles\desktop\package.json`，在 `dependencies` 和 `dsh.profile.bundles` 下面各加上一行 `"dsh-skills-market": "*"`。
4. **重启 DeepSeek**，即可在左侧看到「技能集市」！

---

## 🔄 如果已经安装，如何更新本插件？

当本插件发布新功能时，更新非常简单，你的自定义别名、已安装技能完全保留：

- **极速命令行更新（推荐）**：
  打开 PowerShell 终端，粘贴运行：
  ```powershell
  cd "$HOME\.dsh\plugins\dsh-skills-market"; git pull
  ```
  运行完后在 DeepSeek 窗口中按下 **`Ctrl + R`** 刷新界面，即可立即享用最新功能！

- **或者重新跑一次一键安装**：
  直接重新执行上面的「全自动一键安装」命令，脚本会自动智能平滑更新。

---

## ❓ 常见问题解答 (Q&A)

**Q：这个插件收钱吗？会不会有什么套路？**  
A：**完全免费、100% 开源**！代码全部公开在 GitHub 上，纯粹是用爱发电为方便大家使用 DeepSeek 而打造的工具。

**Q：安装了 200 多个技能会不会让我电脑变卡？**  
A：**完全不会！** 本插件采用了“按需加载”的设计。平时只保存技能的名字和介绍，占用几乎为 0；只有当你点击「安装」某一款技能时，它才会被存到你电脑里。

**Q：如果某个技能原作者更新了，我怎么获取更新？**  
A：
- 本项目云端已经搭建了 **GitHub 72 小时全自动生态巡检系统**，每隔 3 天就会自动从全球搜集并审核优质更新。
- 你在客户端「已安装」管理页点一下 **`[ 🔄 检查更新 ]`**，就会自动告诉你哪些技能有新版，点一下「立即升级」就能用上新特性！

**Q：我想自己加我喜欢的技能或者网上的 Prompt，可以吗？**  
A：当然可以！右上角专门准备了 **「+ 导入技能」** 按钮，你可以直接把网上的 GitHub 链接或 Markdown 文本粘贴进去，一秒变成你自己的专属技能！

---

## 📝 版本更新日志 (Changelog)

### [v1.1.3] - 2026-10-21
- 🎯 **合规遵循官方 SemVer 语义化规范 (SemVer Compliance)**：彻底解决通过 pnpm / npm 从 GitHub 链接安装时抛出的 `[ERR_PNPM_BAD_PACKAGE_JSON] Invalid version: "1.1.0.3"` 错误。严格按照 Node 生态标准采用 `MAJOR.MINOR.PATCH`（`v1.1.3`）三段式版本号，确保全球所有包管理器（pnpm / npm / yarn / bun）100% 顺畅解析安装。
- 💬 **对话框 Lexical 编辑器精准定位与多技能无缝增量追加 (Dual-Engine Composer Insertion)**：深入适配 DeepSeek Harness 底层基于 `@lexical/react` 的 `[data-composer-input="true"]` 富文本编辑器架构。彻底解决此前仅探测 `<textarea>` 导致的技能无法写入或多次添加互相覆盖的偶发问题。现无论初次批量添加、后续多次单选追加、或在已有用户长提示词后补加技能，光标均智能定位至末尾追加，100% 绝不覆盖已有技能与文字！
- 🚀 **彻底修复启动崩溃与模块加载异常 (Web Boot Crash Fix)**：重构底层 `window.__ModuleLoader__` 动态识别机制，支持 `dsh-skills-market` 新官方包名与旧版环境无缝自适应注入，彻底杜绝 `client-modules: duplicate factory registration` 与 `import failed` 启动报错。
- 🛡️ **修复更新检查引用异常 (ReferenceError Fix)**：补齐 `DualSourceMarketViewInner` 中 `pluginUpdateInfo` 响应式状态声明，彻底解决部分用户与新更新机器上因变量未定义导致的 React 渲染红屏崩溃问题。
- 🧹 **配置与软链接自动去重治理**：优化安装脚本 `install.ps1` 与 `cordis.patch.yml`，自动清理旧版 `dsh-clawhub-multiskill` 冗余 bundle 注册与过期 junction 软链接，确保宿主容器环境绝对纯净。

### [v1.1.0.2] - 2026-10-21
- 🔒 **对话框连续追加技能绝不覆盖 (Zero Overwrite)**：重构输入框底层定位算法，精准锁定真实活跃会话的聊天输入框，无论何时追加新技能，已有的多个技能及用户手打文字 100% 完整保留并以空格无缝追加。
- 🔕 **新版本弹窗智能免打扰 (Single Prompt Per Version)**：彻底修复每次刷新界面（Ctrl + R）都重复弹出升级窗口的 bug；每个新版本仅提示一次，点击「稍后提醒」或关闭后绝不再重复弹窗打扰用户正常会话。

### [v1.1.0.1] - 2026-10-21
- 🏷️ **项目官方更名规范化**：插件全面更名为 `dsh-skills-market`，命名更贴合“技能集市”核心定位，保留旧名称 Junction 双向兼容，平滑迁移零阻碍。
- 🔗 **导入体验与 URL 强兼容优化**：GitHub 导入弹窗明确提示输入完整仓库 URL（如 `https://github.com/op7418/humanizer-zh`），彻底剔除容易产生误解的简写示例，强化格式校验与解析。
- 📦 **全量技能真实生态版本化与 72h 巡检升级**：彻底告别全部显示 `v1.0.0` 的千篇一律状态；为 217 款精选技能赋予真实上游版本，升级 GitHub Action 72h 巡检脚本，支持通过 GitHub Releases/Tags API 自动拉取最新版本。
- 🛡️ **彻底清除输入框幽灵缓存 (Ghost Cache Elimination)**：移除后台旧草稿跨会话滞留缓存，清空对话框或重开新会话后，绝不再意外回带上次对话勾选过的旧技能；输入框内容完全以当前实时界面为准。
- 🎯 **严格勾选对钩确认交互 (Strict Checkbox Confirmation)**：点击列表项仅切换对勾选择状态，彻底杜绝单点列表误触直接插入的偶发问题；必须明确打勾并通过底部「添加到对话 (N)」按钮提交。
- 🚫 **未选状态安全置灰保护**：列表未选中任何技能时，「添加到对话」按钮自动置灰禁用，防止空选或误提交。
- ⌨️ **回车键交互对齐**：列表未选中时按回车仅切换高亮项对勾，已勾选时按回车一键插入。

### [v1.1.0] - 2026-10-21
- 🌐 **直接导入 GitHub 技能自动智能中文翻译**：自动为直接导入的 GitHub 技能（如 `humanizer-zh`）生成易懂的中文标题及一句话中文摘要。
- 🔗 **GitHub 查看直达原仓库**：卡片右上方三点菜单「在 GitHub 查看」精准跳转原项目网页，彻底告别 404。
- ➕ **多技能增量追加不覆盖**：支持多次或批量往输入框添加技能，智能保留已有提示词并去重追加。

---

## 👨‍💻 开源协议与作者

- **开源协议**：[MIT License](./LICENSE)（允许自由使用与学习）
- **项目作者**：[gsmqmwq1](https://github.com/gsmqmwq1)
- **准入规范**：详见 [`SKILL_SELECTION_STANDARD.md`](./SKILL_SELECTION_STANDARD.md)
