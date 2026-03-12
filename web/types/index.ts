// TypeScript类型定义 - AI-Academy

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

export interface PageProps {
  params: {
    id?: string
    slug?: string
  }
}
