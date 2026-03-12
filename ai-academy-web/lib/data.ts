export interface Course {
  id: string
  title: string
  description: string
  major: string
  level: '初级' | '中级' | '高级'
  duration: string
  lessons: number
  image?: string
  price?: number
  tags?: string[]
  chapters?: Chapter[]
}

export interface Chapter {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  duration?: string
  content?: string
}

export interface Major {
  id: string
  name: string
  description: string
  icon: string
  color: string
  level: string
  duration: string
  coursesCount: number
  students: number
  rating: number
  tags: string[]
}

// 专业数据
export const majors: Major[] = [
  {
    id: 'self-media',
    name: '自媒体运营专业',
    description: '系统学习自媒体运营的核心技巧，从内容创作到商业变现',
    icon: '🤖',
    color: 'from-blue-500 to-blue-600',
    level: '中级',
    duration: '3个月',
    coursesCount: 5,
    students: 1500,
    rating: 4.8,
    tags: ['内容创作', '粉丝运营', '变现'],
  },
  {
    id: 'llm-development',
    name: '大模型开发专业',
    description: '掌握大模型开发技术，从基础到实战应用',
    icon: '🧠',
    color: 'from-purple-500 to-purple-600',
    level: '高级',
    duration: '6个月',
    coursesCount: 10,
    students: 800,
    rating: 4.9,
    tags: ['大模型', 'AI开发', '实践项目'],
  },
  {
    id: 'ai-creation',
    name: 'AI创作专业',
    description: '学习AI辅助创作，提升内容生产效率和质量',
    icon: '🎨',
    color: 'from-pink-500 to-pink-600',
    level: '中级',
    duration: '4个月',
    coursesCount: 8,
    students: 1200,
    rating: 4.7,
    tags: ['AI创作', '内容生成', '效率提升'],
  },
  {
    id: 'web-development',
    name: 'Web开发专业',
    description: '全栈Web开发技术，从前端到后端完整掌握',
    icon: '💻',
    color: 'from-green-500 to-green-600',
    level: '中级',
    duration: '5个月',
    coursesCount: 12,
    students: 2000,
    rating: 4.8,
    tags: ['前端', '后端', '全栈'],
  },
  {
    id: 'data-science',
    name: '数据科学专业',
    description: '学习数据分析和机器学习，成为数据科学专家',
    icon: '📊',
    color: 'from-orange-500 to-orange-600',
    level: '高级',
    duration: '6个月',
    coursesCount: 15,
    students: 600,
    rating: 4.9,
    tags: ['数据分析', '机器学习', 'Python'],
  },
]

