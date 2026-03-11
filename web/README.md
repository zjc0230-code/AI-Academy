# AI Academy Web 站点

AI Academy 项目的 Web 展示站点，基于 Next.js 14 + TypeScript + Tailwind CSS 构建。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

## 项目结构

```
web/
├── app/              # Next.js App Router页面
│   ├── layout.tsx    # 根布局
│   ├── page.tsx      # 首页
│   └── globals.css   # 全局样式
├── components/       # 可复用组件
├── lib/             # 工具函数库
└── public/          # 静态资源
```

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看站点。

### 构建生产版本

```bash
npm run build
npm start
```

## 功能特性

### 已实现

- ✅ 首页展示6个核心专业
- ✅ 响应式布局设计
- ✅ Tailwind CSS 样式系统
- ✅ 专业卡片交互效果

### 规划中

- 📝 专业详情页面
- 📝 技能清单页面
- 📝 Agent学习流程
- 📝 数据集成（majors/目录）

## 核心专业

1. **自媒体运营** - 小红书、抖音、公众号运营
2. **电商运营** - 商品管理、订单处理、智能客服
3. **数据分析** - 数据采集、清洗、分析、可视化
4. **内容创作** - 文案、图片、视频、直播
5. **客户服务** - 智能问答、投诉处理、售后跟进
6. **项目管理** - 项目规划、进度跟踪、风险管理

## 开发阶段

当前处于 **阶段1**：初始化Web站点框架

后续阶段：
- 阶段2：创建专业详情页和技能清单
- 阶段3：实现Agent学习流程
- 阶段4：集成majors/目录数据
- 阶段5：优化用户体验
- 阶段6：部署上线
