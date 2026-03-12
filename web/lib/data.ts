// Mock数据 - AI-Academy专业和课程

export interface Major {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  skills: string[]
}

export interface Course {
  id: string
  majorId: string
  majorSlug: string
  title: string
  slug: string
  description: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  lessons: number
}

// 专业数据
export const majors: Major[] = [
  {
    id: 'major-1',
    name: '自媒体运营',
    slug: 'self-media-management',
    icon: '📱',
    description: '掌握小红书、抖音、公众号等平台的运营技巧，自动化内容创作、发布和数据分析',
    skills: ['小红书运营', '短视频制作', '数据分析', '用户增长'],
  },
  {
    id: 'major-2',
    name: '电商运营',
    slug: 'ecommerce-operations',
    icon: '🛒',
    description: '全面掌握电商平台的商品管理、订单处理、客服回复和营销推广',
    skills: ['商品上架', '订单管理', '智能客服', '营销推广'],
  },
  {
    id: 'major-3',
    name: '数据分析',
    slug: 'data-analytics',
    icon: '📊',
    description: '精通数据采集、清洗、分析和可视化，提供业务洞察和决策支持',
    skills: ['数据采集', '数据清洗', '统计分析', '可视化'],
  },
  {
    id: 'major-4',
    name: '内容创作',
    slug: 'content-creation',
    icon: '✍️',
    description: '熟练掌握各类内容的创作技巧，包括文案、图片、视频和直播',
    skills: ['文案写作', '图片设计', '视频剪辑', '直播策划'],
  },
  {
    id: 'major-5',
    name: '客户服务',
    slug: 'customer-service',
    icon: '💬',
    description: '提供全天候智能客服服务，处理咨询、投诉和售后问题',
    skills: ['智能问答', '投诉处理', '售后跟进', '情感分析'],
  },
  {
    id: 'major-6',
    name: '项目管理',
    slug: 'project-management',
    icon: '📋',
    description: '掌握项目规划、执行、监控和收尾的全流程管理能力',
    skills: ['项目规划', '进度跟踪', '风险管理', '团队协作'],
  },
]

