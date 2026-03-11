# 技能元数据规范

**版本**: v0.1-alpha
**日期**: 2025-03-11
**状态**: 草案讨论

---

## 📋 文档说明

本文档定义 AI Academy 技能包的元数据标准，确保技能的可发现性、可复用性和标准化。

---

## 🎯 设计原则

### 1.1 核心原则

| 原则 | 说明 |
|------|------|
| **可识别** | 技能必须有唯一的标识符和清晰的描述 |
| **可组合** | 技能应支持自由组合，形成专业能力包 |
| **可扩展** | 支持技能的版本迭代和功能扩展 |
| **可测试** | 每个技能必须包含测试用例 |
| **可文档化** | 完整的使用文档和示例 |

---

## 📦 技能元数据结构

### 2.1 基础元数据

```yaml
skill:
  # 基本信息
  id: "skill-001"                       # 唯一标识符（格式：skill-{序号}）
  name: "邮件分类技能"                   # 技能名称
  display_name:
    zh: "邮件分类技能"
    en: "Email Classification Skill"
  description: "根据邮件内容、发件人、时间等维度自动分类邮件"
  version: "1.0.0"                      # 版本号（语义化版本：MAJOR.MINOR.PATCH）

  # 分类信息
  category: "perception"                # 能力域：perception | cognition | action | interaction | learning | governance
  subcategory: "text-classification"    # 子分类
  tags:                                 # 标签（用于检索）
    - "email"
    - "classification"
    - "nlp"
    - "automation"

  # 作者信息
  author:
    name: "AI Academy"
    email: "contact@ai-academy.com"
    url: "https://github.com/zjc0230-code/AI-Academy"

  # 时间信息
  created_at: "2025-03-11T00:00:00Z"
  updated_at: "2025-03-11T00:00:00Z"
  published_at: "2025-03-11T00:00:00Z"

  # 许可证
  license:
    type: "MIT"
    url: "https://opensource.org/licenses/MIT"
```

### 2.2 能力描述

```yaml
skill:
  # ... (基础元数据)

  # 能力描述
  capabilities:
    - name: "多维度分类"
      description: "支持按内容、发件人、时间、主题等多个维度分类"
      level: 3                         # 成熟度等级（1-5）
      enabled: true
    - name: "自定义规则"
      description: "支持用户自定义分类规则"
      level: 3
      enabled: true
    - name: "智能学习"
      description: "从用户反馈中学习，优化分类效果"
      level: 2
      enabled: true

  # 适用场景
  use_cases:
    - name: "邮件自动分类"
      description: "将收件箱邮件自动分类到不同文件夹"
      difficulty: "easy"               # easy | medium | hard
      examples:
        - "将工作邮件归类到'工作'文件夹"
        - "将订阅邮件归类到'订阅'文件夹"
    - name: "垃圾邮件过滤"
      description: "识别并过滤垃圾邮件"
      difficulty: "medium"
      examples:
        - "识别并标记垃圾邮件"
        - "学习用户标记的垃圾邮件规则"

  # 输入输出
  io:
    input:
      - name: "email_content"
        type: "string"
        required: true
        description: "邮件内容"
      - name: "email_sender"
        type: "string"
        required: true
        description: "发件人"
      - name: "email_subject"
        type: "string"
        required: false
        description: "邮件主题"
      - name: "classification_rules"
        type: "array"
        required: false
        description: "自定义分类规则"

    output:
      - name: "category"
        type: "string"
        description: "分类结果"
        enum: ["work", "personal", "subscription", "spam", "other"]
      - name: "confidence"
        type: "float"
        description: "分类置信度（0-1）"
        range: [0, 1]
      - name: "reasoning"
        type: "string"
        description: "分类理由"
```

### 2.3 技术规范

```yaml
skill:
  # ... (基础元数据、能力描述)

  # 技术类型
  type: "skill"                        # skill | prompt | mcp

  # 实现方式
  implementation:
    method: "api"                      # api | script | function | external
    language: "python"                 # python | javascript | typescript | etc.
    framework: "fastapi"               # fastapi | flask | express | etc.
    entry_point: "src/main.py:app"     # 入口文件

  # 依赖管理
  dependencies:
    - name: "python"
      version: ">=3.8"
      type: "runtime"
    - name: "fastapi"
      version: ">=0.68.0"
      type: "runtime"
    - name: "openai"
      version: ">=1.0.0"
      type: "runtime"
    - name: "pytest"
      version: ">=7.0.0"
      type: "dev"

  # 配置参数
  config:
    parameters:
      - name: "model"
        type: "string"
        default: "gpt-4"
        description: "使用的模型"
        enum: ["gpt-4", "gpt-3.5-turbo", "claude-3"]
      - name: "temperature"
        type: "float"
        default: 0.7
        description: "温度参数"
        range: [0, 2]
      - name: "max_tokens"
        type: "integer"
        default: 1000
        description: "最大 Token 数"
        range: [1, 4096]
    secrets:
      - name: "openai_api_key"
        description: "OpenAI API 密钥"
        required: true

  # API 接口（如果类型为 api）
  api:
    endpoint: "/api/classify"
    method: "POST"
    auth_required: true
    rate_limit:
      requests_per_minute: 60
    examples:
      - request:
          email_content: "项目进度更新：本周完成了..."
          email_sender: "zhangsan@example.com"
        response:
          category: "work"
          confidence: 0.92
          reasoning: "邮件内容涉及项目进度，发件人为同事"
```

