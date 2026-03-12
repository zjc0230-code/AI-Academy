# AI Academy Web站点建设规划

## 📋 项目概述

**项目名称**：AI Academy 在线教育平台
**技术栈**：Next.js 14 + TypeScript + Tailwind CSS
**开发周期**：1天（2026-03-12）
**目标**：搭建现代化、响应式的在线教育平台基础框架

---

## 🎯 项目目标

1. ✅ 搭建Next.js项目基础架构
2. ✅ 设计合理的路由结构
3. ✅ 创建核心页面（首页、专业列表、课程详情）
4. ✅ 集成UI组件库
5. ✅ 实现响应式设计
6. ✅ 配置开发环境
7. ✅ 部署到生产环境

---

## 🏗️ 技术架构

### 前端框架
- **Next.js 14**：React框架，支持SSR/SSG/ISR
- **TypeScript**：类型安全
- **React 18**：UI框架

### 样式方案
- **Tailwind CSS**：原子化CSS框架
- **PostCSS**：CSS后处理器

### UI组件
- **shadcn/ui**：基于Radix UI的组件库
- **Lucide React**：图标库

### 数据管理
- **Zustand**：轻量级状态管理
- **React Query**：数据获取和缓存

### 开发工具
- **ESLint**：代码检查
- **Prettier**：代码格式化
- **Husky**：Git hooks
- **lint-staged**：Git提交前检查

---

## 📁 项目结构

```
ai-academy-web/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   ├── globals.css          # 全局样式
│   ├── majors/              # 专业目录
│   │   ├── page.tsx         # 专业列表
│   │   └── [id]/            # 专业详情
│   │       └── page.tsx
│   └── courses/             # 课程目录
│       ├── page.tsx         # 课程列表
│       └── [id]/            # 课程详情
│           └── page.tsx
├── components/              # React组件
│   ├── ui/                  # shadcn/ui组件
│   ├── layout/              # 布局组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   └── features/            # 业务组件
│       ├── CourseCard.tsx
│       ├── MajorCard.tsx
│       └── SearchBar.tsx
├── lib/                     # 工具库
│   ├── utils.ts             # 工具函数
│   └── constants.ts         # 常量
├── types/                   # TypeScript类型
│   └── index.ts
├── hooks/                   # 自定义Hooks
│   └── useCourses.ts
├── store/                   # 状态管理
│   └── useStore.ts
├── public/                  # 静态资源
│   ├── images/
│   └── icons/
├── styles/                  # 样式文件
│   └── globals.css
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.js
```

---

## 🎨 页面设计

### 1. 首页（/）

**布局结构**：
```
Header（导航栏）
  - Logo
  - 导航菜单
  - 用户入口

Hero Section
  - 主标题
  - 副标题
  - CTA按钮

专业展示区
  - 专业列表卡片

课程推荐区
  - 热门课程卡片

特色功能区
  - 平台特色介绍

Footer（页脚）
  - 关于我们
  - 联系方式
  - 版权信息
```

---

### 2. 专业列表页（/majors）

**布局结构**：
```
Header

页面标题
  - 专业列表
  - 筛选和排序

专业卡片网格
  - 专业名称
  - 专业描述
  - 课程数量
  - 学习时长

Footer
```

---

### 3. 专业详情页（/majors/[id]）

**布局结构**：
```
Header

面包屑导航

专业信息
  - 专业名称
  - 专业描述
  - 专业特点
  - 学习目标

课程列表
  - 课程卡片
  - 学习进度

Footer
```

---

### 4. 课程详情页（/courses/[id]）

**布局结构**：
```
Header

面包屑导航

课程信息
  - 课程名称
  - 课程简介
  - 学习目标
  - 课程时长

课程内容
  - 章节列表
  - 学习进度

Footer
```

---

## 🚀 开发计划

### 阶段1：项目初始化（13:15-13:30）
- [ ] 创建Next.js项目
- [ ] 配置TypeScript
- [ ] 配置Tailwind CSS
- [ ] 配置ESLint和Prettier
- [ ] 配置Git hooks