// 自媒体运营专业课程
export const selfMediaCourses: Course[] = [
  {
    id: 'sm-01',
    title: '自媒体运营基础认知',
    description: '了解自媒体的定义、发展历程、核心要素和常见误区',
    major: 'self-media',
    level: '初级',
    duration: '2小时',
    lessons: 5,
    tags: ['基础', '认知', '入门'],
    chapters: [
      {
        id: 'c1',
        title: '第一章：自媒体认知',
        lessons: [
          { id: 'l1-1', title: '1.1 什么是自媒体', duration: '15分钟' },
          { id: 'l1-2', title: '1.2 自媒体的发展历程', duration: '20分钟' },
          { id: 'l1-3', title: '1.3 自媒体的核心要素', duration: '25分钟' },
          { id: 'l1-4', title: '1.4 常见的运营误区', duration: '20分钟' },
          { id: 'l1-5', title: '1.5 案例分析与总结', duration: '30分钟' },
        ],
      },
    ],
  },
  {
    id: 'sm-02',
    title: '平台选择与定位策略',
    description: '学习各大自媒体平台的特点，掌握精准定位方法',
    major: 'self-media',
    level: '初级',
    duration: '2.5小时',
    lessons: 6,
    tags: ['平台', '定位', '策略'],
    chapters: [
      {
        id: 'c2',
        title: '第二章：平台与定位',
        lessons: [
          { id: 'l2-1', title: '2.1 主流平台对比分析', duration: '25分钟' },
          { id: 'l2-2', title: '2.2 如何选择合适的平台', duration: '20分钟' },
          { id: 'l2-3', title: '2.3 个人定位策略', duration: '30分钟' },
          { id: 'l2-4', title: '2.4 差异化定位方法', duration: '25分钟' },
          { id: 'l2-5', title: '2.5 定位案例分析', duration: '20分钟' },
          { id: 'l2-6', title: '2.6 定位调整与优化', duration: '20分钟' },
        ],
      },
    ],
  },
  {
    id: 'sm-03',
    title: '内容创作核心技巧',
    description: '掌握内容创作的5W1H方法，打造爆款内容',
    major: 'self-media',
    level: '中级',
    duration: '3小时',
    lessons: 7,
    tags: ['内容', '创作', '爆款'],
    chapters: [
      {
        id: 'c3',
        title: '第三章：内容创作',
        lessons: [
          { id: 'l3-1', title: '3.1 5W1H内容创作法', duration: '30分钟' },
          { id: 'l3-2', title: '3.2 爆款内容的要素', duration: '25分钟' },
          { id: 'l3-3', title: '3.3 标题优化技巧', duration: '30分钟' },
          { id: 'l3-4', title: '3.4 内容排版与呈现', duration: '25分钟' },
          { id: 'l3-5', title: '3.5 视觉设计基础', duration: '25分钟' },
          { id: 'l3-6', title: '3.6 内容库搭建', duration: '25分钟' },
          { id: 'l3-7', title: '3.7 内容发布时机', duration: '20分钟' },
        ],
      },
    ],
  },
  {
    id: 'sm-04',
    title: '用户增长与粉丝运营',
    description: '学习用户增长策略，掌握粉丝运营方法',
    major: 'self-media',
    level: '中级',
    duration: '3.5小时',
    lessons: 8,
    tags: ['增长', '粉丝', '运营'],
    chapters: [
      {
        id: 'c4',
        title: '第四章：用户增长',
        lessons: [
          { id: 'l4-1', title: '4.1 用户增长策略概述', duration: '20分钟' },
          { id: 'l4-2', title: '4.2 内容引流方法', duration: '30分钟' },
          { id: 'l4-3', title: '4.3 粉丝获取技巧', duration: '25分钟' },
          { id: 'l4-4', title: '4.4 粉丝分层运营', duration: '30分钟' },
          { id: 'l4-5', title: '4.5 用户留存策略', duration: '25分钟' },
          { id: 'l4-6', title: '4.6 社群运营方法', duration: '30分钟' },
          { id: 'l4-7', title: '4.7 互动与粘性提升', duration: '25分钟' },
          { id: 'l4-8', title: '4.8 数据化运营', duration: '30分钟' },
        ],
      },
    ],
  },
  {
    id: 'sm-05',
    title: '变现模式与商业转化',
    description: '了解自媒体的多种变现方式，实现商业价值',
    major: 'self-media',
    level: '高级',
    duration: '3小时',
    lessons: 8,
    tags: ['变现', '商业', '转化'],
    chapters: [
      {
        id: 'c5',
        title: '第五章：商业变现',
        lessons: [
          { id: 'l5-1', title: '5.1 自媒体变现模式概述', duration: '20分钟' },
          { id: 'l5-2', title: '5.2 广告变现方法', duration: '25分钟' },
          { id: 'l5-3', title: '5.3 内容电商变现', duration: '30分钟' },
          { id: 'l5-4', title: '5.4 知识付费变现', duration: '30分钟' },
          { id: 'l5-5', title: '5.5 社群变现策略', duration: '25分钟' },
          { id: 'l5-6', title: '5.6 IP授权与品牌合作', duration: '25分钟' },
          { id: 'l5-7', title: '5.7 变现路径规划', duration: '25分钟' },
          { id: 'l5-8', title: '5.8 实战案例分析', duration: '30分钟' },
        ],
      },
    ],
  },
]

// 所有课程数据
export const courses: Course[] = [...selfMediaCourses]

// 辅助函数
export function getMajorById(id: string): Major | undefined {
  return majors.find((major) => major.id === id)
}

export function getCoursesByMajor(majorId: string): Course[] {
  return courses.filter((course) => course.major === majorId)
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}

export function searchCourses(query: string): Course[] {
  const lowerQuery = query.toLowerCase()
  return courses.filter(
    (course) =>
      course.title.toLowerCase().includes(lowerQuery) ||
      course.description.toLowerCase().includes(lowerQuery) ||
      course.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}

export function searchMajors(query: string): Major[] {
  const lowerQuery = query.toLowerCase()
  return majors.filter(
    (major) =>
      major.name.toLowerCase().includes(lowerQuery) ||
      major.description.toLowerCase().includes(lowerQuery) ||
      major.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}