// 课程数据
export const courses: Course[] = [
  // 自媒体运营专业课程
  {
    id: 'course-1',
    majorId: 'major-1',
    majorSlug: 'self-media-management',
    title: '自媒体运营基础',
    slug: 'lesson-01-basics',
    description: '了解自媒体生态，掌握平台规则和运营基础',
    duration: '45分钟',
    level: 'beginner',
    lessons: 5,
  },
  {
    id: 'course-2',
    majorId: 'major-1',
    majorSlug: 'self-media-management',
    title: '平台定位与内容策略',
    slug: 'lesson-02-platform-and-positioning',
    description: '学习如何选择合适的平台，制定内容策略',
    duration: '60分钟',
    level: 'beginner',
    lessons: 6,
  },
  {
    id: 'course-3',
    majorId: 'major-1',
    majorSlug: 'self-media-management',
    title: '内容创作技巧',
    slug: 'lesson-03-content-creation',
    description: '掌握高质量内容的创作方法和技巧',
    duration: '90分钟',
    level: 'intermediate',
    lessons: 8,
  },
  {
    id: 'course-4',
    majorId: 'major-1',
    majorSlug: 'self-media-management',
    title: '用户增长策略',
    slug: 'lesson-04-user-growth',
    description: '学习如何获取和留住粉丝，实现用户增长',
    duration: '75分钟',
    level: 'intermediate',
    lessons: 7,
  },
  {
    id: 'course-5',
    majorId: 'major-1',
    majorSlug: 'self-media-management',
    title: '变现模式与商业化',
    slug: 'lesson-05-monetization',
    description: '探索自媒体变现的各种模式和商业化路径',
    duration: '60分钟',
    level: 'advanced',
    lessons: 6,
  },

  // 电商运营专业课程
  {
    id: 'course-6',
    majorId: 'major-2',
    majorSlug: 'ecommerce-operations',
    title: '电商平台基础',
    slug: 'ecommerce-basics',
    description: '了解主流电商平台的特点和运营模式',
    duration: '50分钟',
    level: 'beginner',
    lessons: 5,
  },
  {
    id: 'course-7',
    majorId: 'major-2',
    majorSlug: 'ecommerce-operations',
    title: '商品管理技巧',
    slug: 'product-management',
    description: '学习商品上架、库存管理和定价策略',
    duration: '70分钟',
    level: 'intermediate',
    lessons: 7,
  },
  {
    id: 'course-8',
    majorId: 'major-2',
    majorSlug: 'ecommerce-operations',
    title: '订单处理与客服',
    slug: 'order-customer-service',
    description: '掌握订单处理流程和客服回复技巧',
    duration: '60分钟',
    level: 'intermediate',
    lessons: 6,
  },
  {
    id: 'course-9',
    majorId: 'major-2',
    majorSlug: 'ecommerce-operations',
    title: '电商营销推广',
    slug: 'ecommerce-marketing',
    description: '学习电商营销的各种推广策略',
    duration: '80分钟',
    level: 'advanced',
    lessons: 8,
  },

  // 数据分析专业课程
  {
    id: 'course-10',
    majorId: 'major-3',
    majorSlug: 'data-analytics',
    title: '数据分析入门',
    slug: 'data-analytics-intro',
    description: '了解数据分析的基本概念和方法',
    duration: '45分钟',
    level: 'beginner',
    lessons: 5,
  },
  {
    id: 'course-11',
    majorId: 'major-3',
    majorSlug: 'data-analytics',
    title: '数据采集与清洗',
    slug: 'data-cleaning',
    description: '学习如何采集和清洗数据',
    duration: '70分钟',
    level: 'intermediate',
    lessons: 7,
  },
  {
    id: 'course-12',
    majorId: 'major-3',
    majorSlug: 'data-analytics',
    title: '统计分析方法',
    slug: 'statistical-analysis',
    description: '掌握常用的统计分析方法',
    duration: '80分钟',
    level: 'intermediate',
    lessons: 8,
  },
  {
    id: 'course-13',
    majorId: 'major-3',
    majorSlug: 'data-analytics',
    title: '数据可视化',
    slug: 'data-visualization',
    description: '学习如何创建直观的数据可视化图表',
    duration: '60分钟',
    level: 'advanced',
    lessons: 6,
  },

  // 内容创作专业课程
  {
    id: 'course-14',
    majorId: 'major-4',
    majorSlug: 'content-creation',
    title: '内容创作基础',
    slug: 'content-basics',
    description: '了解内容创作的基本原则和方法',
    duration: '40分钟',
    level: 'beginner',
    lessons: 4,
  },
  {
    id: 'course-15',
    majorId: 'major-4',
    majorSlug: 'content-creation',
    title: '文案写作技巧',
    slug: 'copywriting',
    description: '掌握吸引人的文案写作技巧',
    duration: '65分钟',
    level: 'intermediate',
    lessons: 7,
  },
  {
    id: 'course-16',
    majorId: 'major-4',
    majorSlug: 'content-creation',
    title: '图片与视频创作',
    slug: 'media-creation',
    description: '学习图片设计和视频剪辑技巧',
    duration: '90分钟',
    level: 'advanced',
    lessons: 9,
  },

  // 客户服务专业课程
  {
    id: 'course-17',
    majorId: 'major-5',
    majorSlug: 'customer-service',
    title: '客户服务基础',
    slug: 'service-basics',
    description: '了解客户服务的基本理念和方法',
    duration: '40分钟',
    level: 'beginner',
    lessons: 4,
  },
  {
    id: 'course-18',
    majorId: 'major-5',
    majorSlug: 'customer-service',
    title: '智能问答系统',
    slug: 'intelligent-qa',
    description: '学习构建智能问答系统',
    duration: '70分钟',
    level: 'intermediate',
    lessons: 7,
  },
  {
    id: 'course-19',
    majorId: 'major-5',
    majorSlug: 'customer-service',
    title: '投诉处理与售后',
    slug: 'complaint-handling',
    description: '掌握处理客户投诉和售后问题的技巧',
    duration: '60分钟',
    level: 'advanced',
    lessons: 6,
  },

  // 项目管理专业课程
  {
    id: 'course-20',
    majorId: 'major-6',
    majorSlug: 'project-management',
    title: '项目管理基础',
    slug: 'pm-basics',
    description: '了解项目管理的基本概念和方法',
    duration: '45分钟',
    level: 'beginner',
    lessons: 5,
  },
  {
    id: 'course-21',
    majorId: 'major-6',
    majorSlug: 'project-management',
    title: '项目规划与执行',
    slug: 'planning-execution',
    description: '学习如何规划和执行项目',
    duration: '75分钟',
    level: 'intermediate',
    lessons: 8,
  },
  {
    id: 'course-22',
    majorId: 'major-6',
    majorSlug: 'project-management',
    title: '风险管理与团队协作',
    slug: 'risk-team-collaboration',
    description: '掌握项目风险管理和团队协作技巧',
    duration: '60分钟',
    level: 'advanced',
    lessons: 6,
  },
]

// 辅助函数
export function getMajorBySlug(slug: string): Major | undefined {
  return majors.find((major) => major.slug === slug)
}

export function getCoursesByMajorSlug(majorSlug: string): Course[] {
  return courses.filter((course) => course.majorSlug === majorSlug)
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}

export function getAllCourses(): Course[] {
  return courses
}

export function getAllMajors(): Major[] {
  return majors
}
