/**
 * 专业数据类型定义
 */

export interface Major {
  id: string
  name: string
  description: string
  slug: string
  icon: string
  coverImage?: string
  tags: string[]
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  courses: Course[]
  createdAt: string
  updatedAt: string
}

/**
 * 课程数据类型定义
 */

export interface Course {
  id: string
  majorId: string
  title: string
  description: string
  slug: string
  coverImage?: string
  duration: string
  level: 'beginner' | 'intermediate' | 'advanced'
  lessons: number
  price?: number
  isFree?: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}

/**
 * 章节数据类型定义
 */

export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string
  duration: string
  videoUrl?: string
  content?: string
  order: number
  isFree?: boolean
  createdAt: string
  updatedAt: string
}

/**
 * 学习进度数据类型定义
 */

export interface Progress {
  id: string
  userId: string
  courseId: string
  completedLessons: string[]
  currentLesson: string
  percentComplete: number
  lastAccessedAt: string
  createdAt: string
  updatedAt: string
}

/**
 * 用户数据类型定义
 */

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'student' | 'instructor' | 'admin'
  createdAt: string
  updatedAt: string
}

/**
 * 评价数据类型定义
 */

export interface Review {
  id: string
  userId: string
  courseId: string
  rating: number
  comment: string
  createdAt: string
  updatedAt: string
}

/**
 * 分类数据类型定义
 */

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  createdAt: string
  updatedAt: string
}