### 2.4 质量指标

```yaml
skill:
  # ... (基础元数据、能力描述、技术规范)

  # 质量指标
  quality:
    # 准确性
    accuracy:
      metric: "classification_accuracy"
      threshold: ">=85%"
      last_measured: "2025-03-11"
      methodology: "基于1000封邮件测试集"

    # 性能
    performance:
      metric: "response_time"
      threshold: "<1s"
      p50: "0.5s"
      p95: "0.9s"
      p99: "1.2s"

    # 可靠性
    reliability:
      metric: "uptime"
      threshold: ">=99%"
      last_measured: "2025-03-11"

    # 稳定性
    stability:
      metric: "error_rate"
      threshold: "<5%"
      last_measured: "2025-03-11"

  # 测试覆盖
  testing:
    unit_test_coverage: ">=80%"
    integration_test_coverage: ">=70%"
    e2e_test_coverage: ">=60%"
    last_test_run: "2025-03-11T10:00:00Z"
    result: "passed"
```

### 2.5 文档与示例

```yaml
skill:
  # ... (基础元数据、能力描述、技术规范、质量指标)

  # 文档
  documentation:
    quickstart: "docs/quickstart.md"
    api_reference: "docs/api.md"
    user_guide: "docs/user_guide.md"
    troubleshooting: "docs/troubleshooting.md"
    examples: "examples/"

  # 示例
  examples:
    - name: "基础用法"
      description: "最简单的使用方式"
      code: |
        from skill_001 import EmailClassifier

        classifier = EmailClassifier()
        result = classifier.classify(
            email_content="项目进度更新...",
            email_sender="zhangsan@example.com"
        )
        print(result.category)  # 输出: work

    - name: "自定义规则"
      description: "使用自定义分类规则"
      code: |
        classifier = EmailClassifier(
            rules=[
                {"pattern": "项目|进度", "category": "work"},
                {"pattern": "优惠|促销", "category": "promotion"}
            ]
        )

    - name: "批量处理"
      description: "批量处理多封邮件"
      code: |
        emails = load_emails_from_file("emails.json")
        results = classifier.classify_batch(emails)
```

---

## 🏗 技能目录结构

### 3.1 标准目录结构

```
skills/{skill-id}/
├── skill.yaml              # 技能元数据（必需）
├── README.md               # 技能说明（必需）
├── src/                    # 源代码（必需）
│   ├── __init__.py
│   ├── main.py             # 主入口
│   ├── core.py             # 核心逻辑
│   └── utils.py            # 工具函数
├── prompts/                # Prompt 模板（如果需要）
│   ├── system.md
│   └── examples.md
├── config/                 # 配置文件（如果需要）
│   └── default.yaml
├── tests/                  # 测试用例（必需）
│   ├── __init__.py
│   ├── test_core.py
│   └── test_integration.py
├── examples/               # 使用示例（必需）
│   ├── basic.py
│   └── advanced.py
├── docs/                   # 文档（必需）
│   ├── quickstart.md
│   ├── api.md
│   └── troubleshooting.md
├── requirements.txt        # Python 依赖（必需）
├── setup.py                # 安装脚本（如果需要）
└── pyproject.toml          # 项目配置（如果需要）
```

### 3.2 必需文件清单

| 文件 | 必需性 | 说明 |
|------|--------|------|
| `skill.yaml` | 必需 | 技能元数据文件 |
| `README.md` | 必需 | 技能说明文档 |
| `src/` | 必需 | 源代码目录 |
| `tests/` | 必需 | 测试用例目录 |
| `examples/` | 必需 | 使用示例目录 |
| `docs/` | 必需 | 文档目录 |
| `requirements.txt` | 必需 | Python 依赖列表 |

---

## 📊 技能分类体系

### 4.1 按能力域分类