### 阶段2：基础组件开发（13:30-14:00）
- [ ] 安装shadcn/ui
- [ ] 创建布局组件（Header、Footer）
- [ ] 创建通用组件（Card、Button）
- [ ] 配置全局样式

### 阶段3：核心页面开发（14:00-15:00）
- [ ] 开发首页
- [ ] 开发专业列表页
- [ ] 开发专业详情页
- [ ] 开发课程详情页

### 阶段4：数据层开发（15:00-15:30）
- [ ] 定义数据类型
- [ ] 创建Mock数据
- [ ] 实现数据获取逻辑
- [ ] 集成状态管理

### 阶段5：优化和部署（15:30-16:00）
- [ ] 性能优化
- [ ] SEO优化
- [ ] 响应式测试
- [ ] 部署到生产环境

---

## 📊 核心功能

### 功能列表

1. **导航系统**
   - 响应式导航栏
   - 面包屑导航
   - 侧边栏导航

2. **内容展示**
   - 专业列表展示
   - 课程列表展示
   - 课程详情展示

3. **交互功能**
   - 搜索功能
   - 筛选功能
   - 排序功能

4. **用户功能**
   - 登录/注册（预留）
   - 个人中心（预留）
   - 学习进度（预留）

---

## 🎯 设计原则

### 1. 响应式设计
- 支持移动端、平板、桌面
- 使用Tailwind CSS响应式类
- 测试不同设备

### 2. 性能优化
- 使用Next.js SSR/SSG
- 图片优化（next/image）
- 代码分割
- 懒加载

### 3. SEO优化
- 动态meta标签
- 结构化数据
- sitemap生成
- robots.txt配置

### 4. 可访问性
- 语义化HTML
- ARIA标签
- 键盘导航
- 屏幕阅读器支持

---

## 📱 UI/UX设计

### 设计系统

**颜色方案**：
```css
主色：#3B82F6（蓝色）
辅助色：#10B981（绿色）
警告色：#F59E0B（黄色）
错误色：#EF4444（红色）
中性色：#6B7280（灰色）
```

**字体**：
```css
标题：Inter/系统字体
正文：Inter/系统字体
代码：JetBrains Mono
```

**间距**：
```css
基础单位：4px
常用间距：4px, 8px, 16px, 24px, 32px, 48px, 64px
```

**圆角**：
```css
小：4px
中：8px
大：16px
```

---

## 🔧 配置文件

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
```

---

## 📝 数据模型

### 专业数据模型
```typescript
interface Major {
  id: string
  name: string
  description: string
  slug: string
  icon: string
  courses: Course[]
  createdAt: string
  updatedAt: string
}
```

### 课程数据模型
```typescript
interface Course {
  id: string
  majorId: string
  title: string
  description: string
  slug: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  lessons: number
  createdAt: string
  updatedAt: string
}
```

---

## 🚀 部署方案

### 部署平台
- **Vercel**：推荐（Next.js官方支持）
- **Netlify**：备选
- **自建服务器**：备选

### 部署步骤
1. 推送代码到GitHub
2. 连接Vercel仓库
3. 配置环境变量
4. 自动部署
5. 自定义域名（可选）

---

## 📚 参考资源

- [Next.js官方文档](https://nextjs.org/docs)
- [Tailwind CSS文档](https://tailwindcss.com/docs)
- [shadcn/ui组件库](https://ui.shadcn.com/)
- [TypeScript文档](https://www.typescriptlang.org/docs/)

---

## ⭐ 成功标准

- ✅ 项目可以正常启动和运行
- ✅ 所有页面可以正常访问
- ✅ 响应式设计在各种设备上正常
- ✅ 代码符合规范（ESLint通过）
- ✅ 页面加载速度<3秒
- ✅ 部署成功并可以访问

---

*文档创建时间：2026-03-12*
*维护者：AI Academy*
