# 🏫 AI Academy

**给 AI Agent 开的专业学校** —— 面向 OpenClaw（小龙虾）生态的智能体专业能力标准化赋能体系

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Majors](https://img.shields.io/badge/专业-9个-blue)
![Skills](https://img.shields.io/badge/技能-57个-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 项目理念

在当前 OpenClaw 生态中，一个普通 Agent 想具备可用能力，依然需要用户投入大量人力：手动配置 Prompt、拼装 Skill、反复调试。

**AI Academy 的答案是：让 Agent 像人一样入学、选专业。**

```
入学 → 选专业 → 读取 skills.md → 一站式掌握全套能力 → 直接上岗
```

Agent 不需要用户手把手教，只需要**选专业 + 读一个文件**，就能获得完整、标准化的专业能力。

---

## 🦞 小龙虾入学指南（30 秒上手）

### 第一步：选专业

浏览下方专业目录，找到你需要的专业，记下专业代码（如 `SM-1-1`）。

### 第二步：读取技能清单

告诉你的小龙虾 Agent：

```
请读取 AI Academy 的「小红书运营专业」技能清单：
https://github.com/zjc0230-code/AI-Academy/blob/main/majors/SM-1-1-xiaohongshu-operation/skills.md
```

### 第三步：上岗干活

Agent 读取 `skills.md` 后习得该专业的完整技能体系，直接开始专业工作。

---

## 📚 专业目录

> 当前已建设 **9 个专业**，共 **57 个技能**。以自媒体运营（SM）学科为重点。

### 📱 自媒体运营（SM）

| 专业代码 | 专业名称 | 技能数 | skills.md |
|----------|----------|--------|-----------|
| `SM-1-1` | 小红书运营专业 | 7 | [查看](./majors/SM-1-1-xiaohongshu-operation/skills.md) |
| `SM-1-2` | 抖音创作专业 | 8 | [查看](./majors/SM-1-2-douyin-creation/skills.md) |
| `SM-1-3` | 公众号运营专业 | 7 | [查看](./majors/SM-1-3-wechat-official-account/skills.md) |
| `SM-2-1` | 个人IP打造专业 | 7 | [查看](./majors/SM-2-1-personal-ip/skills.md) |
| `SM-2-2` | 品牌IP运营专业 | 7 | [查看](./majors/SM-2-2-brand-ip/skills.md) |
| `SM-3-1` | 直播带货专业 | 8 | [查看](./majors/SM-3-1-live-commerce/skills.md) |
| `SM-3-2` | 知识付费专业 | 8 | [查看](./majors/SM-3-2-knowledge-payment/skills.md) |

### 💻 信息技术（IT）

| 专业代码 | 专业名称 | 技能数 | skills.md |
|----------|----------|--------|-----------|
| `IT-A-1-1` | 软件工程专业 | 3 | [查看](./majors/IT-A-1-1-software-engineering/skills.md) |

### 💼 商务管理（BM）

| 专业代码 | 专业名称 | 技能数 | skills.md |
|----------|----------|--------|-----------|
| `BM-B-1-1` | 会计专业 | 2 | [查看](./majors/BM-B-1-1-accounting/skills.md) |

---

## 🏗 项目结构

```
AI-Academy/
├── README.md                      # 项目说明（本文件）
├── data/
│   ├── majors.json                # 专业数据库
│   └── skills.json                # 技能数据库（57个技能，含 major_code 归属）
├── majors/                        # 专业能力包目录（核心）
│   ├── SM-1-1-xiaohongshu-operation/
│   │   ├── README.md              # 专业入口
│   │   └── skills.md              # ← 小龙虾读这个，获得全部技能
│   ├── SM-1-2-douyin-creation/
│   ├── SM-1-3-wechat-official-account/
│   ├── SM-2-1-personal-ip/
│   ├── SM-2-2-brand-ip/
│   ├── SM-3-1-live-commerce/
│   ├── SM-3-2-knowledge-payment/
│   ├── IT-A-1-1-software-engineering/
│   └── BM-B-1-1-accounting/
├── docs/
│   ├── index.md                   # 文档索引
│   └── spec/                      # 规范文档
│       ├── major-taxonomy-v2.md   # 专业体系白皮书 v2
│       ├── skill-metadata.md      # 技能元数据规范
│       ├── social-media-majors.md # 自媒体运营专业详细规范
│       └── aigc-majors.md         # AIGC专业规范（规划中）
└── web/                           # Web 展示站点（纯 HTML）
    ├── index.html                 # 首页
    ├── majors.html                # 专业列表
    └── majors/{专业}/index.html   # 各专业详情页
```

---

## 💡 核心概念

| 概念 | 定义 |
|------|------|
| **专业** | 解决某类实际大问题的完整能力集合，由多个技能组成 |
| **技能（Skill）** | 专业的最小执行单元，是具体的单项能力 |
| **skills.md** | 每个专业的技能清单文件，小龙虾读取后即习得该专业 |
| **Agent（小龙虾）** | 专业能力的承载者，读取 skills.md 后成为该专业人才 |

---

## 🗺 专业体系结构

```
学科门类（一级）  →  SM 自媒体运营 / IT 信息技术 / BM 商务管理 ...
    └── 专业类（二级）  →  SM-1 内容平台运营 / SM-2 IP打造 / SM-3 商业变现 ...
            └── 具体专业（三级）  →  SM-1-1 小红书运营 / SM-1-2 抖音创作 ...
                    └── skills.md  →  该专业全部技能清单
```

---

## 🚀 开发路线图

### ✅ 已完成
- [x] 核心理念与专业体系设计
- [x] 自媒体运营（SM）7 个专业，52 个技能
- [x] IT / BM 基础专业框架
- [x] Web 展示站点（纯 HTML，直接可访问）
- [x] 每个专业独立的 skills.md（小龙虾直接读取）

### 🚧 进行中
- [ ] 补充 IT / BM 专业技能（当前仅有框架）
- [ ] 扩展 AIGC 内容生产学科（AC）

### 📋 规划中
- [ ] AI 智能专业匹配引擎
- [ ] 能力评估与升学体系
- [ ] 更多学科（教育、法务、客服等）

---

## 🤝 贡献指南

欢迎社区参与共建：

1. **提交新专业**：建议新增专业，需明确专业目标、核心技能清单
2. **完善技能**：反馈技能不准确、缺失的问题，提交补充方案
3. **扩展学科**：参与 IT、BM、AC 等学科的专业建设

---

## 📄 许可证

本项目基于 **[MIT License](LICENSE)** 开源，商用友好，可自由修改、分发，需保留原作者版权声明。

---

## 🌐 相关链接

- **GitHub 仓库**：https://github.com/zjc0230-code/AI-Academy
- **Web 站点**：[web/index.html](./web/index.html)
- **OpenClaw 生态**：[待补充]

---

> **一句话**：AI Academy 是给 AI Agent 开的专业学校——选专业、读 skills.md，小龙虾直接上岗。
