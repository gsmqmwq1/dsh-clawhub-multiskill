---
name: skill-orchestrator
description: "多技能协同中枢与智能组合调度器（Multi-Skill Orchestrator）。当用户需要一次性调用/组合多个专业技能、执行多阶段交付流水线（如：开发+审计、分析+学术画图、研发+专利交底）、或在单次对话中按顺序/并行调度本地多个 Skill 时自动触发。支持通过 /multi 或自然语言调度多技能协作。"
metadata:
  slug: skill-orchestrator
  version: 1.0.0
  displayName: "多技能编排调度器"
  author: "Antigravity Agent"
---

# Multi-Skill Orchestrator (多技能智能编排调度器)

作为 DeepSeek Harness 的技能调度中枢，本 Skill 用于打破单个 Skill 的能力边界，实现 **单次任务中多个 Skill 的无缝串联、并行协作与上下文接力**。

---

## 一、支持的调用方式

用户可以通过以下任意一种方式触发多技能协同：

### 1. 显式指令调用
* `/multi [skill1, skill2] 任务描述`
* 示例：`/multi [dev-expert, code-review93] 编写一个基于 Redis 的分布式限流器`

### 2. 组合 Mention 调用
* `@dev-expert @code-review93 请帮我重构这个模块并进行代码审查`
* `@scientific-visualization @academic-figure-skill 请根据此数据绘制 CNS 规范热图`

### 3. 自然语言多阶段委托
* “先帮我用 dev-expert 设计架构，再用 code-review 把关代码，最后用 patent-disclosure-writer 提取专利交底书”

---

## 二、本地技能注册表与能力矩阵

调度器自动感知 `~/.dsh/skills/` 下已安装的技能并提供协同映射：

| 技能标识 | 核心专长 | 常见组合搭档 |
| :--- | :--- | :--- |
| **`dev-expert`** | 架构设计、全栈编码、Bug 根因排查、重构 | `code-review93`, `ponytail`, `self-improving-agent` |
| **`code-review93`** | AI 代码审查、七维异味体检、质量门禁 | `dev-expert`, `ponytail` |
| **`academic-figure-skill`** | CNS（Nature/Science/Cell）顶刊标准学术科学图表 | `scientific-visualization` |
| **`scientific-visualization`** | 科学图表与色彩对比度校验、多面板排版 | `academic-figure-skill` |
| **`patent-disclosure-writer`** | 中文专利/技术交底书结构化撰写与技术点挖掘 | `dev-expert` |
| **`ponytail`** | 极简主义/反过度工程（YAGNI 准则）代码极简重构 | `dev-expert`, `code-review93` |
| **`self-improving-agent`** | 经验复盘、错误记录与持续学习机制沉淀 | 所有技能（作为末尾复盘环） |

---

## 三、多技能执行标准协议（4 步编排法）

当触发多技能调度时，模型严格执行以下流程：

### 步骤 1：需求拆解与技能路由（Routing）
明确展示本次任务拆解的流水线阶段与对应的 Skill 角色：
> 📋 **多技能执行计划**：
> - **阶段 1 [技能A]**：目标与交付物
> - **阶段 2 [技能B]**：承接阶段 1 产物进行深化/审查
> - **阶段 3 [技能C]**：（如有）最终成型或输出格式化文件

### 步骤 2：阶段性执行与角色切换（Stage Execution）
在输出中清晰标识当前正在以哪个 Skill 的专业标准与规则进行生成：
* 例如切换到 `dev-expert` 规范输出高质量实现代码；
* 阶段完成后，携带上下文自动切换至 `code-review93` 的七维标准进行审查评估。

### 步骤 3：数据与上下文透传（Data Passing）
确保前一阶段的产出（如代码、统计数据、架构设计）作为后一阶段的输入，避免信息丢失或上下文割裂。

### 步骤 4：综合交付（Consolidated Delivery）
给出最终统筹整合的完整交付物，并提示后续可继续调用的延展技能。
