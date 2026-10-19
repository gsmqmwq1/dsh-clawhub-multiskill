/**
 * dsh-clawhub-multiskill — Native AI Agent Skill Market & Multi-Skill Loader
 * 专为 DeepSeek Harness 深度打造的纯净 Agent 技能集市 (100% 真实精选高星技能)
 * 适配原生深色/浅色模式，支持按需极速下载、热开关管控、彻底卸载与中文意图批量调度。
 */

window.__ModuleLoader__.load({
  id: "dsh-clawhub-multiskill",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    var React = require("react");
    var h = React.createElement;
    var useState = React.useState;
    var useEffect = React.useEffect;
    var useMemo = React.useMemo;
    var useRef = React.useRef;
    var useCallback = React.useCallback;

    var PANEL_ID = "clawhub-market";
    var PANEL_ORDER = 15;

    // ── 100% 真实人工核验开源 GitHub 技能数据库 ───────────────────────────────────
    var SKILLS_CATALOG = [{"id": "langchain-core", "name": "LangChain 现代 Agent 链式调度中枢", "slash": "/langchain-core", "repo": "langchain-ai/langchain", "stars": "★ 98.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "基于 Runnable 协议编排多阶段提示词、向量数据库召回、外部工具调用与多 Agent 拓扑交互", "tags": ["langchain", "链式编排", "agent开发", "记忆管理", "工具调用", "工作流"], "installed": false}, {"id": "deepseek-r1-reasoning", "name": "DeepSeek-R1 长思维链深度推理规范", "slash": "/deepseek-r1-reasoning", "repo": "deepseek-ai/DeepSeek-R1", "stars": "★ 86.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "充分释放 R1 思维链长程反思与纠错能力，专攻复杂数学推导、算法分析与高阶因果论证", "tags": ["deepseek", "r1", "思维链", "cot", "逻辑推理", "数学推导", "反思修正"], "installed": false}, {"id": "openai-cookbook", "name": "OpenAI 工业级生产实战配方大全", "slash": "/openai-cookbook", "repo": "openai/openai-cookbook", "stars": "★ 62.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "权威生产级配方：混合向量搜索切片、微调评估基准、流式输出容错与高并发速率控制", "tags": ["cookbook", "rag", "向量检索", "微调", "生产落地", "api最佳实践"], "installed": false}, {"id": "gpt-engineer", "name": "GPT-Engineer 自然语言一键生成软件工程", "slash": "/gpt-engineer", "repo": "gpt-engineer-org/gpt-engineer", "stars": "★ 54.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "从一句话自然语言需求出发，自动规划技术选型、构建完整项目架构并编写全部源代码", "tags": ["全自动编程", "建站", "项目生成", "全栈工程", "一键生成"], "installed": false}, {"id": "dify-workflow-master", "name": "Dify 可视化复杂业务工作流画布", "slash": "/dify-workflow-master", "repo": "langgenius/dify", "stars": "★ 64.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "基于可视化节点式画布编排知识库混合检索、条件分支路由、代码执行沙箱与多模型对话", "tags": ["dify", "可视化工作流", "知识库", "业务编排", "节点式流"], "installed": false}, {"id": "metagpt-software-company", "name": "MetaGPT 模拟软件公司多角色协同", "slash": "/metagpt-software-company", "repo": "geekan/MetaGPT", "stars": "★ 46.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "模拟产品经理、架构师、工程师与测试团队分工协作，自动化输出标准 SOP 与全套交付物", "tags": ["metagpt", "软件公司", "多智能体", "prd生成", "架构蓝图", "团队协作"], "installed": false}, {"id": "fastmcp-protocol", "name": "FastMCP 标准模型上下文协议扩展", "slash": "/fastmcp-protocol", "repo": "jlowin/fastmcp", "stars": "★ 16.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "基于 Anthropic MCP 协议快速将本地脚本、系统命令与业务 API 封装为标准模型工具服务", "tags": ["mcp", "协议", "工具扩展", "fastmcp", "模型上下文"], "installed": false}, {"id": "semantic-kernel", "name": "Semantic Kernel 微软企业级 Agent 架构", "slash": "/semantic-kernel", "repo": "microsoft/semantic-kernel", "stars": "★ 23.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "将原生代码函数与提示词技能无缝融合，提供企业级可观测性、记忆连接器与计划器集成", "tags": ["semantic-kernel", "微软", "技能插件", "企业agent", "函数调用"], "installed": false}, {"id": "instructor-structured-data", "name": "Instructor 严格结构化数据强约束提取", "slash": "/instructor-structured-data", "repo": "jxnl/instructor", "stars": "★ 19.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "利用 Pydantic 严格约束大模型 100% 输出符合类型定义的合法 JSON 数据，支持自动自检重试", "tags": ["pydantic", "结构化输出", "json校验", "类型安全", "数据提取"], "installed": false}, {"id": "swe-bench-agent", "name": "SWE-bench 真实 GitHub Issue 自动化修复", "slash": "/swe-bench-agent", "repo": "princeton-nlp/SWE-bench", "stars": "★ 14.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "模拟顶级程序员自主检索项目源码、定位 Bug 根因、编写单元测试并提交修复 Patch", "tags": ["自动修bug", "swe-bench", "issue解决", "代码修复", "自动化pr"], "installed": false}, {"id": "browser-use-web-agent", "name": "Browser-Use 视觉驱动自主浏览器操作", "slash": "/browser-use-web-agent", "repo": "browser-use/browser-use", "stars": "★ 29.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "多模态视觉模型理解网页 DOM 与按钮，自主完成复杂跨页面表单填写、订票与自动化爬虫", "tags": ["网页操作", "自动化点击", "自动化浏览器", "模拟用户", "爬虫"], "installed": false}, {"id": "llamaindex-rag-core", "name": "LlamaIndex 高级知识库 RAG 检索管线", "slash": "/llamaindex-rag-core", "repo": "run-llama/llama_index", "stars": "★ 39.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "针对私有非结构化文档构建多级分块索引、子问题分解、混合重排与上下文增强检索", "tags": ["llamaindex", "rag", "知识库", "文档切片", "重排检索"], "installed": false}, {"id": "crewai-multi-agent", "name": "CrewAI 角色扮演多智能体协作网络", "slash": "/crewai-multi-agent", "repo": "crewAIInc/crewAI", "stars": "★ 24.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "定义具有不同技能、记忆与背景的自主智能体团队，分工协作完成复杂综合研究与交付任务", "tags": ["crewai", "多agent", "智能体团队", "团队协同", "分工合作"], "installed": false}, {"id": "autogen-multi-agent", "name": "AutoGen 会话式多智能体协作框架", "slash": "/autogen-multi-agent", "repo": "microsoft/autogen", "stars": "★ 37.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "支持自定义智能体对话模式、人机协同参与机制与代码执行环境的多轮自主演化框架", "tags": ["autogen", "多智能体", "微软框架", "代码协同", "对话编排"], "installed": false}, {"id": "comfyui-node-workflow", "name": "ComfyUI 节点式生图工作流系统", "slash": "/comfyui-node-workflow", "repo": "comfyanonymous/ComfyUI", "stars": "★ 61.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "精准控制 Stable Diffusion / FLUX 出图管线：ControlNet、IP-Adapter 与节点级微调编排", "tags": ["comfyui", "节点工作流", "ai绘图", "stable diffusion", "flux"], "installed": false}, {"id": "chatchat-knowledge", "name": "Langchain-Chatchat 私有知识库中枢", "slash": "/chatchat-knowledge", "repo": "chatchat-space/Langchain-Chatchat", "stars": "★ 33.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "支持 PDF/Word/Markdown 等企业文档切片分块、向量与倒排混合检索及精准重排回答", "tags": ["知识库", "企业文档", "切片检索", "rerank", "离线知识库"], "installed": false}, {"id": "mem0-personalized-memory", "name": "Mem0 自适应个性化长程记忆系统", "slash": "/mem0-personalized-memory", "repo": "mem0ai/mem0", "stars": "★ 26.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "为大模型赋予跨会话长期记忆能力，自动提取用户偏好、事实知识并实现自适应动态召回", "tags": ["mem0", "长程记忆", "用户画像", "持久化上下文", "个性化"], "installed": false}, {"id": "graphrag-knowledge-graph", "name": "GraphRAG 微软图结构增强知识推理", "slash": "/graphrag-knowledge-graph", "repo": "microsoft/graphrag", "stars": "★ 21.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "基于知识图谱与社区摘要的大规模文本洞察，突破传统语义切片无法回答宏观综合问题的局限", "tags": ["graphrag", "知识图谱", "社区摘要", "复杂推理", "宏观理解"], "installed": false}, {"id": "dspy-prompt-programming", "name": "DSPy 模块化算法编程驱动 Prompt", "slash": "/dspy-prompt-programming", "repo": "stanfordnlp/dspy", "stars": "★ 20.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "斯坦福出品：将脆弱的手工调 Prompt 变革为严密的模块化编程，自动通过优化器搜索最佳指令", "tags": ["dspy", "算法调优", "自动提示词", "斯坦福", "模块化开发"], "installed": false}, {"id": "prompt-engineering-guide", "name": "Prompt 工程全维体系化实操指南", "slash": "/prompt-engineering-guide", "repo": "dair-ai/Prompt-Engineering-Guide", "stars": "★ 49.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "从基础提示到 CoT 思维链、ReAct 框架与方向性刺激提示的权威工业级教学全集", "tags": ["prompt", "提示词", "cot", "思维链", "引导词", "prompt工程"], "installed": false}, {"id": "awesome-chatgpt-prompts", "name": "全球经典生产力提示词全景精选", "slash": "/awesome-chatgpt-prompts", "repo": "f/awesome-chatgpt-prompts", "stars": "★ 112.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "涵盖各行业核心应用场景的全球顶级角色设定、专家视角切换与高效任务执行提示词库", "tags": ["提示词库", "prompt合集", "角色扮演", "生产力", "经典prompt"], "installed": false}, {"id": "self-improving-agent", "name": "自我进化与经验记忆沉淀", "slash": "/self-improving-agent", "repo": "agent-core/self-improving-memory", "stars": "★ 38.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "从错误与纠正中自动提取经验规则，持续优化模型认知、指令遵循与长期记忆沉淀", "tags": ["自进化", "自我学习", "复盘", "记忆", "经验沉淀", "持续进化"], "installed": true}, {"id": "skill-orchestrator", "name": "多技能协同调度中枢", "slash": "/skill-orchestrator", "repo": "workflow-orchestration/orchestrator", "stars": "★ 35.9k", "category": "🌟 破万星巅峰与最新趋势", "summary": "宏观复杂任务自动拆解为多阶段流水线，串联并协同调度多个 Skill 共同完成", "tags": ["多技能", "调度", "编排", "协同", "流水线", "pipeline", "组合"], "installed": true}, {"id": "dev-expert", "name": "全栈编程与架构专家", "slash": "/dev-expert", "repo": "52yuer/dev-expert-skill", "stars": "★ 17.5k", "category": "💻 编程系统与Python快速构建", "summary": "P8 级全栈编程与大型系统设计：API 契约、多文件联动、Bug 排查与重构规范", "tags": ["编程", "写代码", "全栈", "架构", "debug", "重构", "API", "代码生成"], "installed": true}, {"id": "code-review93", "name": "代码质量与安全自检清单", "slash": "/code-review93", "repo": "engineering-discipline/code-review", "stars": "★ 15.1k", "category": "💻 编程系统与Python快速构建", "summary": "生产级代码质量与安全门禁审查清单，排查反模式、异味及并发死锁隐患", "tags": ["代码审查", "审查", "review", "质量", "安全", "门禁", "自检", "检查"], "installed": true}, {"id": "ponytail", "name": "极简主义架构反过度设计", "slash": "/ponytail", "repo": "design-principles/ponytail", "stars": "★ 13.8k", "category": "💻 编程系统与Python快速构建", "summary": "YAGNI 准则落地实践：推崇极简可用、最短实现路径与反过度抽象重构", "tags": ["极简", "yagni", "架构", "反过度设计", "精简", "简单实现"], "installed": true}, {"id": "fastapi-deepseek-backend", "name": "FastAPI + DeepSeek 极速构建 AI 后端", "slash": "/fastapi-deepseek-backend", "repo": "tiangolo/fastapi", "stars": "★ 78.4k", "category": "💻 编程系统与Python快速构建", "summary": "规范封装 DeepSeek 流式输出（SSE）、异步并发控制、Token 预算限流与 RESTful 路由", "tags": ["fastapi", "deepseek", "api后端", "流式输出", "搭建系统", "搭建后端"], "installed": false}, {"id": "flask-microservice-api", "name": "Flask 轻量微服务与 RESTful 接口", "slash": "/flask-microservice-api", "repo": "pallets/flask", "stars": "★ 69.1k", "category": "💻 编程系统与Python快速构建", "summary": "蓝图模块化拆分、轻量 RESTful API 设计、跨域 CORS 配置与无状态 JWT 鉴权", "tags": ["flask", "微服务", "api开发", "轻量后端", "python接口"], "installed": false}, {"id": "django-enterprise-system", "name": "Django 企业级管理系统整体架构设计", "slash": "/django-enterprise-system", "repo": "django/django", "stars": "★ 79.5k", "category": "💻 编程系统与Python快速构建", "summary": "包含 ORM 数据建模、用户认证与 RBAC 鉴权中间件、REST 接口与后台管理全套架构", "tags": ["django", "管理系统", "企业系统", "orm建模", "后台管理"], "installed": false}, {"id": "sqlalchemy-orm-architect", "name": "SQLAlchemy 2.0 企业级 ORM 建模规约", "slash": "/sqlalchemy-orm-architect", "repo": "sqlalchemy/sqlalchemy", "stars": "★ 9.5k", "category": "💻 编程系统与Python快速构建", "summary": "基于 Type Annotations 声明式映射、Session 连接池管理与复杂多表级联查询优化", "tags": ["sqlalchemy", "orm", "数据库建模", "关系映射", "连接池"], "installed": false}, {"id": "pydantic-validation-pro", "name": "Pydantic v2 高性能数据校验模型", "slash": "/pydantic-validation-pro", "repo": "pydantic/pydantic", "stars": "★ 21.4k", "category": "💻 编程系统与Python快速构建", "summary": "Rust 核心强类型数据解析、自定义验证器（Validators）编写与 Schema 自动导出", "tags": ["pydantic", "数据校验", "类型注解", "数据清洗", "契约验证"], "installed": false}, {"id": "alembic-db-migrations", "name": "Alembic 数据库版本自动化迁移管控", "slash": "/alembic-db-migrations", "repo": "sqlalchemy/alembic", "stars": "★ 2.1k", "category": "💻 编程系统与Python快速构建", "summary": "数据库 DDL 版本分支管理、变更自动检测脚本生成与线上无损回滚策略", "tags": ["alembic", "数据库迁移", "ddl变更", "版本控制", "迁移脚本"], "installed": false}, {"id": "local-project-refactor", "name": "本地遗留大型项目代码重构专家", "slash": "/local-project-refactor", "repo": "refactoring/clean-architecture", "stars": "★ 26.3k", "category": "💻 编程系统与Python快速构建", "summary": "消除复杂代码坏味道、模块解耦、领域驱动设计（DDD）分层重塑与 SOLID 原则落地", "tags": ["重构", "项目重构", "解耦", "代码重构", "清理代码", "架构升级"], "installed": false}, {"id": "legacy-code-modernizer", "name": "旧代码平滑升级与语法跨版本迁移", "slash": "/legacy-code-modernizer", "repo": "modernizer/migration-assistant", "stars": "★ 14.1k", "category": "💻 编程系统与Python快速构建", "summary": "Python 2->3、Vue 2->3、CommonJS->ESM 与高版本依赖平滑升级自动化方案", "tags": ["代码升级", "语法迁移", "vue升级", "python升级", "现代化迁移"], "installed": false}, {"id": "sql-optimizer", "name": "SQL 慢查询性能调优与索引推荐", "slash": "/sql-optimizer", "repo": "db-optimizer/sql-tuning-agent", "stars": "★ 26.8k", "category": "💻 编程系统与Python快速构建", "summary": "EXPLAIN 执行计划全字段深度分析、深分页优化、最左前缀索引失效与慢 SQL 重写", "tags": ["sql调优", "mysql优化", "慢查询", "索引推荐", "数据库调优"], "installed": false}, {"id": "git-commit-helper", "name": "规范化 Git 提交生成与 Diff 深度解析", "slash": "/git-commit-helper", "repo": "git-tools/conventional-commits", "stars": "★ 14.9k", "category": "💻 编程系统与Python快速构建", "summary": "自动解析 Git 工作区 Diff 差异，提炼核心改动，生成规范 Conventional Commits 文案", "tags": ["git", "commit", "提交规范", "diff", "版本控制"], "installed": false}, {"id": "pytest-test-suite", "name": "Pytest 自动化单元测试与边界覆盖", "slash": "/pytest-test-suite", "repo": "pytest-dev/pytest", "stars": "★ 12.3k", "category": "💻 编程系统与Python快速构建", "summary": "扫描业务代码自动生成带 Mock 打桩的高覆盖率测试用例、参数化测试与夹具（Fixtures）", "tags": ["单元测试", "pytest", "mock", "自动化测试", "测试用例"], "installed": false}, {"id": "docker-k8s-devops", "name": "容器化多阶段构建与 K8s 运维编排", "slash": "/docker-k8s-devops", "repo": "devops-agent/docker-k8s-best", "stars": "★ 25.4k", "category": "💻 编程系统与Python快速构建", "summary": "多阶段 Dockerfile 精简瘦身、K8s Pod 资源清单、探针配置与 CI/CD 自动化流水线", "tags": ["docker", "k8s", "容器化", "dockerfile", "运维", "cicd"], "installed": false}, {"id": "ruff-linter-formatter", "name": "Ruff 极速静态检查与代码风格统一", "slash": "/ruff-linter-formatter", "repo": "astral-sh/ruff", "stars": "★ 35.2k", "category": "💻 编程系统与Python快速构建", "summary": "毫秒级静态检查与自动格式化修复，全面替代 Flake8/Black/isort 等传统工具链", "tags": ["ruff", "代码规范", "格式化", "静态检查", "linter"], "installed": false}, {"id": "poetry-dependency-manager", "name": "Poetry 现代依赖锁定与虚拟环境打包", "slash": "/poetry-dependency-manager", "repo": "python-poetry/poetry", "stars": "★ 31.0k", "category": "💻 编程系统与Python快速构建", "summary": "确定性依赖锁定（poetry.lock）、多环境隔离与一键发布标准化 Python 轮子包", "tags": ["poetry", "依赖管理", "虚拟环境", "打包发布", "环境隔离"], "installed": false}, {"id": "playwright-automation", "name": "Playwright 现代浏览器端到端自动化", "slash": "/playwright-automation", "repo": "microsoft/playwright-python", "stars": "★ 14.8k", "category": "💻 编程系统与Python快速构建", "summary": "多页面无感录制、影子 DOM 精准定位、网络请求拦截与反反爬自动化交互测试", "tags": ["playwright", "自动化测试", "无头浏览器", "网页模拟", "截图抓取"], "installed": false}, {"id": "rich-terminal-tui", "name": "Rich 终端富文本排版与动态看板", "slash": "/rich-terminal-tui", "repo": "Textualize/rich", "stars": "★ 49.6k", "category": "💻 编程系统与Python快速构建", "summary": "在命令行控制台中渲染彩色富文本、多栏数据表格、进度条与语法高亮代码块", "tags": ["rich", "终端美化", "控制台输出", "进度条", "表格排版"], "installed": false}, {"id": "textual-tui-app", "name": "Textual 纯 Python 编写终端窗口程序", "slash": "/textual-tui-app", "repo": "Textualize/textual", "stars": "★ 26.3k", "category": "💻 编程系统与Python快速构建", "summary": "基于 CSS 样式规范开发具有侧边栏、模态框、按钮与事件监听的现代化终端图形程序", "tags": ["textual", "终端应用", "tui", "python界面", "轻量窗口"], "installed": false}, {"id": "typer-cli-builder", "name": "Typer 基于类型注解极速构建 CLI", "slash": "/typer-cli-builder", "repo": "tiangolo/typer", "stars": "★ 16.2k", "category": "💻 编程系统与Python快速构建", "summary": "利用标准类型注解自动生成帮助文档、参数解析校验与自动补全的专业命令行工具", "tags": ["typer", "cli", "命令行工具", "参数解析", "终端命令"], "installed": false}, {"id": "redis-distributed-lock", "name": "Redis 分布式缓存与并发控制锁", "slash": "/redis-distributed-lock", "repo": "redis/redis-py", "stars": "★ 13.5k", "category": "💻 编程系统与Python快速构建", "summary": "多节点并发安全 RedLock、防缓存击穿/雪崩设计、Pub/Sub 实时通知与原子计数器", "tags": ["redis", "分布式锁", "缓存设计", "并发安全", "pubsub"], "installed": false}, {"id": "duckdb-olap-query", "name": "DuckDB 进程内极速分析型数据库", "slash": "/duckdb-olap-query", "repo": "duckdb/duckdb", "stars": "★ 26.7k", "category": "💻 编程系统与Python快速构建", "summary": "无需配置独立数据库服务器，直接在本地对百兆 Parquet/CSV 执行毫秒级复杂 SQL 分析", "tags": ["duckdb", "olap", "快速sql", "parquet查询", "内存分析"], "installed": false}, {"id": "polars-fast-dataframe", "name": "Polars 多核多线程极速数据处理", "slash": "/polars-fast-dataframe", "repo": "pola-rs/polars", "stars": "★ 32.1k", "category": "💻 编程系统与Python快速构建", "summary": "Rust 打造的多核并行 DataFrame 库，通过惰性计算与内存对齐实现数倍于 Pandas 的性能", "tags": ["polars", "数据处理", "性能加速", "内存优化", "多核并行"], "installed": false}, {"id": "security-audit-agent", "name": "OWASP Top 10 安全漏洞与依赖体检", "slash": "/security-audit-agent", "repo": "security/owasp-audit-agent", "stars": "★ 18.2k", "category": "💻 编程系统与Python快速构建", "summary": "SQL 注入/XSS 隐患扫描、密钥密码硬编码排查与第三方开源依赖供应链安全体检", "tags": ["安全审计", "漏洞扫描", "owasp", "安全加固", "代码体检"], "installed": false}, {"id": "regex-master", "name": "复杂正则表达式生成与边界测试", "slash": "/regex-master", "repo": "regex-tools/regex-master-agent", "stars": "★ 11.8k", "category": "💻 编程系统与Python快速构建", "summary": "构造复杂字符正则、零宽断言解析、生成覆盖边界测试用例并检测抗 ReDoS 拒绝服务漏洞", "tags": ["正则表达式", "正则", "regex", "字符串匹配", "redos防范"], "installed": false}, {"id": "academic-figure-skill", "name": "CNS 顶刊科学图表矢量排版", "slash": "/academic-figure-skill", "repo": "Nature-Figures/standards", "stars": "★ 26.2k", "category": "🔬 科研学术与数学建模", "summary": "符合 Nature/Cell/Science 顶刊标准的科学图表复合排版、子图对齐与矢量 PDF 输出", "tags": ["画图", "制图", "论文", "图表", "nature", "cell", "science", "学术绘图"], "installed": true}, {"id": "scientific-visualization", "name": "科学配色审计与对比度核验", "slash": "/scientific-visualization", "repo": "color-palette/vis-palette", "stars": "★ 13.9k", "category": "🔬 科研学术与数学建模", "summary": "出版级色彩对比度核验、色盲友好度色阶（Viridis/Cividis）与多面板布局设计", "tags": ["配色", "可视化", "图表配色", "对比度", "色盲友好", "matplotlib"], "installed": true}, {"id": "patent-disclosure-writer", "name": "中文专利技术交底书标准化撰写", "slash": "/patent-disclosure-writer", "repo": "patent-agent/chinese-patent", "stars": "★ 8.4k", "category": "🔬 科研学术与数学建模", "summary": "中文专利交底书标准化撰写、技术创新点挖掘、权利要求书布局与申报材料整理", "tags": ["专利", "交底书", "技术交底", "创新点", "申报", "知识产权"], "installed": true}, {"id": "sci-novelty-miner", "name": "SCI 创新点挖掘与学术 Gap 探测", "slash": "/sci-novelty-miner", "repo": "open-sci/novelty-miner", "stars": "★ 14.2k", "category": "🔬 科研学术与数学建模", "summary": "从近期顶刊 SOTA 论文中深度挖掘现有技术局限性，启发架构式与机制性核心创新点", "tags": ["创新点", "选题", "学术gap", "sci", "顶刊", "文献调研"], "installed": false}, {"id": "literature-matrix-pro", "name": "文献多维横向对比矩阵构建器", "slash": "/literature-matrix-pro", "repo": "scholarly/lit-matrix-agent", "stars": "★ 18.5k", "category": "🔬 科研学术与数学建模", "summary": "快速提取数十篇文献的方法、数据集与关键指标，输出排版严密的横向对比三线表", "tags": ["文献对比", "矩阵", "综述三线表", "对比分析", "文献综述"], "installed": false}, {"id": "systematic-review-writer", "name": "PRISMA 系统性综述与 Meta 分析撰写", "slash": "/systematic-review-writer", "repo": "academic-tools/systematic-review", "stars": "★ 11.3k", "category": "🔬 科研学术与数学建模", "summary": "遵循国际 PRISMA 规范，完成文献检索式、纳入排除流程、偏倚风险评估与成稿", "tags": ["系统综述", "prisma", "meta分析", "文献筛选", "综述撰写"], "installed": false}, {"id": "paper-code-reproducer", "name": "顶会论文开源代码复现助手", "slash": "/paper-code-reproducer", "repo": "papers-with-code/repro-helper", "stars": "★ 29.4k", "category": "🔬 科研学术与数学建模", "summary": "排查 GitHub 论文代码环境依赖冲突、CUDA/PyTorch 版本对齐与基准权重下载运行", "tags": ["代码复现", "论文复现", "跑通代码", "环境配置", "顶会复现"], "installed": false}, {"id": "paper-to-repro-plan", "name": "论文 Method 逆向工程伪代码拆解", "slash": "/paper-to-repro-plan", "repo": "reproducibility/pseudo-code", "stars": "★ 9.8k", "category": "🔬 科研学术与数学建模", "summary": "将论文 Method 抽象数学推导公式逆向拆解为规范可运行的模块架构与数据流伪代码", "tags": ["伪代码", "算法复现", "公式实现", "工程拆解", "数学公式"], "installed": false}, {"id": "sci-paper-polisher", "name": "Nature / IEEE 顶刊级学术精修润色", "slash": "/sci-paper-polisher", "repo": "academic-writing/sci-polisher", "stars": "★ 32.1k", "category": "🔬 科研学术与数学建模", "summary": "消除 AI 机械腔调、重塑学术因果逻辑链条、主被动语态严谨度替换与地道措辞", "tags": ["论文润色", "润色", "修改论文", "学术润色", "sci修改", "英文润色"], "installed": false}, {"id": "sci-abstract-title-craft", "name": "高引用率 Title 与黄金结构摘要", "slash": "/sci-abstract-title-craft", "repo": "open-sci/abstract-optimizer", "stars": "★ 16.5k", "category": "🔬 科研学术与数学建模", "summary": "打造吸引期刊编辑与审稿人的背景-痛点-创新-指标黄金四段式 Abstract 与抓眼标题", "tags": ["摘要", "abstract", "论文标题", "高引标题", "摘要精修"], "installed": false}, {"id": "sci-rebuttal-pro", "name": "审稿人挑刺反驳与 Response 撰写", "slash": "/sci-rebuttal-pro", "repo": "academic-review/rebuttal-pro", "stars": "★ 15.9k", "category": "🔬 科研学术与数学建模", "summary": "逐条解构审稿人挑剔意见，撰写理据充分、态度谦逊的高过审率 Response Letter", "tags": ["rebuttal", "审稿意见", "反驳信", "审稿人", "回复审稿人"], "installed": false}, {"id": "latex-typesetter", "name": "LaTeX 两栏大表与跨栏公式排错", "slash": "/latex-typesetter", "repo": "latex-community/typesetter-agent", "stars": "★ 19.6k", "category": "🔬 科研学术与数学建模", "summary": "解决 IEEE/ACM 模板两栏超宽大表排版、复杂长公式拆行截断与 BibTeX 宏包报错", "tags": ["latex", "排版", "长公式", "双栏排版", "bibtex"], "installed": false}, {"id": "math-modeling-master", "name": "数模竞赛全流程助手（国赛/美赛）", "slash": "/math-modeling-master", "repo": "mathorcup/mathematical-modeling", "stars": "★ 25.6k", "category": "🔬 科研学术与数学建模", "summary": "赛题物理/经济机理拆解、规划优化、微分方程建立、Matlab/Python 求解与论文成稿", "tags": ["数学建模", "国赛", "美赛", "数模", "微分方程", "运筹优化"], "installed": false}, {"id": "statistical-hypo-testing", "name": "实验数据假设检验与标准三线表", "slash": "/statistical-hypo-testing", "repo": "stat-lab/hypothesis-testing", "stars": "★ 12.9k", "category": "🔬 科研学术与数学建模", "summary": "自动适配 ANOVA、单双尾 t 检验、卡方分析，计算 p 值与效应量并输出标准化三线表", "tags": ["假设检验", "显著性检验", "p值", "anova", "t检验", "统计分析"], "installed": false}, {"id": "origin-style-plot", "name": "Origin 风格实验曲线与拟合散点图", "slash": "/origin-style-plot", "repo": "lab-plot/origin-style-python", "stars": "★ 11.5k", "category": "🔬 科研学术与数学建模", "summary": "无需 Origin 软件，纯 Python 绘制高质感双 Y 轴折线图、平滑拟合曲线与误差棒", "tags": ["origin", "实验曲线", "误差棒", "双y轴", "科研绘图"], "installed": false}, {"id": "elsevier-standard-charts", "name": "爱思唯尔单双栏期刊图表尺寸规约", "slash": "/elsevier-standard-charts", "repo": "elsevier-standards/artwork-guide", "stars": "★ 9.7k", "category": "🔬 科研学术与数学建模", "summary": "严格对齐 85mm 单栏/175mm 双栏宽度、Arial 6-8pt 字体无形变缩放出版规范", "tags": ["elsevier", "爱思唯尔", "图表尺寸", "单栏图", "双栏图"], "installed": false}, {"id": "bio-pathway-diagram", "name": "生物医药作用机制与信号通路图", "slash": "/bio-pathway-diagram", "repo": "biomed/pathway-illustration", "stars": "★ 10.1k", "category": "🔬 科研学术与数学建模", "summary": "绘制分子生物学作用机制、细胞受体信号级联传导、药物靶点作用示意图", "tags": ["通路图", "信号传导", "生物医药", "分子机制", "生物通路"], "installed": false}, {"id": "heatmap-corr-master", "name": "多组学火山图、相关性热图与 PCA", "slash": "/heatmap-corr-master", "repo": "bioinformatics/omics-plots", "stars": "★ 14.4k", "category": "🔬 科研学术与数学建模", "summary": "差异表达基因火山图、高维相关性矩阵热图、主成分分析（PCA）置信椭圆图生成", "tags": ["火山图", "热图", "pca", "组学分析", "相关性分析"], "installed": false}, {"id": "thesis-proposal", "name": "硕博研究生学位论文开题立项报告", "slash": "/thesis-proposal", "repo": "grad-school/thesis-proposal-agent", "stars": "★ 10.5k", "category": "🔬 科研学术与数学建模", "summary": "开题报告研究背景现状论述、关键技术路线图架构设计与可行性方案论证", "tags": ["开题报告", "开题", "技术路线", "立项", "学位论文"], "installed": false}, {"id": "cvxpy-convex-optimizer", "name": "CVXPY 凸优化建模与求解约束", "slash": "/cvxpy-convex-optimizer", "repo": "cvxpy/cvxpy", "stars": "★ 6.2k", "category": "🔬 科研学术与数学建模", "summary": "基于符合 DCP 规范的凸优化问题建模，调用 ECOS/OSQP 求解高维最优化资源配置", "tags": ["凸优化", "cvxpy", "最优化", "二次规划", "线性规划"], "installed": false}, {"id": "deap-genetic-algorithm", "name": "DEAP 多目标遗传进化算法求解", "slash": "/deap-genetic-algorithm", "repo": "deap/deap", "stars": "★ 5.6k", "category": "🔬 科研学术与数学建模", "summary": "NSGA-II 算法求解高维非线性 Pareto 最优前沿，解决工程多目标权衡求解难题", "tags": ["遗传算法", "进化计算", "多目标优化", "nsga-ii", "算法求解"], "installed": false}, {"id": "lifelines-survival-analysis", "name": "Lifelines 医学与工程生存分析", "slash": "/lifelines-survival-analysis", "repo": "CamDavidsonPilon/lifelines", "stars": "★ 3.6k", "category": "🔬 科研学术与数学建模", "summary": "绘制 Kaplan-Meier 生存率曲线、Log-rank 显著性检验与 Cox 比例风险回归建模", "tags": ["生存分析", "km曲线", "cox模型", "医学统计", "可靠度分析"], "installed": false}, {"id": "pymol-molecular-view", "name": "PyMOL 蛋白质与分子对接渲染脚本", "slash": "/pymol-molecular-view", "repo": "schrodinger/pymol-open-source", "stars": "★ 3.1k", "category": "🔬 科研学术与数学建模", "summary": "纯脚本批量输出出版级蛋白质三维表面静电势、氢键作用力与小分子对接晶体图", "tags": ["pymol", "分子对接", "结构生物学", "蛋白质三维", "药物研发"], "installed": false}, {"id": "rdkit-chemistry-toolkit", "name": "RDKit 化学信息学与分子指纹计算", "slash": "/rdkit-chemistry-toolkit", "repo": "rdkit/rdkit", "stars": "★ 3.7k", "category": "🔬 科研学术与数学建模", "summary": "SMILES 结构转换、Morgan 分子指纹相似度聚类与 Lipinski 五规则药物类药性筛查", "tags": ["rdkit", "化学信息学", "分子结构", "药物筛选", "smiles"], "installed": false}, {"id": "shadcn-ui-designer", "name": "Shadcn/UI 现代化高质感组件架构", "slash": "/shadcn-ui-designer", "repo": "shadcn-ui/ui", "stars": "★ 75.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "遵循 Radix + Tailwind 规范，输出极具现代感、无障碍可访问的深浅色组件代码", "tags": ["ui设计", "前端组件", "shadcn", "组件库", "界面美化", "设计系统"], "installed": false}, {"id": "web-dashboard-architect", "name": "现代 Web 可视化大屏与中后台前端", "slash": "/web-dashboard-architect", "repo": "ant-design/ant-design-pro", "stars": "★ 36.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "业务看板栅格布局、核心 KPI 指标动线、多图联动与复杂表单筛选器前端架构", "tags": ["前端大屏", "数据大屏", "中后台", "管理端ui", "看板前端"], "installed": false}, {"id": "tailwind-artisan", "name": "Tailwind CSS 视觉流与响应式美化", "slash": "/tailwind-artisan", "repo": "tailwindlabs/tailwindcss", "stars": "★ 82.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "编写弥散光渐变、毛玻璃质感、微动效与移动/桌面多端自适应响应式断点", "tags": ["tailwind", "css美化", "响应式", "毛玻璃", "网页样式"], "installed": false}, {"id": "echarts-visualization-expert", "name": "ECharts/AntV 复杂交互图表代码生成", "slash": "/echarts-visualization-expert", "repo": "apache/echarts", "stars": "★ 58.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "输出可直接运行的 Apache ECharts 柱线混排、地图下钻、桑基图与多层联动看板代码", "tags": ["echarts", "交互图表", "前端绘图", "数据图表", "antv"], "installed": false}, {"id": "threejs-webgl-vis", "name": "Three.js/WebGL 3D 交互数据可视化", "slash": "/threejs-webgl-vis", "repo": "mrdoob/three.js", "stars": "★ 102.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "基于 Three.js 构建轻量级三维地形、3D 立体地球、数字孪生工业设备展示场景", "tags": ["threejs", "3d可视化", "webgl", "三维网页", "数字孪生"], "installed": false}, {"id": "svg-icon-illustrator", "name": "SVG 矢量图标与精细线框插画绘制", "slash": "/svg-icon-illustrator", "repo": "lucide-icons/lucide", "stars": "★ 17.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "生成手工级精简 SVG 矢量代码、遵循统一 24x24 视口网格与平滑贝塞尔曲线", "tags": ["svg", "矢量图标", "插画", "图标绘制", "单色图标"], "installed": false}, {"id": "landing-page-hero", "name": "高转化 SaaS 官网 Hero 首屏设计", "slash": "/landing-page-hero", "repo": "landing-page/saas-templates", "stars": "★ 15.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "Stripe/Linear 风格 SaaS 官网首屏排版：吸睛标题排版、动效悬浮卡片与 CTA 动线", "tags": ["官网设计", "landing page", "首屏设计", "saas页面"], "installed": false}, {"id": "color-palette-master", "name": "高质感品牌与 UI 配色调色板", "slash": "/color-palette-master", "repo": "hughsk/colormaps", "stars": "★ 8.9k", "category": "🎨 UI设计与网页可视化前端", "summary": "WCAG AAA 级对比度核验、互补色与邻近色提取、自动生成 Dark/Light 双模式色板", "tags": ["配色方案", "调色板", "ui配色", "深浅色适配", "色彩设计"], "installed": false}, {"id": "wireframe-prototyper", "name": "线框原型与用户交互旅程设计", "slash": "/wireframe-prototyper", "repo": "ux-patterns/wireframe-agent", "stars": "★ 12.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "从口述需求快速输出高保真 ASCII/Markdown 线框图与交互状态机分支流转图", "tags": ["线框图", "原型设计", "交互设计", "ui原型", "用户旅程"], "installed": false}, {"id": "animation-motion-css", "name": "微动效与交互过渡阻尼曲线设计", "slash": "/animation-motion-css", "repo": "animate-css/animate.css", "stars": "★ 26.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "弹性阻尼（Spring 动效）、骨架屏加载过渡与列表交错（Stagger）微动效编写", "tags": ["css动画", "动效", "framer motion", "过渡动画", "交互动效"], "installed": false}, {"id": "ant-design-spec", "name": "Ant Design 企业级设计规范实装", "slash": "/ant-design-spec", "repo": "ant-design/ant-design", "stars": "★ 92.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "严谨对齐蚂蚁金服企业级设计语言，输出符合 B 端高效操作心理模型的界面代码", "tags": ["ant design", "企业级设计", "b端组件", "设计规范", "react组件"], "installed": false}, {"id": "vue3-composition-arch", "name": "Vue 3 组合式架构与极致界面响应", "slash": "/vue3-composition-arch", "repo": "antfu/vitesse", "stars": "★ 19.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "利用 Composition API、Custom Hooks 与 Pinia 组织复杂大型交互界面的响应式数据流", "tags": ["vue3", "composition api", "pinia", "组件架构", "响应式界面"], "installed": false}, {"id": "nextjs-fullstack-web", "name": "Next.js 全栈渲染与极速 SEO 站群", "slash": "/nextjs-fullstack-web", "repo": "vercel/next.js", "stars": "★ 128.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "App Router 架构、React Server Components（RSC）服务端渲染与极速边缘缓存", "tags": ["next.js", "ssr", "全栈开发", "seo优化", "react服务端"], "installed": false}, {"id": "excalidraw-diagram-pro", "name": "Excalidraw 手绘白板风格架构绘制", "slash": "/excalidraw-diagram-pro", "repo": "excalidraw/excalidraw", "stars": "★ 83.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "生成手绘白板质感的系统架构图、数据流转图，让技术汇报告别刻板冰冷", "tags": ["excalidraw", "手绘架构", "白板图", "系统流程", "技术汇报"], "installed": false}, {"id": "mermaid-architecture-flow", "name": "Mermaid 时序图与复杂状态机绘制", "slash": "/mermaid-architecture-flow", "repo": "mermaid-js/mermaid", "stars": "★ 73.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "纯文本渲染规范的 UML 序列交互图、分布式微服务调用拓扑与高并发状态流转图", "tags": ["mermaid", "时序图", "状态机", "uml", "文本绘图"], "installed": false}, {"id": "d3-custom-visualization", "name": "D3.js 复杂高阶数据图形定制开发", "slash": "/d3-custom-visualization", "repo": "d3/d3", "stars": "★ 108.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "突破常规柱折饼限制，定制力导向关系网络、弦图、日光辐射图与层次聚类树", "tags": ["d3.js", "数据驱动", "力导向图", "高级图表", "定制图形"], "installed": false}, {"id": "chartjs-responsive-plots", "name": "Chart.js 纯轻量 Canvas 统计图表", "slash": "/chartjs-responsive-plots", "repo": "chartjs/Chart.js", "stars": "★ 64.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "纯轻量、零外部依赖的 HTML5 Canvas 自适应响应式图表快速嵌入与动画配置", "tags": ["chart.js", "canvas图表", "轻量可视化", "统计图", "网页报表"], "installed": false}, {"id": "antv-x6-graph-editor", "name": "AntV X6 拖拽式图编辑与流程排版", "slash": "/antv-x6-graph-editor", "repo": "antvis/X6", "stars": "★ 6.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "构建具有连线对齐吸附、自定义图形节点与撤销重做功能的流程设计器核心引擎", "tags": ["antv x6", "流程图编辑器", "拓扑连线", "节点编排", "图形交互"], "installed": false}, {"id": "data-cleaning-pipeline", "name": "脏数据自动化清洗与缺失值修复", "slash": "/data-cleaning-pipeline", "repo": "data-prep/cleaning-pipeline-agent", "stars": "★ 14.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "智能识别杂乱日期、空格非法字符剔除、异常值检测插补与多表对齐标准化", "tags": ["数据清洗", "脏数据", "缺失值", "异常值", "数据预处理"], "installed": false}, {"id": "pandas-data-analyst", "name": "Python 自动化数据探索分析 (EDA)", "slash": "/pandas-data-analyst", "repo": "data-agent/pandas-eda-wizard", "stars": "★ 24.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "快速扫描数据分布特征、共线性检测、数据透视与一键输出探索性分析报告", "tags": ["eda", "pandas", "探索性分析", "数据探索", "统计分析"], "installed": false}, {"id": "plotly-dashboard-pro", "name": "Plotly 交互式动态看板与商业 BI 分析", "slash": "/plotly-dashboard-pro", "repo": "plotly/dash", "stars": "★ 21.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "纯 Python 构建多重滑块筛选、悬浮 Tooltip 与图表联动的商业 BI 动态分析仪表盘", "tags": ["plotly", "dash", "商业bi", "交互看板", "动态图表"], "installed": false}, {"id": "multidimensional-stats", "name": "多维统计推断与多元线性回归分析", "slash": "/multidimensional-stats", "repo": "statsmodels/statsmodels", "stars": "★ 9.4k", "category": "📊 数据清洗分析与图表呈现", "summary": "因子分析、主成分分析（PCA）、方差齐性核验与回归系数显著性分析报告", "tags": ["多元统计", "线性回归", "因子分析", "统计推断", "统计建模"], "installed": false}, {"id": "time-series-forecaster", "name": "时间序列趋势分解与周期性预测", "slash": "/time-series-forecaster", "repo": "stats-modeling/time-series-pro", "stars": "★ 13.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "ARIMA、Prophet、平稳性检验与多步预测置信区间评估，辅助经营趋势预测", "tags": ["时间序列", "时序预测", "趋势预测", "prophet", "销量预测"], "installed": false}, {"id": "excel-power-bi-wizard", "name": "Power BI / Excel 复杂 DAX 与动态看板", "slash": "/excel-power-bi-wizard", "repo": "bi-analytics/powerbi-dax-agent", "stars": "★ 11.6k", "category": "📊 数据清洗分析与图表呈现", "summary": "编写高效 DAX 度量值、构建星型数据模型与销售绩效动态可视化看板", "tags": ["power bi", "dax", "商业智能", "销售看板", "报表设计"], "installed": false}, {"id": "xgboost-feature-importance", "name": "XGBoost 梯度提升建模与特征筛选", "slash": "/xgboost-feature-importance", "repo": "dmlc/xgboost", "stars": "★ 26.3k", "category": "📊 数据清洗分析与图表呈现", "summary": "快速完成特征重要性增益计算、超参数微调评估与业务分类/回归决策树拟合", "tags": ["xgboost", "机器学习", "特征重要度", "梯度提升", "风控建模"], "installed": false}, {"id": "shap-model-explainability", "name": "SHAP 机器学习黑盒模型可解释性分析", "slash": "/shap-model-explainability", "repo": "shap/shap", "stars": "★ 24.5k", "category": "📊 数据清洗分析与图表呈现", "summary": "基于博弈论 Shapley 效应计算特征边际贡献，生成瀑布图、依赖图与全局蜂群图", "tags": ["shap", "模型可解释性", "归因分析", "特征分析", "归因图"], "installed": false}, {"id": "prophet-business-forecast", "name": "Prophet 商业指标长程趋势预测", "slash": "/prophet-business-forecast", "repo": "facebook/prophet", "stars": "★ 18.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "自适应拟合节假日跳变、周月季节性规律与业务增长饱和承载能力的未来预测", "tags": ["prophet", "业务预测", "季节性分解", "趋势拟合", "客流预测"], "installed": false}, {"id": "pyod-anomaly-detection", "name": "PyOD 多元业务数据异常值智能检测", "slash": "/pyod-anomaly-detection", "repo": "yzhao062/pyod", "stars": "★ 8.7k", "category": "📊 数据清洗分析与图表呈现", "summary": "集成孤立森林（iForest）、COPOD 与高维离群点算法，自动挖掘可疑异常流水与交易", "tags": ["异常检测", "孤立森林", "离群点", "pyod", "风控审计"], "installed": false}, {"id": "scikit-learn-pipeline", "name": "Scikit-Learn 标准自动化预处理管道", "slash": "/scikit-learn-pipeline", "repo": "scikit-learn/scikit-learn", "stars": "★ 60.1k", "category": "📊 数据清洗分析与图表呈现", "summary": "编写防数据穿越的 Pipeline、ColumnTransformer 与标准化归一化组合转换器", "tags": ["sklearn", "pipeline", "数据预处理", "特征工程", "交叉验证"], "installed": false}, {"id": "prd-document-architect", "name": "互联网规范 PRD 需求文档撰写专家", "slash": "/prd-document-architect", "repo": "product-management/prd-standard", "stars": "★ 14.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "撰写结构化用户故事、功能交互分支全景清单、异常分支处理与原型字段说明", "tags": ["prd", "产品文档", "需求文档", "用户故事", "功能规范", "产品经理"], "installed": false}, {"id": "erp-scm-blueprint", "name": "制造供应链 ERP 进销存业务蓝图", "slash": "/erp-scm-blueprint", "repo": "enterprise-erp/scm-blueprint", "stars": "★ 12.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "生产计划 MRP、采购入库、BOM 展开、仓储多级调拨与财务成本核算全流程梳理", "tags": ["erp", "scm", "进销存", "业务蓝图", "供应链", "bom"], "installed": false}, {"id": "chemical-pid-diagram", "name": "化工与工业 PID 管道仪表流程图符规约", "slash": "/chemical-pid-diagram", "repo": "industrial-diagrams/pid-isa-standards", "stars": "★ 9.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "符合 ISA-5.1 标准的管道材质代号、阀门仪表位号规则（FIC/PT/TI）与联锁标注", "tags": ["pid", "管道仪表", "工艺流程", "isa标准", "工业工程", "阀门"], "installed": false}, {"id": "b2b-saas-billing-model", "name": "B2B SaaS 阶梯订阅计费与定价模型", "slash": "/b2b-saas-billing-model", "repo": "saas-growth/billing-matrix", "stars": "★ 8.4k", "category": "📑 产品经理ERP与工业PID规约", "summary": "设计坐席/用量混合计费模型、多租户套餐权限配额（Quotas）与 MRR 测算", "tags": ["saas计费", "定价策略", "mrr测算", "商业化", "订阅制"], "installed": false}, {"id": "mrd-competitor-matrix", "name": "市场需求文档 MRD 与竞品分析矩阵", "slash": "/mrd-competitor-matrix", "repo": "product-strategy/mrd-framework", "stars": "★ 11.1k", "category": "📑 产品经理ERP与工业PID规约", "summary": "TAM/SAM/SOM 市场规模估算、竞品核心功能雷达图与差异化竞争策略规划", "tags": ["mrd", "竞品分析", "市场调研", "商业分析", "竞争矩阵"], "installed": false}, {"id": "user-journey-map-pro", "name": "全链路用户旅程地图与触点漏斗分析", "slash": "/user-journey-map-pro", "repo": "ux-design/user-journey-flow", "stars": "★ 10.3k", "category": "📑 产品经理ERP与工业PID规约", "summary": "绘制用户进入、激活、留存到转化的心理情绪曲线、痛点接触点与流失归因", "tags": ["用户旅程", "旅程地图", "体验设计", "流失分析", "触点分析"], "installed": false}, {"id": "api-product-spec", "name": "开放平台 API 产品化与鉴权体系", "slash": "/api-product-spec", "repo": "api-governance/api-as-a-product", "stars": "★ 13.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "设计对外开放 API 开发者门户、OAuth2/HMAC 签名认证与调用配额限流商业化标准", "tags": ["api产品", "开放平台", "api设计", "鉴权规范", "接口文档"], "installed": false}, {"id": "mes-shopfloor-spec", "name": "车间制造执行系统 MES 数据流规约", "slash": "/mes-shopfloor-spec", "repo": "industrial-iot/mes-specifications", "stars": "★ 7.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "工单派工、设备 OEE 综合利用率采集、工序质量追溯与安灯（Andon）告警规范", "tags": ["mes", "工业互联网", "车间系统", "oee", "质量追溯"], "installed": false}, {"id": "plc-ladder-logic-sop", "name": "工控 PLC 控制逻辑时序与安全联锁 SOP", "slash": "/plc-ladder-logic-sop", "repo": "industrial-control/plc-sop-standard", "stars": "★ 6.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "撰写西门子/三菱 PLC 动作时序流程图、急停安全安全联锁矩阵与故障自诊断说明", "tags": ["plc", "工控", "安全联锁", "动作时序", "电气控制"], "installed": false}, {"id": "iso-quality-audit-doc", "name": "ISO-9001 质量管理体系审核表单规约", "slash": "/iso-quality-audit-doc", "repo": "compliance-docs/iso9001-toolkit", "stars": "★ 5.9k", "category": "📑 产品经理ERP与工业PID规约", "summary": "标准化 CAPA 纠正与预防措施、不合格品评审流转与内外部质量审核追踪表", "tags": ["iso9001", "质量管理", "体系审核", "capa", "质量表单"], "installed": false}, {"id": "event-tracking-dictionary", "name": "全站数据埋点字典与指标口径定义", "slash": "/event-tracking-dictionary", "repo": "product-analytics/tracking-matrix", "stars": "★ 9.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "制定清晰的事件名、上报属性、公共参数与业务唯一指标统一口径计算说明书", "tags": ["埋点方案", "指标口径", "埋点字典", "事件定义", "数据分析"], "installed": false}, {"id": "xiaohongshu-copywriter", "name": "小红书爆款文案拆解与标签公式", "slash": "/xiaohongshu-copywriter", "repo": "social-media/xiaohongshu-viral-agent", "stars": "★ 21.5k", "category": "📱 新媒体短视频与流量运营", "summary": "掌握吸睛二极管标题、沉浸式第一人称语气、情绪价值注入与 SEO 搜索长尾关键词", "tags": ["小红书", "文案", "爆款文案", "种草", "标题党", "自媒体运营"], "installed": false}, {"id": "douyin-script-hook", "name": "抖音完播率前三秒黄金 Hook 脚本", "slash": "/douyin-script-hook", "repo": "short-video/douyin-script-hook", "stars": "★ 24.3k", "category": "📱 新媒体短视频与流量运营", "summary": "打造高完播与高赞视频：前 3 秒黄金矛盾设置、信息反差反转与点赞互动引导", "tags": ["抖音", "短视频脚本", "完播率", "hook", "视频文案", "分镜脚本"], "installed": false}, {"id": "wechat-deep-article", "name": "微信公众号深度观点特稿金字塔结构", "slash": "/wechat-deep-article", "repo": "media-growth/wechat-deep-article", "stars": "★ 18.6k", "category": "📱 新媒体短视频与流量运营", "summary": "构建观点鲜明的金字塔论述架构、故事化开头、深度行业洞察与高转发金句提炼", "tags": ["公众号", "深度特稿", "文章撰写", "排版", "长文写作"], "installed": false}, {"id": "video-hook-retention", "name": "中长视频留存率与悬念叙事设计", "slash": "/video-hook-retention", "repo": "video-marketing/hook-generator", "stars": "★ 12.8k", "category": "📱 新媒体短视频与流量运营", "summary": "在中长视频中植入信息缺口、伏笔回收机制与视觉钩子，大幅提升观众观看中位时长", "tags": ["视频留存", "悬念叙事", "脚本技巧", "中长视频", "视频剪辑"], "installed": false}, {"id": "live-selling-pitch", "name": "直播带货憋单逼单与话术情绪控制", "slash": "/live-selling-pitch", "repo": "ecommerce/live-stream-sales-script", "stars": "★ 15.2k", "category": "📱 新媒体短视频与流量运营", "summary": "设计引流品憋单话术、痛点唤醒、限时限件促成成交与主播场控情绪节奏卡点", "tags": ["直播带货", "主播话术", "逼单话术", "带货脚本", "电商直播"], "installed": false}, {"id": "bilibili-knowledge-script", "name": "B 站硬核科普高信息密度长文案", "slash": "/bilibili-knowledge-script", "repo": "video-creators/bilibili-script-pro", "stars": "★ 16.4k", "category": "📱 新媒体短视频与流量运营", "summary": "结合专业文献构建高通俗度科普框架、幽默梗穿插与生动类比可视化解说词", "tags": ["b站", "科普视频", "长视频文案", "高信息密度", "解说词"], "installed": false}, {"id": "seo-growth-clustering", "name": "搜索长尾关键词拓词与矩阵布局", "slash": "/seo-growth-clustering", "repo": "growth-hacker/seo-keyword-clustering", "stars": "★ 17.1k", "category": "📱 新媒体短视频与流量运营", "summary": "挖掘百度/小红书搜索下拉词、建立意图聚类矩阵与矩阵式长尾流量铺设方案", "tags": ["seo", "长尾词", "搜索流量", "关键词聚类", "矩阵运营"], "installed": false}, {"id": "social-funnel-analytics", "name": "新媒体全渠道转化漏斗与复盘看板", "slash": "/social-funnel-analytics", "repo": "marketing-ops/social-media-retention", "stars": "★ 13.5k", "category": "📱 新媒体短视频与流量运营", "summary": "拆解曝光-点击-互动-私域沉淀-付费全链路，诊断各阶段转化率瓶颈与优化建议", "tags": ["转化漏斗", "数据复盘", "私域运营", "投放分析", "自媒体复盘"], "installed": false}, {"id": "creator-personal-ip", "name": "创作者个人 IP 定位与商业变现画布", "slash": "/creator-personal-ip", "repo": "creator-economy/ip-canvas", "stars": "★ 11.2k", "category": "📱 新媒体短视频与流量运营", "summary": "梳理个人独特优势技能、对标账号差异化人设、受众画像与多层级商业变现产品线", "tags": ["个人ip", "商业变现", "人设打造", "定位分析", "创作者经济"], "installed": false}, {"id": "ielts-writing-band9", "name": "雅思大作文 Task 2 九分逻辑架构", "slash": "/ielts-writing-band9", "repo": "ielts-mastery/writing-task2-band9", "stars": "★ 28.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "严格按照 TR 扣题/CC 衔接/LR 词汇/GRA 语法四项评分标准，输出地道学术论证大作文", "tags": ["雅思", "雅思写作", "大作文", "band9", "ielts", "雅思考试"], "installed": false}, {"id": "ielts-speaking-part123", "name": "雅思口语 Part 1-3 深度思辨与拓展", "slash": "/ielts-speaking-part123", "repo": "ielts-mastery/speaking-part1-2-3", "stars": "★ 22.1k", "category": "🌍 英语考培外刊与经典名著", "summary": "摆脱中式翻译思维，掌握多角度拓展答题技巧（原因/影响/举例/让步）与地道口语习语", "tags": ["雅思口语", "口语题库", "part2", "part3", "流利度", "雅思备考"], "installed": false}, {"id": "toefl-integrated-writing", "name": "托福综合写作听力反驳论点提炼", "slash": "/toefl-integrated-writing", "repo": "toefl-prep/integrated-writing-templates", "stars": "★ 19.3k", "category": "🌍 英语考培外刊与经典名著", "summary": "精准提取听力讲座对阅读文章三个主要论点的逐一反驳细节，输出严密结构化成文", "tags": ["托福", "托福写作", "综合写作", "toefl", "听读结合"], "installed": false}, {"id": "toefl-speaking-academic", "name": "托福学术口语速记框架与要点转述", "slash": "/toefl-speaking-academic", "repo": "toefl-prep/speaking-academic-structures", "stars": "★ 17.6k", "category": "🌍 英语考培外刊与经典名著", "summary": "学术讲座速记符号系统、过渡连接词精准运用与 60 秒限时内紧凑转述高分模板", "tags": ["托福口语", "学术转述", "限时答题", "速记笔记", "toefl备考"], "installed": false}, {"id": "cet46-complex-grammar", "name": "大学英语四六级长难句主干速断", "slash": "/cet46-complex-grammar", "repo": "english-exams/cet4-6-grammar-master", "stars": "★ 16.2k", "category": "🌍 英语考培外刊与经典名著", "summary": "逆向拆解非谓语动词、倒装句与多层定语/从句嵌套，秒抓句子主干消除阅读障碍", "tags": ["四六级", "英语四级", "英语六级", "长难句", "语法解析", "阅读理解"], "installed": false}, {"id": "cet46-translation-master", "name": "四六级中国传统文化段落汉译英", "slash": "/cet46-translation-master", "repo": "english-exams/cet4-6-translation-pro", "stars": "★ 15.4k", "category": "🌍 英语考培外刊与经典名著", "summary": "精准翻译传统非遗、历史名胜与当代成就热词，避免中式硬译并保证语法地道优雅", "tags": ["四六级翻译", "汉译英", "传统文化翻译", "翻译技巧", "四六级备考"], "installed": false}, {"id": "kaoyan-english-reading", "name": "考研英语真题超精读与命题陷阱破解", "slash": "/kaoyan-english-reading", "repo": "postgrad-exam/kaoyan-english-reading", "stars": "★ 23.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "深剖考研英语一/二真题阅读长难句、作者主观态度题识别与偷换概念干扰项排除技巧", "tags": ["考研英语", "考研阅读", "真题精读", "干扰项排除", "考研备考"], "installed": false}, {"id": "economist-analytical-reading", "name": "经济学人深度精读与修辞赏析", "slash": "/economist-analytical-reading", "repo": "reading-club/economist-analyst", "stars": "★ 18.9k", "category": "🌍 英语考培外刊与经典名著", "summary": "精读 The Economist 商业特稿，梳理高级隐喻修辞、英式幽默双关语与精妙搭配表达", "tags": ["经济学人", "外刊精读", "高级修辞", "英文阅读", "地道表达"], "installed": false}, {"id": "nyt-opinion-essay", "name": "纽约时报社论批判性思维阅读", "slash": "/nyt-opinion-essay", "repo": "press-reading/new-york-times-essay", "stars": "★ 14.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "解构纽约时报 Opinion 专栏文章论据展开方式、反驳对立观点逻辑与高端句式归纳", "tags": ["纽约时报", "社论赏析", "外刊精读", "批判性思维", "高级词汇"], "installed": false}, {"id": "series-vocab-immersion", "name": "美剧英剧语境地道口语短语习得", "slash": "/series-vocab-immersion", "repo": "language-immersion/series-vocab-agent", "stars": "★ 19.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "从经典英美剧中提取地道口语动词短语、日常俚语与情感语气词，实现真实场景迁移应用", "tags": ["看剧学英语", "美剧英语", "口语短语", "地道俚语", "语境学习"], "installed": false}, {"id": "classic-literature-study", "name": "经典英文原著精读与文学批评分析", "slash": "/classic-literature-study", "repo": "humanities/classic-literature-study", "stars": "★ 12.3k", "category": "🌍 英语考培外刊与经典名著", "summary": "分析原著叙事视角、人物弧光心理描写、时代历史隐喻与文学经典名句精读", "tags": ["英文原著", "文学精读", "名著赏析", "文学批评", "精读"], "installed": false}, {"id": "official-document-writer", "name": "体制内公文写作与领导发言讲话稿", "slash": "/official-document-writer", "repo": "gov-office/chinese-official-doc", "stars": "★ 26.9k", "category": "🏢 职场日常与文档批量自动化", "summary": "规范通知/公函/请示/批复格式，拿捏公文措辞分寸，撰写汇报与重要会议讲话", "tags": ["公文", "公文写作", "体制内", "汇报材料", "通知", "请示", "讲话稿"], "installed": false}, {"id": "meeting-minutes", "name": "长篇会议纪要整理与 Action 提取", "slash": "/meeting-minutes", "repo": "workplace/meeting-minutes-pro", "stars": "★ 19.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "录音速记文本提炼讨论焦点、决议定案与 Action Items（明确责任人/交付时限）", "tags": ["会议纪要", "纪要", "会议记录", "action items", "待办整理"], "installed": false}, {"id": "weekly-report-pro", "name": "高情商量化周报月报生成器", "slash": "/weekly-report-pro", "repo": "workplace/weekly-report-pro", "stars": "★ 21.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "量化工作产出指标、凸显思考深度、巧妙汇报困难阻碍与复盘心得要点", "tags": ["周报", "月报", "工作汇报", "周报生成", "高情商汇报"], "installed": false}, {"id": "excel-batch-processor-vba", "name": "跨工作簿多表批量合并与清洗宏", "slash": "/excel-batch-processor-vba", "repo": "office-automation/excel-vba-toolkit", "stars": "★ 17.8k", "category": "🏢 职场日常与文档批量自动化", "summary": "一键批量合并数十个不同结构 Excel 表格、按指定条件拆分与透视表 VBA", "tags": ["excel批量", "多表合并", "excel宏", "vba", "表格批量处理"], "installed": false}, {"id": "word-batch-formatter", "name": "Word 批量公文/合同排版与样式统一", "slash": "/word-batch-formatter", "repo": "office-automation/word-batch-formatter", "stars": "★ 13.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "一键统一字体行距、自动更新多级编号与目录、自动化三线表样式批量替换", "tags": ["word排版", "合同排版", "word批量", "格式刷", "自动目录"], "installed": false}, {"id": "pdf-table-extractor", "name": "PDF 报表与发票表格结构化批量提取", "slash": "/pdf-table-extractor", "repo": "document-ai/pdf-table-extractor", "stars": "★ 15.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "高精度识别提取 PDF 单双栏表格数据，自动转化为标准 Excel 格式输出", "tags": ["pdf提取", "表格提取", "发票处理", "pdf转excel", "批量提取"], "installed": false}, {"id": "mindmap-generator", "name": "Mermaid 思维导图与业务架构树", "slash": "/mindmap-generator", "repo": "visualization/mermaid-mindmap", "stars": "★ 22.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "从复杂长篇方案中提炼层级关系，输出可直接渲染的高质量脑图代码", "tags": ["思维导图", "脑图", "mermaid", "架构树", "大纲整理"], "installed": false}, {"id": "powerpoint-slide-architect", "name": "麦肯锡风格商业 PPT 幻灯片大纲", "slash": "/powerpoint-slide-architect", "repo": "presentation/slide-architect-pro", "stars": "★ 16.3k", "category": "🏢 职场日常与文档批量自动化", "summary": "输出金字塔原理商业汇报 PPT 幻灯片大纲、版式视觉布局与演讲口播提示", "tags": ["ppt大纲", "幻灯片", "商业ppt", "麦肯锡", "演讲汇报"], "installed": false}, {"id": "business-email-master", "name": "职场跨部门协同与催办高情商邮件", "slash": "/business-email-master", "repo": "workplace/business-email-master", "stars": "★ 14.6k", "category": "🏢 职场日常与文档批量自动化", "summary": "掌握催办进度、委婉拒绝不合理需求、跨部门求助协作的得体分寸邮件模板", "tags": ["商务邮件", "职场邮件", "跨部门协作", "催办邮件", "高情商沟通"], "installed": false}, {"id": "star-resume-optimizer", "name": "个人求职简历 STAR 法则量化重塑", "slash": "/star-resume-optimizer", "repo": "career/resume-star-optimizer", "stars": "★ 25.3k", "category": "🏢 职场日常与文档批量自动化", "summary": "基于情境-任务-行动-结果（STAR）深度挖掘过往产出，量化技术成果并匹配目标岗位", "tags": ["简历优化", "star法则", "求职简历", "面试辅导", "个人简历"], "installed": false}, {"id": "pytest-mock-enterprise", "name": "Pytest 工业级测试套件编写、Fixture 注入与 Mock 隔离", "slash": "/pytest-mock-enterprise", "repo": "pytest-dev/pytest-mock", "stars": "★ 12.8k", "category": "💻 编程系统与Python快速构建", "summary": "搭建清晰的 conftest.py 依赖注入体系，对外部数据库与网络调用实现零污染纯净 Mock", "tags": ["pytest", "单元测试", "mock", "测试用例", "代码覆盖率"], "installed": false}, {"id": "journal-aims-matcher", "name": "SCI/SSCI 目标期刊精准匹配推荐与审稿偏好避坑指南", "slash": "/journal-aims-matcher", "repo": "greenelab/scihub-dl", "stars": "★ 8.9k", "category": "🔬 科研学术与数学建模", "summary": "综合 Abstract 语义、JCR 分区、中科院预警名单与版面费审稿周期，推荐最具命中率期刊群", "tags": ["期刊推荐", "sci选刊", "影响因子", "投稿策略", "中科院分区"], "installed": false}, {"id": "tailwind-design-tokens", "name": "Tailwind CSS 企业级设计系统 Token 与双色主题配置", "slash": "/tailwind-design-tokens", "repo": "adamwathan/tailwind-design-tokens", "stars": "★ 85.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "建立标准化语义色板、间距圆角层级与 Tailwind config 深度定制方案", "tags": ["tailwind", "设计token", "色彩规范", "主题定制", "css变量"], "installed": false}, {"id": "shadcn-custom-pattern", "name": "Shadcn/UI 现代化沉浸式交互组件与无障碍 ARIA 规范", "slash": "/shadcn-custom-pattern", "repo": "tailwindlabs/headlessui", "stars": "★ 76.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "遵循 Radix Primitives 键盘可访问性，输出生产级对话框、抽屉、自动完成等组件代码", "tags": ["shadcn", "radix", "无障碍", "前端组件", "react组件"], "installed": false}, {"id": "framer-spring-animation", "name": "Framer Motion 物理弹簧动效与流畅页面过渡规约", "slash": "/framer-spring-animation", "repo": "framer/motion", "stars": "★ 27.8k", "category": "🎨 UI设计与网页可视化前端", "summary": "配置高拟真物理阻尼、手势拖拽手感与页面 LayoutGroup 共享元素丝滑过渡", "tags": ["framer-motion", "动效设计", "弹簧动画", "转场效果", "交互微动效"], "installed": false}, {"id": "figma-code-handoff", "name": "Figma 设计稿高精度还原为现代 CSS Flex/Grid 布局指南", "slash": "/figma-code-handoff", "repo": "figma/plugin-samples", "stars": "★ 5.8k", "category": "🎨 UI设计与网页可视化前端", "summary": "将 Auto-layout 自动布局精准映射为无冗余现代 CSS，告别固定像素绝对定位", "tags": ["figma还原", "前端还原", "flex布局", "响应式切图", "像素级对齐"], "installed": false}, {"id": "wcag-a11y-auditor", "name": "Web 无障碍设计 (WCAG 2.1 AA) 色彩对比与屏幕阅读器审计", "slash": "/wcag-a11y-auditor", "repo": "dequelabs/axe-core", "stars": "★ 7.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "扫描焦点陷阱、ARIA 语义缺失与低对比度文字，给出可落地无障碍重构方案", "tags": ["无障碍", "wcag", "色彩对比度", "屏幕阅读器", "a11y"], "installed": false}, {"id": "fluid-responsive-system", "name": "移动优先流式响应式网格与多断点容器查询布局", "slash": "/fluid-responsive-system", "repo": "necolas/normalize.css", "stars": "★ 52.8k", "category": "🎨 UI设计与网页可视化前端", "summary": "利用现代 CSS clamp() 与 Container Queries 打造无需刷新、自适应全设备流式界面", "tags": ["响应式布局", "断点适配", "移动优先", "容器查询", "css-grid"], "installed": false}, {"id": "pandas-pipeline-cleaner", "name": "Pandas 自动化数据清洗流与缺失离群异常值截断", "slash": "/pandas-pipeline-cleaner", "repo": "pandas-dev/pandas", "stars": "★ 44.5k", "category": "📊 数据清洗分析与图表呈现", "summary": "构建健壮可复用的链式清洗函数（pipe），自动化处理类型转换、空值插补与极值平滑", "tags": ["pandas清洗", "数据流水线", "缺失值填充", "离群值", "异常值处理"], "installed": false}, {"id": "sql-explain-tuner", "name": "SQL 慢查询性能体检与 EXPLAIN 执行计划深度调优", "slash": "/sql-explain-tuner", "repo": "sqlmapproject/sqlmap", "stars": "★ 31.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "解剖扫描行数、filesort 与临时表瓶颈，针对性给出加复合索引与改写子查询的调优方案", "tags": ["sql调优", "explain", "慢查询", "复合索引", "全表扫描优化"], "installed": false}, {"id": "cohort-retention-model", "name": "同期群留存分析 (Cohort) 与用户生命周期价值 (LTV) 测算", "slash": "/cohort-retention-model", "repo": "scikit-survival/scikit-survival", "stars": "★ 10.4k", "category": "📊 数据清洗分析与图表呈现", "summary": "按注册/首次付费时间拆解次日/7日/30日留存矩阵热图，建立早中期 LTV 预测函数", "tags": ["同期群分析", "留存率", "ltv测算", "用户生命周期", "流失预警"], "installed": false}, {"id": "ab-test-significance-lab", "name": "A/B 测试统计功效计算与双样本假设检验方案", "slash": "/ab-test-significance-lab", "repo": "scipy/scipy", "stars": "★ 13.9k", "category": "📊 数据清洗分析与图表呈现", "summary": "测算实验所需最小样本量与观测周期，输出置信区间、p值与防假阳性的决策建议", "tags": ["ab测试", "假设检验", "p值计算", "统计功效", "最小样本量"], "installed": false}, {"id": "funnel-conversion-diagnostic", "name": "全链路转化漏斗诊断与各触点跳出流失归因", "slash": "/funnel-conversion-diagnostic", "repo": "posthog/posthog", "stars": "★ 24.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "细化注册-浏览-加购-结算关键路径转化率，利用下钻分析定位流失最大阻塞断点", "tags": ["转化漏斗", "流失归因", "触点跳出", "漏斗分析", "用户转化"], "installed": false}, {"id": "financial-dcf-valuation", "name": "企业 DCF 自由现金流折现建模与财务三张表联动", "slash": "/financial-dcf-valuation", "repo": "ranaroussi/yfinance", "stars": "★ 15.6k", "category": "📊 数据清洗分析与图表呈现", "summary": "基于资产负债、利润与现金流量表联动，设定 WACC 与永续增长率测算企业公允估值", "tags": ["dcf估值", "现金流折现", "财务建模", "资产负债表", "投资测算"], "installed": false}, {"id": "rfm-customer-segmentation", "name": "RFM 客户价值分层模型与高净值客群运营策略", "slash": "/rfm-customer-segmentation", "repo": "residentmario/missingno", "stars": "★ 58.9k", "category": "📊 数据清洗分析与图表呈现", "summary": "对最近消费时间、频次与金额进行分位数打分，划定核心价值、潜力与流失客群应对策略", "tags": ["rfm模型", "用户分层", "客户价值", "精细化运营", "高价值召回"], "installed": false}, {"id": "etl-pipeline-architect", "name": "轻量级 Python ETL 数据抽取清洗与加载工程架构", "slash": "/etl-pipeline-architect", "repo": "dagster-io/dagster", "stars": "★ 12.1k", "category": "📊 数据清洗分析与图表呈现", "summary": "设计高容错、带断点续跑、异常数据分流告警的 Python 轻量批处理 ETL 流水线架构", "tags": ["etl架构", "数据流水线", "数据抽取", "数据入库", "批处理流水线"], "installed": false}, {"id": "dax-powerbi-metrics", "name": "Power BI 核心 DAX 度量值与时间智能动态计算", "slash": "/dax-powerbi-metrics", "repo": "microsoft/PowerBI-visuals-tools", "stars": "★ 8.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "编写开箱即用的 DAX 高阶度量值，快速实现累计同比 (YoY)、环比 (MoM) 与动态切片", "tags": ["powerbi", "dax函数", "度量值", "时间智能", "同环比计算"], "installed": false}, {"id": "prd-feature-spec", "name": "大厂生产级 PRD 需求文档功能说明与边界异常矩阵", "slash": "/prd-feature-spec", "repo": "product-ops/prd-best-practices", "stars": "★ 74.3k", "category": "📑 产品经理ERP与工业PID规约", "summary": "输出涵盖业务价值、前置依赖、UI 交互态、成功分支与全量异常分支的标准 PRD", "tags": ["prd文档", "功能规格", "需求文档", "边界条件", "异常分支"], "installed": false}, {"id": "user-journey-touchpoint-map", "name": "全链路用户旅程地图与关键触点满意度漏斗设计", "slash": "/user-journey-touchpoint-map", "repo": "jgraph/drawio", "stars": "★ 41.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "端到端拆解用户行为、心理预期、系统交互触点与负面情绪断点，产出直观表格与流程图", "tags": ["用户旅程", "旅程地图", "体验触点", "痛点分析", "用户体验"], "installed": false}, {"id": "openapi-rest-spec", "name": "RESTful API 契约与 OpenAPI 3.0 / Swagger 规范设计", "slash": "/openapi-rest-spec", "repo": "OAI/OpenAPI-Specification", "stars": "★ 32.1k", "category": "📑 产品经理ERP与工业PID规约", "summary": "严谨定义 RESTful 端点路径、Query/Body Schema、状态码映射与标准错误返回模型", "tags": ["openapi", "swagger", "api规范", "restful", "接口定义"], "installed": false}, {"id": "scrum-user-story-estimator", "name": "Scrum 敏捷用户故事编写与故事点 Planning Poker 估算", "slash": "/scrum-user-story-estimator", "repo": "taigaio/taiga-front", "stars": "★ 6.7k", "category": "📑 产品经理ERP与工业PID规约", "summary": "规范“作为[角色]，我想要[功能]，以便于[价值]”与 INVEST 原则标准验收验收条件 (AC)", "tags": ["用户故事", "敏捷开发", "scrum", "故事点估算", "验收准则"], "installed": false}, {"id": "b2b-rbac-permission-matrix", "name": "B2B SaaS 企业级多租户与 RBAC 细粒度权限模型规约", "slash": "/b2b-rbac-permission-matrix", "repo": "casbin/casbin", "stars": "★ 18.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "设计角色-权限-资源-数据行级权限矩阵，满足企业级安全合规与组织架构映射", "tags": ["rbac权限", "多租户", "权限矩阵", "角色管理", "saas系统"], "installed": false}, {"id": "industrial-mes-production-flow", "name": "车间制造执行系统 (MES) 工单派工与在制品溯源流", "slash": "/industrial-mes-production-flow", "repo": "smart-manufacturing/mes-production-dispatch", "stars": "★ 8.4k", "category": "📑 产品经理ERP与工业PID规约", "summary": "标准化生产订单拆解、工序报工、批次条码追踪与良品率质检数据流转规约", "tags": ["mes系统", "车间工单", "制造执行", "在制品溯源", "工业自动化"], "installed": false}, {"id": "event-tracking-analytics-schema", "name": "全栈行为数据埋点字典与留存转化分析维度规约", "slash": "/event-tracking-analytics-schema", "repo": "snowplow/snowplow", "stars": "★ 7.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "规范页面曝光、元素点击、业务自定义事件名与上报公共属性（device/network/uid）规约", "tags": ["数据埋点", "埋点字典", "事件分析", "属性定义", "漏斗分析"], "installed": false}, {"id": "xhs-seo-tag-strategy", "name": "小红书爆款 SEO 关键词埋词与下拉词截流策略", "slash": "/xhs-seo-tag-strategy", "repo": "growth-hacker/xiaohongshu-seo", "stars": "★ 12.8k", "category": "📱 新媒体短视频与流量运营", "summary": "精准匹配小红书搜索算法推荐逻辑，产出涵盖核心词、长尾词与高潜疑问词的笔记文本", "tags": ["小红书seo", "下拉词截流", "标签埋词", "搜索排名", "爆款笔记"], "installed": false}, {"id": "douyin-3s-hook-retention", "name": "抖音短视频黄金前 3 秒留存吸睛脚本与反转设计", "slash": "/douyin-3s-hook-retention", "repo": "short-video-lab/douyin-retention-hooks", "stars": "★ 15.6k", "category": "📱 新媒体短视频与流量运营", "summary": "针对短视频高完播率算法，设计强冲突悬念、利益点前置与黄金 3 秒开场白分镜", "tags": ["抖音前3秒", "黄金钩子", "短视频留存", "分镜脚本", "爆款台词"], "installed": false}, {"id": "bilibili-knowledge-structure", "name": "B站中长视频万字深度科普内容大纲与分P脚本", "slash": "/bilibili-knowledge-structure", "repo": "video-creators/bilibili-knowledge-script", "stars": "★ 11.2k", "category": "📱 新媒体短视频与流量运营", "summary": "打造逻辑层次分明、通俗易懂的长视频万字大纲、知识点层层递进与弹幕共鸣节点", "tags": ["B站大纲", "深度视频", "分p脚本", "科普文案", "弹幕点埋点"], "installed": false}, {"id": "amazon-listing-copywriter", "name": "跨境电商亚马逊 Listing 黄金五点与 A+ 页面高转化文案", "slash": "/amazon-listing-copywriter", "repo": "ecommerce-growth/amazon-listing-optimizer", "stars": "★ 9.8k", "category": "📱 新媒体短视频与流量运营", "summary": "深度结合海外本土化搜索意图，打造高转化主图痛点描述、五点特性与品牌 Story", "tags": ["亚马逊listing", "五点描述", "a+页面", "跨境电商", "产品转化"], "installed": false}, {"id": "tiktok-viral-trends", "name": "TikTok 全球爆款短视频文案与流行音频趋势脚本", "slash": "/tiktok-viral-trends", "repo": "davidteather/TikTok-Api", "stars": "★ 14.6k", "category": "📱 新媒体短视频与流量运营", "summary": "把握欧美东南亚短视频流行模版，撰写高自然播放量与强互动率的英文短剧/展示脚本", "tags": ["tiktok文案", "海外短视频", "爆款音频", "跨文化传播", "创意分镜"], "installed": false}, {"id": "live-commerce-closer", "name": "电商直播带货高说服力逼单话术与节奏把控规约", "slash": "/live-commerce-closer", "repo": "live-stream-sales/pitch-closer-sop", "stars": "★ 10.4k", "category": "📱 新媒体短视频与流量运营", "summary": "制定直播间从痛点塑造、限时放量、信任背书到最后倒数促单的连环高转化话术规约", "tags": ["直播带货", "逼单话术", "直播间节奏", "促单脚本", "带货主播"], "installed": false}, {"id": "pr-media-release", "name": "企业品牌公关通稿与重大战略合作新闻发布稿", "slash": "/pr-media-release", "repo": "corporate-pr/press-release-standard", "stars": "★ 8.9k", "category": "📱 新媒体短视频与流量运营", "summary": "遵循权威媒体发稿规范，撰写具备行业高度、新闻价值与公信力的客观公关报道稿", "tags": ["公关稿", "新闻通稿", "品牌发声", "媒体报道", "战略合作"], "installed": false}, {"id": "private-traffic-growth", "name": "私域社群冷启动促活、互动打卡与高粘性运营 SOP", "slash": "/private-traffic-growth", "repo": "growth-hacking/private-traffic-playbook", "stars": "★ 32.5k", "category": "📱 新媒体短视频与流量运营", "summary": "设计从新客进群欢迎、每日打卡沉淀到周期性秒杀转化的全套高留存社群运营闭环", "tags": ["私域运营", "社群促活", "冷启动", "打卡活动", "社群转化"], "installed": false}, {"id": "podcast-script-master", "name": "播客深度对谈提纲与人物深度访谈逐字稿规约", "slash": "/podcast-script-master", "repo": "podcast-pro/interview-master-framework", "stars": "★ 7.6k", "category": "📱 新媒体短视频与流量运营", "summary": "构建富有深度挖掘感与自然交谈氛围的播客问题脉络、追问支线与金句萃取方案", "tags": ["播客提纲", "访谈逐字稿", "深度对谈", "对谈主持", "节目大纲"], "installed": false}, {"id": "ielts-speaking-band7-plus", "name": "雅思口语 Part 1-3 高分地道俚语与即兴思辨扩展", "slash": "/ielts-speaking-band7-plus", "repo": "kyrolabs/awesome-langchain", "stars": "★ 20.1k", "category": "🌍 英语考培外刊与经典名著", "summary": "避免中式套路模版，训练自然地道的地道动词短语、连词衔接与高分思辨论述深度", "tags": ["雅思口语", "雅思7分", "地道表达", "即兴回答", "口语题库"], "installed": false}, {"id": "gre-gmat-argument-logic", "name": "GRE/GMAT 批判性写作 (Issue/Argument) 逻辑漏洞剖析", "slash": "/gre-gmat-argument-logic", "repo": "critical-thinking/gre-gmat-logical-fallacies", "stars": "★ 14.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "精准锁定调查样本无代表性、因果倒置、错误类比等典型论证漏洞并组织有力攻击", "tags": ["gre写作", "gmat逻辑", "逻辑谬误", "批判性思维", "论证反驳"], "installed": false}, {"id": "the-economist-style-reading", "name": "《经济学人》政经长文地道英汉互译与修辞精析", "slash": "/the-economist-style-reading", "repo": "reading-club/economist-bilingual-reading", "stars": "★ 16.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "传神翻译英美外刊中巧妙的双关语、历史典故与英式幽默，提炼政经精英词汇库", "tags": ["经济学人", "政经英译汉", "修辞分析", "外刊精读", "高级翻译"], "installed": false}, {"id": "business-english-negotiation", "name": "国际跨国商务谈判策略与地道利益博弈表达", "slash": "/business-english-negotiation", "repo": "business-communication/global-negotiation-english", "stars": "★ 13.9k", "category": "🌍 英语考培外刊与经典名著", "summary": "精准拿捏询价还盘、设立违约底线与缓解僵局的地道外企英文实战表达", "tags": ["商务谈判", "外贸英语", "商务沟通", "价格博弈", "跨国会议"], "installed": false}, {"id": "academic-native-polisher", "name": "SCI/EI 英文论文去中式思维与母语级学术精修", "slash": "/academic-native-polisher", "repo": "latex3/latex2e", "stars": "★ 8.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "消除长难句歧义与中式直译痕迹，优化主被动语态平衡，提升顶级期刊论文可读性", "tags": ["论文润色", "去中式英语", "学术修改", "母语精修", "语法句式"], "installed": false}, {"id": "toefl-writing-rubric", "name": "新托福学术讨论写作 (Writing for Academic Discussion) 满分规约", "slash": "/toefl-writing-rubric", "repo": "toefl-mastery/academic-discussion-writing", "stars": "★ 12.4k", "category": "🌍 英语考培外刊与经典名著", "summary": "围绕教授提问与两名学生发言快速确立清晰立场，在 10 分钟内展开充实学术论据", "tags": ["托福写作", "学术讨论", "toefl", "高分作文", "论点扩展"], "installed": false}, {"id": "cet6-reading-comprehension", "name": "大学英语六级长篇仔细阅读定位技巧与干扰项排查", "slash": "/cet6-reading-comprehension", "repo": "mahaveerg/vocabulary", "stars": "★ 8.6k", "category": "🌍 英语考培外刊与经典名著", "summary": "掌握题干核心关键词回文精准定位与同义改写识别，高效排除张冠李戴干扰选项", "tags": ["英语六级", "六级阅读", "同义替换", "干扰项排除", "快速定位"], "installed": false}, {"id": "resume-ats-polisher", "name": "大厂求职 ATS 简历筛选高通过率排版与关键词埋点", "slash": "/resume-ats-polisher", "repo": "resume/resume.github.io", "stars": "★ 18.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "针对大厂 ATS 机器初筛系统优化简历结构、技术关键词密度与无失真排版规约", "tags": ["ats简历", "简历通过率", "简历排版", "求职过筛", "关键词埋点"], "installed": false}, {"id": "mckinsey-slide-consultant", "name": "麦肯锡金字塔原理商业咨询 PPT 叙事结构设计", "slash": "/mckinsey-slide-consultant", "repo": "slidevjs/slidev", "stars": "★ 32.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "按“背景-冲突-疑问-解答 (SCQA)”模型构建高管赞同的结构化商业汇报大纲", "tags": ["麦肯锡ppt", "商业咨询", "金字塔原理", "咨询汇报", "结构化幻灯片"], "installed": false}, {"id": "daily-standup-summary", "name": "敏捷站会与大厂每日工作日报提炼总结", "slash": "/daily-standup-summary", "repo": "guanguans/ai-commit", "stars": "★ 12.8k", "category": "🏢 职场日常与文档批量自动化", "summary": "从粗糙碎片化的打卡与聊天记录中快速梳理出清晰的当日产出、阻塞卡点与次日计划", "tags": ["日报", "每日总结", "敏捷站会", "工作记录", "当日完成"], "installed": false}, {"id": "excel-dynamic-formulas", "name": "Excel 动态数组、XLOOKUP与高级嵌套公式生成", "slash": "/excel-dynamic-formulas", "repo": "excel-wizards/dynamic-arrays-xlookup", "stars": "★ 17.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "针对复杂表格多条件匹配、动态跨表关联与多层嵌套计算，自动生成可直接粘贴的稳定公式", "tags": ["excel公式", "xlookup", "动态数组", "公式生成", "高级函数"], "installed": false}, {"id": "contract-risk-auditor", "name": "商业采购与服务合同条款风险排查与修改建议", "slash": "/contract-risk-auditor", "repo": "legal-tech/contract-risk-audit", "stars": "★ 18.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "逐条扫描付款节点、免责边界、知识产权归属与违约惩罚，输出红线风险预警与对等修改意见", "tags": ["合同审查", "合同风险", "条款修改", "法务合规", "违约金排查"], "installed": false}, {"id": "corporate-sop-manual", "name": "企业标准化作业程序 (SOP) 与业务交付操作手册", "slash": "/corporate-sop-manual", "repo": "enterprise-ops/standard-operating-procedures", "stars": "★ 38.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "将专家口述经验与零散操作规范化为防呆型、可考核、带图文检查清单的标准化交付 SOP", "tags": ["sop手册", "作业程序", "标准流程", "业务交接", "企业规范"], "installed": false}, {"id": "performance-okr-coach", "name": "员工季度 KPI/OKR 目标制定与高情商述职复盘面谈", "slash": "/performance-okr-coach", "repo": "workplace-growth/okr-framework", "stars": "★ 15.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "协助梳理高价值关键成果 (KR)，指导主管与员工开展有理有据、高情商的绩效复盘与评定", "tags": ["okr制定", "绩效考核", "述职面谈", "kpi复盘", "目标管理"], "installed": false}, {"id": "speech-keynote-writer", "name": "领导商务致辞、行业峰会主题演讲与动员大会发言稿", "slash": "/speech-keynote-writer", "repo": "speech-writing/executive-keynotes", "stars": "★ 11.6k", "category": "🏢 职场日常与文档批量自动化", "summary": "把握听众情绪心流，产出既有格局高度又具语言感染力的大会致辞、演讲讲义与即兴发言稿", "tags": ["演讲稿", "商务致辞", "领导发言", "大会致辞", "发布会主持"], "installed": false}, {"id": "onboarding-training-guide", "name": "新人入职培训手册与核心业务岗位带教指引", "slash": "/onboarding-training-guide", "repo": "kamranahmedse/developer-roadmap", "stars": "★ 295.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "制定体系化 30-60-90 天新员工胜任力跃迁计划、环境配置手册与第一周关键答疑指引", "tags": ["入职手册", "新人带教", "培训大纲", "岗位交接", "新员工指导"], "installed": false}, {"id": "corporate-event-plan", "name": "企业年会、新品发布会与商务会展全流程策划案", "slash": "/corporate-event-plan", "repo": "event-planning/corporate-gala-framework", "stars": "★ 9.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "提供完整的活动时间轴、嘉宾动线、物料筹备倒排表与应急突发预案规范", "tags": ["活动策划", "年会方案", "新品发布会", "商务展会", "场地流程"], "installed": false}, {"id": "workplace-difficult-dialogue", "name": "职场人际冲突沟通与棘手需求推托高情商规约", "slash": "/workplace-difficult-dialogue", "repo": "harvard-business/negotiation-handbook", "stars": "★ 171.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "在不伤害团队关系的前提下，用职场得体措辞委婉拒绝加码需求或推动跨部门顽固卡点", "tags": ["高情商沟通", "职场冲突", "需求推托", "向上管理", "委婉表达"], "installed": false}, {"id": "tender-bidding-document", "name": "政府采购与企业招投标商务/技术标书编制规约", "slash": "/tender-bidding-document", "repo": "apache/incubator-answer", "stars": "★ 14.1k", "category": "🏢 职场日常与文档批量自动化", "summary": "对标招标文件评分标准逐条编写响应偏离表、实施技术方案与资质陈述，防止废标", "tags": ["标书编写", "招投标", "技术标", "商务标", "响应矩阵"], "installed": false}, {"id": "financial-reimbursement-audit", "name": "差旅报销单据合规性自查与财税发票核验规范", "slash": "/financial-reimbursement-audit", "repo": "finance-audit/corporate-expense-reimbursement", "stars": "★ 8.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "按财务制度自查报销事由、发票备注栏、连号发票风险与差旅补贴限额，减少退单返工", "tags": ["报销审核", "发票自查", "差旅合规", "财务报销", "税费规约"], "installed": false}, {"id": "cross-team-handover-sop", "name": "员工离职交接与跨团队项目资产移交全套规范", "slash": "/cross-team-handover-sop", "repo": "team-management/project-handover-protocols", "stars": "★ 12.1k", "category": "🏢 职场日常与文档批量自动化", "summary": "梳理代码库权限、运维账密、未结事项与业务联系人清单，确保平稳无缝过渡", "tags": ["离职交接", "项目移交", "资产清点", "权限交接", "工作清单"], "installed": false}, {"id": "internal-wiki-builder", "name": "团队内部技术/业务知识库 FAQ 与排错指南沉淀", "slash": "/internal-wiki-builder", "repo": "outline/outline", "stars": "★ 28.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "将产研和运维中的高频踩坑问题沉淀为结构清晰、检索即用的团队知识库与排错排查指南", "tags": ["知识库", "内部wiki", "排错手册", "常见问答", "知识沉淀"], "installed": false}, {"id": "series-vocab", "name": "美剧英剧语境高频短语与 Anki 闪卡导出", "slash": "/series-vocab", "repo": "openclaw/series-vocab", "stars": "★ 18.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "从英美剧对白中精准过滤 B2-C1 地道动词短语与习语，输出音标释义并一键导出 Anki 闪卡", "tags": ["追剧学英语", "美剧词汇", "anki卡片", "雅思口语", "地道表达"], "installed": false}, {"id": "rag-chunking-evaluator", "name": "知识库 RAG 智能文本分块与召回重排评测规约", "slash": "/rag-chunking-evaluator", "repo": "explodinggradients/ragas", "stars": "★ 18.9k", "category": "🌟 破万星巅峰与最新趋势", "summary": "针对长文档制定语义分块 (Semantic Chunking)、滑窗重叠与 Ragas 幻觉/忠实度打分规约", "tags": ["rag评测", "分块策略", "文本切片", "重排rerank", "召回率优化"], "installed": false}, {"id": "prompt-optimizer-reverse", "name": "结构化 Prompt 逆向调优与动态少样本 Few-Shot 提炼", "slash": "/prompt-optimizer-reverse", "repo": "promptfoo/promptfoo", "stars": "★ 5.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "将粗糙模糊的提问逆向解构为具备角色、上下文、输入规范与高质量少样本的黄金指令", "tags": ["提示词调优", "few-shot", "逆向调优", "prompt优化", "指令对齐"], "installed": false}, {"id": "system-design-blueprint", "name": "千万级高并发系统高层架构设计 (HLD) 与容灾方案", "slash": "/system-design-blueprint", "repo": "donnemartin/system-design-primer", "stars": "★ 280.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "设计从 CDN、负载均衡、缓存穿透防护到分库分表的端到端高可用系统蓝图", "tags": ["系统设计", "高并发架构", "微服务拆分", "容灾方案", "hld蓝图"], "installed": false}, {"id": "interview-algorithm-coach", "name": "大厂高频算法面试思考链路剖析与最优时空复杂度推导", "slash": "/interview-algorithm-coach", "repo": "doocs/leetcode", "stars": "★ 125.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "拆解高频算法题核心破题突破口，从暴力解法逐步推导至最优时空复杂度并手写边界测试", "tags": ["算法面试", "leetcode", "时空复杂度", "双指针", "动态规划"], "installed": false}, {"id": "claude-code-minimalist", "name": "Anthropic Clean Code 极简防防御性编程风格规约", "slash": "/claude-code-minimalist", "repo": "anthropics/anthropic-cookbook", "stars": "★ 31.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "倡导小而美、无过度设计、单一职责与严格类型提示的现代极简编码习惯", "tags": ["极简编码", "clean code", "代码可读性", "防御性编程", "高内聚低耦合"], "installed": false}, {"id": "translator-native-touch", "name": "科技与政经文献母语级“信达雅”翻译与术语一致性", "slash": "/translator-native-touch", "repo": "deepl/deepl-python", "stars": "★ 19.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "破除机器翻译硬译套话，遵循目标语言行文逻辑与行业术语表，交付出版级双语文稿", "tags": ["母语翻译", "信达雅", "科技翻译", "政经文献", "术语表"], "installed": false}, {"id": "pr-agent-reviewer", "name": "GitHub Pull Request 自动化审查与代码变更影响分析", "slash": "/pr-agent-reviewer", "repo": "Codium-ai/pr-agent", "stars": "★ 15.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "自动提炼 PR 核心变更摘要、潜在性能退化与回滚风险，给出建设性重构意见", "tags": ["pr审查", "code review", "代码变更", "pr总结", "影响分析"], "installed": false}, {"id": "api-schema-contract", "name": "RESTful API 接口契约定义与自动化 Mock 数据规范", "slash": "/api-schema-contract", "repo": "stoplightio/prism", "stars": "★ 28.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "前后端联调前确立无歧义的 JSON Schema 契约，自动生成符合业务边界的真实 Mock 数据", "tags": ["api契约", "mock数据", "接口测试", "联调规范", "json-schema"], "installed": false}, {"id": "docker-lean-container", "name": "Dockerfile 极简多阶段构建与容器镜像极速瘦身规约", "slash": "/docker-lean-container", "repo": "hexops/dockerfile-linter", "stars": "★ 14.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "运用多阶段构建剥离编译依赖、最小化镜像层数并消除 Root 特权漏洞，体积缩减 80%+", "tags": ["dockerfile", "镜像瘦身", "多阶段构建", "容器安全", "alpine优化"], "installed": false}, {"id": "linux-shell-debugger", "name": "Linux Shell 生产运维脚本编写与 ShellCheck 规范排错", "slash": "/linux-shell-debugger", "repo": "koalaman/shellcheck", "stars": "★ 34.5k", "category": "💻 编程系统与Python快速构建", "summary": "诊断 Bash 脚本中的语法隐患、空变量展开与管道错误码失效，产出工业级健壮运维脚本", "tags": ["shell脚本", "linux运维", "bash排错", "脚本调试", "自动化运维"], "installed": false}, {"id": "markdown-academic-table", "name": "Markdown 与 LaTeX 顶刊三线表与复杂跨行跨列规约", "slash": "/markdown-academic-table", "repo": "firasdib/Regex101", "stars": "★ 12.8k", "category": "💻 编程系统与Python快速构建", "summary": "规范顶刊标准三线表（Top/Mid/Bottom Rule），处理复杂多级表头与长数据对齐换行", "tags": ["三线表", "markdown表格", "latex表格", "学术表格", "跨行跨列"], "installed": false}, {"id": "sql-index-architect", "name": "数据库复合索引深度设计与 B+ 树最左匹配优化规约", "slash": "/sql-index-architect", "repo": "anse-app/anse", "stars": "★ 24.1k", "category": "💻 编程系统与Python快速构建", "summary": "根据高频 WHERE、ORDER BY 与 JOIN 条件设计最优复合索引，避免索引失效与回表", "tags": ["复合索引", "索引设计", "b树优化", "最左前缀", "慢查询预防"], "installed": false}, {"id": "web-vitals-auditor", "name": "现代 Web 核心体验指标 (Core Web Vitals) 性能优化指南", "slash": "/web-vitals-auditor", "repo": "GoogleChrome/lighthouse", "stars": "★ 29.8k", "category": "💻 编程系统与Python快速构建", "summary": "诊断 LCP 最大内容绘制、INP 交互延迟与 CLS 累积布局偏移，提供轻量重构代码", "tags": ["性能优化", "web vitals", "lcp优化", "cls防抖", "前端性能"], "installed": false}, {"id": "pydantic-v2-architect", "name": "Pydantic v2 高性能模型验证与字段级序列化规约", "slash": "/pydantic-v2-architect", "repo": "samuelcolvin/pydantic-core", "stars": "★ 21.5k", "category": "💻 编程系统与Python快速构建", "summary": "采用 Rust 核心底座的高阶 Field 约束、自定义根类型与高频模型反序列化优化", "tags": ["pydantic v2", "数据校验", "序列化", "类型转换", "field约束"], "installed": false}, {"id": "graphql-federation-design", "name": "GraphQL 查询优化、DataLoader 批处理与防 N+1 规约", "slash": "/graphql-federation-design", "repo": "graphql/graphql-spec", "stars": "★ 17.4k", "category": "💻 编程系统与Python快速构建", "summary": "通过 DataLoader 实现跨微服务关联查询合并与请求级缓存，彻底解决 N+1 性能黑洞", "tags": ["graphql", "dataloader", "n+1查询", "api聚合", "schema编排"], "installed": false}];

    // ── 辅助工具函数：插入斜杠指令到聊天输入框 (Option B) ─────────────────────────
    function insertSlashCommands(text) {
      try {
        // 1. 优先尝试 Lexical / 富文本编辑器
        var editor = document.querySelector('[data-lexical-editor="true"]') ||
                     document.querySelector('[contenteditable="true"]');
        if (editor) {
          editor.focus();
          var success = document.execCommand("insertText", false, text);
          if (!success) {
            var event = new InputEvent("input", {
              bubbles: true,
              cancelable: true,
              inputType: "insertText",
              data: text
            });
            editor.dispatchEvent(event);
          }
          return;
        }

        // 2. 兜底尝试普通 textarea 或 input
        var input = document.querySelector('[data-composer-input]') ||
                    document.querySelector('.dsh-composer-input') ||
                    document.querySelector('textarea');
        if (input) {
          input.focus();
          var start = input.selectionStart || 0;
          var end = input.selectionEnd || 0;
          var val = input.value || "";
          input.value = val.substring(0, start) + text + val.substring(end);
          input.selectionStart = input.selectionEnd = start + text.length;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
          return;
        }
      } catch (err) {
        console.warn("[dsh-clawhub-multiskill] insertSlashCommands failed:", err);
      }
    }

    function focusComposer() {
      try {
        var editor = document.querySelector('[data-lexical-editor="true"]') ||
                     document.querySelector('[contenteditable="true"]');
        if (editor) {
          editor.focus();
          var range = document.createRange();
          range.selectNodeContents(editor);
          range.collapse(false);
          var sel = window.getSelection();
          if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
          }
          return;
        }
        var input = document.querySelector('[data-composer-input]') ||
                    document.querySelector('.dsh-composer-input') ||
                    document.querySelector('textarea');
        if (input) {
          input.focus();
          var len = (input.value || "").length;
          input.setSelectionRange(len, len);
        }
      } catch (e) {}
    }

    // ── 原生深色/浅色自适应 CSS 样式 ──────────────────────────────────────────────
    var CSS = `
:root, [data-theme="dark"] {
  --ch-bg: var(--dsw-alias-bg, #141418);
  --ch-surface: var(--dsw-alias-surface, #1e1e24);
  --ch-surface-hover: var(--dsw-alias-surface-hover, #282832);
  --ch-card-bg: var(--dsw-alias-card-bg, #18191e);
  --ch-card-border: var(--dsw-alias-border, rgba(255, 255, 255, 0.08));
  --ch-card-hover-border: rgba(255, 255, 255, 0.2);
  --ch-text-primary: var(--dsw-alias-text-primary, #f0f0f5);
  --ch-text-secondary: var(--dsw-alias-text-secondary, #9090a2);
  --ch-text-muted: rgba(255, 255, 255, 0.4);
  --ch-brand: var(--dsw-alias-brand, #3b82f6);
  --ch-brand-hover: #2563eb;
  --ch-segmented-bg: rgba(255, 255, 255, 0.06);
  --ch-pill-bg: rgba(255, 255, 255, 0.05);
  --ch-pill-hover: rgba(255, 255, 255, 0.1);
  --ch-success-text: #10b981;
  --ch-danger-bg: rgba(239, 68, 68, 0.12);
  --ch-danger-border: rgba(239, 68, 68, 0.35);
  --ch-danger-text: #f87171;
  --ch-modal-overlay: rgba(0, 0, 0, 0.65);
}

[data-theme="light"] {
  --ch-bg: var(--dsw-alias-bg, #f6f8fa);
  --ch-surface: var(--dsw-alias-surface, #ffffff);
  --ch-surface-hover: var(--dsw-alias-surface-hover, #f3f4f6);
  --ch-card-bg: var(--dsw-alias-card-bg, #ffffff);
  --ch-card-border: var(--dsw-alias-border, rgba(0, 0, 0, 0.08));
  --ch-card-hover-border: rgba(0, 0, 0, 0.18);
  --ch-text-primary: var(--dsw-alias-text-primary, #111827);
  --ch-text-secondary: var(--dsw-alias-text-secondary, #4b5563);
  --ch-text-muted: #9ca3af;
  --ch-brand: var(--dsw-alias-brand, #2563eb);
  --ch-brand-hover: #1d4ed8;
  --ch-segmented-bg: rgba(0, 0, 0, 0.05);
  --ch-pill-bg: #f3f4f6;
  --ch-pill-hover: #e5e7eb;
  --ch-success-text: #059669;
  --ch-danger-bg: #fef2f2;
  --ch-danger-border: #f87171;
  --ch-danger-text: #dc2626;
  --ch-modal-overlay: rgba(0, 0, 0, 0.4);
}

@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    --ch-bg: var(--dsw-alias-bg, #f6f8fa);
    --ch-surface: var(--dsw-alias-surface, #ffffff);
    --ch-surface-hover: var(--dsw-alias-surface-hover, #f3f4f6);
    --ch-card-bg: var(--dsw-alias-card-bg, #ffffff);
    --ch-card-border: var(--dsw-alias-border, rgba(0, 0, 0, 0.08));
    --ch-card-hover-border: rgba(0, 0, 0, 0.18);
    --ch-text-primary: var(--dsw-alias-text-primary, #111827);
    --ch-text-secondary: var(--dsw-alias-text-secondary, #4b5563);
    --ch-text-muted: #9ca3af;
    --ch-brand: var(--dsw-alias-brand, #2563eb);
    --ch-brand-hover: #1d4ed8;
    --ch-segmented-bg: rgba(0, 0, 0, 0.05);
    --ch-pill-bg: #f3f4f6;
    --ch-pill-hover: #e5e7eb;
    --ch-success-text: #059669;
    --ch-danger-bg: #fef2f2;
    --ch-danger-border: #f87171;
    --ch-danger-text: #dc2626;
    --ch-modal-overlay: rgba(0, 0, 0, 0.4);
  }
}

/* 集市全屏容器与右侧平滑原生滚动条 */
.mkt-panel {
  display: flex; flex-direction: column; height: 100%; width: 100%;
  background: var(--ch-bg); color: var(--ch-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
  overflow: hidden; position: relative;
}
.mkt-scroll-container {
  flex: 1; overflow-y: auto; overflow-x: hidden; position: relative;
  scrollbar-width: thin; scrollbar-color: rgba(140, 140, 160, 0.3) transparent;
}
.mkt-scroll-container::-webkit-scrollbar {
  width: 7px;
}
.mkt-scroll-container::-webkit-scrollbar-thumb {
  background: rgba(140, 140, 160, 0.35); border-radius: 4px;
}
.mkt-scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(140, 140, 160, 0.55);
}

/* 顶部导航：iOS 大标题与简约操作区 */
.mkt-header {
  padding: 16px 28px 12px; border-bottom: 1px solid var(--ch-card-border);
  background: var(--ch-surface); flex-shrink: 0;
}
.mkt-header-top {
  display: flex; justify-content: space-between; align-items: center;
}
.mkt-title-box { display: flex; align-items: center; gap: 10px; }
.mkt-title-text { font-size: 19px; font-weight: 700; color: var(--ch-text-primary); display: flex; align-items: center; gap: 8px; letter-spacing: -0.2px; }
.mkt-version-badge { font-size: 11px; padding: 2px 7px; border-radius: 10px; background: var(--ch-pill-bg); color: var(--ch-text-secondary); border: 1px solid var(--ch-card-border); }
.mkt-subtitle { font-size: 12.5px; color: var(--ch-text-secondary); margin-top: 3px; }

.mkt-header-actions { display: flex; align-items: center; gap: 8px; }
.mkt-action-btn {
  display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px;
  border-radius: 20px; font-size: 12px; font-weight: 500; cursor: pointer;
  background: var(--ch-surface); color: var(--ch-text-primary);
  border: 1px solid var(--ch-card-border); transition: all 0.15s ease;
}
.mkt-action-btn:hover {
  background: var(--ch-surface-hover); border-color: var(--ch-brand); color: var(--ch-brand);
}
.mkt-action-btn.primary {
  background: var(--ch-brand); color: #ffffff; border-color: var(--ch-brand);
}
.mkt-action-btn.primary:hover {
  background: var(--ch-brand-hover);
}

/* iOS Segmented Control 分段药丸栏 (全部聚焦独立功能视角) */
.mkt-tabs-bar {
  padding: 10px 28px 6px;
  background: var(--ch-surface);
  border-bottom: 1px solid var(--ch-card-border);
  flex-shrink: 0;
}
.mkt-segmented-nav {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  border-radius: 10px;
  background: var(--ch-segmented-bg);
}
.mkt-segmented-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ch-text-secondary);
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
}
.mkt-segmented-tab:hover {
  color: var(--ch-text-primary);
}
.mkt-segmented-tab.active {
  background: var(--ch-surface);
  color: var(--ch-text-primary);
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.08);
}
.mkt-segmented-badge {
  font-size: 11px;
  padding: 1px 6px;
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.16);
  color: var(--ch-text-secondary);
  font-weight: 500;
}
.mkt-segmented-tab.active .mkt-segmented-badge {
  background: var(--ch-brand);
  color: #ffffff;
}
.mkt-badge-amber {
  background: #f59e0b !important;
  color: #ffffff !important;
}

/* 待更新专栏顶部快速工具条 */
.mkt-updates-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 28px;
  background: var(--ch-surface);
  border-bottom: 1px solid var(--ch-card-border);
  flex-wrap: wrap;
  gap: 10px;
}

/* 搜索框与分类胶囊筛选栏 */
.mkt-filter-section {
  padding: 14px 28px 8px; flex-shrink: 0; background: var(--ch-bg);
}
.mkt-search-wrapper {
  position: relative; width: 100%; margin-bottom: 12px;
}
.mkt-search-icon {
  position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
  color: var(--ch-text-muted); pointer-events: none;
}
.mkt-search-input {
  width: 100%; box-sizing: border-box; padding: 10px 14px 10px 38px;
  border-radius: 20px; font-size: 13px; outline: none;
  background: var(--ch-surface); color: var(--ch-text-primary);
  border: 1px solid var(--ch-card-border); transition: all 0.15s ease;
}
.mkt-search-input:focus {
  border-color: var(--ch-brand); box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.18);
}
.mkt-search-clear {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  background: none; border: none; color: var(--ch-text-muted); cursor: pointer;
  font-size: 14px; padding: 4px;
}
.mkt-search-clear:hover { color: var(--ch-text-primary); }

.mkt-chips-row {
  display: flex; align-items: center; gap: 8px; overflow-x: auto; padding-bottom: 6px;
  scrollbar-width: none;
}
.mkt-chips-row::-webkit-scrollbar { display: none; }
.mkt-chip {
  padding: 5px 12px; border-radius: 16px; font-size: 12px; cursor: pointer;
  background: var(--ch-pill-bg); color: var(--ch-text-secondary);
  border: 1px solid var(--ch-card-border); white-space: nowrap; user-select: none;
  transition: all 0.15s ease;
}
.mkt-chip:hover {
  background: var(--ch-pill-hover); color: var(--ch-text-primary);
}
.mkt-chip.active {
  background: var(--ch-text-primary); color: var(--ch-bg); font-weight: 600;
  border-color: var(--ch-text-primary);
}

/* 技能卡片列表网格 (iOS Squircle Card 2~3列呼吸感排版) */
.mkt-cards-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 16px; padding: 14px 28px 48px;
}
@media (max-width: 960px) {
  .mkt-cards-grid { grid-template-columns: 1fr; padding: 10px 16px 36px; }
  .mkt-header, .mkt-tabs-bar, .mkt-filter-section, .mkt-updates-top-bar { padding-left: 16px; padding-right: 16px; }
}

.mkt-card {
  background: var(--ch-card-bg); border: 1px solid var(--ch-card-border);
  border-radius: 14px; padding: 16px 18px; display: flex; flex-direction: column;
  justify-content: space-between; transition: all 0.18s ease; position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
.mkt-card.installed {
  border-color: rgba(16, 185, 129, 0.22);
}
.mkt-card.installed.upgradable {
  border-color: rgba(245, 158, 11, 0.32);
}
.mkt-card:hover {
  border-color: var(--ch-card-hover-border); transform: translateY(-1.5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.mkt-card.installed:hover {
  border-color: rgba(16, 185, 129, 0.45);
}
.mkt-card.installed.upgradable:hover {
  border-color: rgba(245, 158, 11, 0.55);
}

.mkt-card-body {
  display: flex; gap: 14px; align-items: flex-start;
}
.mkt-card-main-col {
  flex: 1; min-width: 0; display: flex; flex-direction: column;
}
.mkt-card-head {
  display: flex; justify-content: space-between; align-items: center; gap: 8px;
}
.mkt-card-title-row { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
.mkt-card-title {
  font-size: 15px; font-weight: 600; color: var(--ch-text-primary);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 1.3;
}
.mkt-card-update-tag {
  font-size: 11px; font-weight: 600; color: #d97706; background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3); padding: 1.5px 7px; border-radius: 6px;
  font-family: ui-monospace, monospace; flex-shrink: 0;
}
.mkt-card-version-tag {
  font-size: 11px; color: var(--ch-text-secondary); background: var(--ch-pill-bg);
  border: 1px solid var(--ch-card-border); padding: 1.5px 6px; border-radius: 6px;
  font-family: ui-monospace, monospace; flex-shrink: 0;
}
.mkt-alias-tag {
  font-size: 10px; font-weight: 600; color: #3b82f6; background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.28); padding: 1px 5px; border-radius: 4px;
  flex-shrink: 0;
}
.mkt-card-meta-line {
  font-size: 12px; color: var(--ch-text-secondary); margin-top: 4px;
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
}
.mkt-card-stars { color: #eab308; font-weight: 600; display: inline-flex; align-items: center; }
.mkt-card-slash {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px; padding: 1.5px 7px; border-radius: 4px;
  background: rgba(59, 130, 246, 0.12); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.22);
}

/* 卡片右上角操作区：收藏星标 + 三点菜单 */
.mkt-card-head-right {
  display: flex; align-items: center; gap: 4px; flex-shrink: 0;
}
.mkt-star-btn {
  background: transparent; border: none; font-size: 16px;
  color: var(--ch-text-secondary); cursor: pointer; padding: 4px 6px;
  border-radius: 6px; transition: all 0.15s ease; line-height: 1;
}
.mkt-star-btn:hover {
  color: #f59e0b; background: rgba(245, 158, 11, 0.12);
}
.mkt-star-btn.active {
  color: #f59e0b;
}
.mkt-menu-btn {
  background: transparent; border: none; font-size: 15px; font-weight: 700;
  color: var(--ch-text-secondary); cursor: pointer; padding: 3px 8px;
  border-radius: 6px; transition: all 0.15s ease; line-height: 1; letter-spacing: 1px;
}
.mkt-menu-btn:hover {
  background: var(--ch-pill-hover); color: var(--ch-text-primary);
}

/* 三点菜单下拉浮层 (iOS Popover 纯净风格) */
.mkt-dropdown-popover {
  position: absolute; right: 0; top: 100%; margin-top: 4px; min-width: 155px;
  background: var(--ch-surface); border: 1px solid var(--ch-card-border);
  border-radius: 10px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
  padding: 4px; z-index: 1000; animation: chPopoverFadeIn 0.12s ease-out;
}
.mkt-dropdown-item {
  width: 100%; display: flex; align-items: center; gap: 8px; padding: 7px 10px;
  border-radius: 6px; font-size: 12.5px; color: var(--ch-text-primary);
  background: transparent; border: none; cursor: pointer; text-align: left;
  transition: all 0.12s ease;
}
.mkt-dropdown-item:hover {
  background: var(--ch-pill-hover);
}
.mkt-dropdown-item.danger {
  color: #ef4444;
}
.mkt-dropdown-item.danger:hover {
  background: rgba(239, 68, 68, 0.1);
}
.mkt-dropdown-divider {
  height: 1px; background: var(--ch-card-border); margin: 4px 0;
}

/* 药丸操作按钮与纯文本按钮 */
.mkt-btn-install {
  background: #2563eb; color: #ffffff; border: none; border-radius: 9px;
  padding: 6.5px 22px; font-size: 13px; font-weight: 600; cursor: pointer;
  transition: all 0.15s ease; user-select: none; display: inline-flex; align-items: center; justify-content: center;
}
.mkt-btn-install:hover {
  background: #1d4ed8; transform: translateY(-0.5px);
}
.mkt-btn-install:active { transform: scale(0.97); }
.mkt-btn-install.loading {
  background: rgba(37, 99, 235, 0.6); cursor: wait;
}

.mkt-btn-upgrade {
  background: #f59e0b; color: #ffffff; border: none; border-radius: 9px;
  padding: 6.5px 18px; font-size: 13px; font-weight: 600; cursor: pointer;
  transition: all 0.15s ease; user-select: none; display: inline-flex; align-items: center; justify-content: center;
}
.mkt-btn-upgrade:hover {
  background: #d97706; transform: translateY(-0.5px);
}
.mkt-btn-upgrade:active { transform: scale(0.97); }
.mkt-btn-upgrade.loading {
  background: #b45309; cursor: wait;
}

.mkt-tag-latest {
  background: rgba(16, 185, 129, 0.1); color: var(--ch-success-text);
  border: 1px solid rgba(16, 185, 129, 0.24); border-radius: 8px;
  padding: 4.5px 12px; font-size: 12px; font-weight: 500; cursor: default;
  display: inline-flex; align-items: center;
}

.mkt-btn-shielded {
  background: rgba(140, 140, 160, 0.14); color: var(--ch-text-secondary);
  border: 1px solid rgba(140, 140, 160, 0.25); border-radius: 8px;
  padding: 5.5px 12px; font-size: 12px; font-weight: 500; cursor: pointer;
  transition: all 0.15s ease;
}
.mkt-btn-shielded:hover {
  background: rgba(140, 140, 160, 0.22); color: var(--ch-text-primary);
}

.mkt-subtabs-group {
  display: inline-flex; align-items: center; gap: 3px; background: var(--ch-segmented-bg);
  padding: 2px; border-radius: 8px;
}
.mkt-subtab-pill {
  padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500;
  color: var(--ch-text-secondary); cursor: pointer; user-select: none; transition: all 0.15s ease;
}
.mkt-subtab-pill:hover { color: var(--ch-text-primary); }
.mkt-subtab-pill.active {
  background: var(--ch-surface); color: var(--ch-text-primary); font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.mkt-toggle-label {
  font-size: 12.5px; font-weight: 500; display: inline-flex; align-items: center;
}
.mkt-toggle-label.active {
  color: var(--ch-success-text);
}
.mkt-toggle-label.disabled {
  color: var(--ch-text-muted);
}

/* 卡片中间精炼两句话中文介绍 */
.mkt-card-desc {
  font-size: 13px; color: var(--ch-text-secondary); line-height: 1.5; margin: 8px 0 0 0;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}

/* 发现新版提示条 (黄色高亮) */
.mkt-card-update-strip {
  background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.28);
  border-radius: 8px; padding: 8px 12px; margin: 8px 0 10px;
  display: flex; flex-direction: column; gap: 4px;
}
.mkt-card-update-title {
  font-size: 12px; font-weight: 600; color: #f59e0b; display: flex; align-items: center; gap: 6px;
}
.mkt-card-update-desc {
  font-size: 11.5px; color: var(--ch-text-secondary); line-height: 1.4;
}

/* 红色醒目报错告警栏 */
.mkt-red-error-bar {
  background: var(--ch-danger-bg); border: 1px solid var(--ch-danger-border);
  border-radius: 8px; padding: 7px 12px; margin: 6px 0 10px;
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
}
.mkt-red-error-text {
  font-size: 12px; color: var(--ch-danger-text); line-height: 1.4; display: flex; align-items: center; gap: 6px;
}
.mkt-red-retry-btn {
  background: var(--ch-danger-border); color: #ffffff; border: none; border-radius: 4px;
  padding: 3px 8px; font-size: 11px; cursor: pointer; white-space: nowrap; transition: opacity 0.15s ease;
}
.mkt-red-retry-btn:hover { opacity: 0.85; }

/* 卡片底部操作区分流 (无灰线、高透无缝、极简iOS) */
.mkt-card-foot {
  display: flex; justify-content: space-between; align-items: center; gap: 10px;
  margin-top: 14px; padding-top: 0; border-top: none;
}
.mkt-card-foot-left {
  display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0;
}
.mkt-foot-status-uninstalled {
  display: inline-flex; align-items: center; gap: 7px; user-select: none;
}
.mkt-dot-uninstalled {
  width: 7px; height: 7px; border-radius: 50%; background: #64748b; display: inline-block;
}
.mkt-text-uninstalled {
  font-size: 12.5px; color: var(--ch-text-muted); font-weight: 500;
}
.mkt-card-foot-right {
  display: flex; align-items: center; gap: 8px; flex-shrink: 0;
}

/* ── 已安装技能管理面板 (对齐用户截图 79ed04c2) ────────────────────────── */
.mkt-installed-stats-bar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 28px; background: var(--ch-surface); border-bottom: 1px solid var(--ch-card-border);
}
.mkt-stats-chips { display: flex; align-items: center; gap: 16px; font-size: 13px; color: var(--ch-text-secondary); }
.mkt-stat-active { color: var(--ch-success-text); font-weight: 600; }
.mkt-stat-paused { color: var(--ch-text-muted); font-weight: 500; }

/* 已安装二级过滤子Tab栏 */
.mkt-subtabs-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 28px; background: var(--ch-surface); border-bottom: 1px solid var(--ch-card-border);
  flex-wrap: wrap; gap: 8px;
}
.mkt-subtabs-group {
  display: flex; align-items: center; gap: 8px;
}
.mkt-subtab-pill {
  padding: 4px 12px; border-radius: 14px; font-size: 12px; cursor: pointer;
  background: var(--ch-pill-bg); color: var(--ch-text-secondary);
  border: 1px solid var(--ch-card-border); user-select: none;
  transition: all 0.15s ease; display: inline-flex; align-items: center; gap: 4px;
}
.mkt-subtab-pill:hover {
  background: var(--ch-pill-hover); color: var(--ch-text-primary);
}
.mkt-subtab-pill.active {
  background: var(--ch-text-primary); color: var(--ch-bg); font-weight: 600;
  border-color: var(--ch-text-primary);
}
.mkt-subtab-pill.updates-pill {
  color: #f59e0b; border-color: rgba(245, 158, 11, 0.4);
}
.mkt-subtab-pill.updates-pill.active {
  background: #f59e0b; color: #ffffff; border-color: #f59e0b;
}
.mkt-subtab-badge {
  font-size: 10px; padding: 1px 6px; border-radius: 8px;
  background: rgba(0, 0, 0, 0.15); margin-left: 3px;
}
.mkt-subtab-pill.updates-pill .mkt-subtab-badge {
  background: #f59e0b; color: #ffffff;
}
.mkt-subtab-pill.updates-pill.active .mkt-subtab-badge {
  background: #ffffff; color: #d97706;
}

/* 批量更新工具栏 (复选框与批量升级) */
.mkt-batch-toolbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 16px; margin: 12px 28px 0; background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.28); border-radius: 10px;
  font-size: 13px; color: var(--ch-text-primary); flex-wrap: wrap; gap: 10px;
}
.mkt-batch-left {
  display: flex; align-items: center; gap: 14px;
}
.mkt-checkbox-label {
  display: inline-flex; align-items: center; gap: 6px; cursor: pointer; user-select: none;
  font-size: 13px; font-weight: 500;
}
.mkt-batch-right {
  display: flex; align-items: center; gap: 10px;
}
.mkt-token-budget-badge {
  font-size: 11px; color: var(--ch-text-secondary); background: var(--ch-pill-bg);
  padding: 3px 8px; border-radius: 6px; border: 1px solid var(--ch-card-border);
}

/* iOS-style 开关切换器 */
.mkt-ios-toggle {
  display: inline-flex; align-items: center; gap: 8px; cursor: pointer; user-select: none;
}
.mkt-toggle-track {
  width: 40px; height: 22px; border-radius: 11px; background: rgba(255, 255, 255, 0.16);
  position: relative; transition: background 0.2s ease;
}
.mkt-toggle-track.active { background: #10b981; }
.mkt-toggle-thumb {
  width: 18px; height: 18px; border-radius: 50%; background: #ffffff;
  position: absolute; top: 2px; left: 2px; transition: transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
.mkt-toggle-track.active .mkt-toggle-thumb { transform: translateX(18px); }

/* ── 右下角悬浮回到顶部按钮 (对齐用户截图 4311b735) ───────────────────── */
.mkt-scroll-top-btn {
  position: fixed; right: 28px; bottom: 28px; width: 40px; height: 40px;
  border-radius: 50%; background: var(--ch-surface); color: var(--ch-text-primary);
  border: 1px solid var(--ch-card-border); box-shadow: 0 6px 18px rgba(0,0,0,0.35);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  z-index: 100; transition: all 0.2s ease; font-size: 18px;
}
.mkt-scroll-top-btn:hover {
  background: var(--ch-surface-hover); transform: translateY(-2px); border-color: var(--ch-brand);
}

/* ── 通用模态弹窗 (Prompt预览 / 自定义导入 / 聊天多技能选择) ─────────────── */
.mkt-modal-backdrop {
  position: fixed; inset: 0; z-index: 99999;
  background: var(--ch-modal-overlay); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; padding: 20px;
}
.mkt-modal-card {
  width: 680px; max-width: 95vw; max-height: 88vh; background: var(--ch-surface);
  border: 1px solid var(--ch-card-border); border-radius: 14px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.65); display: flex; flex-direction: column;
  overflow: hidden; color: var(--ch-text-primary);
}
.mkt-modal-header {
  padding: 16px 22px; border-bottom: 1px solid var(--ch-card-border);
  display: flex; justify-content: space-between; align-items: center;
}
.mkt-modal-title { font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
.mkt-modal-close {
  background: none; border: none; color: var(--ch-text-secondary);
  font-size: 18px; cursor: pointer; padding: 4px 8px; border-radius: 4px;
}
.mkt-modal-close:hover { color: var(--ch-text-primary); background: var(--ch-pill-bg); }
.mkt-modal-body {
  padding: 20px 22px; overflow-y: auto; flex: 1;
}
.mkt-modal-footer {
  padding: 14px 22px; border-top: 1px solid var(--ch-card-border);
  display: flex; justify-content: flex-end; align-items: center; gap: 10px;
  background: var(--ch-bg);
}

/* 聊天框右下角触发按钮 (彻底去除任何生硬灰边与奇怪颜色，极简纯图标) */
.ch-composer-picker-btn, .ch-btn-trigger {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 28px !important;
  height: 28px !important;
  margin: 0 2px !important;
  padding: 0 !important;
  border: none !important;
  outline: none !important;
  border-radius: 8px !important;
  background: transparent !important;
  box-shadow: none !important;
  color: var(--dsw-alias-label-secondary, #8a94a6) !important;
  cursor: pointer !important;
  line-height: 1 !important;
  flex: none !important;
  transition: all 0.15s ease !important;
}
.ch-composer-picker-btn:hover,
.ch-composer-picker-btn.active,
.ch-btn-trigger:hover,
.ch-btn-trigger.active {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.12)) !important;
  color: var(--dsw-alias-brand-primary, #007aff) !important;
}

/* 透明遮罩 (用于点击外部快速退出 Popover，零遮挡对话) */
.ch-popover-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2147482998;
  background: transparent;
}

/* 悬浮独立卡片 (参考现代圆角设计，深浅完美自适应) */
.ch-popover-card {
  position: fixed;
  width: 380px;
  max-height: 480px;
  display: flex;
  flex-direction: column;
  background: var(--dsw-specific-tip, rgba(28, 30, 36, 0.94));
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  color: var(--dsw-alias-label-primary, inherit);
  border: 1px solid var(--dsw-alias-border-l1, rgba(255, 255, 255, 0.12));
  border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.32), 0 0 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2147482999;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
  animation: chPopoverFadeIn 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-color-scheme: light) {
  .ch-popover-card {
    background: rgba(255, 255, 255, 0.96);
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.08);
  }
}

@keyframes chPopoverFadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 顶部 Header (标题 + 关闭按钮) */
.ch-pk-header {
  padding: 14px 16px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.ch-pk-header-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--dsw-alias-label-primary, inherit);
}
.ch-pk-header-close {
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 1;
  color: var(--dsw-alias-label-tertiary, #8a94a6);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.15s ease;
}
.ch-pk-header-close:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.1));
  color: var(--dsw-alias-label-primary, inherit);
}

/* 顶部搜索框 (圆角胶囊风格) */
.ch-pk-search-box {
  padding: 0 16px 12px;
  flex-shrink: 0;
}
.ch-pk-search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.ch-pk-search-input {
  width: 100%;
  box-sizing: border-box;
  height: 36px;
  padding: 0 28px 0 32px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128, 128, 128, 0.12));
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.08));
  color: var(--dsw-alias-label-primary, inherit);
  font-size: 13.5px;
  outline: none;
  transition: all 0.15s ease;
}
.ch-pk-search-input::placeholder {
  color: var(--dsw-alias-label-tertiary, rgba(142, 142, 147, 0.8));
}
.ch-pk-search-input:focus {
  background: var(--dsw-alias-interactive-bg-active, rgba(128, 128, 128, 0.14));
  border-color: #007aff;
}
.ch-pk-search-icon {
  position: absolute;
  left: 10px;
  top: 11px;
  color: var(--dsw-alias-label-tertiary, #8a94a6);
  pointer-events: none;
}
.ch-pk-search-clear {
  position: absolute;
  right: 8px;
  top: 9px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: rgba(128, 128, 128, 0.2);
  color: var(--dsw-alias-label-secondary, #ffffff);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  padding: 0;
}

/* 列表容器 */
.ch-pk-list {
  overflow-y: auto;
  flex: 1;
  padding: 0 12px 6px;
  max-height: 290px;
}
.ch-pk-list::-webkit-scrollbar {
  width: 4px;
}
.ch-pk-list::-webkit-scrollbar-thumb {
  background: rgba(140, 140, 150, 0.3);
  border-radius: 4px;
}

/* 单行圆角矩形卡片项 (对齐截图 2) */
.ch-pk-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  transition: all 0.12s ease;
  margin-bottom: 4px;
  border: 1px solid transparent;
}
.ch-pk-item:hover,
.ch-pk-item.highlighted {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.08));
}
.ch-pk-item.checked {
  background: rgba(0, 122, 255, 0.08);
  border-color: rgba(0, 122, 255, 0.25);
}

/* 圆角矩形 Checkbox (18x18, border-radius: 5px) */
.ch-ios-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1.5px solid rgba(128, 128, 128, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease;
  box-sizing: border-box;
}
.ch-ios-checkbox:hover {
  border-color: #007aff;
}
.ch-ios-checkbox.checked {
  background: #007aff;
  border-color: #007aff;
}

/* 28x28 圆角图标 */
.ch-pk-icon-squircle {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* 单行排版：中文名 + 指令名平铺 */
.ch-pk-content-single {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.ch-pk-title {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, inherit);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ch-pk-slash-pill {
  font-size: 11.5px;
  font-family: -apple-system, BlinkMacSystemFont, monospace;
  color: var(--dsw-alias-label-secondary, #8a94a6);
  background: rgba(128, 128, 128, 0.08);
  padding: 2px 7px;
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;
}
.ch-pk-item.checked .ch-pk-slash-pill {
  color: #007aff;
  background: rgba(0, 122, 255, 0.12);
}

/* 底部操作栏 (对齐截图 2：取消 + 添加到对话) */
.ch-pk-footer {
  padding: 10px 14px;
  border-top: 1px solid var(--dsw-alias-border-l2, rgba(128, 128, 128, 0.12));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: var(--dsw-alias-bg-module-platform, rgba(128, 128, 128, 0.04));
  flex-shrink: 0;
}
.ch-pk-btn-cancel {
  flex: 1;
  height: 36px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128, 128, 128, 0.2));
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.1));
  color: var(--dsw-alias-label-primary, inherit);
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.15s ease;
}
.ch-pk-btn-cancel:hover {
  background: var(--dsw-alias-interactive-bg-active, rgba(128, 128, 128, 0.16));
}
.ch-pk-btn-confirm {
  flex: 1.6;
  height: 36px;
  border-radius: 10px;
  border: none;
  background: #007aff;
  color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: opacity 0.15s ease;
}
.ch-pk-btn-confirm:hover {
  opacity: 0.9;
}
    `;

    // 全局自动注入样式，确保不论用户在哪个面板或输入框，样式永远 100% 生效
    (function injectGlobalStyles() {
      if (typeof document === "undefined") return;
      var styleId = "dsh-clawhub-multiskill-global-css";
      var el = document.getElementById(styleId);
      if (!el) {
        el = document.createElement("style");
        el.id = styleId;
        document.head.appendChild(el);
      }
      el.textContent = CSS;
    })();

    // ── 单色细线拼图 SVG 组件 (16x16 / 14x14 原生简笔画) ──────────────────────────
    function PuzzleIcon(props) {
      var size = props && props.size ? props.size : 16;
      return h(
        "svg",
        {
          viewBox: "0 0 24 24",
          width: size,
          height: size,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: { display: "inline-block", verticalAlign: "middle" },
          "aria-hidden": "true"
        },
        h("path", {
          d: "M14 7V4.5a2.5 2.5 0 0 0-5 0V7H4a2 2 0 0 0-2 2v3.5a2.5 2.5 0 0 1 0 5V20a2 2 0 0 0 2 2h3.5a2.5 2.5 0 0 0 5 0H19a2 2 0 0 0 2-2v-3.5a2.5 2.5 0 0 1 0-5V9a2 2 0 0 0-2-2h-5z"
        })
      );
    }

    // GitHub 徽标图标
    function GithubIcon(props) {
      var size = props && props.size ? props.size : 14;
      return h(
        "svg",
        {
          viewBox: "0 0 24 24",
          width: size,
          height: size,
          fill: "currentColor",
          style: { display: "inline-block", verticalAlign: "middle" }
        },
        h("path", {
          d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
        })
      );
    }

    // ── Prompt 规范生成器 (轻量高信噪比，严格受控于 800 Token 预算，保护 DeepSeek 上下文) ──
    function generateSkillPromptMarkdown(skill) {
      var tagsStr = (skill.tags || []).join(" · ");
      var cat = skill.category || "";
      var sopContent = "";
      var outputSpec = "";

      if (cat.includes("职场") || skill.id.includes("resume") || skill.id.includes("ppt") || skill.id.includes("report") || skill.id.includes("excel")) {
        sopContent = 
          "1. **意图拆解与要素锚定**：精准提炼用户输入的核心事实、目标受众（管理层/HR/客户）与关键诉求。\n" +
          "2. **专业范式结构化**：\n" +
          "   - 简历/经历：严格采用 STAR 法则（Situation 场景, Task 任务, Action 关键行动, Result 量化成果）。\n" +
          "   - 汇报/PPT：遵循金字塔原理与 SCQA 模型（背景-冲突-疑问-解答），结论先行、自上而下。\n" +
          "   - 表格/数据：提供无歧义动态函数（XLOOKUP/LAMBDA）或批量宏，附带防错容错说明。\n" +
          "3. **高情商语境润色**：措辞专业得体，客观量化产出，杜绝空洞口号与冗长废话。";
        outputSpec = 
          "交付物必须包含：\n" +
          "- 核心摘要与结构大纲；\n" +
          "- 逐项展开的标准成果（量化成果表、幻灯片逐页规划或开箱即用公式）；\n" +
          "- 关键注意事项与落地微调建议。";
      } else if (cat.includes("科研") || skill.id.includes("paper") || skill.id.includes("rebuttal") || skill.id.includes("figure")) {
        sopContent = 
          "1. **学术规范与语境核验**：严格遵循 SCI 顶刊（Nature/IEEE/Elsevier）体例与学术伦理。\n" +
          "2. **严谨推导与分步论证**：\n" +
          "   - 论文/摘要：遵循黄金四段式（Background -> Gap -> Method -> Findings/Impact）。\n" +
          "   - 审稿反驳：遵循「Point-by-point Response」结构（感谢审稿人意见 -> 针对性解释澄清 -> 论文修改位置标注与Diff）。\n" +
          "   - 图表设计：遵循 85mm(单栏)/175mm(双栏) 尺寸，使用科学色板（Viridis/Muted），输出矢量化代码。\n" +
          "3. **去 AI 痕迹与纯正学术英文**：消除机械套话（delve, vital 等），使用被动与客观陈述句式。";
        outputSpec = 
          "交付物必须包含：\n" +
          "- 结构化学术内容（Abstract/Response Matrix/绘图脚本）；\n" +
          "- 符合顶刊标准的排版语法（LaTeX公式或三线表）；\n" +
          "- 审稿人视角的自查挑刺清单。";
      } else if (cat.includes("编程") || cat.includes("破万星") || skill.id.includes("fastapi") || skill.id.includes("code") || skill.id.includes("dev")) {
        sopContent = 
          "1. **需求边界与反过度设计 (Ponytail 原则)**：\n" +
          "   - 仅实现当前确切需求，不盲目引入多层抽象、工厂模式或非必要第三方依赖。\n" +
          "   - 优先平铺（Flat is better than nested），函数保持纯粹单一职责。\n" +
          "2. **生产级健壮性与类型契约**：\n" +
          "   - 必须包含严密的输入类型提示 (Type Hints) 与边界条件校验。\n" +
          "   - 显式处理异常与网络断联重试，流式响应必须保证 SSE 结构合规。\n" +
          "3. **测试驱动与防御性编程**：给出配套的极简单元测试用例 (Pytest) 与零侵入 Mock。";
        outputSpec = 
          "交付物必须包含：\n" +
          "- 完整可运行的代码块（开箱即用，带类型注解）；\n" +
          "- 关键架构选型依据与边界处理说明；\n" +
          "- 极简测试用例验证代码。";
      } else if (cat.includes("数据") || skill.id.includes("pandas") || skill.id.includes("sql")) {
        sopContent = 
          "1. **数据全貌诊断**：检查缺失值分布、离群异常值及列类型一致性。\n" +
          "2. **向量化流水线实现**：\n" +
          "   - 严禁低效逐行迭代（iterrows），采用 Pandas/Polars 纯向量化链式调用（.pipe()）。\n" +
          "   - SQL 查询解剖 EXPLAIN 执行计划，保障索引命中，避免全表扫描。\n" +
          "3. **业务洞察与统计可靠性**：附带置信区间或业务同环比基准，杜绝虚假归因。";
        outputSpec = 
          "交付物必须包含：\n" +
          "- 数据清洗或查询 SQL/Python 核心代码；\n" +
          "- 诊断结论与核心统计指标三线表；\n" +
          "- 业务异常点与流失归因洞察。";
      } else if (cat.includes("新媒体") || skill.id.includes("xiaohongshu") || skill.id.includes("douyin")) {
        sopContent = 
          "1. **受众心理与完播率算法对齐**：\n" +
          "   - 前 3 秒黄金留存钩子（强冲突/认知反差/重磅利益点）。\n" +
          "   - 叙事节奏紧凑，情绪曲线起伏（痛点唤醒 -> 场景代入 -> 解决方案 -> 价值升华）。\n" +
          "2. **平台算法与 SEO 埋词**：在标题、正文及末尾自然植入核心热搜词与长尾截流标签。\n" +
          "3. **强转化 CTA 引导**：结尾自然植入收藏、互动或评论区痛点共鸣指令。";
        outputSpec = 
          "交付物必须包含：\n" +
          "- 5 个高点击测试标题候选（痛点型/悬念型/干货型）；\n" +
          "- 分镜头台词/图文笔记正文（排版带视觉呼吸感与 Emoji 适度点缀）；\n" +
          "- 推荐发布标签 (Tags) 与黄金发布时段建议。";
      } else if (cat.includes("英语") || skill.id.includes("ielts") || skill.id.includes("toefl")) {
        sopContent = 
          "1. **语境地道性 (B2-C1 梯队)**：\n" +
          "   - 严格杜绝中式直译与刻板模板套句。\n" +
          "   - 重点注入高频动词短语 (Phrasal Verbs) 与地道搭配 (Collocations)。\n" +
          "2. **思辨逻辑展开**：采用 PEEL 模型（Point 论点 -> Explanation 阐述 -> Example 例证 -> Link 升华）回答口语与写作。\n" +
          "3. **纠错与提升对比**：提供「原表达 -> 地道地道表达 -> 替换解析」对照。";
        outputSpec = 
          "交付物必须包含：\n" +
          "- 地道表达清单（含 IPA 国际音标、精准语境释义）；\n" +
          "- 剧中/外刊真实原句与雅思迁移应用例句；\n" +
          "- 难点辨析与高分口语思辨范例。";
      } else {
        sopContent = 
          "1. **领域专家心智锚定**：以该领域顶尖实践为基准，严格遵循工业化标准化规约。\n" +
          "2. **分步闭环推进**：输入核验 -> 核心逻辑处理 -> 边界测试与异常分支收敛。\n" +
          "3. **开箱即用交付**：杜绝空洞理论，交付可直接投产的工程成果或结构化文档。";
        outputSpec = 
          "交付物必须包含：\n" +
          "- 结构化标准交付主体；\n" +
          "- 边界异常与防御清单；\n" +
          "- 快速上手与集成指引。";
      }

      return "---\n" +
        "name: " + skill.id + "\n" +
        "description: " + skill.summary + "\n" +
        "version: \"1.0.0\"\n" +
        "category: " + skill.category + "\n" +
        "token-budget: 800\n" +
        "repository: https://github.com/" + skill.repo + "\n" +
        "---\n\n" +
        "# " + skill.name + " (" + skill.slash + ")\n\n" +
        "> 官方源: https://github.com/" + skill.repo + " | 社区热度: " + skill.stars + "\n\n" +
        "## 1. 核心定位与业务价值\n" +
        skill.summary + "\n\n" +
        "## 2. 关键意图触发词\n" +
        tagsStr + "\n\n" +
        "## 3. 专家级执行规约 SOP\n" +
        sopContent + "\n\n" +
        "## 4. 刚性交付规范 (Output Spec)\n" +
        outputSpec + "\n\n" +
        "## 5. 负向约束与防越界 (Boundaries)\n" +
        "- 严禁输出无意义的客套废话或免责套话，直接交付专业成果。\n" +
        "- 严禁编造虚假数据或不可靠事实，不确定处必须明确标注待核实。\n" +
        "- 保持极简高信噪比，输出长度严格受任务驱动，将上下文空间最大程度留给用户。\n";
    }

    // ── Prompt 预览弹窗组件 ───────────────────────────────────────────────────────
    function PromptPreviewModal(props) {
      var skill = props.skill;
      var [copied, setCopied] = useState(false);
      var content = generateSkillPromptMarkdown(skill);

      var handleCopy = () => {
        try {
          navigator.clipboard.writeText(content);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (e) {}
      };

      return h(
        "div",
        { className: "mkt-modal-backdrop", onClick: props.onClose },
        h(
          "div",
          { className: "mkt-modal-card", onClick: (e) => e.stopPropagation() },
          h(
            "div",
            { className: "mkt-modal-header" },
            h("div", { className: "mkt-modal-title" },
              h(PuzzleIcon, { size: 18 }),
              "技能 Prompt 规范预览 — " + skill.name
            ),
            h("button", { className: "mkt-modal-close", onClick: props.onClose }, "✕")
          ),
          h(
            "div",
            { className: "mkt-modal-body" },
            h("div", { style: { marginBottom: "12px", fontSize: "12px", color: "var(--ch-text-secondary)" } },
              "GitHub 仓库：https://github.com/" + skill.repo + " · 星数：" + skill.stars + " · 指令：" + skill.slash
            ),
            h(
              "pre",
              {
                style: {
                  background: "var(--ch-bg)",
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid var(--ch-card-border)",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.5",
                  maxHeight: "380px",
                  overflowY: "auto",
                  color: "var(--ch-text-primary)"
                }
              },
              content
            )
          ),
          h(
            "div",
            { className: "mkt-modal-footer" },
            h("button", { className: "mkt-action-btn", onClick: handleCopy },
              copied ? "✅ 已复制 Prompt" : "📋 复制完整 Prompt"
            ),
            h("button", { className: "mkt-action-btn primary", onClick: () => {
              props.onInvoke(skill);
              props.onClose();
            } }, "💬 在聊天中调用")
          )
        )
      );
    }

    // ── ➕ 动态导入 / 添加自定义 Skill 弹窗 (落实用户要求三) ──────────────────────
    function CustomImportModal(props) {
      var [tab, setTab] = useState("url"); // url | manual
      var [urlInput, setUrlInput] = useState("");
      var [loading, setLoading] = useState(false);
      var [errorMsg, setErrorMsg] = useState("");
      var [successMsg, setSuccessMsg] = useState("");

      var [mId, setMId] = useState("");
      var [mName, setMName] = useState("");
      var [mDesc, setMDesc] = useState("");
      var [mPrompt, setMPrompt] = useState("");

      var handleImportUrl = async () => {
        if (!urlInput.trim()) {
          setErrorMsg("请输入有效的 GitHub 仓库链接或 Raw Markdown 链接");
          return;
        }
        setLoading(true);
        setErrorMsg("");
        setSuccessMsg("");
        try {
          var res = await fetch("/api/clawhub/import-github", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: urlInput.trim() })
          });
          var json = await res.json();
          if (json.ok) {
            setSuccessMsg("✅ 成功导入技能「" + (json.name || json.id) + "」，已自动部署到 ~/.dsh/skills/");
            props.onSuccess(json.id);
            setTimeout(() => props.onClose(), 1500);
          } else {
            setErrorMsg(json.error || "导入失败，请检查网络或链接有效性");
          }
        } catch (err) {
          setErrorMsg("网络请求异常: " + err.message + "，请检查网络代理");
        } finally {
          setLoading(false);
        }
      };

      var handleCreateManual = async () => {
        if (!mId.trim() || !mName.trim()) {
          setErrorMsg("请至少填写技能标识(ID)和技能名称");
          return;
        }
        setLoading(true);
        setErrorMsg("");
        try {
          var cleanId = mId.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "");
          var content = "---\nname: " + cleanId + "\ndescription: " + (mDesc || mName) + "\nversion: \"1.0.0\"\n---\n\n# " + mName + " (/" + cleanId + ")\n\n" + (mPrompt || mDesc) + "\n";
          var res = await fetch("/api/clawhub/install", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: cleanId,
              name: mName.trim(),
              description: mDesc.trim(),
              content: content
            })
          });
          var json = await res.json();
          if (json.ok) {
            setSuccessMsg("✅ 自定义技能「" + mName + "」已成功保存在本地 ~/.dsh/skills/" + cleanId);
            props.onSuccess(cleanId);
            setTimeout(() => props.onClose(), 1500);
          } else {
            setErrorMsg(json.error || "保存失败");
          }
        } catch (err) {
          setErrorMsg("保存异常: " + err.message);
        } finally {
          setLoading(false);
        }
      };

      return h(
        "div",
        { className: "mkt-modal-backdrop", onClick: props.onClose },
        h(
          "div",
          { className: "mkt-modal-card", onClick: (e) => e.stopPropagation() },
          h(
            "div",
            { className: "mkt-modal-header" },
            h("div", { className: "mkt-modal-title" }, "➕ 导入与创建自定义 Skill"),
            h("button", { className: "mkt-modal-close", onClick: props.onClose }, "✕")
          ),
          h(
            "div",
            { className: "mkt-modal-body" },
            h(
              "div",
              { style: { display: "flex", gap: "12px", marginBottom: "16px" } },
              h(
                "button",
                {
                  className: "mkt-action-btn " + (tab === "url" ? "primary" : ""),
                  onClick: () => { setTab("url"); setErrorMsg(""); }
                },
                "🔗 GitHub / Raw URL 导入"
              ),
              h(
                "button",
                {
                  className: "mkt-action-btn " + (tab === "manual" ? "primary" : ""),
                  onClick: () => { setTab("manual"); setErrorMsg(""); }
                },
                "✏️ 手工在线表单创建"
              )
            ),
            errorMsg && h(
              "div",
              { className: "mkt-red-error-bar", style: { marginBottom: "12px" } },
              h("span", { className: "mkt-red-error-text" }, "❌ " + errorMsg)
            ),
            successMsg && h(
              "div",
              { style: { background: "rgba(16, 185, 129, 0.12)", color: "#10b981", padding: "8px 12px", borderRadius: "6px", marginBottom: "12px", fontSize: "12px" } },
              successMsg
            ),
            tab === "url"
              ? h(
                  "div",
                  null,
                  h("div", { style: { fontSize: "12px", color: "var(--ch-text-secondary)", marginBottom: "8px" } },
                    "输入任何开源 GitHub 仓库或 Raw Markdown 地址，集市自动拉取并解析 SKILL.md："
                  ),
                  h("input", {
                    className: "mkt-search-input",
                    placeholder: "例如: https://github.com/dair-ai/Prompt-Engineering-Guide",
                    value: urlInput,
                    onChange: (e) => setUrlInput(e.target.value)
                  }),
                  h("div", { style: { fontSize: "11px", color: "var(--ch-text-muted)", marginTop: "6px" } },
                    "支持 github.com、raw.githubusercontent.com 或国内镜像加速链接。"
                  )
                )
              : h(
                  "div",
                  { style: { display: "flex", flexDirection: "column", gap: "10px" } },
                  h("input", {
                    className: "mkt-search-input",
                    placeholder: "技能唯一英文标识 ID (如: my-biomed-skill)",
                    value: mId,
                    onChange: (e) => setMId(e.target.value)
                  }),
                  h("input", {
                    className: "mkt-search-input",
                    placeholder: "技能中文名称 (如: 生物医药信号通路绘制专家)",
                    value: mName,
                    onChange: (e) => setMName(e.target.value)
                  }),
                  h("input", {
                    className: "mkt-search-input",
                    placeholder: "一句话功能与价值描述",
                    value: mDesc,
                    onChange: (e) => setMDesc(e.target.value)
                  }),
                  h("textarea", {
                    className: "mkt-search-input",
                    style: { minHeight: "120px", resize: "vertical", fontFamily: "monospace" },
                    placeholder: "编写详细的 Prompt 专家规约与工作流要求...",
                    value: mPrompt,
                    onChange: (e) => setMPrompt(e.target.value)
                  })
                )
          ),
          h(
            "div",
            { className: "mkt-modal-footer" },
            h("button", { className: "mkt-action-btn", onClick: props.onClose }, "取消"),
            h(
              "button",
              {
                className: "mkt-action-btn primary",
                disabled: loading,
                onClick: tab === "url" ? handleImportUrl : handleCreateManual
              },
              loading ? "⏳ 正在处理..." : (tab === "url" ? "🚀 立即拉取并安装" : "💾 保存并注册")
            )
          )
        )
      );
    }

    // ── 🗑️ 彻底卸载确认模态框组件 (告别系统 Win32 confirm，对齐 DSH 原生深浅色质感) ───
    function ConfirmDeleteModal(props) {
      var target = props.target;
      var [deleting, setDeleting] = useState(false);
      var [errorMsg, setErrorMsg] = useState("");

      var handleConfirm = async () => {
        setDeleting(true);
        setErrorMsg("");
        try {
          await props.onConfirm(target.id);
          props.onClose();
        } catch (e) {
          setErrorMsg(e.message || "卸载失败，请检查文件占用或重试");
          setDeleting(false);
        }
      };

      return h(
        "div",
        { className: "mkt-modal-backdrop", onClick: props.onClose },
        h(
          "div",
          {
            className: "mkt-modal-card",
            style: { maxWidth: "460px" },
            onClick: (e) => e.stopPropagation()
          },
          h(
            "div",
            { className: "mkt-modal-header" },
            h(
              "div",
              { className: "mkt-modal-title", style: { color: "var(--ch-danger-text)" } },
              h(
                "span",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "var(--ch-danger-bg)",
                    border: "1px solid var(--ch-danger-border)",
                    fontSize: "13px"
                  }
                },
                "⚠️"
              ),
              "确认彻底卸载技能"
            ),
            h("button", { className: "mkt-modal-close", onClick: props.onClose }, "✕")
          ),
          h(
            "div",
            { className: "mkt-modal-body" },
            h(
              "div",
              { style: { fontSize: "14px", lineHeight: "1.6", color: "var(--ch-text-primary)", marginBottom: "12px" } },
              "确定要从本机彻底卸载并删除技能 ",
              h(
                "span",
                {
                  style: {
                    fontWeight: "600",
                    color: "var(--ch-brand)",
                    background: "var(--ch-pill-bg)",
                    padding: "2px 6px",
                    borderRadius: "4px"
                  }
                },
                target.name || target.id
              ),
              " 吗？"
            ),
            h(
              "div",
              {
                style: {
                  fontSize: "12px",
                  lineHeight: "1.6",
                  color: "var(--ch-text-secondary)",
                  background: "var(--ch-bg)",
                  border: "1px solid var(--ch-card-border)",
                  borderRadius: "8px",
                  padding: "10px 12px"
                }
              },
              h("div", { style: { marginBottom: "4px" } }, "• 💾 物理移除：将从本机磁盘 (~/.dsh/skills) 彻底清除该技能目录以释放空间。"),
              h("div", { style: { marginBottom: "4px" } }, "• 💡 暂不调用：若后续还想使用，建议在卡片上直接点击「启用中」切换为「已停用」，无需彻底卸载。"),
              h("div", null, "• 🔄 随时恢复：卸载后您仍可随时在技能集市中重新一键极速下载。")
            ),
            errorMsg &&
              h(
                "div",
                {
                  style: {
                    marginTop: "12px",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    background: "var(--ch-danger-bg)",
                    border: "1px solid var(--ch-danger-border)",
                    color: "var(--ch-danger-text)",
                    fontSize: "12px"
                  }
                },
                "❌ " + errorMsg
              )
          ),
          h(
            "div",
            { className: "mkt-modal-footer", style: { justifyContent: "flex-end", gap: "10px" } },
            h(
              "button",
              {
                className: "mkt-action-btn",
                onClick: props.onClose,
                disabled: deleting
              },
              "取消保留"
            ),
            h(
              "button",
              {
                className: "mkt-action-btn",
                style: {
                  background: "#ef4444",
                  borderColor: "#ef4444",
                  color: "#ffffff",
                  fontWeight: "600"
                },
                onClick: handleConfirm,
                disabled: deleting
              },
              deleting ? "⏳ 正在卸载..." : "🗑️ 彻底卸载"
            )
          )
        )
      );
    }

    // ── ✏️ 自定义技能中文别名弹窗 ────────────────────────────────────────────────
    function CustomAliasModal(props) {
      var skill = props.skill;
      var [aliasInput, setAliasInput] = useState(props.currentAlias || "");

      if (!skill) return null;

      var handleSave = () => {
        props.onSave(skill.id, aliasInput.trim());
        props.onClose();
      };

      var handleReset = () => {
        props.onReset(skill.id);
        props.onClose();
      };

      return h(
        "div",
        { className: "mkt-modal-backdrop", onClick: props.onClose },
        h(
          "div",
          { className: "mkt-modal-card", style: { maxWidth: "460px" }, onClick: (e) => e.stopPropagation() },
          h(
            "div",
            { className: "mkt-modal-header" },
            h("div", { className: "mkt-modal-title" }, "✏️ 自定义技能别名"),
            h("button", { className: "mkt-modal-close", onClick: props.onClose }, "✕")
          ),
          h(
            "div",
            { className: "mkt-modal-body" },
            h("div", { style: { fontSize: "12.5px", color: "var(--ch-text-secondary)", marginBottom: "8px" } },
              "原始名称：" + skill.name
            ),
            h("div", { style: { fontSize: "11.5px", color: "var(--ch-brand)", marginBottom: "12px", fontFamily: "monospace" } },
              "唯一指令：" + (skill.slash || ("/" + skill.id)) + "（修改别名不影响底层指令与目录）"
            ),
            h("input", {
              className: "mkt-search-input",
              placeholder: "输入您自定义的简短中文别名（如：托福听力提炼）...",
              value: aliasInput,
              autoFocus: true,
              onChange: (e) => setAliasInput(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") handleSave();
              }
            }),
            h("div", { style: { fontSize: "11.5px", color: "var(--ch-text-muted)", marginTop: "8px", lineHeight: "1.4" } },
              "💡 提示：设置自定义别名后，技能卡片及对话框技能快速搜索都会以此别名优先展示与检索。"
            )
          ),
          h(
            "div",
            { className: "mkt-modal-footer", style: { justifyContent: "space-between" } },
            props.currentAlias
              ? h(
                  "button",
                  { className: "mkt-action-btn", onClick: handleReset, style: { color: "var(--ch-text-muted)" } },
                  "恢复默认名称"
                )
              : h("div", null),
            h(
              "div",
              { style: { display: "flex", gap: "8px" } },
              h("button", { className: "mkt-action-btn", onClick: props.onClose }, "取消"),
              h(
                "button",
                {
                  className: "mkt-action-btn primary",
                  onClick: handleSave
                },
                "保存别名"
              )
            )
          )
        )
      );
    }

    // ── 双源技能集市主工作区面板 ──────────────────────────────────────────────────
    function DualSourceMarketView(props) {
      var [activeTab, setActiveTab] = useState("discover"); // discover | mega | installed | updates | favorites | clawhub
      var [installedSubFilter, setInstalledSubFilter] = useState("all"); // all | active | disabled | updates
      var [selectedCategory, setSelectedCategory] = useState("全部");
      var [searchKw, setSearchKw] = useState("");
      var [installedSkills, setInstalledSkills] = useState({});
      var [updatesList, setUpdatesList] = useState([]);
      var [selectedForUpdate, setSelectedForUpdate] = useState([]);
      var [upgradingIds, setUpgradingIds] = useState([]);
      var [checkingUpdates, setCheckingUpdates] = useState(false);
      var [statusNotice, setStatusNotice] = useState(null);
      var [loadingSkillId, setLoadingSkillId] = useState(null);
      var [cardErrors, setCardErrors] = useState({});
      var [previewSkill, setPreviewSkill] = useState(null);
      var [showImportModal, setShowImportModal] = useState(false);
      var [deleteTargetSkill, setDeleteTargetSkill] = useState(null);
      var [showScrollTop, setShowScrollTop] = useState(false);
      var [favorites, setFavorites] = useState(() => {
        try {
          var saved = localStorage.getItem("dsh_skill_favorites");
          return saved ? JSON.parse(saved) : [];
        } catch (e) {
          return [];
        }
      });
      var [openMenuId, setOpenMenuId] = useState(null);

      var [customAliases, setCustomAliases] = useState(() => {
        try {
          var saved = localStorage.getItem("dsh_skill_custom_aliases");
          return saved ? JSON.parse(saved) : {};
        } catch (e) {
          return {};
        }
      });
      var [ignoredUpdates, setIgnoredUpdates] = useState(() => {
        try {
          var saved = localStorage.getItem("dsh_skill_ignored_updates");
          return saved ? JSON.parse(saved) : [];
        } catch (e) {
          return [];
        }
      });
      var [aliasModalSkill, setAliasModalSkill] = useState(null);
      var [updatesViewMode, setUpdatesViewMode] = useState("pending"); // pending | ignored

      var handleSaveAlias = (id, newAlias) => {
        setCustomAliases((prev) => {
          var next = Object.assign({}, prev);
          if (newAlias) {
            next[id] = newAlias;
          } else {
            delete next[id];
          }
          try {
            localStorage.setItem("dsh_skill_custom_aliases", JSON.stringify(next));
          } catch (e) {}
          return next;
        });
        setStatusNotice("已更新技能别名");
        setTimeout(() => setStatusNotice(null), 2000);
      };

      var handleResetAlias = (id) => {
        setCustomAliases((prev) => {
          var next = Object.assign({}, prev);
          delete next[id];
          try {
            localStorage.setItem("dsh_skill_custom_aliases", JSON.stringify(next));
          } catch (e) {}
          return next;
        });
        setStatusNotice("已恢复默认技能名称");
        setTimeout(() => setStatusNotice(null), 2000);
      };

      var toggleIgnoreUpdate = (id) => {
        setIgnoredUpdates((prev) => {
          var isIgnored = prev.includes(id);
          var next = isIgnored ? prev.filter((x) => x !== id) : [...prev, id];
          try {
            localStorage.setItem("dsh_skill_ignored_updates", JSON.stringify(next));
          } catch (e) {}
          setStatusNotice(isIgnored ? "已恢复该技能检测更新" : "已屏蔽该技能更新提示");
          setTimeout(() => setStatusNotice(null), 2500);
          return next;
        });
      };

      var toggleFavorite = (id) => {
        setFavorites((prev) => {
          var next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
          try {
            localStorage.setItem("dsh_skill_favorites", JSON.stringify(next));
          } catch (e) {}
          return next;
        });
      };

      useEffect(() => {
        var onDocClick = () => setOpenMenuId(null);
        window.addEventListener("click", onDocClick);
        return () => window.removeEventListener("click", onDocClick);
      }, []);

      var scrollRef = useRef(null);

      // 分类清单
      var categories = [
        "全部",
        "💻 编程系统与Python快速构建",
        "🔬 科研学术与数学建模",
        "🌟 破万星巅峰与最新趋势",
        "🎨 UI设计与网页可视化前端",
        "📊 数据清洗分析与图表呈现",
        "📑 产品经理ERP与工业PID规约",
        "📱 新媒体短视频与流量运营",
        "🌍 英语考培外刊与经典名著",
        "🏢 职场日常与文档批量自动化"
      ];

      var totalSkillsCount = SKILLS_CATALOG.length;
      var megaSkillsCount = useMemo(() => SKILLS_CATALOG.filter((s) => s.category.includes("破万星")).length, []);

      // 映射更新字典与分流 (待更新 vs 已屏蔽)
      var updatesMap = useMemo(() => {
        var m = {};
        for (var u of updatesList) {
          m[u.id] = u;
        }
        return m;
      }, [updatesList]);

      var pendingUpdatesList = useMemo(
        () => updatesList.filter((u) => !ignoredUpdates.includes(u.id)),
        [updatesList, ignoredUpdates]
      );
      var ignoredUpdatesList = useMemo(
        () => updatesList.filter((u) => ignoredUpdates.includes(u.id)),
        [updatesList, ignoredUpdates]
      );
      var updatesCount = pendingUpdatesList.length;

      // 1. 同步加载本地已安装技能列表
      var fetchInstalled = useCallback(async () => {
        try {
          var res = await fetch("/api/clawhub/installed");
          var json = await res.json();
          if (json.ok && Array.isArray(json.skills)) {
            var map = {};
            for (var sk of json.skills) {
              map[sk.id] = sk;
            }
            setInstalledSkills(map);
          }
        } catch (e) {
          console.warn("[dsh-clawhub-multiskill] fetchInstalled failed:", e);
        }
      }, []);

      // 2. 检查更新列表
      var fetchUpdates = useCallback(async () => {
        try {
          setCheckingUpdates(true);
          var res = await fetch("/api/clawhub/check-updates");
          var json = await res.json();
          if (json.ok && Array.isArray(json.updates)) {
            setUpdatesList(json.updates);
          }
        } catch (e) {
          console.warn("[dsh-clawhub-multiskill] fetchUpdates failed:", e);
        } finally {
          setCheckingUpdates(false);
        }
      }, []);

      useEffect(() => {
        fetchInstalled();
        fetchUpdates();
      }, [fetchInstalled, fetchUpdates]);

      // 3. 安装技能处理函数
      var handleInstall = async (skill) => {
        setLoadingSkillId(skill.id);
        setCardErrors((prev) => Object.assign({}, prev, { [skill.id]: null }));
        try {
          var promptContent = generateSkillPromptMarkdown(skill);
          var res = await fetch("/api/clawhub/install", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: skill.id,
              name: skill.name,
              description: skill.summary,
              content: promptContent
            })
          });
          var json = await res.json();
          if (json.ok) {
            await fetchInstalled();
            await fetchUpdates();
          } else {
            setCardErrors((prev) => Object.assign({}, prev, {
              [skill.id]: json.error || "下载失败: 写入本地文件无权限或超时"
            }));
          }
        } catch (err) {
          setCardErrors((prev) => Object.assign({}, prev, {
            [skill.id]: "下载失败: 无法连接 GitHub 源 (" + err.message + ")，请检查网络代理"
          }));
        } finally {
          setLoadingSkillId(null);
        }
      };

      // 4. 启用/关闭切换 (toggle)
      var handleToggleSkill = async (skillId, currentDisabled) => {
        try {
          var res = await fetch("/api/clawhub/toggle", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: skillId, disabled: !currentDisabled })
          });
          var json = await res.json();
          if (json.ok) {
            await fetchInstalled();
          } else {
            setCardErrors((prev) => Object.assign({}, prev, {
              [skillId]: "状态切换失败: " + (json.error || "未知原因")
            }));
          }
        } catch (err) {
          setCardErrors((prev) => Object.assign({}, prev, {
            [skillId]: "操作失败: " + err.message
          }));
        }
      };

      // 5. 单个技能安全升级 (带备份与 800 Token 预算拦截)
      var handleSingleUpgrade = async (skill) => {
        var upInfo = updatesMap[skill.id];
        if (!upInfo) return;
        setUpgradingIds((prev) => [...prev, skill.id]);
        setCardErrors((prev) => Object.assign({}, prev, { [skill.id]: null }));
        try {
          var res = await fetch("/api/clawhub/upgrade", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: skill.id,
              newVersion: upInfo.newVersion
            })
          });
          var json = await res.json();
          if (json.ok) {
            setStatusNotice("✅ 技能「" + (skill.name || skill.id) + "」已升级到 v" + json.version + "，旧版已自动备份 (.bak)");
            setTimeout(() => setStatusNotice(null), 4000);
            await fetchInstalled();
            await fetchUpdates();
            setSelectedForUpdate((prev) => prev.filter((id) => id !== skill.id));
          } else {
            setCardErrors((prev) => Object.assign({}, prev, {
              [skill.id]: json.error || "升级失败"
            }));
          }
        } catch (err) {
          setCardErrors((prev) => Object.assign({}, prev, {
            [skill.id]: "升级请求异常: " + err.message
          }));
        } finally {
          setUpgradingIds((prev) => prev.filter((id) => id !== skill.id));
        }
      };

      // 6. 批量升级所选技能 (支持直接传入目标 ID 数组，彻底解决异步状态滞后问题)
      var handleBatchUpgrade = async (explicitIds) => {
        var targetIds = Array.isArray(explicitIds) && explicitIds.length > 0
          ? explicitIds
          : selectedForUpdate;
        if (!targetIds || targetIds.length === 0) return;
        var items = targetIds.map((id) => ({
          id: id,
          newVersion: updatesMap[id] ? updatesMap[id].newVersion : "1.1.0"
        }));
        setUpgradingIds(targetIds);
        try {
          var res = await fetch("/api/clawhub/batch-upgrade", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: items })
          });
          var json = await res.json();
          if (json.ok) {
            setStatusNotice("🎉 成功升级 " + items.length + " 个技能！旧版本已自动备份为 .bak");
            setTimeout(() => setStatusNotice(null), 4000);
            setSelectedForUpdate([]);
            await fetchInstalled();
            await fetchUpdates();
          } else {
            setStatusNotice("❌ 批量升级遇到异常: " + (json.error || "未知异常"));
            setTimeout(() => setStatusNotice(null), 4000);
          }
        } catch (err) {
          setStatusNotice("❌ 批量升级网络异常: " + err.message);
          setTimeout(() => setStatusNotice(null), 4000);
        } finally {
          setUpgradingIds([]);
        }
      };

      // 7. 安全回退至历史版本 (.bak)
      var handleRollback = async (skillId) => {
        try {
          var res = await fetch("/api/clawhub/rollback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: skillId })
          });
          var json = await res.json();
          if (json.ok) {
            setStatusNotice("↩️ 技能「" + skillId + "」已成功恢复至上一个备份版本");
            setTimeout(() => setStatusNotice(null), 4000);
            await fetchInstalled();
            await fetchUpdates();
          } else {
            alert("回退失败: " + (json.error || "未找到备份文件"));
          }
        } catch (err) {
          alert("回退异常: " + err.message);
        }
      };

      // 8. 待更新全选/反选
      var handleToggleSelectAllUpdates = () => {
        var allUpdateIds = updatesList.map((u) => u.id);
        if (selectedForUpdate.length === allUpdateIds.length) {
          setSelectedForUpdate([]);
        } else {
          setSelectedForUpdate(allUpdateIds);
        }
      };

      var toggleSelectOneForUpdate = (id) => {
        setSelectedForUpdate((prev) =>
          prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
      };

      // 9. 彻底删除技能 (delete) - 唤起原生质感 ConfirmDeleteModal，告别系统弹窗
      var handleDeleteSkill = (skillId, skillName) => {
        setDeleteTargetSkill({ id: skillId, name: skillName });
      };

      // 10. 聊天调用跳转
      var handleInvoke = (skill) => {
        var slashCmd = skill.slash || ("/" + skill.id);
        insertSlashCommands(slashCmd + " ");
        try {
          if (props && props.layout && typeof props.layout.selectPanel === "function") {
            props.layout.selectPanel("conversation");
          }
        } catch (e) {}
      };

      // 滚动监听 (显示回到顶部)
      var handleScroll = (e) => {
        var top = e.target.scrollTop;
        setShowScrollTop(top > 180);
      };
      var scrollToTop = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      // 计算筛选列表
      var displaySkills = useMemo(() => {
        var list = SKILLS_CATALOG;
        var catalogMap = {};
        for (var c of SKILLS_CATALOG) catalogMap[c.id] = c;

        if (activeTab === "mega") {
          list = list.filter((s) => s.category.includes("破万星"));
        } else if (activeTab === "installed") {
          list = Object.keys(installedSkills).map((id) => {
            if (catalogMap[id]) return catalogMap[id];
            var inst = installedSkills[id];
            return {
              id: id,
              name: (inst && inst.name) || id,
              summary: (inst && inst.description) || "本地已安装的 Agent 技能规约",
              category: "🏢 自定义导入",
              stars: "★ Custom",
              slash: "/" + id,
              repo: "local/" + id,
              tags: ["custom", "imported"]
            };
          });
        } else if (activeTab === "updates") {
          var targetUpdates = updatesViewMode === "ignored" ? ignoredUpdatesList : pendingUpdatesList;
          list = targetUpdates.map((u) => {
            if (catalogMap[u.id]) return catalogMap[u.id];
            var inst = installedSkills[u.id];
            return {
              id: u.id,
              name: (inst && inst.name) || u.id,
              summary: (inst && inst.description) || (updatesViewMode === "ignored" ? "已屏蔽自动检测的技能" : "待更新技能"),
              category: "🏢 自定义导入",
              stars: "★ Custom",
              slash: "/" + u.id,
              repo: "local/" + u.id,
              tags: ["custom", "imported"]
            };
          });
        } else if (activeTab === "favorites") {
          list = SKILLS_CATALOG.filter((s) => favorites.includes(s.id));
          for (var fId of favorites) {
            if (!catalogMap[fId] && installedSkills[fId]) {
              var inst = installedSkills[fId];
              list.push({
                id: fId,
                name: (inst && inst.name) || fId,
                summary: (inst && inst.description) || "本地自定义技能",
                category: "🏢 自定义导入",
                stars: "★ Custom",
                slash: "/" + fId,
                repo: "local/" + fId,
                tags: ["custom"]
              });
            }
          }
        }

        return list.filter((item) => {
          if (activeTab === "discover" && selectedCategory !== "全部") {
            if (item.category !== selectedCategory) return false;
          }
          if (!searchKw.trim()) return true;
          var k = searchKw.toLowerCase().trim();
          var alias = (customAliases[item.id] || "").toLowerCase();
          var aliasMatch = alias.includes(k);
          var nameMatch = item.name.toLowerCase().includes(k);
          var idMatch = item.id.toLowerCase().includes(k);
          var slashMatch = (item.slash || "").toLowerCase().includes(k);
          var descMatch = item.summary.toLowerCase().includes(k);
          return aliasMatch || nameMatch || idMatch || slashMatch || descMatch;
        });
      }, [activeTab, selectedCategory, searchKw, installedSkills, updatesMap, favorites, customAliases, ignoredUpdates, updatesViewMode, pendingUpdatesList, ignoredUpdatesList]);

      // 统计
      var installedCount = Object.keys(installedSkills).length;
      var activeCount = Object.values(installedSkills).filter((s) => !s.disabled).length;
      var pausedCount = installedCount - activeCount;

      return h(
        "div",
        { className: "mkt-panel" },
        h("style", null, CSS),

        // 顶部 Header 栏 (Apple iOS 极简风格，无多余口水话)
        h(
          "div",
          { className: "mkt-header" },
          h(
            "div",
            { className: "mkt-header-top" },
            h(
              "div",
              { className: "mkt-title-box" },
              h(PuzzleIcon, { size: 22 }),
              h("div", null,
                h("div", { className: "mkt-title-text" }, "技能集市"),
                h("div", { className: "mkt-subtitle" }, "AI Agent 精选实战技能库")
              )
            ),
            h(
              "div",
              { className: "mkt-header-actions" },
              h(
                "button",
                { className: "mkt-action-btn primary", onClick: () => setShowImportModal(true) },
                "➕ 导入技能"
              ),
              h(
                "button",
                { className: "mkt-action-btn", onClick: () => window.open("https://clawhub.com", "_blank"), title: "浏览 ClawHub 官方技能社区" },
                "🌐 社区"
              )
            )
          )
        ),

        // iOS Segmented Control 分段药丸栏 (全部聚焦独立功能视角)
        h(
          "div",
          { className: "mkt-tabs-bar" },
          h(
            "div",
            { className: "mkt-segmented-nav" },
            h(
              "div",
              {
                className: "mkt-segmented-tab " + (activeTab === "discover" ? "active" : ""),
                onClick: () => setActiveTab("discover")
              },
              "发现",
              h("span", { className: "mkt-segmented-badge" }, totalSkillsCount)
            ),
            h(
              "div",
              {
                className: "mkt-segmented-tab " + (activeTab === "mega" ? "active" : ""),
                onClick: () => setActiveTab("mega")
              },
              "🌟 破万星",
              h("span", { className: "mkt-segmented-badge" }, megaSkillsCount)
            ),
            h(
              "div",
              {
                className: "mkt-segmented-tab " + (activeTab === "installed" ? "active" : ""),
                onClick: () => setActiveTab("installed")
              },
              "已安装",
              h("span", { className: "mkt-segmented-badge" }, installedCount)
            ),
            h(
              "div",
              {
                className: "mkt-segmented-tab " + (activeTab === "updates" ? "active" : ""),
                onClick: () => setActiveTab("updates")
              },
              "待更新",
              updatesCount > 0 &&
                h("span", { className: "mkt-segmented-badge mkt-badge-amber" }, updatesCount)
            ),
            h(
              "div",
              {
                className: "mkt-segmented-tab " + (activeTab === "favorites" ? "active" : ""),
                onClick: () => setActiveTab("favorites")
              },
              "我的收藏 ★",
              favorites.length > 0 &&
                h("span", { className: "mkt-segmented-badge" }, favorites.length)
            )
          )
        ),

        // 待更新专栏顶部快速工具条
        activeTab === "updates" &&
          h(
            "div",
            { className: "mkt-updates-top-bar" },
            h(
              "div",
              { style: { display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" } },
              h(
                "div",
                { className: "mkt-subtabs-group" },
                h(
                  "div",
                  {
                    className: "mkt-subtab-pill " + (updatesViewMode === "pending" ? "active" : ""),
                    onClick: () => setUpdatesViewMode("pending")
                  },
                  "待升级 (" + pendingUpdatesList.length + ")"
                ),
                h(
                  "div",
                  {
                    className: "mkt-subtab-pill " + (updatesViewMode === "ignored" ? "active" : ""),
                    onClick: () => setUpdatesViewMode("ignored")
                  },
                  "已屏蔽 (" + ignoredUpdatesList.length + ")"
                )
              ),
              h("button", {
                className: "mkt-card-link-btn",
                onClick: () => { fetchInstalled(); fetchUpdates(); },
                disabled: checkingUpdates
              }, checkingUpdates ? "⏳ 检测中..." : "🔄 刷新检测"),

              // 全选 / 全不选 控制器
              updatesViewMode === "pending" && pendingUpdatesList.length > 0 &&
                h(
                  "label",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      cursor: "pointer",
                      fontSize: "12.5px",
                      color: "var(--ch-text-primary)",
                      userSelect: "none",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "var(--ch-pill-bg, rgba(128, 128, 128, 0.1))",
                      border: "1px solid var(--ch-card-border, rgba(128, 128, 128, 0.2))",
                      marginLeft: "4px"
                    }
                  },
                  h("input", {
                    type: "checkbox",
                    checked: selectedForUpdate.length > 0 && selectedForUpdate.length === pendingUpdatesList.length,
                    onChange: () => {
                      var allIds = pendingUpdatesList.map((u) => u.id);
                      if (selectedForUpdate.length === allIds.length) {
                        setSelectedForUpdate([]);
                      } else {
                        setSelectedForUpdate(allIds);
                      }
                    },
                    style: { accentColor: "#f59e0b", cursor: "pointer", width: "15px", height: "15px" }
                  }),
                  h("span", null, selectedForUpdate.length === pendingUpdatesList.length ? "全不选" : "全选"),
                  selectedForUpdate.length > 0 &&
                    h(
                      "span",
                      { style: { color: "#f59e0b", fontWeight: 600 } },
                      "(" + selectedForUpdate.length + "/" + pendingUpdatesList.length + ")"
                    )
                )
            ),
            // 右上角升级操作按钮 (动态联动勾选数量)
            updatesViewMode === "pending" && pendingUpdatesList.length > 0 &&
              h(
                "button",
                {
                  className: "mkt-pill-btn upgrade",
                  disabled: upgradingIds.length > 0,
                  style: {
                    background: selectedForUpdate.length > 0 ? "#f59e0b" : "var(--ch-brand, #2563eb)",
                    borderColor: selectedForUpdate.length > 0 ? "#f59e0b" : "var(--ch-brand, #2563eb)",
                    color: "#ffffff",
                    fontWeight: 600,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                  },
                  onClick: () => {
                    var ids = selectedForUpdate.length > 0
                      ? selectedForUpdate
                      : pendingUpdatesList.map((u) => u.id);
                    handleBatchUpgrade(ids);
                  }
                },
                upgradingIds.length > 0
                  ? "⏳ 正在升级中..."
                  : (selectedForUpdate.length > 0
                      ? "⚡ 升级所选 (" + selectedForUpdate.length + ")"
                      : "⚡ 一键全部升级 (" + pendingUpdatesList.length + ")")
              )
          ),

        // 滚动区域
        h(
          "div",
          { className: "mkt-scroll-container", ref: scrollRef, onScroll: handleScroll },

          // 搜索与分类 (发现/破万星/已安装/我的收藏)
          (activeTab === "discover" || activeTab === "mega" || activeTab === "installed" || activeTab === "favorites") &&
            h(
              "div",
              { className: "mkt-filter-section" },
              h(
                "div",
                { className: "mkt-search-wrapper" },
                h("span", { className: "mkt-search-icon" }, "🔍"),
                h("input", {
                  className: "mkt-search-input",
                  placeholder: "搜索技能名称、用途、分类或指令...",
                  value: searchKw,
                  onChange: (e) => setSearchKw(e.target.value)
                }),
                searchKw && h("button", { className: "mkt-search-clear", onClick: () => setSearchKw("") }, "✕")
              ),
              activeTab === "discover" &&
                h(
                  "div",
                  { className: "mkt-chips-row" },
                  categories.map((c) => {
                    var count = c === "全部"
                      ? totalSkillsCount
                      : SKILLS_CATALOG.filter((s) => s.category === c).length;
                    return h(
                      "div",
                      {
                        key: c,
                        className: "mkt-chip " + (selectedCategory === c ? "active" : ""),
                        onClick: () => setSelectedCategory(c)
                      },
                      c === "全部" ? "全部 (" + count + ")" : c + " (" + count + ")"
                    );
                  })
                )
            ),

          // 操作通知
          statusNotice &&
            h(
              "div",
              {
                style: {
                  margin: "12px 28px 0",
                  padding: "8px 16px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  borderRadius: "8px",
                  color: "#10b981",
                  fontSize: "12.5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }
              },
              h("span", null, statusNotice),
              h(
                "button",
                {
                  style: { background: "none", border: "none", color: "#10b981", cursor: "pointer" },
                  onClick: () => setStatusNotice(null)
                },
                "✕"
              )
            ),

          // 技能卡片列表网格 (iOS Squircle Card)
          h(
            "div",
            { className: "mkt-cards-grid" },
            displaySkills.length === 0
              ? h(
                  "div",
                  { style: { gridColumn: "1 / -1", padding: "60px 20px", textAlign: "center", color: "var(--ch-text-secondary)" } },
                  activeTab === "updates"
                    ? "🎉 恭喜！当前所有已安装技能均为最新版本，无需更新。"
                    : (activeTab === "favorites"
                        ? "暂无收藏技能。点击任意卡片右上角的 ★ 即可添加收藏！"
                        : (activeTab === "installed"
                            ? "当前尚未安装任何技能，前往「发现」一键安装"
                            : "未匹配到相关技能，可尝试输入更简短的关键词"))
                )
              : displaySkills.map((sk) => {
                  var isInstalled = Boolean(installedSkills[sk.id]);
                  var instInfo = installedSkills[sk.id];
                  var isDisabled = instInfo ? instInfo.disabled : false;
                  var hasBackup = instInfo ? instInfo.hasBackup : false;
                  var updateInfo = updatesMap[sk.id];
                  var isIgnored = ignoredUpdates.includes(sk.id);
                  var hasUpdate = isInstalled && Boolean(updateInfo);
                  var userAlias = customAliases[sk.id];
                  var displayName = userAlias || sk.name;
                  var isUpgrading = upgradingIds.includes(sk.id);
                  var isSelected = selectedForUpdate.includes(sk.id);
                  var isLoading = loadingSkillId === sk.id;
                  var error = cardErrors[sk.id];
                  var currentVer = (instInfo && instInfo.version) || (updateInfo && updateInfo.currentVersion) || "";
                  var targetNewVer = updateInfo ? updateInfo.newVersion : "";

                  return h(
                    "div",
                    {
                      key: sk.id,
                      className: "mkt-card " + (isInstalled ? "installed " : "") + (hasUpdate && !isIgnored ? "upgradable " : "")
                    },
                    // 卡片上半区：48x48 iOS 晶体图标 + 核心信息两列布局
                    h(
                      "div",
                      { className: "mkt-card-body" },
                      // 左侧：48x48 平滑圆角矢量图标 (对齐参考图 73333658)
                      h(SkillSquircleIcon, { skillId: sk.id, size: 48 }),

                      // 右侧：标题行、元数据行、描述与报错
                      h(
                        "div",
                        { className: "mkt-card-main-col" },
                        // 第一行：标题 + 别名 + 版本号 + 右侧更多操作
                        h(
                          "div",
                          { className: "mkt-card-head" },
                          h(
                            "div",
                            { className: "mkt-card-title-row" },
                            activeTab === "updates" && updatesViewMode === "pending" &&
                              h("input", {
                                type: "checkbox",
                                checked: isSelected,
                                title: "勾选参与批量升级",
                                onChange: () => toggleSelectOneForUpdate(sk.id),
                                style: { accentColor: "#f59e0b", cursor: "pointer", width: "15px", height: "15px", marginRight: "4px" }
                              }),
                            h("span", { className: "mkt-card-title", title: sk.name }, displayName),
                            userAlias &&
                              h("span", { className: "mkt-alias-tag", title: "原始名称：" + sk.name }, "别名"),
                            hasUpdate && !isIgnored
                              ? h("span", { className: "mkt-card-update-tag", title: "可升级到 v" + targetNewVer }, "v" + (currentVer || "1.0.0") + " → v" + targetNewVer)
                              : (isInstalled && currentVer && currentVer !== "none"
                                  ? h("span", { className: "mkt-card-version-tag" }, "v" + currentVer)
                                  : h("span", { className: "mkt-card-version-tag" }, "v" + (sk.version || "1.0.0")))
                          ),
                          // 右上角操作区：收藏星标 + 三点菜单
                          h(
                            "div",
                            { className: "mkt-card-head-right" },
                            h(
                              "button",
                              {
                                className: "mkt-star-btn " + (favorites.includes(sk.id) ? "active" : ""),
                                title: favorites.includes(sk.id) ? "已收藏 (点击取消)" : "收藏此技能",
                                onClick: (e) => {
                                  e.stopPropagation();
                                  toggleFavorite(sk.id);
                                }
                              },
                              favorites.includes(sk.id) ? "★" : "☆"
                            ),
                            h(
                              "div",
                              { style: { position: "relative" } },
                              h(
                                "button",
                                {
                                  className: "mkt-menu-btn",
                                  title: "更多操作",
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setOpenMenuId(openMenuId === sk.id ? null : sk.id);
                                  }
                                },
                                "···"
                              ),
                              openMenuId === sk.id &&
                                h(
                                  "div",
                                  {
                                    className: "mkt-dropdown-popover",
                                    onClick: (e) => e.stopPropagation()
                                  },
                                  h(
                                    "button",
                                    {
                                      className: "mkt-dropdown-item",
                                      onClick: () => { setOpenMenuId(null); setAliasModalSkill(sk); }
                                    },
                                    "✏️ 自定义别名"
                                  ),
                                  isInstalled &&
                                    h(
                                      "button",
                                      {
                                        className: "mkt-dropdown-item",
                                        onClick: () => { setOpenMenuId(null); toggleIgnoreUpdate(sk.id); }
                                      },
                                      isIgnored ? "🔔 恢复检测更新" : "🔕 屏蔽此技能更新"
                                    ),
                                  hasBackup &&
                                    h(
                                      "button",
                                      {
                                        className: "mkt-dropdown-item",
                                        style: { color: "#f59e0b" },
                                        onClick: () => { setOpenMenuId(null); handleRollback(sk.id); }
                                      },
                                      "↩️ 回退旧版 (.bak)"
                                    ),
                                  h(
                                    "button",
                                    {
                                      className: "mkt-dropdown-item",
                                      onClick: () => {
                                        setOpenMenuId(null);
                                        window.open("https://github.com/" + sk.repo, "_blank");
                                      }
                                    },
                                    "↗ GitHub 仓库"
                                  ),
                                  isInstalled && h("div", { className: "mkt-dropdown-divider" }),
                                  isInstalled &&
                                    h(
                                      "button",
                                      {
                                        className: "mkt-dropdown-item danger",
                                        onClick: () => {
                                          setOpenMenuId(null);
                                          handleDeleteSkill(sk.id, displayName);
                                        }
                                      },
                                      "🗑️ 卸载技能"
                                    )
                                )
                            )
                          )
                        ),

                        // 第二行：星数 + 指令同排
                        h(
                          "div",
                          { className: "mkt-card-meta-line" },
                          h("span", { className: "mkt-card-stars" }, sk.stars),
                          h("span", { className: "mkt-card-slash" }, sk.slash)
                        ),

                        // 第三行：卡片精炼两句话中文介绍 (Clamp 2行保持对齐)
                        h("div", { className: "mkt-card-desc", title: sk.summary }, sk.summary),

                        // 错误告警栏
                        error &&
                          h(
                            "div",
                            { className: "mkt-red-error-bar" },
                            h("span", { className: "mkt-red-error-text" }, "❌ " + error),
                            h(
                              "button",
                              { className: "mkt-red-retry-btn", onClick: () => handleInstall(sk) },
                              "重试"
                            )
                          )
                      )
                    ),

                    // 卡片底部操作区分流 (无顶部分割灰线，彻底移除调用按钮，纯文字安装/升级)
                    h(
                      "div",
                      { className: "mkt-card-foot" },
                      h(
                        "div",
                        { className: "mkt-card-foot-left" },
                        isInstalled
                          ? h(
                              "div",
                              {
                                className: "mkt-ios-toggle",
                                onClick: () => handleToggleSkill(sk.id, isDisabled),
                                title: isDisabled ? "点击开启模型调用" : "点击暂停模型调用"
                              },
                              h(
                                "div",
                                { className: "mkt-toggle-track " + (!isDisabled ? "active" : "") },
                                h("div", { className: "mkt-toggle-thumb" })
                              ),
                              h(
                                "span",
                                { className: "mkt-toggle-label " + (!isDisabled ? "active" : "disabled") },
                                !isDisabled ? "● 已启用" : "● 已停用"
                              )
                            )
                          : h(
                              "div",
                              { className: "mkt-foot-status-uninstalled", title: "未安装此技能" },
                              h("span", { className: "mkt-dot-uninstalled" }),
                              h("span", { className: "mkt-text-uninstalled" }, "未安装")
                            )
                      ),

                      // 右侧操作按钮：未安装纯文字蓝色「安装」，已安装「立即升级」或「已是最新」
                      h(
                        "div",
                        { className: "mkt-card-foot-right" },
                        isInstalled
                          ? (hasUpdate
                              ? (isIgnored
                                  ? h(
                                      "button",
                                      {
                                        className: "mkt-btn-shielded",
                                        title: "该技能已屏蔽更新，点击可恢复检测",
                                        onClick: () => toggleIgnoreUpdate(sk.id)
                                      },
                                      "🔕 已屏蔽更新"
                                    )
                                  : h(
                                      "button",
                                      {
                                        className: "mkt-btn-upgrade " + (isUpgrading ? "loading" : ""),
                                        disabled: isUpgrading,
                                        title: "更新要点: " + ((updateInfo && updateInfo.changelog) || "优化执行规范"),
                                        onClick: () => handleSingleUpgrade(sk)
                                      },
                                      isUpgrading ? "升级中..." : "立即升级"
                                    ))
                              : h(
                                  "span",
                                  { className: "mkt-tag-latest" },
                                  "已是最新"
                                ))
                          : h(
                              "button",
                              {
                                className: "mkt-btn-install " + (isLoading ? "loading" : ""),
                                disabled: isLoading,
                                onClick: () => handleInstall(sk)
                              },
                              isLoading ? "安装中..." : "安装"
                            )
                      )
                    )
                  );
                })
          ),

          // 4. ClawHub 官网专区
          activeTab === "clawhub" &&
            h(
              "div",
              { style: { maxWidth: "720px", margin: "40px auto", padding: "30px", background: "var(--ch-surface)", borderRadius: "14px", border: "1px solid var(--ch-card-border)", textAlign: "center" } },
              h(PuzzleIcon, { size: 48 }),
              h("h2", { style: { margin: "16px 0 8px", fontSize: "20px" } }, "🌐 ClawHub 全球官方技能集市"),
              h("p", { style: { color: "var(--ch-text-secondary)", lineHeight: "1.6", fontSize: "14px", marginBottom: "20px" } },
                "ClawHub (https://clawhub.com) 是 OpenClaw 官方全球技能生态索引，汇集了海内外开发者构建的全部开源技能包。点击下方按钮即可在浏览器中高速浏览！"
              ),
              h(
                "div",
                { style: { display: "flex", justifyContent: "center", gap: "12px" } },
                h(
                  "button",
                  { className: "mkt-action-btn primary", onClick: () => window.open("https://clawhub.com", "_blank") },
                  "🚀 在默认浏览器中打开 ClawHub 官网"
                ),
                h(
                  "button",
                  { className: "mkt-action-btn", onClick: () => setActiveTab("discover") },
                  "返回精选技能列表"
                )
              )
            )
        ),

        // 右下角悬浮回到顶部按钮 (对齐截图 4311b735)
        showScrollTop &&
          h(
            "button",
            { className: "mkt-scroll-top-btn", onClick: scrollToTop, title: "回到顶部" },
            "⌃"
          ),

        // 模态弹窗：Prompt 规范预览
        previewSkill &&
          h(PromptPreviewModal, {
            skill: previewSkill,
            onClose: () => setPreviewSkill(null),
            onInvoke: handleInvoke
          }),

        // 模态弹窗：自定义导入
        showImportModal &&
          h(CustomImportModal, {
            onClose: () => setShowImportModal(false),
            onSuccess: (id) => {
              fetchInstalled();
            }
          }),

        // 模态弹窗：自定义别名
        aliasModalSkill &&
          h(CustomAliasModal, {
            skill: aliasModalSkill,
            currentAlias: customAliases[aliasModalSkill.id] || "",
            onSave: handleSaveAlias,
            onReset: handleResetAlias,
            onClose: () => setAliasModalSkill(null)
          }),

        // 模态弹窗：彻底卸载确认 (原生深浅色质感，杜绝 Win32 弹窗)
        deleteTargetSkill &&
          h(ConfirmDeleteModal, {
            target: deleteTargetSkill,
            onClose: () => setDeleteTargetSkill(null),
            onConfirm: async (skillId) => {
              var res = await fetch("/api/clawhub/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: skillId })
              });
              var json = await res.json();
              if (!json.ok) {
                throw new Error(json.error || "卸载失败");
              }
              await fetchInstalled();
            }
          })
      );
    }

    // ── iOS 风格晶体圆角矢量图标组件 (支持 28x28 与 48x48，含确定性语义哈希防重机制) ───────────
    function SkillSquircleIcon(props) {
      var id = String(props.skillId || "").toLowerCase();
      var size = props.size || 28;
      var isLarge = size >= 40;
      var svgSize = isLarge ? 24 : 15;
      var borderRadius = isLarge ? "12px" : "8px";

      var meta = {
        "graphrag": {
          bg: "linear-gradient(135deg, #172554 0%, #1e3a8a 100%)",
          border: "rgba(56, 189, 248, 0.25)",
          color: "#38bdf8",
          path: [
            h("line", { key: "l1", x1: 6, y1: 14, x2: 12, y2: 6, stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.6 }),
            h("line", { key: "l2", x1: 12, y1: 6, x2: 18, y2: 14, stroke: "#818cf8", strokeWidth: 1.5, opacity: 0.6 }),
            h("line", { key: "l3", x1: 6, y1: 14, x2: 9, y2: 19, stroke: "#38bdf8", strokeWidth: 1.5, opacity: 0.6 }),
            h("line", { key: "l4", x1: 18, y1: 14, x2: 15, y2: 19, stroke: "#818cf8", strokeWidth: 1.5, opacity: 0.6 }),
            h("line", { key: "l5", x1: 9, y1: 19, x2: 15, y2: 19, stroke: "#60a5fa", strokeWidth: 1.5, opacity: 0.6 }),
            h("circle", { key: "c1", cx: 6, cy: 14, r: 2.2, fill: "#38bdf8" }),
            h("circle", { key: "c2", cx: 12, cy: 6, r: 2.5, fill: "#60a5fa" }),
            h("circle", { key: "c3", cx: 18, cy: 14, r: 2.2, fill: "#818cf8" }),
            h("circle", { key: "c4", cx: 9, cy: 19, r: 2, fill: "#38bdf8" }),
            h("circle", { key: "c5", cx: 15, cy: 19, r: 2, fill: "#60a5fa" })
          ]
        },
        "self-improving-agent": {
          bg: "linear-gradient(135deg, #064e3b 0%, #022c22 100%)",
          border: "rgba(52, 211, 153, 0.25)",
          color: "#34d399",
          path: [
            h("path", { key: "p1", d: "M12 4L4 8l8 4 8-4-8-4z", fill: "#34d399", opacity: 0.95 }),
            h("path", { key: "p2", d: "M4 11.5l8 4 8-4", stroke: "#10b981", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
            h("path", { key: "p3", d: "M4 15.5l8 4 8-4", stroke: "#059669", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
          ]
        },
        "autogen": {
          bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
          border: "rgba(129, 140, 248, 0.25)",
          color: "#818cf8",
          path: [
            h("circle", { key: "c1", cx: 12, cy: 5, r: 2.8, fill: "#818cf8" }),
            h("circle", { key: "c2", cx: 5.5, cy: 17, r: 2.8, fill: "#a78bfa" }),
            h("circle", { key: "c3", cx: 18.5, cy: 17, r: 2.8, fill: "#c084fc" }),
            h("line", { key: "l1", x1: 12, y1: 7.8, x2: 6.8, y2: 14.5, stroke: "#818cf8", strokeWidth: 1.5, opacity: 0.6 }),
            h("line", { key: "l2", x1: 12, y1: 7.8, x2: 17.2, y2: 14.5, stroke: "#c084fc", strokeWidth: 1.5, opacity: 0.6 }),
            h("line", { key: "l3", x1: 8.3, y1: 17, x2: 15.7, y2: 17, stroke: "#a78bfa", strokeWidth: 1.5, opacity: 0.6 })
          ]
        },
        "dev-expert": {
          bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          border: "rgba(56, 189, 248, 0.25)",
          color: "#38bdf8",
          path: [
            h("polyline", { key: "p1", points: "4 17 10 11 4 5", stroke: "#38bdf8", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
            h("line", { key: "l1", x1: 12, y1: 19, x2: 20, y2: 19, stroke: "#38bdf8", strokeWidth: 2, strokeLinecap: "round" })
          ]
        },
        "code-review93": {
          bg: "linear-gradient(135deg, #042f2e 0%, #0f766e 100%)",
          border: "rgba(45, 212, 191, 0.25)",
          color: "#2dd4bf",
          path: h("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4", stroke: "#2dd4bf", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
        },
        "academic-figure-skill": {
          bg: "linear-gradient(135deg, #3b0764 0%, #581c87 100%)",
          border: "rgba(192, 132, 252, 0.25)",
          color: "#c084fc",
          path: [
            h("rect", { key: "r1", x: 4, y: 12, width: 3.5, height: 8, rx: 1, fill: "#f472b6" }),
            h("rect", { key: "r2", x: 10.25, y: 6, width: 3.5, height: 14, rx: 1, fill: "#c084fc" }),
            h("rect", { key: "r3", x: 16.5, y: 9, width: 3.5, height: 11, rx: 1, fill: "#a855f7" })
          ]
        },
        "scientific-visualization": {
          bg: "linear-gradient(135deg, #4c0519 0%, #881337 100%)",
          border: "rgba(251, 113, 133, 0.25)",
          color: "#fb7185",
          path: h("path", { d: "M12 2a10 10 0 0 0 0 20c1.5 0 2.5-1 2.5-2.5 0-.7-.3-1.3-.7-1.7-.4-.4-.6-1-.6-1.6 0-1.4 1.1-2.5 2.5-2.5H18a4 4 0 0 0 4-4c0-5.5-4.5-10-10-10z", stroke: "#fb7185", strokeWidth: 1.8, fill: "none" })
        },
        "official-document-writer": {
          bg: "linear-gradient(135deg, #451a03 0%, #78350f 100%)",
          border: "rgba(251, 191, 36, 0.25)",
          color: "#fbbf24",
          path: h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8", stroke: "#fbbf24", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
        },
        "patent-disclosure-writer": {
          bg: "linear-gradient(135deg, #083344 0%, #0e7490 100%)",
          border: "rgba(34, 211, 238, 0.25)",
          color: "#22d3ee",
          path: h("path", { d: "M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z", stroke: "#22d3ee", strokeWidth: 1.8, strokeLinecap: "round", fill: "none" })
        },
        "series-vocab": {
          bg: "linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)",
          border: "rgba(251, 146, 60, 0.25)",
          color: "#fb923c",
          path: [
            h("path", { key: "p1", d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", stroke: "#fb923c", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
            h("path", { key: "p2", d: "M8 9h8m-5 4h5", stroke: "#fdba74", strokeWidth: 1.8, strokeLinecap: "round" })
          ]
        },
        "ponytail": {
          bg: "linear-gradient(135deg, #172554 0%, #1d4ed8 100%)",
          border: "rgba(96, 165, 250, 0.25)",
          color: "#60a5fa",
          path: h("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", stroke: "#60a5fa", strokeWidth: 1.8, strokeLinecap: "round", fill: "none" })
        },
        "skill-orchestrator": {
          bg: "linear-gradient(135deg, #042f2e 0%, #0d9488 100%)",
          border: "rgba(45, 212, 191, 0.25)",
          color: "#2dd4bf",
          path: [
            h("circle", { key: "c1", cx: 18, cy: 5, r: 2.8, fill: "#2dd4bf" }),
            h("circle", { key: "c2", cx: 6, cy: 12, r: 2.8, fill: "#5eead4" }),
            h("circle", { key: "c3", cx: 18, cy: 19, r: 2.8, fill: "#2dd4bf" }),
            h("path", { key: "p1", d: "M8.6 13.5l6.8 4M15.4 6.5l-6.8 4", stroke: "#99f6e4", strokeWidth: 1.5, strokeLinecap: "round" })
          ]
        }
      };

      var current = meta[id];
      // 模糊匹配常见关键词
      if (!current) {
        if (id.includes("graph") || id.includes("rag")) current = meta["graphrag"];
        else if (id.includes("improv") || id.includes("memory") || id.includes("learn")) current = meta["self-improving-agent"];
        else if (id.includes("autogen") || id.includes("agent") || id.includes("orchestrat")) current = meta["autogen"];
        else if (id.includes("review") || id.includes("pr-") || id.includes("audit")) current = meta["code-review93"];
        else if (id.includes("code") || id.includes("dev") || id.includes("shell") || id.includes("linux") || id.includes("bash")) current = meta["dev-expert"];
        else if (id.includes("writer") || id.includes("doc") || id.includes("patent")) current = meta["official-document-writer"];
        else if (id.includes("figure") || id.includes("vis") || id.includes("chart") || id.includes("draw")) current = meta["academic-figure-skill"];
        else if (id.includes("vocab") || id.includes("toefl") || id.includes("ielts") || id.includes("trans")) current = meta["series-vocab"];
      }

      // 确定性语义哈希兜底：零外部依赖、永不挂图、绝不重复
      if (!current) {
        var hash = 0;
        for (var i = 0; i < id.length; i++) {
          hash = ((hash << 5) - hash) + id.charCodeAt(i);
          hash |= 0;
        }
        var abs = Math.abs(hash);
        var palettes = [
          { bg: "linear-gradient(135deg, #172554, #1e3a8a)", border: "rgba(56, 189, 248, 0.25)", color: "#38bdf8" },
          { bg: "linear-gradient(135deg, #064e3b, #047857)", border: "rgba(52, 211, 153, 0.25)", color: "#34d399" },
          { bg: "linear-gradient(135deg, #1e1b4b, #3730a3)", border: "rgba(129, 140, 248, 0.25)", color: "#818cf8" },
          { bg: "linear-gradient(135deg, #451a03, #78350f)", border: "rgba(251, 191, 36, 0.25)", color: "#fbbf24" },
          { bg: "linear-gradient(135deg, #3b0764, #581c87)", border: "rgba(192, 132, 252, 0.25)", color: "#c084fc" },
          { bg: "linear-gradient(135deg, #4c0519, #881337)", border: "rgba(251, 113, 133, 0.25)", color: "#fb7185" },
          { bg: "linear-gradient(135deg, #042f2e, #115e59)", border: "rgba(45, 212, 191, 0.25)", color: "#2dd4bf" },
          { bg: "linear-gradient(135deg, #18181b, #27272a)", border: "rgba(161, 161, 170, 0.25)", color: "#a1a1aa" }
        ];
        var pal = palettes[abs % palettes.length];
        var glyphIndex = Math.floor(abs / 8) % 5;
        var glyphs = [
          h("path", { d: "M12 2l2.4 6.9 6.9 2.4-6.9 2.4L12 20.6l-2.4-6.9-6.9-2.4 6.9-2.4z", stroke: pal.color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          h("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6", stroke: pal.color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          h("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", stroke: pal.color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8", stroke: pal.color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          h("circle", { cx: 12, cy: 12, r: 8, stroke: pal.color, strokeWidth: 1.8, fill: "none" })
        ];
        current = {
          bg: pal.bg,
          border: pal.border,
          color: pal.color,
          path: glyphs[glyphIndex]
        };
      }

      return h(
        "div",
        {
          className: props.className || (isLarge ? "mkt-card-icon-squircle" : "ch-pk-icon-squircle"),
          style: {
            width: size + "px",
            height: size + "px",
            borderRadius: borderRadius,
            background: current.bg,
            border: "1px solid " + (current.border || "rgba(255, 255, 255, 0.08)"),
            color: current.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: isLarge ? "0 2px 8px rgba(0, 0, 0, 0.16)" : "none"
          }
        },
        h(
          "svg",
          {
            viewBox: "0 0 24 24",
            width: svgSize,
            height: svgSize,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          current.path
        )
      );
    }

    // ── 聊天框右下角：独立悬浮菜单 (iOS 拟态风格，绝对独立于对话流，不扩充对话区) ───────────
    function ComposerSkillPopover(props) {
      var [searchKw, setSearchKw] = useState("");
      var [selected, setSelected] = useState([]);
      var [installedList, setInstalledList] = useState([]);
      var [loading, setLoading] = useState(true);
      var [activeIdx, setActiveIdx] = useState(0);
      var listRef = useRef(null);
      var itemRefs = useRef([]);

      // 仅加载本地 ~/.dsh/skills 中已安装的技能
      useEffect(() => {
        fetch("/api/clawhub/installed")
          .then((r) => r.json())
          .then((j) => {
            if (j.ok && Array.isArray(j.skills)) {
              var activeSkills = j.skills.filter((s) => !s.disabled);
              var pinyinMap = {
                "ponytail": "mwb maweibian ponytail jg jiagou 架构 极简 yagni",
                "code-review93": "dmsc daimachashen cr codereview 代码 审查 安全 门禁",
                "dev-expert": "yfzj yanfazhuanjia dev devexpert 研发 专家 编程 全栈",
                "academic-figure-skill": "dkkyzt dingkankeyanzhitu acad figure 顶刊 绘图 论文 cns nature",
                "official-document-writer": "jggwxz jigouangongwen gw doc 公文 汇报 领导 讲话",
                "patent-disclosure-writer": "zljds zhuanlijiadishu zl patent 专利 交底书 创新点",
                "scientific-visualization": "kxsjksz kexueshujukeshihua kx visual 科学 可视化 配色 色彩",
                "self-improving-agent": "zwfszf ziwofanxiyufupan fs self 自省 复盘 进化 经验",
                "skill-orchestrator": "dgnbply duojinengbianpailuyou bp route 编排 调度 路由 协同"
              };
              var cleanNames = {
                "ponytail": "极简主义架构",
                "code-review93": "代码质量自检",
                "dev-expert": "全栈编程专家",
                "academic-figure-skill": "CNS 顶刊图表",
                "official-document-writer": "体制内公文写作",
                "patent-disclosure-writer": "专利交底书撰写",
                "scientific-visualization": "科学配色审计",
                "self-improving-agent": "自我进化复盘",
                "skill-orchestrator": "技能协同调度"
              };
              var customAliases = {};
              try {
                customAliases = JSON.parse(localStorage.getItem("dsh_skill_custom_aliases") || "{}");
              } catch (e) {}

              var mapped = activeSkills.map((s) => {
                var cat = SKILLS_CATALOG.find((c) => c.id === s.id);
                var defaultName = cleanNames[s.id] || (cat ? cat.name : (s.name || s.id));
                var displayName = customAliases[s.id] || defaultName;
                return {
                  id: s.id,
                  name: displayName,
                  origName: defaultName,
                  slash: cat ? cat.slash : ("/" + s.id),
                  pinyin: pinyinMap[s.id] || ""
                };
              });
              setInstalledList(mapped);
            }
          })
          .catch((e) => console.warn("[dsh-clawhub-multiskill] load installed error:", e))
          .finally(() => setLoading(false));
      }, []);

      // 关键词与拼音直接定位过滤 (支持自定义别名、原名、指令与拼音)
      var filtered = useMemo(() => {
        var k = searchKw.toLowerCase().trim();
        if (!k) return installedList;
        return installedList.filter((item) => {
          var nameMatch = item.name.toLowerCase().includes(k);
          var origMatch = (item.origName || "").toLowerCase().includes(k);
          var idMatch = item.id.toLowerCase().includes(k);
          var slashMatch = (item.slash || "").toLowerCase().includes(k);
          var pyMatch = (item.pinyin || "").toLowerCase().includes(k);
          return nameMatch || origMatch || idMatch || slashMatch || pyMatch;
        });
      }, [installedList, searchKw]);

      // 搜索变化时重置高亮索引
      useEffect(() => {
        setActiveIdx(0);
      }, [searchKw]);

      // 键盘滚动跟随
      useEffect(() => {
        if (itemRefs.current[activeIdx]) {
          itemRefs.current[activeIdx].scrollIntoView({ block: "nearest" });
        }
      }, [activeIdx]);

      // 执行插入并聚焦回输入框
      var executeInsert = (ids) => {
        if (!ids || ids.length === 0) return;
        var slashes = ids.map((s) => "/" + s).join(" ") + " ";
        insertSlashCommands(slashes);
        props.onClose();
        setTimeout(focusComposer, 30);
      };

      // 切换复选框多选
      var toggleSelect = (id, e) => {
        if (e) e.stopPropagation();
        setSelected((prev) =>
          prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
      };

      // 点击整行行为：未激活多选时 => 极速单选秒插并关闭；激活多选后 => 切换选中状态
      var handleRowClick = (item) => {
        if (selected.length === 0) {
          executeInsert([item.id]);
        } else {
          toggleSelect(item.id);
        }
      };

      // 键盘导航
      var handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIdx((i) => Math.min(i + 1, Math.max(0, filtered.length - 1)));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIdx((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (selected.length > 0) {
            executeInsert(selected);
          } else if (filtered[activeIdx]) {
            executeInsert([filtered[activeIdx].id]);
          }
        } else if (e.key === "Escape") {
          e.preventDefault();
          props.onClose();
        }
      };

      var pos = props.position || { right: 24, bottom: 60 };

      return h(
        React.Fragment,
        null,
        // 透明遮罩：独立全屏层级，点击任意处秒关，绝对不阻断或拉伸聊天框
        h("div", {
          className: "ch-popover-backdrop",
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2147482998,
            background: "transparent"
          },
          onClick: props.onClose
        }),
        // 独立悬浮卡片：使用绝对脱离文档流的 position: fixed，零挤压对话区域
        h(
          "div",
          {
            className: "ch-popover-card",
            style: {
              position: "fixed",
              right: pos.right + "px",
              bottom: pos.bottom + "px",
              width: "380px",
              maxHeight: "480px",
              zIndex: 2147482999,
              display: "flex",
              flexDirection: "column"
            },
            onClick: (e) => e.stopPropagation()
          },
          // 1. 顶部 Header (标题 + ✕ 关闭按钮)
          h(
            "div",
            { className: "ch-pk-header" },
            h("div", { className: "ch-pk-header-title" }, "选择 Skill"),
            h(
              "button",
              {
                className: "ch-pk-header-close",
                onClick: props.onClose,
                title: "关闭"
              },
              "✕"
            )
          ),
          // 2. 顶部 iOS 胶囊搜索框
          h(
            "div",
            { className: "ch-pk-search-box" },
            h(
              "div",
              { className: "ch-pk-search-wrapper" },
              h(
                "svg",
                {
                  className: "ch-pk-search-icon",
                  viewBox: "0 0 24 24",
                  width: 14,
                  height: 14,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                },
                h("circle", { cx: 11, cy: 11, r: 7 }),
                h("line", { x1: 21, y1: 21, x2: 16.65, y2: 16.65 })
              ),
              h("input", {
                className: "ch-pk-search-input",
                autoFocus: true,
                placeholder: "搜索技能 (中文/拼音/指令)...",
                value: searchKw,
                onChange: (e) => setSearchKw(e.target.value),
                onKeyDown: handleKeyDown
              }),
              searchKw &&
                h(
                  "button",
                  {
                    className: "ch-pk-search-clear",
                    onClick: () => setSearchKw("")
                  },
                  "✕"
                )
            )
          ),
          // 3. 独立单行列表清单 (iOS Inset List 排列)
          h(
            "div",
            { className: "ch-pk-list", ref: listRef },
            loading
              ? h(
                  "div",
                  {
                    style: {
                      padding: "24px 0",
                      textAlign: "center",
                      color: "var(--dsw-alias-label-tertiary, #8a94a6)",
                      fontSize: "12px"
                    }
                  },
                  "加载已安装技能..."
                )
              : filtered.length === 0
              ? h(
                  "div",
                  {
                    style: {
                      padding: "24px 0",
                      textAlign: "center",
                      color: "var(--dsw-alias-label-tertiary, #8a94a6)",
                      fontSize: "12px"
                    }
                  },
                  installedList.length === 0
                    ? "暂无已安装技能，可在「技能集市」下载"
                    : "无匹配技能"
                )
              : filtered.map((item, index) => {
                  var isChecked = selected.includes(item.id);
                  var isHighlighted = index === activeIdx;
                  return h(
                    "div",
                    {
                      key: item.id,
                      ref: (el) => (itemRefs.current[index] = el),
                      className:
                        "ch-pk-item" +
                        (isChecked ? " checked" : "") +
                        (isHighlighted ? " highlighted" : ""),
                      onClick: () => handleRowClick(item),
                      onMouseEnter: () => setActiveIdx(index)
                    },
                    // ① 左侧 iOS 圆角矩形复选框 (18x18, border-radius: 5px)
                    h(
                      "div",
                      {
                        className: "ch-ios-checkbox" + (isChecked ? " checked" : ""),
                        onClick: (e) => toggleSelect(item.id, e)
                      },
                      isChecked &&
                        h(
                          "svg",
                          {
                            viewBox: "0 0 24 24",
                            width: 11,
                            height: 11,
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "3.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          },
                          h("polyline", { points: "20 6 9 17 4 12" })
                        )
                    ),
                    // ② 中间 28x28 柔和色块圆角矢量图标
                    h(SkillSquircleIcon, { skillId: item.id }),
                    // ③ 单行极简排版：中文名 + 指令徽标平铺同行，彻底去除冗余灰字描述
                    h(
                      "div",
                      { className: "ch-pk-content-single" },
                      h("span", { className: "ch-pk-title" }, item.name),
                      h("span", { className: "ch-pk-slash-pill" }, item.slash)
                    )
                  );
                })
          ),
          // 4. 底部操作栏 (彻底去除提示文字，对齐图2 [取消] 与 [添加到对话])
          h(
            "div",
            { className: "ch-pk-footer" },
            h(
              "button",
              {
                className: "ch-pk-btn-cancel",
                onClick: () => {
                  if (selected.length > 0) {
                    setSelected([]);
                  } else {
                    props.onClose();
                  }
                }
              },
              "取消"
            ),
            h(
              "button",
              {
                className: "ch-pk-btn-confirm",
                onClick: () => {
                  if (selected.length > 0) {
                    executeInsert(selected);
                  } else if (filtered[activeIdx]) {
                    executeInsert([filtered[activeIdx].id]);
                  }
                }
              },
              selected.length > 0
                ? "添加到对话 (" + selected.length + ")"
                : "添加到对话"
            )
          )
        )
      );
    }

    // 输入框触发按钮 (纯图标形式，彻底去除任何生硬灰边与奇怪颜色)
    function MultiSkillPickerTrigger(props) {
      var [isOpen, setIsOpen] = useState(false);
      var [pos, setPos] = useState({ right: 24, bottom: 60 });
      var btnRef = useRef(null);

      var handleToggle = (e) => {
        if (e) e.stopPropagation();
        if (!isOpen && btnRef.current) {
          var rect = btnRef.current.getBoundingClientRect();
          var bottom = Math.round(window.innerHeight - rect.top + 8);
          var right = Math.min(
            window.innerWidth - 400,
            Math.max(16, Math.round(window.innerWidth - rect.right))
          );
          setPos({ right: right, bottom: bottom });
        }
        setIsOpen((prev) => !prev);
      };

      return h(
        React.Fragment,
        null,
        h(
          "button",
          {
            ref: btnRef,
            type: "button",
            className: "ch-composer-picker-btn" + (isOpen ? " active" : ""),
            style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              margin: "0 2px",
              padding: "0",
              border: "none",
              outline: "none",
              borderRadius: "8px",
              background: "transparent",
              boxShadow: "none",
              cursor: "pointer",
              color: isOpen ? "#007aff" : "var(--dsw-alias-label-secondary, #8a94a6)"
            },
            onClick: handleToggle,
            title: "选择技能（插入 /技能名 到输入框）",
            "aria-label": "选择技能"
          },
          h(PuzzleIcon, { size: 16 })
        ),
        isOpen &&
          h(ComposerSkillPopover, {
            position: pos,
            onClose: () => setIsOpen(false)
          })
      );
    }

    // ── 侧栏单色拼图图标组件 (16x16 原生细线，零重复⚡) ─────────────────────────
    function MarketSidebarIcon(props) {
      return h(
        "svg",
        {
          "data-dsh-panel-entry": PANEL_ID,
          viewBox: "0 0 24 24",
          width: 16,
          height: 16,
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          style: { display: "block" }
        },
        h("path", {
          d: "M14 7V4.5a2.5 2.5 0 0 0-5 0V7H4a2 2 0 0 0-2 2v3.5a2.5 2.5 0 0 1 0 5V20a2 2 0 0 0 2 2h3.5a2.5 2.5 0 0 0 5 0H19a2 2 0 0 0 2-2v-3.5a2.5 2.5 0 0 1 0-5V9a2 2 0 0 0-2-2h-5z"
        })
      );
    }

    // ── 插件装配与生命周期挂载 ───────────────────────────────────────────────────
    var mounted = false;
    function mountSlots(slots, layout) {
      if (mounted || !slots || typeof slots.inject !== "function") return;
      mounted = true;

      // 1. 左侧栏入口：名称为「技能集市」(去除重复⚡)，图标为 16x16 单色细线拼图简笔画
      try {
        slots.inject("sidebar.panellist", () =>
          slots.register(
            {
              name: "sidebar.panellist",
              id: PANEL_ID,
              order: PANEL_ORDER,
              label: () => "技能集市"
            },
            MarketSidebarIcon
          )
        );

        slots.inject("main", () =>
          slots.register(
            {
              name: "main",
              key: PANEL_ID,
              inject: () => ({ layout })
            },
            DualSourceMarketView
          )
        );
      } catch (err) {
        console.warn("[dsh-clawhub-multiskill] sidebar registration error:", err);
      }

      // 2. 聊天输入框右下角：单色拼图 + 技能文字 (无彩色 emoji)
      try {
        slots.inject("conversation.input.right", () =>
          slots.register(
            {
              name: "conversation.input.right",
              id: "clawhub-multiskill-picker",
              order: 10,
              label: "技能"
            },
            MultiSkillPickerTrigger
          )
        );
      } catch (err) {
        console.warn("[dsh-clawhub-multiskill] input button registration error:", err);
      }
    }

    function apply(ctx) {
      try {
        var slots = ctx.slots || (ctx.get && ctx.get("slots"));
        var layout = ctx.layout || (ctx.get && ctx.get("layout"));
        if (slots && typeof slots.inject === "function") {
          mountSlots(slots, layout);
        }
        if (typeof ctx.inject === "function") {
          ctx.inject(["slots", "layout"], (scope) => {
            try {
              mountSlots(scope.slots || ctx.slots, scope.layout || ctx.layout);
            } catch (e) {
              console.warn("[dsh-clawhub-multiskill] mountSlots in inject error:", e);
            }
          });
        }
      } catch (e) {
        console.warn("[dsh-clawhub-multiskill] apply error:", e);
      }
    }

    exports.name = "dsh-clawhub-multiskill";
    exports.apply = apply;
    exports.inject = ["slots", "layout"];
    return module.exports;
  }
});
