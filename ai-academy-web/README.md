# AI Academy Web站点

专业的AI技术在线教育平台Web站点，基于Next.js 14构建。

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
ai-academy-web/
├── app/                    # Next.js App Router
│   ├── courses/           # 课程相关页面
│   ├── majors/            # 专业相关页面
│   ├── globals.css        # 全局样式
│   └── layout.tsx         # 根布局
├── components/            # React组件
│   ├── ui/               # UI基础组件
│   ├── SearchBar.tsx     # 搜索组件
│   └── StatsSection.tsx  # 统计组件
├── lib/                  # 工具函数
└── public/               # 静态资源
```

## 🎨 技术栈

- **Next.js 14** - React框架（App Router）
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **lucide-react** - 图标库

## 📄 核心功能

### 已完成功能

✅ 首页展示
- Hero区域
- 搜索功能
- 特性展示
- 统计数据
- 热门专业

✅ 专业模块
- 专业列表页
- 专业详情页
- 课程列表展示

✅ 课程模块
- 课程列表页
- 课程详情页
- 章节内容展示

✅ UI组件
- Card组件
- Input组件
- Button组件
- SearchBar组件
- StatsSection组件

### 待开发功能

- [ ] 用户认证系统
- [ ] 学习进度追踪
- [ ] 视频播放功能
- [ ] 在线测试系统
- [ ] 讨论区功能
- [ ] 个人中心
- [ ] 支付系统
- [ ] 管理后台

## 🎯 页面路由

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 网站主页 |
| `/majors` | 专业列表 | 显示所有专业 |
| `/majors/[id]` | 专业详情 | 显示专业信息和课程 |
| `/courses` | 课程列表 | 显示所有课程 |
| `/courses/[id]` | 课程详情 | 显示课程内容和章节 |

## 🎨 设计规范

### 颜色方案

- **主色（Primary）**: 蓝色（#3b82f6）
- **辅助色**: 紫色（#8b5cf6）
- **背景色**: 白色（#ffffff）
- **文本色**: 深灰（#111827）
- **浅色背景**: 浅灰（#f3f4f6）

### 字体

- **主字体**: Inter
- **标题**: 600-700 字重
- **正文**: 400 字重

### 间距

- **容器**: 1200px
- **内边距**: 4（1rem）
- **外边距**: 8（2rem）

## 📱 响应式设计

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 📊 性能优化

- ✅ 代码分割
- ✅ 图片优化（Next/Image）
- ✅ 字体优化
- ✅ CSS优化
- ⏳ 懒加载（待实现）
- ⏳ 缓存策略（待实现）

## 🚢 部署

推荐部署平台：

- **Vercel**（推荐）
- **Netlify**
- **Docker**

### Vercel部署

1. 连接GitHub仓库
2. 自动检测Next.js配置
3. 自动部署

## 📝 开发规范

### Git提交规范

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
perf: 性能优化
test: 测试相关
chore: 构建/工具相关
```

### 代码规范

- 使用TypeScript严格模式
- 遵循ESLint规则
- 组件使用PascalCase命名
- 函数使用camelCase命名

## 🤝 贡献指南

1. Fork项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

MIT License

## 👥 团队

- **开发者**: AI Academy Team
- **设计**: AI Academy Design Team

## 📞 联系我们

- Email: support@ai-academy.com
- Website: https://ai-academy.com

---

*最后更新: 2026-03-12*
