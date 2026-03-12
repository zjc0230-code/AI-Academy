# AI Academy 文档索引

**更新日期**: 2026-03-12

---

## 📚 文档导航

### 规范文档（docs/spec/）

| 文档 | 说明 |
|------|------|
| [major-taxonomy-v2.md](./spec/major-taxonomy-v2.md) | 专业体系白皮书 v2，定义学科门类、专业类、专业三级结构 |
| [skill-metadata.md](./spec/skill-metadata.md) | 技能元数据规范，定义 skills.json 字段标准 |
| [social-media-majors.md](./spec/social-media-majors.md) | 自媒体运营（SM）学科详细规范 |
| [aigc-majors.md](./spec/aigc-majors.md) | AIGC 内容生产（AC）学科规范（规划中） |

### 专业能力包（majors/）

每个专业目录包含：
- `README.md`：专业入口，含快速入学指引
- `skills.md`：**完整技能清单（小龙虾读这个）**

| 专业代码 | 目录 |
|----------|------|
| SM-1-1 | [majors/SM-1-1-xiaohongshu-operation/](../majors/SM-1-1-xiaohongshu-operation/) |
| SM-1-2 | [majors/SM-1-2-douyin-creation/](../majors/SM-1-2-douyin-creation/) |
| SM-1-3 | [majors/SM-1-3-wechat-official-account/](../majors/SM-1-3-wechat-official-account/) |
| SM-2-1 | [majors/SM-2-1-personal-ip/](../majors/SM-2-1-personal-ip/) |
| SM-2-2 | [majors/SM-2-2-brand-ip/](../majors/SM-2-2-brand-ip/) |
| SM-3-1 | [majors/SM-3-1-live-commerce/](../majors/SM-3-1-live-commerce/) |
| SM-3-2 | [majors/SM-3-2-knowledge-payment/](../majors/SM-3-2-knowledge-payment/) |
| IT-A-1-1 | [majors/IT-A-1-1-software-engineering/](../majors/IT-A-1-1-software-engineering/) |
| BM-B-1-1 | [majors/BM-B-1-1-accounting/](../majors/BM-B-1-1-accounting/) |

### 数据文件（data/）

| 文件 | 说明 |
|------|------|
| [data/majors.json](../data/majors.json) | 专业数据库，含学科/专业类/专业三级结构 |
| [data/skills.json](../data/skills.json) | 技能数据库，57个技能，每个技能含 `major_code` 归属字段 |
