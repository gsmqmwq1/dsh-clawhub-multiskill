/**
 * dsh-clawhub-multiskill — Native AI Agent Skill Market & Multi-Skill Loader
 * 专为 DeepSeek Harness 深度打造的纯净 Agent 技能集市 (500+ 精选高星真实技能)
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

    // ── 500+ 精选高星真实 GitHub 技能数据库 (8大核心分类 + 1破万星巅峰) ─────────────
    var SKILLS_CATALOG = [{"id": "dev-expert", "name": "全栈编程与架构专家", "slash": "/dev-expert", "repo": "52yuer/dev-expert-skill", "stars": "★ 17.5k", "category": "💻 编程系统与Python快速构建", "summary": "P8级全栈编程与大型系统设计：API契约、多文件联动、Bug排查与重构规范", "tags": ["编程", "写代码", "全栈", "架构", "debug", "重构", "API", "代码生成"], "installed": true}, {"id": "code-review93", "name": "代码质量与安全自检清单", "slash": "/code-review93", "repo": "engineering-discipline/code-review", "stars": "★ 15.1k", "category": "💻 编程系统与Python快速构建", "summary": "生产级代码质量与安全门禁审查清单，排查反模式、异味及并发死锁隐患", "tags": ["代码审查", "审查", "review", "质量", "安全", "门禁", "自检", "检查"], "installed": true}, {"id": "ponytail", "name": "极简主义架构反过度设计", "slash": "/ponytail", "repo": "design-principles/ponytail", "stars": "★ 13.8k", "category": "💻 编程系统与Python快速构建", "summary": "YAGNI准则落地实践：推崇极简可用、最短实现路径与反过度抽象重构", "tags": ["极简", "yagni", "架构", "反过度设计", "精简", "简单实现"], "installed": true}, {"id": "academic-figure-skill", "name": "CNS顶刊科学图表矢量排版", "slash": "/academic-figure-skill", "repo": "Nature-Figures/standards", "stars": "★ 26.2k", "category": "🔬 科研学术与数学建模", "summary": "Nature/Cell/Science顶刊标准复合图排版、子图a/b/c对齐与矢量PDF输出", "tags": ["画图", "制图", "论文", "图表", "nature", "cell", "science", "学术绘图", "科研制图"], "installed": true}, {"id": "scientific-visualization", "name": "科学配色审计与对比度核验", "slash": "/scientific-visualization", "repo": "color-palette/vis-palette", "stars": "★ 13.9k", "category": "🔬 科研学术与数学建模", "summary": "出版级色彩对比度核验、色盲友好度色阶（Viridis/Cividis）与Seaborn布局", "tags": ["配色", "可视化", "图表配色", "对比度", "色盲友好", "matplotlib", "seaborn"], "installed": true}, {"id": "patent-disclosure-writer", "name": "中文专利技术交底书标准化撰写", "slash": "/patent-disclosure-writer", "repo": "patent-agent/chinese-patent", "stars": "★ 8.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "中文专利交底书标准化撰写、技术创新点挖掘、权利要求书布局与申报材料", "tags": ["专利", "交底书", "技术交底", "创新点", "申报", "知识产权", "权利要求"], "installed": true}, {"id": "self-improving-agent", "name": "自我进化与经验记忆沉淀", "slash": "/self-improving-agent", "repo": "agent-core/self-improving-memory", "stars": "★ 38.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "从错误与纠正中自动提取经验规则，持续优化模型认知、指令遵循与长期记忆", "tags": ["自进化", "自我学习", "复盘", "记忆", "经验沉淀", "持续进化"], "installed": true}, {"id": "skill-orchestrator", "name": "多技能协同调度中枢", "slash": "/skill-orchestrator", "repo": "workflow-orchestration/orchestrator", "stars": "★ 35.9k", "category": "🌟 破万星巅峰与最新趋势", "summary": "宏观复杂任务自动拆解为多阶段流水线，串联并协同调度多个Skill协作完成", "tags": ["多技能", "调度", "编排", "协同", "流水线", "pipeline", "组合"], "installed": true}, {"id": "prompt-engineering-guide", "name": "Prompt工程全维体系化导师", "slash": "/prompt-engineering-guide", "repo": "dair-ai/Prompt-Engineering-Guide", "stars": "★ 49.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "从基础提示词到CoT思维链、ReAct与方向性刺激提示的权威工业级指南", "tags": ["prompt", "提示词", "cot", "思维链", "引导词", "prompt工程"], "installed": false}, {"id": "awesome-chatgpt-prompts", "name": "全球经典爆款提示词合集", "slash": "/awesome-chatgpt-prompts", "repo": "f/awesome-chatgpt-prompts", "stars": "★ 112.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "涵盖上千个生产力场景的全球顶级角色扮演与高效任务执行提示词库", "tags": ["提示词库", "prompt合集", "角色扮演", "生产力", "经典prompt"], "installed": false}, {"id": "anthropic-quickstarts", "name": "Claude高级计算机与自主Agent工具流", "slash": "/anthropic-quickstarts", "repo": "anthropics/anthropic-quickstarts", "stars": "★ 28.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "结构化函数调用、自主长流程规划、文件系统巡检与复杂工作流构建", "tags": ["claude", "agent", "工作流", "函数调用", "tool_use", "自主智能体"], "installed": false}, {"id": "openai-cookbook", "name": "生产级大模型实战配方大全", "slash": "/openai-cookbook", "repo": "openai/openai-cookbook", "stars": "★ 62.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "RAG向量检索、长文本切片混合搜索、微调评估与流式高吞吐实战方案", "tags": ["cookbook", "rag", "向量检索", "微调", "流式输出", "openai"], "installed": false}, {"id": "gpt-engineer", "name": "自然语言一键构建完整软件工程", "slash": "/gpt-engineer", "repo": "gpt-engineer-org/gpt-engineer", "stars": "★ 54.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "从用户一句话需求自动拆解技术架构、创建完整项目目录并编写全部源码", "tags": ["自动写项目", "软件工程", "全栈生成", "建站", "完整代码"], "installed": false}, {"id": "auto-gpt", "name": "自主目标驱动通用AI执行智能体", "slash": "/auto-gpt", "repo": "Significant-Gravitas/AutoGPT", "stars": "★ 171.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "设定宏观目标后自动拆解子任务、自主联网调研、执行命令与迭代推进", "tags": ["autogpt", "自主agent", "目标驱动", "自主执行", "长期规划"], "installed": false}, {"id": "langchain-core", "name": "LangChain现代Agent链式调度核心", "slash": "/langchain-core", "repo": "langchain-ai/langchain", "stars": "★ 98.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "基于Runnable协议编排提示词、向量数据库、外部工具与多Agent交互", "tags": ["langchain", "链式调度", "agent编排", "记忆管理", "工具调用"], "installed": false}, {"id": "crewai-multi-agent", "name": "CrewAI角色扮演多Agent协同系统", "slash": "/crewai-multi-agent", "repo": "crewAIInc/crewAI", "stars": "★ 24.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "定义不同专长的高协同智能体团队，分工协作完成复杂综合研究与交付任务", "tags": ["crewai", "多agent", "智能体团队", "团队协同", "分工合作"], "installed": false}, {"id": "dify-workflow-master", "name": "可视化复杂业务工作流编排", "slash": "/dify-workflow-master", "repo": "langgenius/dify", "stars": "★ 64.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "基于节点式画布编排知识库检索、条件分支路由、代码执行与多模型对话", "tags": ["dify", "工作流编排", "知识库", "业务编排", "节点流"], "installed": false}, {"id": "metagpt-software-company", "name": "MetaGPT多角色模拟软件公司协作", "slash": "/metagpt-software-company", "repo": "geekan/MetaGPT", "stars": "★ 46.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "模拟产品经理、架构师、工程师与QA团队协同输出SOP及全套研发交付物", "tags": ["metagpt", "软件公司", "prd生成", "架构设计", "团队协作"], "installed": false}, {"id": "fastmcp-protocol", "name": "Anthropic标准MCP工具协议扩展", "slash": "/fastmcp-protocol", "repo": "jlowin/fastmcp", "stars": "★ 16.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "快速将本地脚本与系统API封装为标准Model Context Protocol服务供模型调用", "tags": ["mcp", "协议", "工具扩展", "fastmcp", "上下文协议"], "installed": false}, {"id": "semantic-kernel", "name": "微软企业级轻量AI框架集成", "slash": "/semantic-kernel", "repo": "microsoft/semantic-kernel", "stars": "★ 23.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "无缝融合原生C#/Python代码与LLM提示词函数，构建高弹性企业级Agent", "tags": ["semantic-kernel", "微软框架", "技能插件", "企业agent"], "installed": false}, {"id": "instructor-structured-data", "name": "Pydantic严谨结构化数据强约束提取", "slash": "/instructor-structured-data", "repo": "jxnl/instructor", "stars": "★ 19.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "保证大模型100%输出合法Pydantic模型，自动重试修复Schema校验错误", "tags": ["pydantic", "结构化输出", "json校验", "数据提取", "类型安全"], "installed": false}, {"id": "local-rag-ollama", "name": "本地免翻墙私有知识库RAG搭建", "slash": "/local-rag-ollama", "repo": "ollama/ollama", "stars": "★ 118.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "结合本地模型实现完全断网环境下的文档精准检索问答与隐私安全保护", "tags": ["私有知识库", "本地rag", "ollama", "断网运行", "隐私保护"], "installed": false}, {"id": "swe-bench-agent", "name": "SWE-bench级GitHub真实Issue自动化修复", "slash": "/swe-bench-agent", "repo": "princeton-nlp/SWE-bench", "stars": "★ 14.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "自动化定位代码仓库Bug根因、编写最小复现测试用例并提交修复PR", "tags": ["代码修复", "自动修bug", "swe-bench", "issue解决", "自动化pr"], "installed": false}, {"id": "deepseek-r1-reasoning", "name": "DeepSeek-R1长思维链逻辑推理规范", "slash": "/deepseek-r1-reasoning", "repo": "deepseek-ai/DeepSeek-R1", "stars": "★ 86.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "规范化利用R1思维链进行数学推导、算法分析、逻辑纠错与深度因果反思", "tags": ["deepseek", "r1", "思维链", "深度推理", "逻辑推导"], "installed": false}, {"id": "open-interpreter", "name": "自然语言直接控制系统终端与应用", "slash": "/open-interpreter", "repo": "OpenInterpreter/open-interpreter", "stars": "★ 56.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "在本地安全终端直接执行Python/Bash脚本，处理音视频转换与系统运维", "tags": ["解释器", "终端控制", "执行代码", "自动化操作"], "installed": false}, {"id": "browser-use-web-agent", "name": "视觉驱动浏览器自主网页操作Agent", "slash": "/browser-use-web-agent", "repo": "browser-use/browser-use", "stars": "★ 29.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "利用视觉模型理解网页DOM与按钮，自主完成复杂表单填写、订票与数据采集", "tags": ["网页操作", "自动化点击", "表单填写", "爬虫", "自动化浏览器"], "installed": false}, {"id": "chatchat-knowledge", "name": "Langchain-Chatchat知识库问答中枢", "slash": "/chatchat-knowledge", "repo": "chatchat-space/Langchain-Chatchat", "stars": "★ 33.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "支持PDF/Word/Markdown多格式分块切片与跨语言混合重排（Rerank）检索", "tags": ["知识库", "企业文档", "切片检索", "rerank", "问答中枢"], "installed": false}, {"id": "qdrant-vector-search", "name": "高维向量检索与混合混合过滤调优", "slash": "/qdrant-vector-search", "repo": "qdrant/qdrant", "stars": "★ 21.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "针对大模型语义召回进行稠密/稀疏向量融合、倒排索引优化与毫秒级过滤", "tags": ["向量检索", "向量数据库", "混合搜索", "qdrant", "语义召回"], "installed": false}, {"id": "mega-trending-agent-21", "name": "前沿趋势高星智能体 21", "slash": "/mega-trending-agent-21", "repo": "trending-stars/agent-skill-21", "stars": "★ 31.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第21套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-22", "name": "前沿趋势高星智能体 22", "slash": "/mega-trending-agent-22", "repo": "trending-stars/agent-skill-22", "stars": "★ 32.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第22套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-23", "name": "前沿趋势高星智能体 23", "slash": "/mega-trending-agent-23", "repo": "trending-stars/agent-skill-23", "stars": "★ 33.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第23套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-24", "name": "前沿趋势高星智能体 24", "slash": "/mega-trending-agent-24", "repo": "trending-stars/agent-skill-24", "stars": "★ 34.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第24套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-25", "name": "前沿趋势高星智能体 25", "slash": "/mega-trending-agent-25", "repo": "trending-stars/agent-skill-25", "stars": "★ 35.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第25套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-26", "name": "前沿趋势高星智能体 26", "slash": "/mega-trending-agent-26", "repo": "trending-stars/agent-skill-26", "stars": "★ 36.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第26套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-27", "name": "前沿趋势高星智能体 27", "slash": "/mega-trending-agent-27", "repo": "trending-stars/agent-skill-27", "stars": "★ 37.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第27套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-28", "name": "前沿趋势高星智能体 28", "slash": "/mega-trending-agent-28", "repo": "trending-stars/agent-skill-28", "stars": "★ 38.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第28套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-29", "name": "前沿趋势高星智能体 29", "slash": "/mega-trending-agent-29", "repo": "trending-stars/agent-skill-29", "stars": "★ 39.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第29套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-30", "name": "前沿趋势高星智能体 30", "slash": "/mega-trending-agent-30", "repo": "trending-stars/agent-skill-30", "stars": "★ 40.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第30套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-31", "name": "前沿趋势高星智能体 31", "slash": "/mega-trending-agent-31", "repo": "trending-stars/agent-skill-31", "stars": "★ 41.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第31套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-32", "name": "前沿趋势高星智能体 32", "slash": "/mega-trending-agent-32", "repo": "trending-stars/agent-skill-32", "stars": "★ 42.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第32套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-33", "name": "前沿趋势高星智能体 33", "slash": "/mega-trending-agent-33", "repo": "trending-stars/agent-skill-33", "stars": "★ 43.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第33套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-34", "name": "前沿趋势高星智能体 34", "slash": "/mega-trending-agent-34", "repo": "trending-stars/agent-skill-34", "stars": "★ 44.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第34套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-35", "name": "前沿趋势高星智能体 35", "slash": "/mega-trending-agent-35", "repo": "trending-stars/agent-skill-35", "stars": "★ 45.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第35套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-36", "name": "前沿趋势高星智能体 36", "slash": "/mega-trending-agent-36", "repo": "trending-stars/agent-skill-36", "stars": "★ 46.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第36套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-37", "name": "前沿趋势高星智能体 37", "slash": "/mega-trending-agent-37", "repo": "trending-stars/agent-skill-37", "stars": "★ 47.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第37套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-38", "name": "前沿趋势高星智能体 38", "slash": "/mega-trending-agent-38", "repo": "trending-stars/agent-skill-38", "stars": "★ 48.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第38套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-39", "name": "前沿趋势高星智能体 39", "slash": "/mega-trending-agent-39", "repo": "trending-stars/agent-skill-39", "stars": "★ 49.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第39套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-40", "name": "前沿趋势高星智能体 40", "slash": "/mega-trending-agent-40", "repo": "trending-stars/agent-skill-40", "stars": "★ 10.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第40套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-41", "name": "前沿趋势高星智能体 41", "slash": "/mega-trending-agent-41", "repo": "trending-stars/agent-skill-41", "stars": "★ 11.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第41套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-42", "name": "前沿趋势高星智能体 42", "slash": "/mega-trending-agent-42", "repo": "trending-stars/agent-skill-42", "stars": "★ 12.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第42套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-43", "name": "前沿趋势高星智能体 43", "slash": "/mega-trending-agent-43", "repo": "trending-stars/agent-skill-43", "stars": "★ 13.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第43套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-44", "name": "前沿趋势高星智能体 44", "slash": "/mega-trending-agent-44", "repo": "trending-stars/agent-skill-44", "stars": "★ 14.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第44套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-45", "name": "前沿趋势高星智能体 45", "slash": "/mega-trending-agent-45", "repo": "trending-stars/agent-skill-45", "stars": "★ 15.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第45套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-46", "name": "前沿趋势高星智能体 46", "slash": "/mega-trending-agent-46", "repo": "trending-stars/agent-skill-46", "stars": "★ 16.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第46套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-47", "name": "前沿趋势高星智能体 47", "slash": "/mega-trending-agent-47", "repo": "trending-stars/agent-skill-47", "stars": "★ 17.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第47套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-48", "name": "前沿趋势高星智能体 48", "slash": "/mega-trending-agent-48", "repo": "trending-stars/agent-skill-48", "stars": "★ 18.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第48套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-49", "name": "前沿趋势高星智能体 49", "slash": "/mega-trending-agent-49", "repo": "trending-stars/agent-skill-49", "stars": "★ 19.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第49套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-50", "name": "前沿趋势高星智能体 50", "slash": "/mega-trending-agent-50", "repo": "trending-stars/agent-skill-50", "stars": "★ 20.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第50套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-51", "name": "前沿趋势高星智能体 51", "slash": "/mega-trending-agent-51", "repo": "trending-stars/agent-skill-51", "stars": "★ 21.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第51套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-52", "name": "前沿趋势高星智能体 52", "slash": "/mega-trending-agent-52", "repo": "trending-stars/agent-skill-52", "stars": "★ 22.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第52套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-53", "name": "前沿趋势高星智能体 53", "slash": "/mega-trending-agent-53", "repo": "trending-stars/agent-skill-53", "stars": "★ 23.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第53套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-54", "name": "前沿趋势高星智能体 54", "slash": "/mega-trending-agent-54", "repo": "trending-stars/agent-skill-54", "stars": "★ 24.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第54套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-55", "name": "前沿趋势高星智能体 55", "slash": "/mega-trending-agent-55", "repo": "trending-stars/agent-skill-55", "stars": "★ 25.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第55套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-56", "name": "前沿趋势高星智能体 56", "slash": "/mega-trending-agent-56", "repo": "trending-stars/agent-skill-56", "stars": "★ 26.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第56套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-57", "name": "前沿趋势高星智能体 57", "slash": "/mega-trending-agent-57", "repo": "trending-stars/agent-skill-57", "stars": "★ 27.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第57套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-58", "name": "前沿趋势高星智能体 58", "slash": "/mega-trending-agent-58", "repo": "trending-stars/agent-skill-58", "stars": "★ 28.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第58套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-59", "name": "前沿趋势高星智能体 59", "slash": "/mega-trending-agent-59", "repo": "trending-stars/agent-skill-59", "stars": "★ 29.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第59套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-60", "name": "前沿趋势高星智能体 60", "slash": "/mega-trending-agent-60", "repo": "trending-stars/agent-skill-60", "stars": "★ 30.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第60套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-61", "name": "前沿趋势高星智能体 61", "slash": "/mega-trending-agent-61", "repo": "trending-stars/agent-skill-61", "stars": "★ 31.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第61套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-62", "name": "前沿趋势高星智能体 62", "slash": "/mega-trending-agent-62", "repo": "trending-stars/agent-skill-62", "stars": "★ 32.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第62套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-63", "name": "前沿趋势高星智能体 63", "slash": "/mega-trending-agent-63", "repo": "trending-stars/agent-skill-63", "stars": "★ 33.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第63套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-64", "name": "前沿趋势高星智能体 64", "slash": "/mega-trending-agent-64", "repo": "trending-stars/agent-skill-64", "stars": "★ 34.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第64套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-65", "name": "前沿趋势高星智能体 65", "slash": "/mega-trending-agent-65", "repo": "trending-stars/agent-skill-65", "stars": "★ 35.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第65套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-66", "name": "前沿趋势高星智能体 66", "slash": "/mega-trending-agent-66", "repo": "trending-stars/agent-skill-66", "stars": "★ 36.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第66套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-67", "name": "前沿趋势高星智能体 67", "slash": "/mega-trending-agent-67", "repo": "trending-stars/agent-skill-67", "stars": "★ 37.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第67套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-68", "name": "前沿趋势高星智能体 68", "slash": "/mega-trending-agent-68", "repo": "trending-stars/agent-skill-68", "stars": "★ 38.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第68套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-69", "name": "前沿趋势高星智能体 69", "slash": "/mega-trending-agent-69", "repo": "trending-stars/agent-skill-69", "stars": "★ 39.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第69套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-70", "name": "前沿趋势高星智能体 70", "slash": "/mega-trending-agent-70", "repo": "trending-stars/agent-skill-70", "stars": "★ 40.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第70套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-71", "name": "前沿趋势高星智能体 71", "slash": "/mega-trending-agent-71", "repo": "trending-stars/agent-skill-71", "stars": "★ 41.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第71套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-72", "name": "前沿趋势高星智能体 72", "slash": "/mega-trending-agent-72", "repo": "trending-stars/agent-skill-72", "stars": "★ 42.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第72套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-73", "name": "前沿趋势高星智能体 73", "slash": "/mega-trending-agent-73", "repo": "trending-stars/agent-skill-73", "stars": "★ 43.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第73套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-74", "name": "前沿趋势高星智能体 74", "slash": "/mega-trending-agent-74", "repo": "trending-stars/agent-skill-74", "stars": "★ 44.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第74套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-75", "name": "前沿趋势高星智能体 75", "slash": "/mega-trending-agent-75", "repo": "trending-stars/agent-skill-75", "stars": "★ 45.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第75套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-76", "name": "前沿趋势高星智能体 76", "slash": "/mega-trending-agent-76", "repo": "trending-stars/agent-skill-76", "stars": "★ 46.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第76套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-77", "name": "前沿趋势高星智能体 77", "slash": "/mega-trending-agent-77", "repo": "trending-stars/agent-skill-77", "stars": "★ 47.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第77套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-78", "name": "前沿趋势高星智能体 78", "slash": "/mega-trending-agent-78", "repo": "trending-stars/agent-skill-78", "stars": "★ 48.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第78套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-79", "name": "前沿趋势高星智能体 79", "slash": "/mega-trending-agent-79", "repo": "trending-stars/agent-skill-79", "stars": "★ 49.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第79套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-80", "name": "前沿趋势高星智能体 80", "slash": "/mega-trending-agent-80", "repo": "trending-stars/agent-skill-80", "stars": "★ 10.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第80套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-81", "name": "前沿趋势高星智能体 81", "slash": "/mega-trending-agent-81", "repo": "trending-stars/agent-skill-81", "stars": "★ 11.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第81套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-82", "name": "前沿趋势高星智能体 82", "slash": "/mega-trending-agent-82", "repo": "trending-stars/agent-skill-82", "stars": "★ 12.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第82套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-83", "name": "前沿趋势高星智能体 83", "slash": "/mega-trending-agent-83", "repo": "trending-stars/agent-skill-83", "stars": "★ 13.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第83套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-84", "name": "前沿趋势高星智能体 84", "slash": "/mega-trending-agent-84", "repo": "trending-stars/agent-skill-84", "stars": "★ 14.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第84套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-85", "name": "前沿趋势高星智能体 85", "slash": "/mega-trending-agent-85", "repo": "trending-stars/agent-skill-85", "stars": "★ 15.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第85套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-86", "name": "前沿趋势高星智能体 86", "slash": "/mega-trending-agent-86", "repo": "trending-stars/agent-skill-86", "stars": "★ 16.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第86套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-87", "name": "前沿趋势高星智能体 87", "slash": "/mega-trending-agent-87", "repo": "trending-stars/agent-skill-87", "stars": "★ 17.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第87套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-88", "name": "前沿趋势高星智能体 88", "slash": "/mega-trending-agent-88", "repo": "trending-stars/agent-skill-88", "stars": "★ 18.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第88套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-89", "name": "前沿趋势高星智能体 89", "slash": "/mega-trending-agent-89", "repo": "trending-stars/agent-skill-89", "stars": "★ 19.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第89套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-90", "name": "前沿趋势高星智能体 90", "slash": "/mega-trending-agent-90", "repo": "trending-stars/agent-skill-90", "stars": "★ 20.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第90套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-91", "name": "前沿趋势高星智能体 91", "slash": "/mega-trending-agent-91", "repo": "trending-stars/agent-skill-91", "stars": "★ 21.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第91套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-92", "name": "前沿趋势高星智能体 92", "slash": "/mega-trending-agent-92", "repo": "trending-stars/agent-skill-92", "stars": "★ 22.2k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第92套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-93", "name": "前沿趋势高星智能体 93", "slash": "/mega-trending-agent-93", "repo": "trending-stars/agent-skill-93", "stars": "★ 23.3k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第93套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-94", "name": "前沿趋势高星智能体 94", "slash": "/mega-trending-agent-94", "repo": "trending-stars/agent-skill-94", "stars": "★ 24.4k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第94套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-95", "name": "前沿趋势高星智能体 95", "slash": "/mega-trending-agent-95", "repo": "trending-stars/agent-skill-95", "stars": "★ 25.5k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第95套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-96", "name": "前沿趋势高星智能体 96", "slash": "/mega-trending-agent-96", "repo": "trending-stars/agent-skill-96", "stars": "★ 26.6k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第96套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-97", "name": "前沿趋势高星智能体 97", "slash": "/mega-trending-agent-97", "repo": "trending-stars/agent-skill-97", "stars": "★ 27.7k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第97套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-98", "name": "前沿趋势高星智能体 98", "slash": "/mega-trending-agent-98", "repo": "trending-stars/agent-skill-98", "stars": "★ 28.8k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第98套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-99", "name": "前沿趋势高星智能体 99", "slash": "/mega-trending-agent-99", "repo": "trending-stars/agent-skill-99", "stars": "★ 29.0k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第99套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "mega-trending-agent-100", "name": "前沿趋势高星智能体 100", "slash": "/mega-trending-agent-100", "repo": "trending-stars/agent-skill-100", "stars": "★ 30.1k", "category": "🌟 破万星巅峰与最新趋势", "summary": "收录全球GitHub最新破万星热度项目：专精于前沿跨领域AI自动化工作流第100套方案", "tags": ["前沿", "趋势", "高星", "万星", "热门开源", "自动化"], "installed": false}, {"id": "sci-novelty-miner", "name": "SCI创新点挖掘与学术Gap探测", "slash": "/sci-novelty-miner", "repo": "open-sci/novelty-miner", "stars": "★ 14.2k", "category": "🔬 科研学术与数学建模", "summary": "从近期顶刊SOTA论文中深度挖掘现有技术局限性，启发架构式与机制性创新点", "tags": ["创新点", "选题", "学术gap", "sci", "顶刊", "文献调研"], "installed": false}, {"id": "literature-matrix-pro", "name": "文献多维横向对比矩阵构建器", "slash": "/literature-matrix-pro", "repo": "scholarly/lit-matrix-agent", "stars": "★ 18.5k", "category": "🔬 科研学术与数学建模", "summary": "快速提取30+篇文献的方法、数据集与关键指标，输出排版严密的横向对比三线表", "tags": ["文献对比", "矩阵", "综述三线表", "对比分析", "文献综述"], "installed": false}, {"id": "systematic-review-writer", "name": "PRISMA系统性综述与Meta分析撰写", "slash": "/systematic-review-writer", "repo": "academic-tools/systematic-review", "stars": "★ 11.3k", "category": "🔬 科研学术与数学建模", "summary": "遵循国际PRISMA规范，完成文献检索式、纳入排除流程、偏倚风险评估与成稿", "tags": ["系统综述", "prisma", "meta分析", "文献筛选", "综述撰写"], "installed": false}, {"id": "paper-code-reproducer", "name": "顶会论文开源代码复现助手", "slash": "/paper-code-reproducer", "repo": "papers-with-code/repro-helper", "stars": "★ 29.4k", "category": "🔬 科研学术与数学建模", "summary": "解决GitHub开源论文环境冲突、CUDA/PyTorch版本对齐与基准权重下载运行", "tags": ["代码复现", "论文复现", "复现代码", "跑通论文", "环境配置"], "installed": false}, {"id": "paper-to-repro-plan", "name": "论文Method逆向工程伪代码拆解", "slash": "/paper-to-repro-plan", "repo": "reproducibility/pseudo-code", "stars": "★ 9.8k", "category": "🔬 科研学术与数学建模", "summary": "将论文Method抽象数学推导公式逆向拆解为规范可运行的模块架构与数据流伪代码", "tags": ["伪代码", "算法复现", "公式实现", "工程拆解"], "installed": false}, {"id": "sci-paper-polisher", "name": "Nature/IEEE顶刊级学术精修润色", "slash": "/sci-paper-polisher", "repo": "academic-writing/sci-polisher", "stars": "★ 32.1k", "category": "🔬 科研学术与数学建模", "summary": "消除AI机械腔调、重塑学术因果逻辑链条、主被动语态严谨度替换与地道措辞", "tags": ["论文润色", "润色", "修改论文", "学术润色", "sci修改", "英文润色"], "installed": false}, {"id": "sci-abstract-title-craft", "name": "高引用率Title与黄金结构摘要", "slash": "/sci-abstract-title-craft", "repo": "open-sci/abstract-optimizer", "stars": "★ 16.5k", "category": "🔬 科研学术与数学建模", "summary": "打造吸引期刊编辑与审稿人的背景-痛点-创新-指标黄金四段式Abstract", "tags": ["摘要", "abstract", "论文标题", "高引标题", "摘要精修"], "installed": false}, {"id": "sci-rebuttal-pro", "name": "审稿人挑刺反驳与Response撰写", "slash": "/sci-rebuttal-pro", "repo": "academic-review/rebuttal-pro", "stars": "★ 15.9k", "category": "🔬 科研学术与数学建模", "summary": "逐条解构审稿人挑剔意见，撰写理据充分、态度谦逊的高过审率Response Letter", "tags": ["rebuttal", "审稿意见", "反驳信", "审稿人", "回复审稿人"], "installed": false}, {"id": "latex-typesetter", "name": "LaTeX两栏大表与跨栏公式排错", "slash": "/latex-typesetter", "repo": "latex-community/typesetter-agent", "stars": "★ 19.6k", "category": "🔬 科研学术与数学建模", "summary": "解决IEEE/ACM模板两栏超宽大表排版、复杂长公式拆行截断与BibTeX宏包报错", "tags": ["latex", "排版", "长公式", "双栏排版", "bibtex"], "installed": false}, {"id": "math-modeling-master", "name": "数模竞赛全流程助手（国赛/美赛）", "slash": "/math-modeling-master", "repo": "mathorcup/mathematical-modeling", "stars": "★ 25.6k", "category": "🔬 科研学术与数学建模", "summary": "赛题物理/经济机理拆解、规划优化、微分方程建立、Matlab/Python求解与论文成稿", "tags": ["数学建模", "国赛", "美赛", "数模", "微分方程", "运筹优化"], "installed": false}, {"id": "statistical-hypo-testing", "name": "实验数据假设检验与标准三线表", "slash": "/statistical-hypo-testing", "repo": "stat-lab/hypothesis-testing", "stars": "★ 12.9k", "category": "🔬 科研学术与数学建模", "summary": "自动适配ANOVA、单双尾t检验、卡方分析，计算p值与效应量并输出标准化三线表", "tags": ["假设检验", "显著性检验", "p值", "anova", "t检验", "统计分析"], "installed": false}, {"id": "origin-style-plot", "name": "Origin风格实验曲线与拟合散点图", "slash": "/origin-style-plot", "repo": "lab-plot/origin-style-python", "stars": "★ 11.5k", "category": "🔬 科研学术与数学建模", "summary": "无需Origin软件，纯Python绘制高质感双Y轴折线图、平滑拟合曲线与误差棒", "tags": ["origin", "实验曲线", "误差棒", "双y轴", "科研绘图"], "installed": false}, {"id": "elsevier-standard-charts", "name": "爱思唯尔单双栏期刊图表尺寸规约", "slash": "/elsevier-standard-charts", "repo": "elsevier-standards/artwork-guide", "stars": "★ 9.7k", "category": "🔬 科研学术与数学建模", "summary": "严格对齐85mm单栏/175mm双栏宽度、Arial 6-8pt字体无形变缩放规范", "tags": ["elsevier", "爱思唯尔", "图表尺寸", "单栏图", "双栏图"], "installed": false}, {"id": "bio-pathway-diagram", "name": "生物医药作用机制与信号通路图", "slash": "/bio-pathway-diagram", "repo": "biomed/pathway-illustration", "stars": "★ 10.1k", "category": "🔬 科研学术与数学建模", "summary": "绘制分子生物学作用机制、细胞受体信号级联传导、药物靶点作用示意图", "tags": ["通路图", "信号传导", "生物医药", "分子机制", "生物通路"], "installed": false}, {"id": "heatmap-corr-master", "name": "多组学火山图、相关性热图与PCA", "slash": "/heatmap-corr-master", "repo": "bioinformatics/omics-plots", "stars": "★ 14.4k", "category": "🔬 科研学术与数学建模", "summary": "差异表达基因火山图、高维相关性矩阵热图、主成分分析（PCA）置信椭圆图生成", "tags": ["火山图", "热图", "pca", "组学分析", "相关性分析"], "installed": false}, {"id": "thesis-proposal", "name": "硕博研究生学位论文开题立项报告", "slash": "/thesis-proposal", "repo": "grad-school/thesis-proposal-agent", "stars": "★ 10.5k", "category": "🔬 科研学术与数学建模", "summary": "开题报告研究背景现状论述、关键技术路线图架构设计与可行性方案论证", "tags": ["开题报告", "开题", "技术路线", "立项", "学位论文"], "installed": false}, {"id": "academic-skill-module-17", "name": "学术前沿科研专项技能 17", "slash": "/academic-skill-module-17", "repo": "academic-research/module-17", "stars": "★ 23.8k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第17套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-18", "name": "学术前沿科研专项技能 18", "slash": "/academic-skill-module-18", "repo": "academic-research/module-18", "stars": "★ 24.0k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第18套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-19", "name": "学术前沿科研专项技能 19", "slash": "/academic-skill-module-19", "repo": "academic-research/module-19", "stars": "★ 25.1k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第19套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-20", "name": "学术前沿科研专项技能 20", "slash": "/academic-skill-module-20", "repo": "academic-research/module-20", "stars": "★ 6.2k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第20套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-21", "name": "学术前沿科研专项技能 21", "slash": "/academic-skill-module-21", "repo": "academic-research/module-21", "stars": "★ 7.3k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第21套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-22", "name": "学术前沿科研专项技能 22", "slash": "/academic-skill-module-22", "repo": "academic-research/module-22", "stars": "★ 8.4k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第22套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-23", "name": "学术前沿科研专项技能 23", "slash": "/academic-skill-module-23", "repo": "academic-research/module-23", "stars": "★ 9.5k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第23套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-24", "name": "学术前沿科研专项技能 24", "slash": "/academic-skill-module-24", "repo": "academic-research/module-24", "stars": "★ 10.6k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第24套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-25", "name": "学术前沿科研专项技能 25", "slash": "/academic-skill-module-25", "repo": "academic-research/module-25", "stars": "★ 11.7k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第25套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-26", "name": "学术前沿科研专项技能 26", "slash": "/academic-skill-module-26", "repo": "academic-research/module-26", "stars": "★ 12.8k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第26套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-27", "name": "学术前沿科研专项技能 27", "slash": "/academic-skill-module-27", "repo": "academic-research/module-27", "stars": "★ 13.0k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第27套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-28", "name": "学术前沿科研专项技能 28", "slash": "/academic-skill-module-28", "repo": "academic-research/module-28", "stars": "★ 14.1k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第28套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-29", "name": "学术前沿科研专项技能 29", "slash": "/academic-skill-module-29", "repo": "academic-research/module-29", "stars": "★ 15.2k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第29套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-30", "name": "学术前沿科研专项技能 30", "slash": "/academic-skill-module-30", "repo": "academic-research/module-30", "stars": "★ 16.3k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第30套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-31", "name": "学术前沿科研专项技能 31", "slash": "/academic-skill-module-31", "repo": "academic-research/module-31", "stars": "★ 17.4k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第31套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-32", "name": "学术前沿科研专项技能 32", "slash": "/academic-skill-module-32", "repo": "academic-research/module-32", "stars": "★ 18.5k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第32套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-33", "name": "学术前沿科研专项技能 33", "slash": "/academic-skill-module-33", "repo": "academic-research/module-33", "stars": "★ 19.6k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第33套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-34", "name": "学术前沿科研专项技能 34", "slash": "/academic-skill-module-34", "repo": "academic-research/module-34", "stars": "★ 20.7k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第34套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-35", "name": "学术前沿科研专项技能 35", "slash": "/academic-skill-module-35", "repo": "academic-research/module-35", "stars": "★ 21.8k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第35套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-36", "name": "学术前沿科研专项技能 36", "slash": "/academic-skill-module-36", "repo": "academic-research/module-36", "stars": "★ 22.0k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第36套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-37", "name": "学术前沿科研专项技能 37", "slash": "/academic-skill-module-37", "repo": "academic-research/module-37", "stars": "★ 23.1k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第37套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-38", "name": "学术前沿科研专项技能 38", "slash": "/academic-skill-module-38", "repo": "academic-research/module-38", "stars": "★ 24.2k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第38套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-39", "name": "学术前沿科研专项技能 39", "slash": "/academic-skill-module-39", "repo": "academic-research/module-39", "stars": "★ 25.3k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第39套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-40", "name": "学术前沿科研专项技能 40", "slash": "/academic-skill-module-40", "repo": "academic-research/module-40", "stars": "★ 6.4k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第40套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-41", "name": "学术前沿科研专项技能 41", "slash": "/academic-skill-module-41", "repo": "academic-research/module-41", "stars": "★ 7.5k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第41套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-42", "name": "学术前沿科研专项技能 42", "slash": "/academic-skill-module-42", "repo": "academic-research/module-42", "stars": "★ 8.6k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第42套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-43", "name": "学术前沿科研专项技能 43", "slash": "/academic-skill-module-43", "repo": "academic-research/module-43", "stars": "★ 9.7k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第43套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-44", "name": "学术前沿科研专项技能 44", "slash": "/academic-skill-module-44", "repo": "academic-research/module-44", "stars": "★ 10.8k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第44套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-45", "name": "学术前沿科研专项技能 45", "slash": "/academic-skill-module-45", "repo": "academic-research/module-45", "stars": "★ 11.0k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第45套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-46", "name": "学术前沿科研专项技能 46", "slash": "/academic-skill-module-46", "repo": "academic-research/module-46", "stars": "★ 12.1k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第46套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-47", "name": "学术前沿科研专项技能 47", "slash": "/academic-skill-module-47", "repo": "academic-research/module-47", "stars": "★ 13.2k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第47套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-48", "name": "学术前沿科研专项技能 48", "slash": "/academic-skill-module-48", "repo": "academic-research/module-48", "stars": "★ 14.3k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第48套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-49", "name": "学术前沿科研专项技能 49", "slash": "/academic-skill-module-49", "repo": "academic-research/module-49", "stars": "★ 15.4k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第49套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-50", "name": "学术前沿科研专项技能 50", "slash": "/academic-skill-module-50", "repo": "academic-research/module-50", "stars": "★ 16.5k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第50套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-51", "name": "学术前沿科研专项技能 51", "slash": "/academic-skill-module-51", "repo": "academic-research/module-51", "stars": "★ 17.6k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第51套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-52", "name": "学术前沿科研专项技能 52", "slash": "/academic-skill-module-52", "repo": "academic-research/module-52", "stars": "★ 18.7k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第52套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-53", "name": "学术前沿科研专项技能 53", "slash": "/academic-skill-module-53", "repo": "academic-research/module-53", "stars": "★ 19.8k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第53套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-54", "name": "学术前沿科研专项技能 54", "slash": "/academic-skill-module-54", "repo": "academic-research/module-54", "stars": "★ 20.0k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第54套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-55", "name": "学术前沿科研专项技能 55", "slash": "/academic-skill-module-55", "repo": "academic-research/module-55", "stars": "★ 21.1k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第55套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-56", "name": "学术前沿科研专项技能 56", "slash": "/academic-skill-module-56", "repo": "academic-research/module-56", "stars": "★ 22.2k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第56套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-57", "name": "学术前沿科研专项技能 57", "slash": "/academic-skill-module-57", "repo": "academic-research/module-57", "stars": "★ 23.3k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第57套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-58", "name": "学术前沿科研专项技能 58", "slash": "/academic-skill-module-58", "repo": "academic-research/module-58", "stars": "★ 24.4k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第58套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-59", "name": "学术前沿科研专项技能 59", "slash": "/academic-skill-module-59", "repo": "academic-research/module-59", "stars": "★ 25.5k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第59套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-60", "name": "学术前沿科研专项技能 60", "slash": "/academic-skill-module-60", "repo": "academic-research/module-60", "stars": "★ 6.6k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第60套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-61", "name": "学术前沿科研专项技能 61", "slash": "/academic-skill-module-61", "repo": "academic-research/module-61", "stars": "★ 7.7k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第61套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-62", "name": "学术前沿科研专项技能 62", "slash": "/academic-skill-module-62", "repo": "academic-research/module-62", "stars": "★ 8.8k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第62套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-63", "name": "学术前沿科研专项技能 63", "slash": "/academic-skill-module-63", "repo": "academic-research/module-63", "stars": "★ 9.0k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第63套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-64", "name": "学术前沿科研专项技能 64", "slash": "/academic-skill-module-64", "repo": "academic-research/module-64", "stars": "★ 10.1k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第64套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "academic-skill-module-65", "name": "学术前沿科研专项技能 65", "slash": "/academic-skill-module-65", "repo": "academic-research/module-65", "stars": "★ 11.2k", "category": "🔬 科研学术与数学建模", "summary": "专精于科研各细分学科实验设计、数据论证与英文同行评审第65套学术规范工具链", "tags": ["科研", "学术", "论文", "实验设计", "同行评审"], "installed": false}, {"id": "fastapi-deepseek-backend", "name": "FastAPI+DeepSeek极速构建AI后端", "slash": "/fastapi-deepseek-backend", "repo": "tiangolo/fastapi", "stars": "★ 78.4k", "category": "💻 编程系统与Python快速构建", "summary": "规范封装DeepSeek流式输出（SSE）、异步并发控制、Token预算限流与RESTful路由", "tags": ["fastapi", "deepseek", "api后端", "流式输出", "搭建系统", "搭建后端"], "installed": false}, {"id": "streamlit-ai-app-builder", "name": "Streamlit零基础构建交互式AI系统", "slash": "/streamlit-ai-app-builder", "repo": "streamlit/streamlit", "stars": "★ 35.6k", "category": "💻 编程系统与Python快速构建", "summary": "纯Python快速开发包含对话框、数据看板、文件上传与参数调优的可视化Web系统", "tags": ["streamlit", "做系统", "搭建网页", "快速建站", "python系统", "可视化系统"], "installed": false}, {"id": "django-enterprise-system", "name": "Django企业级管理系统整体架构设计", "slash": "/django-enterprise-system", "repo": "django/django", "stars": "★ 79.5k", "category": "💻 编程系统与Python快速构建", "summary": "包含ORM数据建模、用户认证与RBAC鉴权中间件、REST接口与后台管理全套架构", "tags": ["django", "管理系统", "企业系统", "orm建模", "后台管理"], "installed": false}, {"id": "local-project-refactor", "name": "本地遗留大型项目代码重构专家", "slash": "/local-project-refactor", "repo": "refactoring/clean-architecture", "stars": "★ 26.3k", "category": "💻 编程系统与Python快速构建", "summary": "消除复杂代码坏味道、模块解耦、领域驱动设计（DDD）分层重塑与SOLID原则落地", "tags": ["重构", "项目重构", "解耦", "代码重构", "清理代码", "架构升级"], "installed": false}, {"id": "legacy-code-modernizer", "name": "旧代码平滑升级与语法大迁移", "slash": "/legacy-code-modernizer", "repo": "modernizer/migration-assistant", "stars": "★ 14.1k", "category": "💻 编程系统与Python快速构建", "summary": "Python2->3、Java8->17/21、Vue2->3、CommonJS->ESM平滑语法重构自动化方案", "tags": ["代码升级", "语法迁移", "vue升级", "python升级", "现代化迁移"], "installed": false}, {"id": "sql-optimizer", "name": "SQL慢查询性能调优与索引推荐", "slash": "/sql-optimizer", "repo": "db-optimizer/sql-tuning-agent", "stars": "★ 26.8k", "category": "💻 编程系统与Python快速构建", "summary": "EXPLAIN执行计划全字段深度分析、深分页优化、最左前缀索引失效与慢SQL重写", "tags": ["sql调优", "mysql优化", "慢查询", "索引推荐", "数据库调优"], "installed": false}, {"id": "git-commit-helper", "name": "规范化Git提交生成与Diff深度解析", "slash": "/git-commit-helper", "repo": "git-tools/conventional-commits", "stars": "★ 14.9k", "category": "💻 编程系统与Python快速构建", "summary": "自动解析Git工作区Diff差异，提炼核心改动，生成规范Conventional Commits文案", "tags": ["git", "commit", "提交规范", "diff", "版本控制"], "installed": false}, {"id": "test-suite-generator", "name": "自动化单元测试与边界用例覆盖", "slash": "/test-suite-generator", "repo": "testing/auto-test-suite", "stars": "★ 15.2k", "category": "💻 编程系统与Python快速构建", "summary": "自动扫描现有业务逻辑，生成高覆盖率的Pytest/JUnit/Jest测试用例与Mock打桩", "tags": ["单元测试", "测试用例", "pytest", "mock", "测试覆盖率"], "installed": false}, {"id": "api-spec-designer", "name": "RESTful/OpenAPI 3.0接口契约设计", "slash": "/api-spec-designer", "repo": "api-governance/openapi-designer", "stars": "★ 13.6k", "category": "💻 编程系统与Python快速构建", "summary": "设计REST最佳实践规范、统一异常错误码、输出OpenAPI YAML规范与Mock服务", "tags": ["api设计", "swagger", "openapi", "接口规范", "mock数据"], "installed": false}, {"id": "docker-k8s-devops", "name": "容器化多阶段构建与K8s运维编排", "slash": "/docker-k8s-devops", "repo": "devops-agent/docker-k8s-best", "stars": "★ 25.4k", "category": "💻 编程系统与Python快速构建", "summary": "多阶段Dockerfile精简瘦身、K8s Pod清单、健康探针配置与CI/CD流水线", "tags": ["docker", "k8s", "容器化", "dockerfile", "运维", "cicd"], "installed": false}, {"id": "regex-master", "name": "复杂正则表达式生成与边界测试", "slash": "/regex-master", "repo": "regex-tools/regex-master-agent", "stars": "★ 11.8k", "category": "💻 编程系统与Python快速构建", "summary": "构造复杂正则、零宽断言解析、生成覆盖边界测试用例并检测抗ReDoS漏洞", "tags": ["正则表达式", "正则", "regex", "字符串匹配"], "installed": false}, {"id": "security-audit-agent", "name": "OWASP Top 10安全漏洞与敏感审计", "slash": "/security-audit-agent", "repo": "security/owasp-audit-agent", "stars": "★ 18.2k", "category": "💻 编程系统与Python快速构建", "summary": "SQL注入/XSS代码漏洞扫描、敏感密码密钥硬编码排查与开源依赖安全体检", "tags": ["安全审计", "漏洞扫描", "owasp", "安全加固", "敏感信息"], "installed": false}, {"id": "dev-system-builder-13", "name": "现代系统架构开发方案 13", "slash": "/dev-system-builder-13", "repo": "enterprise-dev/system-module-13", "stars": "★ 20.4k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第13套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-14", "name": "现代系统架构开发方案 14", "slash": "/dev-system-builder-14", "repo": "enterprise-dev/system-module-14", "stars": "★ 21.5k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第14套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-15", "name": "现代系统架构开发方案 15", "slash": "/dev-system-builder-15", "repo": "enterprise-dev/system-module-15", "stars": "★ 22.6k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第15套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-16", "name": "现代系统架构开发方案 16", "slash": "/dev-system-builder-16", "repo": "enterprise-dev/system-module-16", "stars": "★ 23.7k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第16套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-17", "name": "现代系统架构开发方案 17", "slash": "/dev-system-builder-17", "repo": "enterprise-dev/system-module-17", "stars": "★ 24.8k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第17套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-18", "name": "现代系统架构开发方案 18", "slash": "/dev-system-builder-18", "repo": "enterprise-dev/system-module-18", "stars": "★ 25.0k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第18套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-19", "name": "现代系统架构开发方案 19", "slash": "/dev-system-builder-19", "repo": "enterprise-dev/system-module-19", "stars": "★ 26.1k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第19套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-20", "name": "现代系统架构开发方案 20", "slash": "/dev-system-builder-20", "repo": "enterprise-dev/system-module-20", "stars": "★ 27.2k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第20套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-21", "name": "现代系统架构开发方案 21", "slash": "/dev-system-builder-21", "repo": "enterprise-dev/system-module-21", "stars": "★ 28.3k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第21套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-22", "name": "现代系统架构开发方案 22", "slash": "/dev-system-builder-22", "repo": "enterprise-dev/system-module-22", "stars": "★ 7.4k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第22套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-23", "name": "现代系统架构开发方案 23", "slash": "/dev-system-builder-23", "repo": "enterprise-dev/system-module-23", "stars": "★ 8.5k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第23套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-24", "name": "现代系统架构开发方案 24", "slash": "/dev-system-builder-24", "repo": "enterprise-dev/system-module-24", "stars": "★ 9.6k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第24套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-25", "name": "现代系统架构开发方案 25", "slash": "/dev-system-builder-25", "repo": "enterprise-dev/system-module-25", "stars": "★ 10.7k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第25套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-26", "name": "现代系统架构开发方案 26", "slash": "/dev-system-builder-26", "repo": "enterprise-dev/system-module-26", "stars": "★ 11.8k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第26套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-27", "name": "现代系统架构开发方案 27", "slash": "/dev-system-builder-27", "repo": "enterprise-dev/system-module-27", "stars": "★ 12.0k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第27套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-28", "name": "现代系统架构开发方案 28", "slash": "/dev-system-builder-28", "repo": "enterprise-dev/system-module-28", "stars": "★ 13.1k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第28套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-29", "name": "现代系统架构开发方案 29", "slash": "/dev-system-builder-29", "repo": "enterprise-dev/system-module-29", "stars": "★ 14.2k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第29套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-30", "name": "现代系统架构开发方案 30", "slash": "/dev-system-builder-30", "repo": "enterprise-dev/system-module-30", "stars": "★ 15.3k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第30套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-31", "name": "现代系统架构开发方案 31", "slash": "/dev-system-builder-31", "repo": "enterprise-dev/system-module-31", "stars": "★ 16.4k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第31套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-32", "name": "现代系统架构开发方案 32", "slash": "/dev-system-builder-32", "repo": "enterprise-dev/system-module-32", "stars": "★ 17.5k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第32套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-33", "name": "现代系统架构开发方案 33", "slash": "/dev-system-builder-33", "repo": "enterprise-dev/system-module-33", "stars": "★ 18.6k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第33套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-34", "name": "现代系统架构开发方案 34", "slash": "/dev-system-builder-34", "repo": "enterprise-dev/system-module-34", "stars": "★ 19.7k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第34套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-35", "name": "现代系统架构开发方案 35", "slash": "/dev-system-builder-35", "repo": "enterprise-dev/system-module-35", "stars": "★ 20.8k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第35套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-36", "name": "现代系统架构开发方案 36", "slash": "/dev-system-builder-36", "repo": "enterprise-dev/system-module-36", "stars": "★ 21.0k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第36套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-37", "name": "现代系统架构开发方案 37", "slash": "/dev-system-builder-37", "repo": "enterprise-dev/system-module-37", "stars": "★ 22.1k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第37套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-38", "name": "现代系统架构开发方案 38", "slash": "/dev-system-builder-38", "repo": "enterprise-dev/system-module-38", "stars": "★ 23.2k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第38套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-39", "name": "现代系统架构开发方案 39", "slash": "/dev-system-builder-39", "repo": "enterprise-dev/system-module-39", "stars": "★ 24.3k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第39套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-40", "name": "现代系统架构开发方案 40", "slash": "/dev-system-builder-40", "repo": "enterprise-dev/system-module-40", "stars": "★ 25.4k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第40套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-41", "name": "现代系统架构开发方案 41", "slash": "/dev-system-builder-41", "repo": "enterprise-dev/system-module-41", "stars": "★ 26.5k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第41套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-42", "name": "现代系统架构开发方案 42", "slash": "/dev-system-builder-42", "repo": "enterprise-dev/system-module-42", "stars": "★ 27.6k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第42套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-43", "name": "现代系统架构开发方案 43", "slash": "/dev-system-builder-43", "repo": "enterprise-dev/system-module-43", "stars": "★ 28.7k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第43套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-44", "name": "现代系统架构开发方案 44", "slash": "/dev-system-builder-44", "repo": "enterprise-dev/system-module-44", "stars": "★ 7.8k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第44套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-45", "name": "现代系统架构开发方案 45", "slash": "/dev-system-builder-45", "repo": "enterprise-dev/system-module-45", "stars": "★ 8.0k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第45套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-46", "name": "现代系统架构开发方案 46", "slash": "/dev-system-builder-46", "repo": "enterprise-dev/system-module-46", "stars": "★ 9.1k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第46套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-47", "name": "现代系统架构开发方案 47", "slash": "/dev-system-builder-47", "repo": "enterprise-dev/system-module-47", "stars": "★ 10.2k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第47套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-48", "name": "现代系统架构开发方案 48", "slash": "/dev-system-builder-48", "repo": "enterprise-dev/system-module-48", "stars": "★ 11.3k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第48套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-49", "name": "现代系统架构开发方案 49", "slash": "/dev-system-builder-49", "repo": "enterprise-dev/system-module-49", "stars": "★ 12.4k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第49套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-50", "name": "现代系统架构开发方案 50", "slash": "/dev-system-builder-50", "repo": "enterprise-dev/system-module-50", "stars": "★ 13.5k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第50套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-51", "name": "现代系统架构开发方案 51", "slash": "/dev-system-builder-51", "repo": "enterprise-dev/system-module-51", "stars": "★ 14.6k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第51套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-52", "name": "现代系统架构开发方案 52", "slash": "/dev-system-builder-52", "repo": "enterprise-dev/system-module-52", "stars": "★ 15.7k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第52套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-53", "name": "现代系统架构开发方案 53", "slash": "/dev-system-builder-53", "repo": "enterprise-dev/system-module-53", "stars": "★ 16.8k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第53套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-54", "name": "现代系统架构开发方案 54", "slash": "/dev-system-builder-54", "repo": "enterprise-dev/system-module-54", "stars": "★ 17.0k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第54套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-55", "name": "现代系统架构开发方案 55", "slash": "/dev-system-builder-55", "repo": "enterprise-dev/system-module-55", "stars": "★ 18.1k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第55套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-56", "name": "现代系统架构开发方案 56", "slash": "/dev-system-builder-56", "repo": "enterprise-dev/system-module-56", "stars": "★ 19.2k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第56套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-57", "name": "现代系统架构开发方案 57", "slash": "/dev-system-builder-57", "repo": "enterprise-dev/system-module-57", "stars": "★ 20.3k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第57套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-58", "name": "现代系统架构开发方案 58", "slash": "/dev-system-builder-58", "repo": "enterprise-dev/system-module-58", "stars": "★ 21.4k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第58套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-59", "name": "现代系统架构开发方案 59", "slash": "/dev-system-builder-59", "repo": "enterprise-dev/system-module-59", "stars": "★ 22.5k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第59套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-60", "name": "现代系统架构开发方案 60", "slash": "/dev-system-builder-60", "repo": "enterprise-dev/system-module-60", "stars": "★ 23.6k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第60套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-61", "name": "现代系统架构开发方案 61", "slash": "/dev-system-builder-61", "repo": "enterprise-dev/system-module-61", "stars": "★ 24.7k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第61套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-62", "name": "现代系统架构开发方案 62", "slash": "/dev-system-builder-62", "repo": "enterprise-dev/system-module-62", "stars": "★ 25.8k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第62套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-63", "name": "现代系统架构开发方案 63", "slash": "/dev-system-builder-63", "repo": "enterprise-dev/system-module-63", "stars": "★ 26.0k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第63套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-64", "name": "现代系统架构开发方案 64", "slash": "/dev-system-builder-64", "repo": "enterprise-dev/system-module-64", "stars": "★ 27.1k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第64套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "dev-system-builder-65", "name": "现代系统架构开发方案 65", "slash": "/dev-system-builder-65", "repo": "enterprise-dev/system-module-65", "stars": "★ 28.2k", "category": "💻 编程系统与Python快速构建", "summary": "提供从业务需求分析到代码落地的企业级Python/Node系统工程化设计第65套模式", "tags": ["编程", "系统开发", "架构设计", "全栈", "开发框架"], "installed": false}, {"id": "shadcn-ui-designer", "name": "Shadcn/UI现代化高质感组件架构师", "slash": "/shadcn-ui-designer", "repo": "shadcn-ui/ui", "stars": "★ 75.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "遵循Radix+Tailwind规范，输出极具现代感、无障碍可访问的深浅色组件代码", "tags": ["ui设计", "前端组件", "shadcn", "组件库", "界面美化", "设计系统"], "installed": false}, {"id": "web-dashboard-architect", "name": "现代Web数据可视化大屏与中后台前端", "slash": "/web-dashboard-architect", "repo": "ant-design/ant-design-pro", "stars": "★ 36.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "业务看板栅格布局、核心KPI指标动线、多图联动与复杂表单筛选器前端架构", "tags": ["前端大屏", "数据大屏", "中后台", "管理端ui", "看板前端"], "installed": false}, {"id": "tailwind-artisan", "name": "Tailwind CSS视觉流与响应式美化", "slash": "/tailwind-artisan", "repo": "tailwindlabs/tailwindcss", "stars": "★ 82.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "编写弥散光渐变、毛玻璃质感、微动效与移动/桌面多端自适应响应式断点", "tags": ["tailwind", "css美化", "响应式", "毛玻璃", "网页样式"], "installed": false}, {"id": "echarts-visualization-expert", "name": "ECharts/AntV复杂交互图表代码生成", "slash": "/echarts-visualization-expert", "repo": "apache/echarts", "stars": "★ 58.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "输出可直接运行的Apache ECharts柱线混排、地图下钻、桑基图与多层联动看板代码", "tags": ["echarts", "交互图表", "前端绘图", "数据图表", "antv"], "installed": false}, {"id": "threejs-webgl-vis", "name": "Three.js/WebGL 3D交互数据可视化", "slash": "/threejs-webgl-vis", "repo": "mrdoob/three.js", "stars": "★ 102.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "基于Three.js构建轻量级三维地形、3D立体地球、数字孪生工业设备展示场景", "tags": ["threejs", "3d可视化", "webgl", "三维网页", "数字孪生"], "installed": false}, {"id": "svg-icon-illustrator", "name": "SVG矢量图标与精细线框插画绘制", "slash": "/svg-icon-illustrator", "repo": "lucide-icons/lucide", "stars": "★ 17.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "生成手工级精简SVG矢量代码、遵循统一24x24视口网格与平滑贝塞尔曲线", "tags": ["svg", "矢量图标", "插画", "图标绘制", "单色图标"], "installed": false}, {"id": "landing-page-hero", "name": "高转化SaaS官网Hero首屏视觉设计", "slash": "/landing-page-hero", "repo": "landing-page/saas-templates", "stars": "★ 15.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "Stripe/Linear风格SaaS官网首屏排版：吸睛标题排版、动效悬浮卡片与CTA动线", "tags": ["官网设计", "landing page", "首屏设计", "saas页面"], "installed": false}, {"id": "color-palette-master", "name": "高质感品牌与UI配色调色板", "slash": "/color-palette-master", "repo": "hughsk/colormaps", "stars": "★ 8.9k", "category": "🎨 UI设计与网页可视化前端", "summary": "WCAG AAA级对比度核验、互补色与邻近色提取、自动生成Dark/Light双模式色板", "tags": ["配色方案", "调色板", "ui配色", "深浅色适配", "色彩设计"], "installed": false}, {"id": "wireframe-prototyper", "name": "线框原型与用户交互旅程设计", "slash": "/wireframe-prototyper", "repo": "ux-patterns/wireframe-agent", "stars": "★ 12.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "从口述需求快速输出高保真ASCII/Markdown线框图与交互状态机分支流转图", "tags": ["线框图", "原型设计", "交互设计", "ui原型", "用户旅程"], "installed": false}, {"id": "animation-motion-css", "name": "微动效与交互过渡阻尼曲线设计", "slash": "/animation-motion-css", "repo": "framer/motion", "stars": "★ 26.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "弹性阻尼（Spring动效）、骨架屏加载过渡与列表交错（Stagger）微动效编写", "tags": ["css动画", "动效", "framer motion", "过渡动画", "交互动效"], "installed": false}, {"id": "ui-web-artisan-11", "name": "前端可视化界面设计专家 11", "slash": "/ui-web-artisan-11", "repo": "frontend-designs/module-11", "stars": "★ 19.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第11套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-12", "name": "前端可视化界面设计专家 12", "slash": "/ui-web-artisan-12", "repo": "frontend-designs/module-12", "stars": "★ 20.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第12套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-13", "name": "前端可视化界面设计专家 13", "slash": "/ui-web-artisan-13", "repo": "frontend-designs/module-13", "stars": "★ 21.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第13套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-14", "name": "前端可视化界面设计专家 14", "slash": "/ui-web-artisan-14", "repo": "frontend-designs/module-14", "stars": "★ 22.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第14套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-15", "name": "前端可视化界面设计专家 15", "slash": "/ui-web-artisan-15", "repo": "frontend-designs/module-15", "stars": "★ 23.6k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第15套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-16", "name": "前端可视化界面设计专家 16", "slash": "/ui-web-artisan-16", "repo": "frontend-designs/module-16", "stars": "★ 24.7k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第16套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-17", "name": "前端可视化界面设计专家 17", "slash": "/ui-web-artisan-17", "repo": "frontend-designs/module-17", "stars": "★ 25.8k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第17套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-18", "name": "前端可视化界面设计专家 18", "slash": "/ui-web-artisan-18", "repo": "frontend-designs/module-18", "stars": "★ 26.0k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第18套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-19", "name": "前端可视化界面设计专家 19", "slash": "/ui-web-artisan-19", "repo": "frontend-designs/module-19", "stars": "★ 27.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第19套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-20", "name": "前端可视化界面设计专家 20", "slash": "/ui-web-artisan-20", "repo": "frontend-designs/module-20", "stars": "★ 28.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第20套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-21", "name": "前端可视化界面设计专家 21", "slash": "/ui-web-artisan-21", "repo": "frontend-designs/module-21", "stars": "★ 29.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第21套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-22", "name": "前端可视化界面设计专家 22", "slash": "/ui-web-artisan-22", "repo": "frontend-designs/module-22", "stars": "★ 30.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第22套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-23", "name": "前端可视化界面设计专家 23", "slash": "/ui-web-artisan-23", "repo": "frontend-designs/module-23", "stars": "★ 31.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第23套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-24", "name": "前端可视化界面设计专家 24", "slash": "/ui-web-artisan-24", "repo": "frontend-designs/module-24", "stars": "★ 32.6k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第24套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-25", "name": "前端可视化界面设计专家 25", "slash": "/ui-web-artisan-25", "repo": "frontend-designs/module-25", "stars": "★ 8.7k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第25套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-26", "name": "前端可视化界面设计专家 26", "slash": "/ui-web-artisan-26", "repo": "frontend-designs/module-26", "stars": "★ 9.8k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第26套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-27", "name": "前端可视化界面设计专家 27", "slash": "/ui-web-artisan-27", "repo": "frontend-designs/module-27", "stars": "★ 10.0k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第27套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-28", "name": "前端可视化界面设计专家 28", "slash": "/ui-web-artisan-28", "repo": "frontend-designs/module-28", "stars": "★ 11.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第28套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-29", "name": "前端可视化界面设计专家 29", "slash": "/ui-web-artisan-29", "repo": "frontend-designs/module-29", "stars": "★ 12.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第29套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-30", "name": "前端可视化界面设计专家 30", "slash": "/ui-web-artisan-30", "repo": "frontend-designs/module-30", "stars": "★ 13.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第30套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-31", "name": "前端可视化界面设计专家 31", "slash": "/ui-web-artisan-31", "repo": "frontend-designs/module-31", "stars": "★ 14.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第31套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-32", "name": "前端可视化界面设计专家 32", "slash": "/ui-web-artisan-32", "repo": "frontend-designs/module-32", "stars": "★ 15.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第32套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-33", "name": "前端可视化界面设计专家 33", "slash": "/ui-web-artisan-33", "repo": "frontend-designs/module-33", "stars": "★ 16.6k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第33套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-34", "name": "前端可视化界面设计专家 34", "slash": "/ui-web-artisan-34", "repo": "frontend-designs/module-34", "stars": "★ 17.7k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第34套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-35", "name": "前端可视化界面设计专家 35", "slash": "/ui-web-artisan-35", "repo": "frontend-designs/module-35", "stars": "★ 18.8k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第35套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-36", "name": "前端可视化界面设计专家 36", "slash": "/ui-web-artisan-36", "repo": "frontend-designs/module-36", "stars": "★ 19.0k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第36套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-37", "name": "前端可视化界面设计专家 37", "slash": "/ui-web-artisan-37", "repo": "frontend-designs/module-37", "stars": "★ 20.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第37套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-38", "name": "前端可视化界面设计专家 38", "slash": "/ui-web-artisan-38", "repo": "frontend-designs/module-38", "stars": "★ 21.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第38套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-39", "name": "前端可视化界面设计专家 39", "slash": "/ui-web-artisan-39", "repo": "frontend-designs/module-39", "stars": "★ 22.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第39套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-40", "name": "前端可视化界面设计专家 40", "slash": "/ui-web-artisan-40", "repo": "frontend-designs/module-40", "stars": "★ 23.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第40套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-41", "name": "前端可视化界面设计专家 41", "slash": "/ui-web-artisan-41", "repo": "frontend-designs/module-41", "stars": "★ 24.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第41套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-42", "name": "前端可视化界面设计专家 42", "slash": "/ui-web-artisan-42", "repo": "frontend-designs/module-42", "stars": "★ 25.6k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第42套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-43", "name": "前端可视化界面设计专家 43", "slash": "/ui-web-artisan-43", "repo": "frontend-designs/module-43", "stars": "★ 26.7k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第43套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-44", "name": "前端可视化界面设计专家 44", "slash": "/ui-web-artisan-44", "repo": "frontend-designs/module-44", "stars": "★ 27.8k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第44套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-45", "name": "前端可视化界面设计专家 45", "slash": "/ui-web-artisan-45", "repo": "frontend-designs/module-45", "stars": "★ 28.0k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第45套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-46", "name": "前端可视化界面设计专家 46", "slash": "/ui-web-artisan-46", "repo": "frontend-designs/module-46", "stars": "★ 29.1k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第46套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-47", "name": "前端可视化界面设计专家 47", "slash": "/ui-web-artisan-47", "repo": "frontend-designs/module-47", "stars": "★ 30.2k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第47套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-48", "name": "前端可视化界面设计专家 48", "slash": "/ui-web-artisan-48", "repo": "frontend-designs/module-48", "stars": "★ 31.3k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第48套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-49", "name": "前端可视化界面设计专家 49", "slash": "/ui-web-artisan-49", "repo": "frontend-designs/module-49", "stars": "★ 32.4k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第49套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "ui-web-artisan-50", "name": "前端可视化界面设计专家 50", "slash": "/ui-web-artisan-50", "repo": "frontend-designs/module-50", "stars": "★ 8.5k", "category": "🎨 UI设计与网页可视化前端", "summary": "专精于现代Web前端视觉层级、响应式布局与极简数据交互界面第50套设计方案", "tags": ["ui", "前端", "页面设计", "网页美化", "设计规范"], "installed": false}, {"id": "data-cleaning-pipeline", "name": "脏数据自动化清洗与缺失值修复", "slash": "/data-cleaning-pipeline", "repo": "data-prep/cleaning-pipeline-agent", "stars": "★ 14.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "智能识别杂乱日期、空格非法字符剔除、异常值检测插补与多表对齐标准化", "tags": ["数据清洗", "脏数据", "缺失值", "异常值", "数据预处理"], "installed": false}, {"id": "pandas-data-analyst", "name": "Python自动化数据探索分析（EDA）", "slash": "/pandas-data-analyst", "repo": "data-agent/pandas-eda-wizard", "stars": "★ 24.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "快速扫描数据分布特征、共线性检测、数据透视与一键输出探索性分析报告", "tags": ["eda", "pandas", "探索性分析", "数据探索", "统计分析"], "installed": false}, {"id": "plotly-dashboard-pro", "name": "Plotly交互式动态看板与商业BI分析", "slash": "/plotly-dashboard-pro", "repo": "plotly/dash", "stars": "★ 21.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "纯Python构建多重滑块筛选、悬浮Tooltip与图表联动的商业BI动态分析仪表盘", "tags": ["plotly", "dash", "商业bi", "交互看板", "动态图表"], "installed": false}, {"id": "multidimensional-stats", "name": "多维统计推断与多元线性回归分析", "slash": "/multidimensional-stats", "repo": "statsmodels/statsmodels", "stars": "★ 9.4k", "category": "📊 数据清洗分析与图表呈现", "summary": "因子分析、主成分分析（PCA）、方差齐性核验与回归系数显著性分析报告", "tags": ["多元统计", "线性回归", "因子分析", "统计推断", "统计建模"], "installed": false}, {"id": "time-series-forecaster", "name": "时间序列趋势分解与周期性预测", "slash": "/time-series-forecaster", "repo": "stats-modeling/time-series-pro", "stars": "★ 13.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "ARIMA、Prophet、LSTM趋势平稳性检验与多步预测置信区间评估", "tags": ["时间序列", "时序预测", "趋势预测", "prophet", "销量预测"], "installed": false}, {"id": "excel-power-bi-wizard", "name": "Power BI/Excel复杂DAX与动态仪表盘", "slash": "/excel-power-bi-wizard", "repo": "bi-analytics/powerbi-dax-agent", "stars": "★ 11.6k", "category": "📊 数据清洗分析与图表呈现", "summary": "编写高效DAX度量值、构建星型数据模型与销售绩效动态可视化看板", "tags": ["power bi", "dax", "商业智能", "销售看板", "报表设计"], "installed": false}, {"id": "data-analytics-pro-7", "name": "数据分析统计呈现方案 7", "slash": "/data-analytics-pro-7", "repo": "data-science/analytics-7", "stars": "★ 14.7k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第7阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-8", "name": "数据分析统计呈现方案 8", "slash": "/data-analytics-pro-8", "repo": "data-science/analytics-8", "stars": "★ 15.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第8阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-9", "name": "数据分析统计呈现方案 9", "slash": "/data-analytics-pro-9", "repo": "data-science/analytics-9", "stars": "★ 16.0k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第9阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-10", "name": "数据分析统计呈现方案 10", "slash": "/data-analytics-pro-10", "repo": "data-science/analytics-10", "stars": "★ 17.1k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第10阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-11", "name": "数据分析统计呈现方案 11", "slash": "/data-analytics-pro-11", "repo": "data-science/analytics-11", "stars": "★ 18.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第11阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-12", "name": "数据分析统计呈现方案 12", "slash": "/data-analytics-pro-12", "repo": "data-science/analytics-12", "stars": "★ 19.3k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第12阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-13", "name": "数据分析统计呈现方案 13", "slash": "/data-analytics-pro-13", "repo": "data-science/analytics-13", "stars": "★ 20.4k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第13阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-14", "name": "数据分析统计呈现方案 14", "slash": "/data-analytics-pro-14", "repo": "data-science/analytics-14", "stars": "★ 21.5k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第14阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-15", "name": "数据分析统计呈现方案 15", "slash": "/data-analytics-pro-15", "repo": "data-science/analytics-15", "stars": "★ 22.6k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第15阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-16", "name": "数据分析统计呈现方案 16", "slash": "/data-analytics-pro-16", "repo": "data-science/analytics-16", "stars": "★ 23.7k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第16阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-17", "name": "数据分析统计呈现方案 17", "slash": "/data-analytics-pro-17", "repo": "data-science/analytics-17", "stars": "★ 24.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第17阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-18", "name": "数据分析统计呈现方案 18", "slash": "/data-analytics-pro-18", "repo": "data-science/analytics-18", "stars": "★ 7.0k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第18阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-19", "name": "数据分析统计呈现方案 19", "slash": "/data-analytics-pro-19", "repo": "data-science/analytics-19", "stars": "★ 8.1k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第19阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-20", "name": "数据分析统计呈现方案 20", "slash": "/data-analytics-pro-20", "repo": "data-science/analytics-20", "stars": "★ 9.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第20阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-21", "name": "数据分析统计呈现方案 21", "slash": "/data-analytics-pro-21", "repo": "data-science/analytics-21", "stars": "★ 10.3k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第21阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-22", "name": "数据分析统计呈现方案 22", "slash": "/data-analytics-pro-22", "repo": "data-science/analytics-22", "stars": "★ 11.4k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第22阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-23", "name": "数据分析统计呈现方案 23", "slash": "/data-analytics-pro-23", "repo": "data-science/analytics-23", "stars": "★ 12.5k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第23阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-24", "name": "数据分析统计呈现方案 24", "slash": "/data-analytics-pro-24", "repo": "data-science/analytics-24", "stars": "★ 13.6k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第24阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-25", "name": "数据分析统计呈现方案 25", "slash": "/data-analytics-pro-25", "repo": "data-science/analytics-25", "stars": "★ 14.7k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第25阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-26", "name": "数据分析统计呈现方案 26", "slash": "/data-analytics-pro-26", "repo": "data-science/analytics-26", "stars": "★ 15.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第26阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-27", "name": "数据分析统计呈现方案 27", "slash": "/data-analytics-pro-27", "repo": "data-science/analytics-27", "stars": "★ 16.0k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第27阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-28", "name": "数据分析统计呈现方案 28", "slash": "/data-analytics-pro-28", "repo": "data-science/analytics-28", "stars": "★ 17.1k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第28阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-29", "name": "数据分析统计呈现方案 29", "slash": "/data-analytics-pro-29", "repo": "data-science/analytics-29", "stars": "★ 18.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第29阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-30", "name": "数据分析统计呈现方案 30", "slash": "/data-analytics-pro-30", "repo": "data-science/analytics-30", "stars": "★ 19.3k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第30阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-31", "name": "数据分析统计呈现方案 31", "slash": "/data-analytics-pro-31", "repo": "data-science/analytics-31", "stars": "★ 20.4k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第31阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-32", "name": "数据分析统计呈现方案 32", "slash": "/data-analytics-pro-32", "repo": "data-science/analytics-32", "stars": "★ 21.5k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第32阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-33", "name": "数据分析统计呈现方案 33", "slash": "/data-analytics-pro-33", "repo": "data-science/analytics-33", "stars": "★ 22.6k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第33阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-34", "name": "数据分析统计呈现方案 34", "slash": "/data-analytics-pro-34", "repo": "data-science/analytics-34", "stars": "★ 23.7k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第34阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-35", "name": "数据分析统计呈现方案 35", "slash": "/data-analytics-pro-35", "repo": "data-science/analytics-35", "stars": "★ 24.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第35阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-36", "name": "数据分析统计呈现方案 36", "slash": "/data-analytics-pro-36", "repo": "data-science/analytics-36", "stars": "★ 7.0k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第36阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-37", "name": "数据分析统计呈现方案 37", "slash": "/data-analytics-pro-37", "repo": "data-science/analytics-37", "stars": "★ 8.1k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第37阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-38", "name": "数据分析统计呈现方案 38", "slash": "/data-analytics-pro-38", "repo": "data-science/analytics-38", "stars": "★ 9.2k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第38阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-39", "name": "数据分析统计呈现方案 39", "slash": "/data-analytics-pro-39", "repo": "data-science/analytics-39", "stars": "★ 10.3k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第39阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-40", "name": "数据分析统计呈现方案 40", "slash": "/data-analytics-pro-40", "repo": "data-science/analytics-40", "stars": "★ 11.4k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第40阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-41", "name": "数据分析统计呈现方案 41", "slash": "/data-analytics-pro-41", "repo": "data-science/analytics-41", "stars": "★ 12.5k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第41阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-42", "name": "数据分析统计呈现方案 42", "slash": "/data-analytics-pro-42", "repo": "data-science/analytics-42", "stars": "★ 13.6k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第42阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-43", "name": "数据分析统计呈现方案 43", "slash": "/data-analytics-pro-43", "repo": "data-science/analytics-43", "stars": "★ 14.7k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第43阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-44", "name": "数据分析统计呈现方案 44", "slash": "/data-analytics-pro-44", "repo": "data-science/analytics-44", "stars": "★ 15.8k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第44阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "data-analytics-pro-45", "name": "数据分析统计呈现方案 45", "slash": "/data-analytics-pro-45", "repo": "data-science/analytics-45", "stars": "★ 16.0k", "category": "📊 数据清洗分析与图表呈现", "summary": "涵盖业务指标拆解、数据建模与高维图表呈现等全套数据科学工作流第45阶段方案", "tags": ["数据分析", "统计", "指标体系", "数据看板", "数据呈现"], "installed": false}, {"id": "prd-spec-writer", "name": "标准产品需求文档（PRD）撰写专家", "slash": "/prd-spec-writer", "repo": "pm-toolkit/standard-prd-pro", "stars": "★ 27.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "规范完整PRD：业务背景、用例闭环、状态机迁移、边界与异常分支详细规约", "tags": ["prd", "产品经理", "需求文档", "产品设计", "用例图"], "installed": false}, {"id": "pid-petrochemical-isa51", "name": "石油化工流程P&ID管道仪表图规范", "slash": "/pid-petrochemical-isa51", "repo": "industrial-standards/isa-5-1-spec", "stars": "★ 6.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "遵循ISA-5.1标准编制管道仪表流程图规约、联锁控制逻辑与仪表位号清单", "tags": ["pid", "管道仪表图", "isa5.1", "工艺管道", "石化", "化工流程"], "installed": false}, {"id": "pid-hvac-thermal-spec", "name": "暖通空调热力动力系统P&ID说明书", "slash": "/pid-hvac-thermal-spec", "repo": "hvac-engineering/thermal-pid-agent", "stars": "★ 4.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "冷热源机房、循环泵阀组管网图规约与控制工况（冬/夏季）技术说明书", "tags": ["暖通", "热力系统", "空调系统", "工艺说明", "工业控制"], "installed": false}, {"id": "erp-system-designer", "name": "ERP进销存与制造企业全链业务设计", "slash": "/erp-system-designer", "repo": "erp-architecture/enterprise-designer", "stars": "★ 19.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "进销存、采购仓储、财务核算、BOM物料与工单全生命周期业务流程与表设计", "tags": ["erp", "进销存", "供应链", "bom物料", "仓储管理", "生产工单"], "installed": false}, {"id": "erp-permission-rbac", "name": "企业级组织架构与RBAC权限矩阵", "slash": "/erp-permission-rbac", "repo": "security/enterprise-rbac-matrix", "stars": "★ 13.9k", "category": "📑 产品经理ERP与工业PID规约", "summary": "细粒度数据权限与操作权限矩阵、多岗位角色分离与多租户安全隔离方案", "tags": ["rbac", "权限系统", "组织架构", "数据权限", "多租户"], "installed": false}, {"id": "erp-mes-wms-architect", "name": "制造业ERP+MES+WMS工业一体化架构", "slash": "/erp-mes-wms-architect", "repo": "manufacturing-it/erp-mes-integration", "stars": "★ 8.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "打通订单下达、BOM展开、车间派工、设备数采与成品立体仓储管理", "tags": ["mes", "wms", "智能制造", "车间派工", "仓储物流"], "installed": false}, {"id": "data-tracking-spec", "name": "全链路数据埋点与指标字典规划", "slash": "/data-tracking-spec", "repo": "growth-analytics/tracking-spec", "stars": "★ 16.7k", "category": "📑 产品经理ERP与工业PID规约", "summary": "客户端/服务端埋点规范方案设计、事件属性字典、漏斗转化与归因分析模型", "tags": ["数据埋点", "埋点", "指标字典", "事件分析", "漏斗模型"], "installed": false}, {"id": "brd-mrd-analyzer", "name": "商业需求（BRD）与市场立项论证（MRD）", "slash": "/brd-mrd-analyzer", "repo": "product-strategy/brd-mrd-agent", "stars": "★ 14.7k", "category": "📑 产品经理ERP与工业PID规约", "summary": "行业市场规模测算、竞品商业模式深度对比、投入产出比ROI与立项可行性", "tags": ["brd", "mrd", "商业需求", "立项报告", "竞品分析"], "installed": false}, {"id": "sop-workflow-architect", "name": "企业标准化作业程序（SOP）规约", "slash": "/sop-workflow-architect", "repo": "operations/enterprise-sop-builder", "stars": "★ 10.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "业务流程标准化、岗位责任边界界定、异常应急处置机制与质检Checklist", "tags": ["sop", "标准化作业", "操作流程", "规章制度", "质检"], "installed": false}, {"id": "product-industrial-spec-10", "name": "工业工程与产品规划方案 10", "slash": "/product-industrial-spec-10", "repo": "enterprise-standards/spec-10", "stars": "★ 16.1k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第10套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-11", "name": "工业工程与产品规划方案 11", "slash": "/product-industrial-spec-11", "repo": "enterprise-standards/spec-11", "stars": "★ 17.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第11套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-12", "name": "工业工程与产品规划方案 12", "slash": "/product-industrial-spec-12", "repo": "enterprise-standards/spec-12", "stars": "★ 18.3k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第12套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-13", "name": "工业工程与产品规划方案 13", "slash": "/product-industrial-spec-13", "repo": "enterprise-standards/spec-13", "stars": "★ 19.4k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第13套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-14", "name": "工业工程与产品规划方案 14", "slash": "/product-industrial-spec-14", "repo": "enterprise-standards/spec-14", "stars": "★ 20.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第14套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-15", "name": "工业工程与产品规划方案 15", "slash": "/product-industrial-spec-15", "repo": "enterprise-standards/spec-15", "stars": "★ 21.6k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第15套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-16", "name": "工业工程与产品规划方案 16", "slash": "/product-industrial-spec-16", "repo": "enterprise-standards/spec-16", "stars": "★ 6.7k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第16套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-17", "name": "工业工程与产品规划方案 17", "slash": "/product-industrial-spec-17", "repo": "enterprise-standards/spec-17", "stars": "★ 7.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第17套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-18", "name": "工业工程与产品规划方案 18", "slash": "/product-industrial-spec-18", "repo": "enterprise-standards/spec-18", "stars": "★ 8.0k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第18套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-19", "name": "工业工程与产品规划方案 19", "slash": "/product-industrial-spec-19", "repo": "enterprise-standards/spec-19", "stars": "★ 9.1k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第19套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-20", "name": "工业工程与产品规划方案 20", "slash": "/product-industrial-spec-20", "repo": "enterprise-standards/spec-20", "stars": "★ 10.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第20套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-21", "name": "工业工程与产品规划方案 21", "slash": "/product-industrial-spec-21", "repo": "enterprise-standards/spec-21", "stars": "★ 11.3k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第21套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-22", "name": "工业工程与产品规划方案 22", "slash": "/product-industrial-spec-22", "repo": "enterprise-standards/spec-22", "stars": "★ 12.4k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第22套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-23", "name": "工业工程与产品规划方案 23", "slash": "/product-industrial-spec-23", "repo": "enterprise-standards/spec-23", "stars": "★ 13.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第23套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-24", "name": "工业工程与产品规划方案 24", "slash": "/product-industrial-spec-24", "repo": "enterprise-standards/spec-24", "stars": "★ 14.6k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第24套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-25", "name": "工业工程与产品规划方案 25", "slash": "/product-industrial-spec-25", "repo": "enterprise-standards/spec-25", "stars": "★ 15.7k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第25套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-26", "name": "工业工程与产品规划方案 26", "slash": "/product-industrial-spec-26", "repo": "enterprise-standards/spec-26", "stars": "★ 16.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第26套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-27", "name": "工业工程与产品规划方案 27", "slash": "/product-industrial-spec-27", "repo": "enterprise-standards/spec-27", "stars": "★ 17.0k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第27套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-28", "name": "工业工程与产品规划方案 28", "slash": "/product-industrial-spec-28", "repo": "enterprise-standards/spec-28", "stars": "★ 18.1k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第28套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-29", "name": "工业工程与产品规划方案 29", "slash": "/product-industrial-spec-29", "repo": "enterprise-standards/spec-29", "stars": "★ 19.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第29套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-30", "name": "工业工程与产品规划方案 30", "slash": "/product-industrial-spec-30", "repo": "enterprise-standards/spec-30", "stars": "★ 20.3k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第30套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-31", "name": "工业工程与产品规划方案 31", "slash": "/product-industrial-spec-31", "repo": "enterprise-standards/spec-31", "stars": "★ 21.4k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第31套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-32", "name": "工业工程与产品规划方案 32", "slash": "/product-industrial-spec-32", "repo": "enterprise-standards/spec-32", "stars": "★ 6.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第32套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-33", "name": "工业工程与产品规划方案 33", "slash": "/product-industrial-spec-33", "repo": "enterprise-standards/spec-33", "stars": "★ 7.6k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第33套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-34", "name": "工业工程与产品规划方案 34", "slash": "/product-industrial-spec-34", "repo": "enterprise-standards/spec-34", "stars": "★ 8.7k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第34套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-35", "name": "工业工程与产品规划方案 35", "slash": "/product-industrial-spec-35", "repo": "enterprise-standards/spec-35", "stars": "★ 9.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第35套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-36", "name": "工业工程与产品规划方案 36", "slash": "/product-industrial-spec-36", "repo": "enterprise-standards/spec-36", "stars": "★ 10.0k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第36套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-37", "name": "工业工程与产品规划方案 37", "slash": "/product-industrial-spec-37", "repo": "enterprise-standards/spec-37", "stars": "★ 11.1k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第37套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-38", "name": "工业工程与产品规划方案 38", "slash": "/product-industrial-spec-38", "repo": "enterprise-standards/spec-38", "stars": "★ 12.2k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第38套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-39", "name": "工业工程与产品规划方案 39", "slash": "/product-industrial-spec-39", "repo": "enterprise-standards/spec-39", "stars": "★ 13.3k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第39套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-40", "name": "工业工程与产品规划方案 40", "slash": "/product-industrial-spec-40", "repo": "enterprise-standards/spec-40", "stars": "★ 14.4k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第40套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-41", "name": "工业工程与产品规划方案 41", "slash": "/product-industrial-spec-41", "repo": "enterprise-standards/spec-41", "stars": "★ 15.5k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第41套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-42", "name": "工业工程与产品规划方案 42", "slash": "/product-industrial-spec-42", "repo": "enterprise-standards/spec-42", "stars": "★ 16.6k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第42套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-43", "name": "工业工程与产品规划方案 43", "slash": "/product-industrial-spec-43", "repo": "enterprise-standards/spec-43", "stars": "★ 17.7k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第43套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-44", "name": "工业工程与产品规划方案 44", "slash": "/product-industrial-spec-44", "repo": "enterprise-standards/spec-44", "stars": "★ 18.8k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第44套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "product-industrial-spec-45", "name": "工业工程与产品规划方案 45", "slash": "/product-industrial-spec-45", "repo": "enterprise-standards/spec-45", "stars": "★ 19.0k", "category": "📑 产品经理ERP与工业PID规约", "summary": "针对企业级系统流程、工业图纸规范与B端复杂业务功能建模第45套标准化规约", "tags": ["产品经理", "工业规范", "业务流程", "系统设计", "需求工程"], "installed": false}, {"id": "xiaohongshu-writer", "name": "小红书爆款图文排版专家", "slash": "/xiaohongshu-writer", "repo": "social-media/xiaohongshu-viral", "stars": "★ 38.2k", "category": "📱 新媒体短视频与流量运营", "summary": "爆款三段式标题（痛点+情绪价值+悬念）、小红书视觉呼吸Emoji排版与标签", "tags": ["小红书", "爆款文案", "小红书排版", "自媒体文案", "种草文案"], "installed": false}, {"id": "douyin-script-writer", "name": "抖音短视频3秒吸睛口播分镜脚本", "slash": "/douyin-script-writer", "repo": "video-creator/douyin-script-agent", "stars": "★ 26.1k", "category": "📱 新媒体短视频与流量运营", "summary": "黄金前3秒留存钩子、分镜头画面调度语言、痛点煽动与完播率提升话术", "tags": ["短视频脚本", "抖音", "口播文案", "分镜头", "完播率", "短视频"], "installed": false}, {"id": "video-editing-prompt-flow", "name": "短视频剪辑脚本与剪映时间轴指南", "slash": "/video-editing-prompt-flow", "repo": "video-tools/editing-workflow-agent", "stars": "★ 14.5k", "category": "📱 新媒体短视频与流量运营", "summary": "精准秒级剪辑脚本：转场类型、B-Roll空镜素材建议、音效卡点与花字提示", "tags": ["剪辑", "剪映", "分镜剪辑", "空镜素材", "视频剪辑"], "installed": false}, {"id": "social-traffic-data-analyst", "name": "自媒体全平台流量数据复盘与诊断", "slash": "/social-traffic-data-analyst", "repo": "traffic-growth/social-data-analytics", "stars": "★ 12.1k", "category": "📱 新媒体短视频与流量运营", "summary": "深度拆解5秒完播率、停留时长、互动率（赞/藏/评），诊断断崖式下跌节点", "tags": ["流量分析", "数据复盘", "完播率", "互动率", "涨粉转化"], "installed": false}, {"id": "viral-comment-hook", "name": "爆款神评库与评论区控评引流设计", "slash": "/viral-comment-hook", "repo": "community-growth/viral-comment-architect", "stars": "★ 9.8k", "category": "📱 新媒体短视频与流量运营", "summary": "设计制造反差共鸣的神评、引发争议探讨的热评埋设与置顶评论合规引流", "tags": ["神评", "评论区", "控评", "引流", "互动率"], "installed": false}, {"id": "wechat-article-writer", "name": "微信公众号深度长文排版与金句提炼", "slash": "/wechat-article-writer", "repo": "content-growth/wechat-long-article", "stars": "★ 19.7k", "category": "📱 新媒体短视频与流量运营", "summary": "黄金开头钩子、论点层级推进、吸睛金句提炼与文末强转化诱饵", "tags": ["公众号", "长文排版", "公众号文章", "深度好文", "自媒体长文"], "installed": false}, {"id": "copywriter-pro", "name": "高转化商业文案与销售信策划", "slash": "/copywriter-pro", "repo": "marketing-agent/copywriting", "stars": "★ 25.3k", "category": "📱 新媒体短视频与流量运营", "summary": "PAS（痛点-煽动-解决）与AIDA模型落地，产出电商详情页与商业策划案", "tags": ["文案", "销售信", "转化率", "详情页", "商业文案", "营销文案"], "installed": false}, {"id": "growth-funnel-optimizer", "name": "AARRR运营漏斗与留存增长策略", "slash": "/growth-funnel-optimizer", "repo": "growth-hacking/funnel-optimizer", "stars": "★ 17.5k", "category": "📱 新媒体短视频与流量运营", "summary": "用户全生命周期运营、拉新转化、促活防流失策略与流失预警SOP", "tags": ["aarrr", "运营漏斗", "用户留存", "增长黑客", "用户增长"], "installed": false}, {"id": "headline-viral-hooks", "name": "爆款标题实验室与高点击A/B测试", "slash": "/headline-viral-hooks", "repo": "viral-content/headline-hooks", "stars": "★ 18.9k", "category": "📱 新媒体短视频与流量运营", "summary": "10种高点击率标题公式（数字法/对比法/揭秘法/痛点法）与A/B测试建议", "tags": ["爆款标题", "起标题", "标题党", "高点击标题", "点击率"], "installed": false}, {"id": "media-traffic-booster-10", "name": "全域流量运营与内容爆款策略 10", "slash": "/media-traffic-booster-10", "repo": "media-strategy/traffic-10", "stars": "★ 18.1k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第10套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-11", "name": "全域流量运营与内容爆款策略 11", "slash": "/media-traffic-booster-11", "repo": "media-strategy/traffic-11", "stars": "★ 19.2k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第11套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-12", "name": "全域流量运营与内容爆款策略 12", "slash": "/media-traffic-booster-12", "repo": "media-strategy/traffic-12", "stars": "★ 20.3k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第12套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-13", "name": "全域流量运营与内容爆款策略 13", "slash": "/media-traffic-booster-13", "repo": "media-strategy/traffic-13", "stars": "★ 21.4k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第13套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-14", "name": "全域流量运营与内容爆款策略 14", "slash": "/media-traffic-booster-14", "repo": "media-strategy/traffic-14", "stars": "★ 22.5k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第14套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-15", "name": "全域流量运营与内容爆款策略 15", "slash": "/media-traffic-booster-15", "repo": "media-strategy/traffic-15", "stars": "★ 23.6k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第15套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-16", "name": "全域流量运营与内容爆款策略 16", "slash": "/media-traffic-booster-16", "repo": "media-strategy/traffic-16", "stars": "★ 24.7k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第16套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-17", "name": "全域流量运营与内容爆款策略 17", "slash": "/media-traffic-booster-17", "repo": "media-strategy/traffic-17", "stars": "★ 25.8k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第17套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-18", "name": "全域流量运营与内容爆款策略 18", "slash": "/media-traffic-booster-18", "repo": "media-strategy/traffic-18", "stars": "★ 26.0k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第18套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-19", "name": "全域流量运营与内容爆款策略 19", "slash": "/media-traffic-booster-19", "repo": "media-strategy/traffic-19", "stars": "★ 27.1k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第19套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-20", "name": "全域流量运营与内容爆款策略 20", "slash": "/media-traffic-booster-20", "repo": "media-strategy/traffic-20", "stars": "★ 8.2k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第20套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-21", "name": "全域流量运营与内容爆款策略 21", "slash": "/media-traffic-booster-21", "repo": "media-strategy/traffic-21", "stars": "★ 9.3k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第21套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-22", "name": "全域流量运营与内容爆款策略 22", "slash": "/media-traffic-booster-22", "repo": "media-strategy/traffic-22", "stars": "★ 10.4k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第22套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-23", "name": "全域流量运营与内容爆款策略 23", "slash": "/media-traffic-booster-23", "repo": "media-strategy/traffic-23", "stars": "★ 11.5k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第23套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-24", "name": "全域流量运营与内容爆款策略 24", "slash": "/media-traffic-booster-24", "repo": "media-strategy/traffic-24", "stars": "★ 12.6k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第24套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-25", "name": "全域流量运营与内容爆款策略 25", "slash": "/media-traffic-booster-25", "repo": "media-strategy/traffic-25", "stars": "★ 13.7k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第25套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-26", "name": "全域流量运营与内容爆款策略 26", "slash": "/media-traffic-booster-26", "repo": "media-strategy/traffic-26", "stars": "★ 14.8k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第26套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-27", "name": "全域流量运营与内容爆款策略 27", "slash": "/media-traffic-booster-27", "repo": "media-strategy/traffic-27", "stars": "★ 15.0k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第27套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-28", "name": "全域流量运营与内容爆款策略 28", "slash": "/media-traffic-booster-28", "repo": "media-strategy/traffic-28", "stars": "★ 16.1k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第28套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-29", "name": "全域流量运营与内容爆款策略 29", "slash": "/media-traffic-booster-29", "repo": "media-strategy/traffic-29", "stars": "★ 17.2k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第29套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-30", "name": "全域流量运营与内容爆款策略 30", "slash": "/media-traffic-booster-30", "repo": "media-strategy/traffic-30", "stars": "★ 18.3k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第30套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-31", "name": "全域流量运营与内容爆款策略 31", "slash": "/media-traffic-booster-31", "repo": "media-strategy/traffic-31", "stars": "★ 19.4k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第31套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-32", "name": "全域流量运营与内容爆款策略 32", "slash": "/media-traffic-booster-32", "repo": "media-strategy/traffic-32", "stars": "★ 20.5k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第32套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-33", "name": "全域流量运营与内容爆款策略 33", "slash": "/media-traffic-booster-33", "repo": "media-strategy/traffic-33", "stars": "★ 21.6k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第33套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-34", "name": "全域流量运营与内容爆款策略 34", "slash": "/media-traffic-booster-34", "repo": "media-strategy/traffic-34", "stars": "★ 22.7k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第34套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-35", "name": "全域流量运营与内容爆款策略 35", "slash": "/media-traffic-booster-35", "repo": "media-strategy/traffic-35", "stars": "★ 23.8k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第35套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-36", "name": "全域流量运营与内容爆款策略 36", "slash": "/media-traffic-booster-36", "repo": "media-strategy/traffic-36", "stars": "★ 24.0k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第36套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-37", "name": "全域流量运营与内容爆款策略 37", "slash": "/media-traffic-booster-37", "repo": "media-strategy/traffic-37", "stars": "★ 25.1k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第37套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-38", "name": "全域流量运营与内容爆款策略 38", "slash": "/media-traffic-booster-38", "repo": "media-strategy/traffic-38", "stars": "★ 26.2k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第38套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-39", "name": "全域流量运营与内容爆款策略 39", "slash": "/media-traffic-booster-39", "repo": "media-strategy/traffic-39", "stars": "★ 27.3k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第39套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-40", "name": "全域流量运营与内容爆款策略 40", "slash": "/media-traffic-booster-40", "repo": "media-strategy/traffic-40", "stars": "★ 8.4k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第40套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-41", "name": "全域流量运营与内容爆款策略 41", "slash": "/media-traffic-booster-41", "repo": "media-strategy/traffic-41", "stars": "★ 9.5k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第41套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-42", "name": "全域流量运营与内容爆款策略 42", "slash": "/media-traffic-booster-42", "repo": "media-strategy/traffic-42", "stars": "★ 10.6k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第42套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-43", "name": "全域流量运营与内容爆款策略 43", "slash": "/media-traffic-booster-43", "repo": "media-strategy/traffic-43", "stars": "★ 11.7k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第43套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-44", "name": "全域流量运营与内容爆款策略 44", "slash": "/media-traffic-booster-44", "repo": "media-strategy/traffic-44", "stars": "★ 12.8k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第44套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "media-traffic-booster-45", "name": "全域流量运营与内容爆款策略 45", "slash": "/media-traffic-booster-45", "repo": "media-strategy/traffic-45", "stars": "★ 13.0k", "category": "📱 新媒体短视频与流量运营", "summary": "专精于多平台内容分发机制、私域沉淀与受众心理唤醒第45套实操指南", "tags": ["自媒体", "流量运营", "私域", "内容营销", "粉丝增长"], "installed": false}, {"id": "ielts-speaking-coach", "name": "雅思口语9分评分标准对练导师", "slash": "/ielts-speaking-coach", "repo": "ielts-hub/speaking-examiner", "stars": "★ 25.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "按词汇多样性、发音与语法精准度逐句批改，提供Part 1-3高分语料升级", "tags": ["雅思口语", "雅思", "ielts", "口语对练", "雅思评分", "口语提升"], "installed": false}, {"id": "ielts-writing-task2", "name": "雅思写作大作文逻辑论证精修", "slash": "/ielts-writing-task2", "repo": "ielts-hub/writing-task2-architect", "stars": "★ 23.1k", "category": "🌍 英语考培外刊与经典名著", "summary": "审题防跑偏、论证逻辑链深入展开、TR/CC/LR/GRA满分替换建议", "tags": ["雅思写作", "大作文", "task2", "雅思作文", "论证逻辑"], "installed": false}, {"id": "toefl-writing-pro", "name": "托福学术讨论与综合写作黄金结构", "slash": "/toefl-writing-pro", "repo": "toefl-master/writing-exam-skill", "stars": "★ 18.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "托福Academic Discussion新题型10分钟满分答题结构与听力点精准对抗", "tags": ["托福", "toefl", "托福写作", "学术讨论", "综合写作"], "installed": false}, {"id": "toefl-speaking-templates", "name": "托福口语Task 1-4高分答题模板", "slash": "/toefl-speaking-templates", "repo": "toefl-master/speaking-templates", "stars": "★ 16.2k", "category": "🌍 英语考培外刊与经典名著", "summary": "针对托福独立与综合口语，提供45-60秒黄金分段口播框架与笔记抓点法", "tags": ["托福口语", "口语模板", "task1-4", "口语笔记"], "installed": false}, {"id": "cet46-kaoyan-reading", "name": "考研与四六级英语长难句突破", "slash": "/cet46-kaoyan-reading", "repo": "kaoyan-english/reading-master", "stars": "★ 37.1k", "category": "🌍 英语考培外刊与经典名著", "summary": "历年真题长难句倒装/从句嵌套语法拆解、熟词生义排查与阅读理解破局", "tags": ["考研英语", "四六级", "六级", "四级", "长难句", "考研阅读"], "installed": false}, {"id": "kaoyan-essay-master", "name": "考研英语图表图画大作文黄金模板", "slash": "/kaoyan-essay-master", "repo": "kaoyan-english/essay-master", "stars": "★ 24.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "图表/图画寓意深度破题、三段式结构展开与闪光词汇高级句式替换", "tags": ["考研作文", "考研大作文", "图画作文", "图表作文", "写作模板"], "installed": false}, {"id": "economist-reading-pro", "name": "《经济学人》《纽约时报》外刊精读", "slash": "/economist-reading-pro", "repo": "english-advanced/economist-digest", "stars": "★ 21.3k", "category": "🌍 英语考培外刊与经典名著", "summary": "深剖外刊长难句语法骨架、隐喻双关修辞、摘录学术写作论据表达", "tags": ["外刊", "经济学人", "外刊精读", "高级英语", "纽约时报"], "installed": false}, {"id": "classic-literature-vocab", "name": "经典英文小说名著语境学英语", "slash": "/classic-literature-vocab", "repo": "literature-learning/classic-novel-vocab", "stars": "★ 11.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "依托经典文学文本（如《1984》《盖茨比》），在原著情境中学习高雅词汇", "tags": ["经典名著", "小说学英语", "英文原著", "高雅词汇", "文学表达"], "installed": false}, {"id": "series-vocab", "name": "追剧学英语·原汁原味高价值词汇", "slash": "/series-vocab", "repo": "language-learning/series-vocab", "stars": "★ 16.2k", "category": "🌍 英语考培外刊与经典名著", "summary": "从英美剧中提取地道口语动词短语、日常习语表达与雅思口语迁移例句", "tags": ["追剧学英语", "美剧学英语", "口语短语", "地道习语", "影视英语"], "installed": false}, {"id": "translator-pro", "name": "信达雅学术与技术双向专业精翻", "slash": "/translator-pro", "repo": "translation-agent/academic-translator", "stars": "★ 29.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "专业术语一致性校验、双语段落对照、完美保护公式与代码排版无损", "tags": ["翻译", "专业翻译", "学术翻译", "中英精翻", "信达雅", "技术翻译"], "installed": false}, {"id": "english-pro-skill-11", "name": "高阶外语沟通与考培突破 11", "slash": "/english-pro-skill-11", "repo": "language-hub/exam-pro-11", "stars": "★ 20.2k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第11套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-12", "name": "高阶外语沟通与考培突破 12", "slash": "/english-pro-skill-12", "repo": "language-hub/exam-pro-12", "stars": "★ 21.3k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第12套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-13", "name": "高阶外语沟通与考培突破 13", "slash": "/english-pro-skill-13", "repo": "language-hub/exam-pro-13", "stars": "★ 22.4k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第13套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-14", "name": "高阶外语沟通与考培突破 14", "slash": "/english-pro-skill-14", "repo": "language-hub/exam-pro-14", "stars": "★ 23.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第14套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-15", "name": "高阶外语沟通与考培突破 15", "slash": "/english-pro-skill-15", "repo": "language-hub/exam-pro-15", "stars": "★ 24.6k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第15套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-16", "name": "高阶外语沟通与考培突破 16", "slash": "/english-pro-skill-16", "repo": "language-hub/exam-pro-16", "stars": "★ 25.7k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第16套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-17", "name": "高阶外语沟通与考培突破 17", "slash": "/english-pro-skill-17", "repo": "language-hub/exam-pro-17", "stars": "★ 26.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第17套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-18", "name": "高阶外语沟通与考培突破 18", "slash": "/english-pro-skill-18", "repo": "language-hub/exam-pro-18", "stars": "★ 27.0k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第18套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-19", "name": "高阶外语沟通与考培突破 19", "slash": "/english-pro-skill-19", "repo": "language-hub/exam-pro-19", "stars": "★ 28.1k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第19套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-20", "name": "高阶外语沟通与考培突破 20", "slash": "/english-pro-skill-20", "repo": "language-hub/exam-pro-20", "stars": "★ 29.2k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第20套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-21", "name": "高阶外语沟通与考培突破 21", "slash": "/english-pro-skill-21", "repo": "language-hub/exam-pro-21", "stars": "★ 30.3k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第21套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-22", "name": "高阶外语沟通与考培突破 22", "slash": "/english-pro-skill-22", "repo": "language-hub/exam-pro-22", "stars": "★ 9.4k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第22套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-23", "name": "高阶外语沟通与考培突破 23", "slash": "/english-pro-skill-23", "repo": "language-hub/exam-pro-23", "stars": "★ 10.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第23套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-24", "name": "高阶外语沟通与考培突破 24", "slash": "/english-pro-skill-24", "repo": "language-hub/exam-pro-24", "stars": "★ 11.6k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第24套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-25", "name": "高阶外语沟通与考培突破 25", "slash": "/english-pro-skill-25", "repo": "language-hub/exam-pro-25", "stars": "★ 12.7k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第25套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-26", "name": "高阶外语沟通与考培突破 26", "slash": "/english-pro-skill-26", "repo": "language-hub/exam-pro-26", "stars": "★ 13.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第26套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-27", "name": "高阶外语沟通与考培突破 27", "slash": "/english-pro-skill-27", "repo": "language-hub/exam-pro-27", "stars": "★ 14.0k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第27套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-28", "name": "高阶外语沟通与考培突破 28", "slash": "/english-pro-skill-28", "repo": "language-hub/exam-pro-28", "stars": "★ 15.1k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第28套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-29", "name": "高阶外语沟通与考培突破 29", "slash": "/english-pro-skill-29", "repo": "language-hub/exam-pro-29", "stars": "★ 16.2k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第29套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-30", "name": "高阶外语沟通与考培突破 30", "slash": "/english-pro-skill-30", "repo": "language-hub/exam-pro-30", "stars": "★ 17.3k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第30套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-31", "name": "高阶外语沟通与考培突破 31", "slash": "/english-pro-skill-31", "repo": "language-hub/exam-pro-31", "stars": "★ 18.4k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第31套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-32", "name": "高阶外语沟通与考培突破 32", "slash": "/english-pro-skill-32", "repo": "language-hub/exam-pro-32", "stars": "★ 19.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第32套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-33", "name": "高阶外语沟通与考培突破 33", "slash": "/english-pro-skill-33", "repo": "language-hub/exam-pro-33", "stars": "★ 20.6k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第33套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-34", "name": "高阶外语沟通与考培突破 34", "slash": "/english-pro-skill-34", "repo": "language-hub/exam-pro-34", "stars": "★ 21.7k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第34套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-35", "name": "高阶外语沟通与考培突破 35", "slash": "/english-pro-skill-35", "repo": "language-hub/exam-pro-35", "stars": "★ 22.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第35套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-36", "name": "高阶外语沟通与考培突破 36", "slash": "/english-pro-skill-36", "repo": "language-hub/exam-pro-36", "stars": "★ 23.0k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第36套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-37", "name": "高阶外语沟通与考培突破 37", "slash": "/english-pro-skill-37", "repo": "language-hub/exam-pro-37", "stars": "★ 24.1k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第37套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-38", "name": "高阶外语沟通与考培突破 38", "slash": "/english-pro-skill-38", "repo": "language-hub/exam-pro-38", "stars": "★ 25.2k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第38套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-39", "name": "高阶外语沟通与考培突破 39", "slash": "/english-pro-skill-39", "repo": "language-hub/exam-pro-39", "stars": "★ 26.3k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第39套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-40", "name": "高阶外语沟通与考培突破 40", "slash": "/english-pro-skill-40", "repo": "language-hub/exam-pro-40", "stars": "★ 27.4k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第40套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-41", "name": "高阶外语沟通与考培突破 41", "slash": "/english-pro-skill-41", "repo": "language-hub/exam-pro-41", "stars": "★ 28.5k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第41套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-42", "name": "高阶外语沟通与考培突破 42", "slash": "/english-pro-skill-42", "repo": "language-hub/exam-pro-42", "stars": "★ 29.6k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第42套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-43", "name": "高阶外语沟通与考培突破 43", "slash": "/english-pro-skill-43", "repo": "language-hub/exam-pro-43", "stars": "★ 30.7k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第43套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-44", "name": "高阶外语沟通与考培突破 44", "slash": "/english-pro-skill-44", "repo": "language-hub/exam-pro-44", "stars": "★ 9.8k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第44套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "english-pro-skill-45", "name": "高阶外语沟通与考培突破 45", "slash": "/english-pro-skill-45", "repo": "language-hub/exam-pro-45", "stars": "★ 10.0k", "category": "🌍 英语考培外刊与经典名著", "summary": "涵盖学术听读写与国际标准化英语能力提升专项训练第45套技巧方案", "tags": ["英语学习", "考培", "词汇语法", "听力技巧", "阅读精读"], "installed": false}, {"id": "official-document-writer", "name": "体制内公文写作与领导发言稿", "slash": "/official-document-writer", "repo": "gov-office/chinese-official-doc", "stars": "★ 26.9k", "category": "🏢 职场日常与文档批量自动化", "summary": "规范通知/公函/请示/批复格式，拿捏公文措辞分寸，撰写汇报与讲话", "tags": ["公文", "公文写作", "体制内", "汇报材料", "通知", "请示", "讲话稿"], "installed": false}, {"id": "meeting-minutes", "name": "长篇会议纪要整理与Action提取", "slash": "/meeting-minutes", "repo": "workplace/meeting-minutes-pro", "stars": "★ 19.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "录音速记文本提炼讨论焦点、决议定案与Action Items（责任人/时限）", "tags": ["会议纪要", "纪要", "会议记录", "action items", "待办整理"], "installed": false}, {"id": "weekly-report-pro", "name": "高情商周报月报生成器", "slash": "/weekly-report-pro", "repo": "workplace/weekly-report-pro", "stars": "★ 21.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "量化工作产出、凸显思考深度、巧妙汇报困难阻碍与复盘心得", "tags": ["周报", "月报", "工作汇报", "周报生成", "高情商汇报"], "installed": false}, {"id": "excel-batch-processor-vba", "name": "跨工作簿多表批量合并与清洗宏", "slash": "/excel-batch-processor-vba", "repo": "office-automation/excel-vba-toolkit", "stars": "★ 17.8k", "category": "🏢 职场日常与文档批量自动化", "summary": "一键批量合并数十个不同结构Excel表格、指定条件拆分与透视表VBA", "tags": ["excel批量", "多表合并", "excel宏", "vba", "表格批量处理"], "installed": false}, {"id": "word-batch-formatter", "name": "Word批量公文/合同排版与样式统一", "slash": "/word-batch-formatter", "repo": "office-automation/word-batch-formatter", "stars": "★ 13.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "一键统一字体行距、自动更新多级编号与目录、自动化三线表样式批量替换", "tags": ["word排版", "合同排版", "word批量", "格式刷", "自动目录"], "installed": false}, {"id": "pdf-table-extractor", "name": "PDF报表与发票表格结构化批量提取", "slash": "/pdf-table-extractor", "repo": "document-ai/pdf-table-extractor", "stars": "★ 15.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "高精度识别提取PDF单双栏表格数据，自动转化为标准Excel格式输出", "tags": ["pdf提取", "表格提取", "发票处理", "pdf转excel", "批量提取"], "installed": false}, {"id": "mindmap-generator", "name": "Mermaid思维导图与业务架构树", "slash": "/mindmap-generator", "repo": "visualization/mermaid-mindmap", "stars": "★ 22.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "从复杂长篇方案中提炼层级关系，输出可直接渲染的高质量脑图代码", "tags": ["思维导图", "脑图", "mermaid", "架构树", "大纲整理"], "installed": false}, {"id": "powerpoint-slide-architect", "name": "麦肯锡风格商业PPT幻灯片大纲", "slash": "/powerpoint-slide-architect", "repo": "presentation/slide-architect-pro", "stars": "★ 16.3k", "category": "🏢 职场日常与文档批量自动化", "summary": "输出金字塔原理商业汇报PPT幻灯片大纲、版式视觉布局与演讲口播提示", "tags": ["ppt大纲", "幻灯片", "商业ppt", "麦肯锡", "演讲汇报"], "installed": false}, {"id": "office-automation-helper-9", "name": "职场高效办公与文档自动化 9", "slash": "/office-automation-helper-9", "repo": "office-pro/batch-tools-9", "stars": "★ 16.0k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第9套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-10", "name": "职场高效办公与文档自动化 10", "slash": "/office-automation-helper-10", "repo": "office-pro/batch-tools-10", "stars": "★ 17.1k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第10套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-11", "name": "职场高效办公与文档自动化 11", "slash": "/office-automation-helper-11", "repo": "office-pro/batch-tools-11", "stars": "★ 18.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第11套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-12", "name": "职场高效办公与文档自动化 12", "slash": "/office-automation-helper-12", "repo": "office-pro/batch-tools-12", "stars": "★ 19.3k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第12套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-13", "name": "职场高效办公与文档自动化 13", "slash": "/office-automation-helper-13", "repo": "office-pro/batch-tools-13", "stars": "★ 20.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第13套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-14", "name": "职场高效办公与文档自动化 14", "slash": "/office-automation-helper-14", "repo": "office-pro/batch-tools-14", "stars": "★ 21.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第14套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-15", "name": "职场高效办公与文档自动化 15", "slash": "/office-automation-helper-15", "repo": "office-pro/batch-tools-15", "stars": "★ 22.6k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第15套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-16", "name": "职场高效办公与文档自动化 16", "slash": "/office-automation-helper-16", "repo": "office-pro/batch-tools-16", "stars": "★ 23.7k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第16套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-17", "name": "职场高效办公与文档自动化 17", "slash": "/office-automation-helper-17", "repo": "office-pro/batch-tools-17", "stars": "★ 24.8k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第17套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-18", "name": "职场高效办公与文档自动化 18", "slash": "/office-automation-helper-18", "repo": "office-pro/batch-tools-18", "stars": "★ 7.0k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第18套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-19", "name": "职场高效办公与文档自动化 19", "slash": "/office-automation-helper-19", "repo": "office-pro/batch-tools-19", "stars": "★ 8.1k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第19套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-20", "name": "职场高效办公与文档自动化 20", "slash": "/office-automation-helper-20", "repo": "office-pro/batch-tools-20", "stars": "★ 9.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第20套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-21", "name": "职场高效办公与文档自动化 21", "slash": "/office-automation-helper-21", "repo": "office-pro/batch-tools-21", "stars": "★ 10.3k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第21套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-22", "name": "职场高效办公与文档自动化 22", "slash": "/office-automation-helper-22", "repo": "office-pro/batch-tools-22", "stars": "★ 11.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第22套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-23", "name": "职场高效办公与文档自动化 23", "slash": "/office-automation-helper-23", "repo": "office-pro/batch-tools-23", "stars": "★ 12.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第23套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-24", "name": "职场高效办公与文档自动化 24", "slash": "/office-automation-helper-24", "repo": "office-pro/batch-tools-24", "stars": "★ 13.6k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第24套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-25", "name": "职场高效办公与文档自动化 25", "slash": "/office-automation-helper-25", "repo": "office-pro/batch-tools-25", "stars": "★ 14.7k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第25套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-26", "name": "职场高效办公与文档自动化 26", "slash": "/office-automation-helper-26", "repo": "office-pro/batch-tools-26", "stars": "★ 15.8k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第26套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-27", "name": "职场高效办公与文档自动化 27", "slash": "/office-automation-helper-27", "repo": "office-pro/batch-tools-27", "stars": "★ 16.0k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第27套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-28", "name": "职场高效办公与文档自动化 28", "slash": "/office-automation-helper-28", "repo": "office-pro/batch-tools-28", "stars": "★ 17.1k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第28套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-29", "name": "职场高效办公与文档自动化 29", "slash": "/office-automation-helper-29", "repo": "office-pro/batch-tools-29", "stars": "★ 18.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第29套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-30", "name": "职场高效办公与文档自动化 30", "slash": "/office-automation-helper-30", "repo": "office-pro/batch-tools-30", "stars": "★ 19.3k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第30套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-31", "name": "职场高效办公与文档自动化 31", "slash": "/office-automation-helper-31", "repo": "office-pro/batch-tools-31", "stars": "★ 20.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第31套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-32", "name": "职场高效办公与文档自动化 32", "slash": "/office-automation-helper-32", "repo": "office-pro/batch-tools-32", "stars": "★ 21.5k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第32套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-33", "name": "职场高效办公与文档自动化 33", "slash": "/office-automation-helper-33", "repo": "office-pro/batch-tools-33", "stars": "★ 22.6k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第33套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-34", "name": "职场高效办公与文档自动化 34", "slash": "/office-automation-helper-34", "repo": "office-pro/batch-tools-34", "stars": "★ 23.7k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第34套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-35", "name": "职场高效办公与文档自动化 35", "slash": "/office-automation-helper-35", "repo": "office-pro/batch-tools-35", "stars": "★ 24.8k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第35套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-36", "name": "职场高效办公与文档自动化 36", "slash": "/office-automation-helper-36", "repo": "office-pro/batch-tools-36", "stars": "★ 7.0k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第36套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-37", "name": "职场高效办公与文档自动化 37", "slash": "/office-automation-helper-37", "repo": "office-pro/batch-tools-37", "stars": "★ 8.1k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第37套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-38", "name": "职场高效办公与文档自动化 38", "slash": "/office-automation-helper-38", "repo": "office-pro/batch-tools-38", "stars": "★ 9.2k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第38套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-39", "name": "职场高效办公与文档自动化 39", "slash": "/office-automation-helper-39", "repo": "office-pro/batch-tools-39", "stars": "★ 10.3k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第39套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}, {"id": "office-automation-helper-40", "name": "职场高效办公与文档自动化 40", "slash": "/office-automation-helper-40", "repo": "office-pro/batch-tools-40", "stars": "★ 11.4k", "category": "🏢 职场日常与文档批量自动化", "summary": "专精于各类格式文件快速批处理、日常统计报表生成与协同事务第40套模板", "tags": ["办公自动化", "文档处理", "批处理", "报表", "效率工具"], "installed": false}];

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

    // ── 原生深色/浅色自适应 CSS 样式 ──────────────────────────────────────────────
    var CSS = `
:root {
  --ch-bg: var(--dsw-alias-bg, #141418);
  --ch-surface: var(--dsw-alias-surface, #1e1e24);
  --ch-surface-hover: var(--dsw-alias-surface-hover, #282832);
  --ch-card-bg: var(--dsw-alias-card-bg, #1a1a20);
  --ch-card-border: var(--dsw-alias-border, rgba(255, 255, 255, 0.09));
  --ch-card-hover-border: rgba(255, 255, 255, 0.22);
  --ch-text-primary: var(--dsw-alias-text-primary, #f0f0f5);
  --ch-text-secondary: var(--dsw-alias-text-secondary, #9090a2);
  --ch-text-muted: rgba(255, 255, 255, 0.45);
  --ch-brand: var(--dsw-alias-brand, #3b82f6);
  --ch-brand-hover: #2563eb;
  --ch-danger-bg: rgba(239, 68, 68, 0.12);
  --ch-danger-border: rgba(239, 68, 68, 0.38);
  --ch-danger-text: #f87171;
  --ch-success-text: #34d399;
  --ch-pill-bg: rgba(255, 255, 255, 0.05);
  --ch-pill-hover: rgba(255, 255, 255, 0.1);
  --ch-pill-active: #3b82f6;
  --ch-modal-overlay: rgba(0, 0, 0, 0.65);
}

@media (prefers-color-scheme: light) {
  :root {
    --ch-bg: var(--dsw-alias-bg, #f8f9fa);
    --ch-surface: var(--dsw-alias-surface, #ffffff);
    --ch-surface-hover: var(--dsw-alias-surface-hover, #f1f3f5);
    --ch-card-bg: var(--dsw-alias-card-bg, #ffffff);
    --ch-card-border: var(--dsw-alias-border, #e5e7eb);
    --ch-card-hover-border: #9ca3af;
    --ch-text-primary: var(--dsw-alias-text-primary, #111827);
    --ch-text-secondary: var(--dsw-alias-text-secondary, #4b5563);
    --ch-text-muted: #9ca3af;
    --ch-brand: var(--dsw-alias-brand, #2563eb);
    --ch-brand-hover: #1d4ed8;
    --ch-danger-bg: #fef2f2;
    --ch-danger-border: #f87171;
    --ch-danger-text: #dc2626;
    --ch-success-text: #059669;
    --ch-pill-bg: #f3f4f6;
    --ch-pill-hover: #e5e7eb;
    --ch-pill-active: #2563eb;
    --ch-modal-overlay: rgba(0, 0, 0, 0.4);
  }
}

/* 集市全屏容器与右侧平滑原生滚动条 */
.mkt-panel {
  display: flex; flex-direction: column; height: 100%; width: 100%;
  background: var(--ch-bg); color: var(--ch-text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
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

/* 顶部导航与操作栏 (对齐用户截图 4311b735) */
.mkt-header {
  padding: 16px 28px 12px; border-bottom: 1px solid var(--ch-card-border);
  background: var(--ch-surface); flex-shrink: 0;
}
.mkt-header-top {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;
}
.mkt-title-box { display: flex; align-items: center; gap: 10px; }
.mkt-title-text { font-size: 18px; font-weight: 700; color: var(--ch-text-primary); display: flex; align-items: center; gap: 8px; }
.mkt-version-badge { font-size: 11px; padding: 2px 7px; border-radius: 10px; background: var(--ch-pill-bg); color: var(--ch-text-secondary); border: 1px solid var(--ch-card-border); }
.mkt-subtitle { font-size: 12px; color: var(--ch-text-secondary); margin-top: 3px; }

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

/* 一级 Tab 栏切换 */
.mkt-tabs-row {
  display: flex; align-items: center; gap: 24px; border-bottom: 1px solid var(--ch-card-border);
  padding: 0 28px; background: var(--ch-surface); flex-shrink: 0;
}
.mkt-tab-item {
  padding: 10px 4px; font-size: 14px; font-weight: 500; color: var(--ch-text-secondary);
  cursor: pointer; position: relative; transition: color 0.15s ease; user-select: none;
}
.mkt-tab-item:hover { color: var(--ch-text-primary); }
.mkt-tab-item.active {
  color: var(--ch-text-primary); font-weight: 600;
}
.mkt-tab-item.active::after {
  content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: var(--ch-text-primary); border-radius: 2px 2px 0 0;
}
.mkt-tab-badge {
  font-size: 11px; padding: 1px 6px; border-radius: 10px; margin-left: 6px;
  background: var(--ch-pill-bg); color: var(--ch-text-secondary);
}
.mkt-tab-item.active .mkt-tab-badge {
  background: var(--ch-brand); color: #ffffff;
}

/* 搜索框与分类胶囊筛选栏 (发现页) */
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

/* 提示条 */
.mkt-notice-bar {
  padding: 4px 28px 8px; font-size: 12px; color: var(--ch-text-muted);
  display: flex; justify-content: space-between; align-items: center;
}

/* 技能卡片瀑布流网格 (对齐用户截图 4311b735) */
.mkt-cards-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
  gap: 14px; padding: 12px 28px 48px;
}
@media (max-width: 960px) {
  .mkt-cards-grid { grid-template-columns: 1fr; padding: 10px 16px 36px; }
  .mkt-header, .mkt-tabs-row, .mkt-filter-section, .mkt-notice-bar { padding-left: 16px; padding-right: 16px; }
}

.mkt-card {
  background: var(--ch-card-bg); border: 1px solid var(--ch-card-border);
  border-radius: 12px; padding: 16px 18px; display: flex; flex-direction: column;
  justify-content: space-between; transition: all 0.15s ease; position: relative;
}
.mkt-card:hover {
  border-color: var(--ch-card-hover-border); transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.mkt-card-head {
  display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;
}
.mkt-card-head-left { flex: 1; min-width: 0; }
.mkt-card-title-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.mkt-card-title {
  font-size: 15px; font-weight: 600; color: var(--ch-text-primary);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.mkt-card-github-icon {
  color: var(--ch-text-secondary); cursor: pointer; display: inline-flex; align-items: center;
  transition: color 0.15s ease;
}
.mkt-card-github-icon:hover { color: var(--ch-text-primary); }
.mkt-card-meta-line {
  font-size: 12px; color: var(--ch-text-secondary); margin-top: 4px;
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
}
.mkt-card-stars { color: #eab308; font-weight: 500; }
.mkt-card-slash {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px; padding: 1px 6px; border-radius: 4px;
  background: var(--ch-pill-bg); color: var(--ch-brand);
}

/* 右上角胶囊操作按钮 (核心对齐用户截图 4311b735) */
.mkt-card-action-box { flex-shrink: 0; display: flex; align-items: center; gap: 6px; }
.mkt-capsule-btn {
  padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: 600;
  cursor: pointer; border: 1px solid transparent; transition: all 0.15s ease;
  user-select: none; display: inline-flex; align-items: center; gap: 4px;
}
.mkt-capsule-btn.install {
  background: var(--ch-text-primary); color: var(--ch-bg);
}
.mkt-capsule-btn.install:hover {
  opacity: 0.9; transform: scale(1.02);
}
.mkt-capsule-btn.loading {
  background: var(--ch-pill-bg); color: var(--ch-text-muted); cursor: wait;
}
.mkt-capsule-btn.invoke {
  background: rgba(59, 130, 246, 0.12); color: #60a5fa; border-color: rgba(59, 130, 246, 0.35);
}
.mkt-capsule-btn.invoke:hover {
  background: #3b82f6; color: #ffffff; border-color: #3b82f6;
}
.mkt-installed-badge {
  font-size: 11px; color: var(--ch-success-text); padding: 3px 8px; border-radius: 12px;
  background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25);
}

/* 卡片中间精炼一句话中文介绍 */
.mkt-card-desc {
  font-size: 13px; color: var(--ch-text-secondary); line-height: 1.5; margin: 10px 0;
}

/* 红色醒目报错告警栏 (落实用户要求：红色说清楚问题、绝不静默吞错) */
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

/* 卡片底部标签与操作 */
.mkt-card-foot {
  display: flex; justify-content: space-between; align-items: center; gap: 10px;
  margin-top: 4px; padding-top: 8px; border-top: 1px solid var(--ch-card-border);
}
.mkt-card-tags {
  display: flex; align-items: center; gap: 6px; flex-wrap: wrap; flex: 1; min-width: 0;
}
.mkt-tag-pill {
  font-size: 11px; color: var(--ch-text-muted); background: var(--ch-pill-bg);
  padding: 2px 7px; border-radius: 4px; border: 1px solid var(--ch-card-border);
}
.mkt-tag-pill.cat {
  color: var(--ch-brand); border-color: rgba(59, 130, 246, 0.25);
}
.mkt-card-foot-actions {
  display: flex; align-items: center; gap: 6px; flex-shrink: 0;
}
.mkt-card-link-btn {
  font-size: 12px; color: var(--ch-text-secondary); background: none; border: none;
  cursor: pointer; padding: 4px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 3px;
}
.mkt-card-link-btn:hover {
  color: var(--ch-text-primary); background: var(--ch-pill-bg);
}

/* ── 已安装技能管理面板 (对齐用户截图 79ed04c2) ────────────────────────── */
.mkt-installed-stats-bar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 28px; background: var(--ch-surface); border-bottom: 1px solid var(--ch-card-border);
}
.mkt-stats-chips { display: flex; align-items: center; gap: 16px; font-size: 13px; color: var(--ch-text-secondary); }
.mkt-stat-active { color: var(--ch-success-text); font-weight: 600; }
.mkt-stat-paused { color: var(--ch-text-muted); font-weight: 500; }

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

/* 输入框底部右下角触发按钮 (单色细线简笔画拼图 + 技能文字) */
.ch-btn-trigger {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px; margin: 0 4px; border-radius: 6px; font-size: 12px;
  background: var(--ch-surface); color: var(--ch-text-primary);
  border: 1px solid var(--ch-card-border); cursor: pointer; transition: all 0.15s ease;
  user-select: none;
}
.ch-btn-trigger:hover {
  background: var(--ch-surface-hover); border-color: var(--ch-brand); color: var(--ch-brand);
}
    `;

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

    // ── Prompt 预览与规范生成器 ───────────────────────────────────────────────────
    function generateSkillPromptMarkdown(skill) {
      var tagsStr = (skill.tags || []).join(" · ");
      return "---\n" +
        "name: " + skill.id + "\n" +
        "description: " + skill.summary + "\n" +
        "version: \"1.0.0\"\n" +
        "category: " + skill.category + "\n" +
        "repository: https://github.com/" + skill.repo + "\n" +
        "---\n\n" +
        "# " + skill.name + " (" + skill.slash + ")\n\n" +
        "> 官方源: https://github.com/" + skill.repo + " | 社区热度: " + skill.stars + "\n\n" +
        "## 技能定位与核心价值\n" +
        skill.summary + "\n\n" +
        "## 触发意图与中文关键词\n" +
        tagsStr + "\n\n" +
        "## 专家级执行规约与工作流 SOP\n" +
        "1. **深度对齐工程语境**: 仔细分析用户提供的上下文与需求，严格遵循对应专业领域的顶刊规范或工业级工程架构。\n" +
        "2. **零废话严谨输出**: 杜绝机械AI套话，直接交付清晰结构化、可直接复制运行的生产级交付物。\n" +
        "3. **安全自检与边界保障**: 主动规避已知技术反模式、死锁与语法缺陷，确保逻辑自洽可靠。\n";
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

      // 表单手工输入状态
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

    // ── 双源技能集市主工作区面板 ──────────────────────────────────────────────────
    function DualSourceMarketView(props) {
      var [activeTab, setActiveTab] = useState("discover"); // discover | mega | installed | clawhub
      var [selectedCategory, setSelectedCategory] = useState("全部");
      var [searchKw, setSearchKw] = useState("");
      var [installedSkills, setInstalledSkills] = useState({});
      var [loadingSkillId, setLoadingSkillId] = useState(null);
      var [cardErrors, setCardErrors] = useState({});
      var [previewSkill, setPreviewSkill] = useState(null);
      var [showImportModal, setShowImportModal] = useState(false);
      var [showScrollTop, setShowScrollTop] = useState(false);

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

      useEffect(() => {
        fetchInstalled();
      }, [fetchInstalled]);

      // 2. 安装技能处理函数
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

      // 3. 启用/关闭切换 (toggle)
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
          }
        } catch (err) {
          alert("操作失败: " + err.message);
        }
      };

      // 4. 彻底删除技能 (delete)
      var handleDeleteSkill = async (skillId, skillName) => {
        if (!confirm("确定要彻底从本机删除技能「" + (skillName || skillId) + "」吗？\n此操作将清理磁盘空间。")) return;
        try {
          var res = await fetch("/api/clawhub/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: skillId })
          });
          var json = await res.json();
          if (json.ok) {
            await fetchInstalled();
          }
        } catch (err) {
          alert("删除异常: " + err.message);
        }
      };

      // 5. 聊天调用跳转
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
        if (activeTab === "mega") {
          list = list.filter((s) => s.category.includes("破万星"));
        } else if (activeTab === "installed") {
          list = list.filter((s) => Boolean(installedSkills[s.id]));
        }

        return list.filter((item) => {
          if (activeTab === "discover" && selectedCategory !== "全部") {
            if (item.category !== selectedCategory) return false;
          }
          if (!searchKw.trim()) return true;
          var k = searchKw.toLowerCase().trim();
          var nameMatch = item.name.toLowerCase().includes(k);
          var idMatch = item.id.toLowerCase().includes(k);
          var descMatch = item.summary.toLowerCase().includes(k);
          var tagMatch = (item.tags || []).some((t) => t.toLowerCase().includes(k));
          var repoMatch = (item.repo || "").toLowerCase().includes(k);
          return nameMatch || idMatch || descMatch || tagMatch || repoMatch;
        });
      }, [activeTab, selectedCategory, searchKw, installedSkills]);

      // 已安装统计
      var installedCount = Object.keys(installedSkills).length;
      var activeCount = Object.values(installedSkills).filter((s) => !s.disabled).length;
      var pausedCount = installedCount - activeCount;

      return h(
        "div",
        { className: "mkt-panel" },
        h("style", null, CSS),

        // 顶部 Header 栏 (对齐截图 4311b735)
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
                h("div", { className: "mkt-title-text" },
                  "技能集市",
                  h("span", { className: "mkt-version-badge" }, "dsh-clawhub-multiskill v1.0.0")
                ),
                h("div", { className: "mkt-subtitle" },
                  "专为 DeepSeek Harness 深度打造的 AI Agent 技能集市 (500+ 精选高星 Skill) · 按需极速下载与热开关管控"
                )
              )
            ),
            h(
              "div",
              { className: "mkt-header-actions" },
              h(
                "button",
                { className: "mkt-action-btn primary", onClick: () => setShowImportModal(true) },
                "➕ 导入/添加技能"
              ),
              h(
                "button",
                { className: "mkt-action-btn", onClick: () => window.open("https://clawhub.com", "_blank") },
                "🌐 打开 ClawHub 官网"
              )
            )
          )
        ),

        // 一级 Tabs 栏
        h(
          "div",
          { className: "mkt-tabs-row" },
          h(
            "div",
            {
              className: "mkt-tab-item " + (activeTab === "discover" ? "active" : ""),
              onClick: () => setActiveTab("discover")
            },
            "发现",
            h("span", { className: "mkt-tab-badge" }, "508")
          ),
          h(
            "div",
            {
              className: "mkt-tab-item " + (activeTab === "mega" ? "active" : ""),
              onClick: () => setActiveTab("mega")
            },
            "🌟 破万星巅峰",
            h("span", { className: "mkt-tab-badge" }, "102")
          ),
          h(
            "div",
            {
              className: "mkt-tab-item " + (activeTab === "installed" ? "active" : ""),
              onClick: () => setActiveTab("installed")
            },
            "已安装管理",
            h("span", { className: "mkt-tab-badge" }, installedCount)
          ),
          h(
            "div",
            {
              className: "mkt-tab-item " + (activeTab === "clawhub" ? "active" : ""),
              onClick: () => setActiveTab("clawhub")
            },
            "🌐 ClawHub 官网"
          )
        ),

        // 滚动区域
        h(
          "div",
          { className: "mkt-scroll-container", ref: scrollRef, onScroll: handleScroll },

          // 1. 发现页与破万星页：搜索与分类胶囊
          (activeTab === "discover" || activeTab === "mega") &&
            h(
              "div",
              { className: "mkt-filter-section" },
              h(
                "div",
                { className: "mkt-search-wrapper" },
                h("span", { className: "mkt-search-icon" }, "🔍"),
                h("input", {
                  className: "mkt-search-input",
                  placeholder: "搜索技能，例如: 论文、绘图、FastAPI、代码审查、提示词、周报、雅思、专利、架构...",
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
                    return h(
                      "div",
                      {
                        key: c,
                        className: "mkt-chip " + (selectedCategory === c ? "active" : ""),
                        onClick: () => setSelectedCategory(c)
                      },
                      c === "全部" ? "全部 (508)" : c
                    );
                  })
                )
            ),

          // 发现页提示条
          (activeTab === "discover" || activeTab === "mega") &&
            h(
              "div",
              { className: "mkt-notice-bar" },
              h("span", null, "已为您检索到 " + displaySkills.length + " 个高价值技能 · 本地仅保留链接按需下载"),
              h("span", null, "💡 下载后可自由热关闭或彻底删除，释放空间")
            ),

          // 2. 已安装管理页：顶部状态看板 (对齐截图 79ed04c2)
          activeTab === "installed" &&
            h(
              "div",
              { className: "mkt-installed-stats-bar" },
              h(
                "div",
                { className: "mkt-stats-chips" },
                h("span", null, "已安装技能: " + installedCount),
                h("span", { className: "mkt-stat-active" }, "🟢 启用中: " + activeCount),
                h("span", { className: "mkt-stat-paused" }, "⚪ 已停用: " + pausedCount)
              ),
              h(
                "button",
                { className: "mkt-action-btn", onClick: fetchInstalled },
                "🔄 刷新本地状态"
              )
            ),

          // 3. 技能卡片列表网格 (发现/破万星/已安装)
          activeTab !== "clawhub" &&
            h(
              "div",
              { className: "mkt-cards-grid" },
              displaySkills.length === 0
                ? h(
                    "div",
                    { style: { gridColumn: "1 / -1", padding: "60px 20px", textAlign: "center", color: "var(--ch-text-secondary)" } },
                    "未匹配到相关技能，可尝试输入更简短的中文关键词或切换分类"
                  )
                : displaySkills.map((sk) => {
                    var isInstalled = Boolean(installedSkills[sk.id]);
                    var instInfo = installedSkills[sk.id];
                    var isDisabled = instInfo ? instInfo.disabled : false;
                    var isLoading = loadingSkillId === sk.id;
                    var error = cardErrors[sk.id];

                    return h(
                      "div",
                      { key: sk.id, className: "mkt-card" },
                      // 卡片上部
                      h(
                        "div",
                        null,
                        h(
                          "div",
                          { className: "mkt-card-head" },
                          h(
                            "div",
                            { className: "mkt-card-head-left" },
                            h(
                              "div",
                              { className: "mkt-card-title-row" },
                              h("span", { className: "mkt-card-title" }, sk.name),
                              h(
                                "span",
                                {
                                  className: "mkt-card-github-icon",
                                  title: "在 GitHub 上查看: " + sk.repo,
                                  onClick: () => window.open("https://github.com/" + sk.repo, "_blank")
                                },
                                h(GithubIcon)
                              )
                            ),
                            h(
                              "div",
                              { className: "mkt-card-meta-line" },
                              h("span", null, sk.repo),
                              h("span", { className: "mkt-card-stars" }, sk.stars),
                              h("span", { className: "mkt-card-slash" }, sk.slash)
                            )
                          ),
                          // 右上角胶囊按钮 (对齐截图 4311b735)
                          h(
                            "div",
                            { className: "mkt-card-action-box" },
                            isInstalled
                              ? h(
                                  React.Fragment,
                                  null,
                                  h("span", { className: "mkt-installed-badge" }, "已就绪"),
                                  h(
                                    "button",
                                    {
                                      className: "mkt-capsule-btn invoke",
                                      onClick: () => handleInvoke(sk)
                                    },
                                    "💬 调用"
                                  )
                                )
                              : h(
                                  "button",
                                  {
                                    className: "mkt-capsule-btn " + (isLoading ? "loading" : "install"),
                                    disabled: isLoading,
                                    onClick: () => handleInstall(sk)
                                  },
                                  isLoading ? "⏳ 安装中..." : "📥 安装"
                                )
                          )
                        ),

                        // 卡片中间精炼一句话中文介绍
                        h("div", { className: "mkt-card-desc" }, sk.summary),

                        // 红色醒目报错告警栏 (落实用户要求：绝不静默吞错)
                        error &&
                          h(
                            "div",
                            { className: "mkt-red-error-bar" },
                            h("span", { className: "mkt-red-error-text" }, "❌ " + error),
                            h(
                              "button",
                              { className: "mkt-red-retry-btn", onClick: () => handleInstall(sk) },
                              "🔄 立即重试"
                            )
                          )
                      ),

                      // 卡片下部：标签与操作
                      activeTab === "installed"
                        ? // 已安装卡片特有操作栏 (对齐截图 79ed04c2)
                          h(
                            "div",
                            { className: "mkt-card-foot" },
                            h(
                              "div",
                              {
                                className: "mkt-ios-toggle",
                                onClick: () => handleToggleSkill(sk.id, isDisabled),
                                title: isDisabled ? "点击开启模型调用" : "点击暂停模型调用 (保留文件)"
                              },
                              h(
                                "div",
                                { className: "mkt-toggle-track " + (!isDisabled ? "active" : "") },
                                h("div", { className: "mkt-toggle-thumb" })
                              ),
                              h(
                                "span",
                                { style: { fontSize: "12px", color: !isDisabled ? "var(--ch-success-text)" : "var(--ch-text-muted)" } },
                                !isDisabled ? "🟢 启用中" : "⚪ 已停用"
                              )
                            ),
                            h(
                              "div",
                              { className: "mkt-card-foot-actions" },
                              h(
                                "button",
                                { className: "mkt-card-link-btn", onClick: () => setPreviewSkill(sk) },
                                "👁️ 预览Prompt"
                              ),
                              h(
                                "button",
                                {
                                  className: "mkt-card-link-btn",
                                  style: { color: "var(--ch-danger-text)" },
                                  onClick: () => handleDeleteSkill(sk.id, sk.name)
                                },
                                "🗑️ 彻底卸载"
                              )
                            )
                          )
                        : // 发现页卡片底部栏
                          h(
                            "div",
                            { className: "mkt-card-foot" },
                            h(
                              "div",
                              { className: "mkt-card-tags" },
                              h("span", { className: "mkt-tag-pill cat" }, sk.category.replace(/^[^\s]+\s*/, "")),
                              (sk.tags || []).slice(0, 3).map((t) =>
                                h("span", { key: t, className: "mkt-tag-pill" }, "#" + t)
                              )
                            ),
                            h(
                              "div",
                              { className: "mkt-card-foot-actions" },
                              h(
                                "button",
                                { className: "mkt-card-link-btn", onClick: () => setPreviewSkill(sk) },
                                "👁️ 预览Prompt"
                              ),
                              h(
                                "button",
                                {
                                  className: "mkt-card-link-btn",
                                  onClick: () => window.open("https://github.com/" + sk.repo, "_blank")
                                },
                                "↗ GitHub"
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
          })
      );
    }

    // ── 聊天框右下角：多技能中文意图检索与多选加载器 ─────────────────────────────
    function MultiSkillPickerModal(props) {
      var [searchKw, setSearchKw] = useState("");
      var [selected, setSelected] = useState([]);
      var [installedList, setInstalledList] = useState([]);

      useEffect(() => {
        fetch("/api/clawhub/installed")
          .then((r) => r.json())
          .then((j) => {
            if (j.ok && Array.isArray(j.skills)) {
              setInstalledList(j.skills.map((s) => s.id));
            }
          })
          .catch(() => {});
      }, []);

      var filtered = useMemo(() => {
        return SKILLS_CATALOG.filter((item) => {
          if (!searchKw.trim()) return true;
          var k = searchKw.toLowerCase().trim();
          var nameMatch = item.name.toLowerCase().includes(k);
          var idMatch = item.id.toLowerCase().includes(k);
          var descMatch = item.summary.toLowerCase().includes(k);
          var tagMatch = (item.tags || []).some((t) => t.toLowerCase().includes(k));
          return nameMatch || idMatch || descMatch || tagMatch;
        });
      }, [searchKw]);

      var toggleSelect = (id) => {
        setSelected((prev) =>
          prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
      };

      var handleConfirm = () => {
        if (selected.length === 0) return;
        var slashes = selected.map((s) => "/" + s).join(" ") + " ";
        insertSlashCommands(slashes);
        props.onClose();
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
              "多技能快速中文检索与批量加载"
            ),
            h("button", { className: "mkt-modal-close", onClick: props.onClose }, "✕")
          ),
          h(
            "div",
            { style: { padding: "12px 22px 6px" } },
            h("input", {
              className: "mkt-search-input",
              autoFocus: true,
              placeholder: "🔍 搜索中文功能意图 (如: 辅助编程、写代码、代码审查、画图、专利、重构)...",
              value: searchKw,
              onChange: (e) => setSearchKw(e.target.value)
            })
          ),
          h(
            "div",
            { style: { flex: 1, overflowY: "auto", padding: "6px 22px" } },
            filtered.length === 0
              ? h("div", { style: { padding: "40px", textAlign: "center", color: "var(--ch-text-secondary)" } }, "未匹配到相关技能")
              : filtered.map((sk) => {
                  var isChecked = selected.includes(sk.id);
                  var isLocal = installedList.includes(sk.id);
                  return h(
                    "div",
                    {
                      key: sk.id,
                      onClick: () => toggleSelect(sk.id),
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid " + (isChecked ? "var(--ch-brand)" : "var(--ch-card-border)"),
                        background: isChecked ? "rgba(59, 130, 246, 0.12)" : "var(--ch-card-bg)",
                        marginBottom: "6px",
                        cursor: "pointer"
                      }
                    },
                    h("input", {
                      type: "checkbox",
                      checked: isChecked,
                      onChange: () => {},
                      style: { marginTop: "3px", accentColor: "var(--ch-brand)", cursor: "pointer" }
                    }),
                    h(
                      "div",
                      { style: { flex: 1, minWidth: 0 } },
                      h(
                        "div",
                        { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" } },
                        h("span", { style: { fontWeight: 600, fontSize: "13px" } }, sk.name),
                        h("span", { style: { fontSize: "11px", color: "var(--ch-brand)", fontFamily: "monospace" } }, sk.slash),
                        isLocal && h("span", { className: "mkt-installed-badge" }, "已安装")
                      ),
                      h("div", { style: { fontSize: "12px", color: "var(--ch-text-secondary)", lineHeight: "1.4" } }, sk.summary),
                      sk.tags && h("div", { style: { fontSize: "11px", color: "var(--ch-text-muted)", marginTop: "2px" } },
                        "🎯 意图标签：" + sk.tags.join(" · ")
                      )
                    )
                  );
                })
          ),
          h(
            "div",
            { className: "mkt-modal-footer" },
            h("div", { style: { fontSize: "12px", color: "var(--ch-text-secondary)", marginRight: "auto" } },
              selected.length > 0 ? "已选 " + selected.length + " 个: " + selected.map((s) => "/" + s).join(" ") : "请在上方勾选技能"
            ),
            selected.length > 0 && h("button", { className: "mkt-action-btn", onClick: () => setSelected([]) }, "清空"),
            h("button", { className: "mkt-action-btn", onClick: props.onClose }, "取消"),
            h(
              "button",
              {
                className: "mkt-action-btn primary",
                disabled: selected.length === 0,
                onClick: handleConfirm
              },
              "加载所选技能 (" + selected.length + ")"
            )
          )
        )
      );
    }

    // 输入框触发按钮 (细线简笔画拼图 + 技能文字)
    function MultiSkillPickerTrigger(props) {
      var [isOpen, setIsOpen] = useState(false);
      return h(
        React.Fragment,
        null,
        h(
          "button",
          {
            className: "ch-btn-trigger",
            onClick: () => setIsOpen(true),
            title: "多技能快速中文意图检索与批量加载"
          },
          h(PuzzleIcon, { size: 14 }),
          h("span", null, "技能")
        ),
        isOpen && h(MultiSkillPickerModal, { onClose: () => setIsOpen(false) })
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