| 能力域 | 说明 | 典型技能 |
|--------|------|----------|
| **perception** | 感知与知识获取 | 文本理解、图像识别、数据提取 |
| **cognition** | 认知与推理 | 逻辑推理、决策判断、优先级排序 |
| **action** | 行动与执行 | 工具调用、API调用、任务执行 |
| **interaction** | 交互与协作 | 对话管理、用户引导、多Agent协作 |
| **learning** | 学习与适应 | 用户偏好学习、反馈优化、知识更新 |
| **governance** | 治理与安全 | 权限控制、合规检查、风险管控 |

### 4.2 按技术类型分类

| 技术类型 | 说明 | 典型技能 |
|----------|------|----------|
| **nlp** | 自然语言处理 | 文本分类、实体识别、情感分析 |
| **cv** | 计算机视觉 | 图像识别、目标检测、图像生成 |
| **audio** | 音频处理 | 语音识别、语音合成、音频分类 |
| **data** | 数据处理 | 数据清洗、数据转换、数据验证 |
| **api** | API 集成 | HTTP 请求、数据库操作、文件操作 |
| **ml** | 机器学习 | 模型训练、模型推理、特征工程 |

---

## 🔄 技能生命周期

### 5.1 版本管理

遵循语义化版本规范（Semantic Versioning 2.0.0）：

| 版本格式 | 说明 | 示例 |
|----------|------|------|
| `MAJOR.MINOR.PATCH` | 主版本.次版本.修订号 | `1.2.3` |
| **MAJOR** | 不兼容的 API 变更 | `1.0.0` → `2.0.0` |
| **MINOR** | 向后兼容的功能新增 | `1.0.0` → `1.1.0` |
| **PATCH** | 向后兼容的问题修复 | `1.0.0` → `1.0.1` |

### 5.2 发布流程

```
开发 → 测试 → Code Review → 打标签 → 发布
```

1. **开发**: 在开发分支进行功能开发
2. **测试**: 运行所有测试用例，确保通过
3. **Code Review**: 提交 PR，进行代码审查
4. **打标签**: 合并后打版本标签（如 `v1.0.0`）
5. **发布**: 自动构建和发布到技能仓库

---

## 📋 技能审核标准

### 6.1 审核维度

| 维度 | 标准 | 说明 |
|------|------|------|
| **元数据完整性** | 100% | 所有必需字段必须填写 |
| **代码质量** | >=80% | 通过代码质量检查 |
| **测试覆盖率** | >=70% | 单元测试覆盖率 |
| **文档完整性** | 100% | 所有必需文档必须存在 |
| **质量指标达标** | 100% | 所有质量指标必须达标 |

### 6.2 审核流程

```
提交审核 → 自动化检查 → 人工审核 → 批准/拒绝
```

1. **提交审核**: 作者提交技能审核请求
2. **自动化检查**: 系统自动运行检查（元数据、测试、质量指标）
3. **人工审核**: 审核员人工审查代码和文档
4. **批准/拒绝**: 批准发布或拒绝并给出反馈

---

## 🔍 技能检索与发现

### 7.1 检索方式

| 检索方式 | 说明 |
|----------|------|
| **关键词检索** | 根据技能名称、描述、标签检索 |
| **分类检索** | 根据能力域、技术类型检索 |
| **语义检索** | 根据自然语言描述检索 |
| **组合检索** | 多条件组合检索 |

### 7.2 检索 API 示例

```yaml
# 关键词检索
query:
  type: "keyword"
  keywords: ["邮件", "分类", "nlp"]

# 分类检索
query:
  type: "category"
  category: "perception"
  subcategory: "text-classification"

# 语义检索
query:
  type: "semantic"
  query: "帮我自动分类邮件"

# 组合检索
query:
  type: "combined"
  filters:
    category: "perception"
    tags: ["email", "automation"]
  query: "邮件分类"
```

---

## 📚 示例技能

### 8.1 完整示例

参见 `skills/skill-001/` 目录下的完整实现。

---

## 🤝 贡献指南

### 9.1 提交新技能

1. Fork AI Academy 仓库
2. 创建技能目录，遵循标准结构
3. 编写技能元数据和实现代码
4. 编写测试用例和文档
5. 提交 PR

### 9.2 技能审核

提交 PR 后，AI Academy 团队将进行审核：
- 自动化检查：CI/CD 流水线自动运行
- 人工审核：审核员审查代码和文档
- 反馈：如有问题，将给出具体反馈

---

## 📄 许可证

本规范遵循 MIT 许可证。

---

**文档版本**: v0.1-alpha
**下次更新**: 2025-03-18（预计 v1.0）
