import { Major, Course, Lesson } from '@/types'

/**
 * 专业Mock数据
 */
export const majors: Major[] = [
  {
    id: '1',
    name: '自媒体运营专业',
    description: '系统学习自媒体运营的完整知识体系，从基础认知到内容创作、用户增长，再到商业变现，打造全能自媒体人。',
    slug: 'self-media-management',
    icon: '🤖',
    tags: ['自媒体', '内容创作', '运营', '变现'],
    duration: '25小时',
    level: 'intermediate',
    courses: [
      {
        id: '1-1',
        majorId: '1',
        title: '自媒体运营基础认知',
        description: '全面了解自媒体运营的基本概念、核心价值、生态格局，以及常见误区，建立正确的自媒体运营认知。',
        slug: 'self-media-basics',
        duration: '5小时',
        level: 'beginner',
        lessons: 6,
        isFree: true,
        tags: ['基础', '认知', '入门'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '1-2',
        majorId: '1',
        title: '平台选择与定位策略',
        description: '深入了解主流平台特点，学习如何根据自身优势选择合适的平台，制定精准的定位策略。',
        slug: 'platform-selection',
        duration: '4小时',
        level: 'beginner',
        lessons: 5,
        tags: ['平台', '定位', '策略'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '1-3',
        majorId: '1',
        title: '内容创作核心技巧',
        description: '掌握爆款内容创作的方法论，学习标题、开头、结构等核心技巧，提升内容质量和传播效果。',
        slug: 'content-creation',
        duration: '6小时',
        level: 'intermediate',
        lessons: 8,
        tags: ['内容', '创作', '技巧'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '1-4',
        majorId: '1',
        title: '用户增长与粉丝运营',
        description: '学习用户增长的核心逻辑和实战策略，搭建粉丝运营体系，实现从0到10万粉的突破。',
        slug: 'user-growth',
        duration: '5小时',
        level: 'intermediate',
        lessons: 7,
        tags: ['增长', '粉丝', '运营'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '1-5',
        majorId: '1',
        title: '变现模式与商业转化',
        description: '全面解析自媒体变现的各种模式和路径，从流量到价值的转化，建立可持续的商业化体系。',
        slug: 'monetization',
        duration: '5小时',
        level: 'advanced',
        lessons: 6,
        tags: ['变现', '商业', '转化'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
    ],
    createdAt: '2026-03-12',
    updatedAt: '2026-03-12',
  },
  {
    id: '2',
    name: '大模型开发专业',
    description: '深入学习大模型开发技术，从基础原理到实战应用，掌握提示词工程、微调、部署等核心技能。',
    slug: 'llm-development',
    icon: '🧠',
    tags: ['大模型', 'AI', '开发', 'LLM'],
    duration: '40小时',
    level: 'advanced',
    courses: [
      {
        id: '2-1',
        majorId: '2',
        title: '大模型基础原理',
        description: '了解大模型的基本原理、架构设计、训练方法，建立大模型技术认知。',
        slug: 'llm-basics',
        duration: '8小时',
        level: 'beginner',
        lessons: 10,
        tags: ['基础', '原理', '入门'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '2-2',
        majorId: '2',
        title: '提示词工程实战',
        description: '学习提示词工程的核心技巧，掌握各类场景下的提示词设计和优化方法。',
        slug: 'prompt-engineering',
        duration: '10小时',
        level: 'intermediate',
        lessons: 12,
        tags: ['提示词', '工程', '实战'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '2-3',
        majorId: '2',
        title: '大模型微调技术',
        description: '深入学习大模型微调技术，掌握数据准备、训练策略、评估优化等方法。',
        slug: 'llm-finetuning',
        duration: '12小时',
        level: 'advanced',
        lessons: 15,
        tags: ['微调', '训练', '优化'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '2-4',
        majorId: '2',
        title: '大模型部署与优化',
        description: '学习大模型部署的最佳实践，掌握性能优化、成本控制、安全防护等关键技能。',
        slug: 'llm-deployment',
        duration: '10小时',
        level: 'advanced',
        lessons: 12,
        tags: ['部署', '优化', '运维'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
    ],
    createdAt: '2026-03-12',
    updatedAt: '2026-03-12',
  },
  {
    id: '3',
    name: 'AI创作专业',
    description: '学习如何利用AI工具提升创作效率和质量，涵盖文本、图像、视频等多种内容形式的AI辅助创作。',
    slug: 'ai-creation',
    icon: '🎨',
    tags: ['AI创作', '效率', '工具'],
    duration: '30小时',
    level: 'intermediate',
    courses: [
      {
        id: '3-1',
        majorId: '3',
        title: 'AI文本创作',
        description: '掌握AI辅助文本创作的方法，学习如何使用ChatGPT、Claude等工具提升写作效率。',
        slug: 'ai-text-creation',
        duration: '8小时',
        level: 'beginner',
        lessons: 10,
        tags: ['文本', '写作', 'ChatGPT'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '3-2',
        majorId: '3',
        title: 'AI图像创作',
        description: '学习使用Midjourney、DALL-E、Stable Diffusion等AI绘画工具，创作高质量图像。',
        slug: 'ai-image-creation',
        duration: '10小时',
        level: 'intermediate',
        lessons: 12,
        tags: ['图像', '绘画', 'Midjourney'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '3-3',
        majorId: '3',
        title: 'AI视频创作',
        description: '探索AI视频创作的可能性，学习使用AI工具进行视频剪辑、特效制作等。',
        slug: 'ai-video-creation',
        duration: '8小时',
        level: 'intermediate',
        lessons: 10,
        tags: ['视频', '剪辑', '特效'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
      {
        id: '3-4',
        majorId: '3',
        title: 'AI创作工作流',
        description: '构建高效的AI创作工作流，整合多种AI工具，实现内容生产的全流程自动化。',
        slug: 'ai-creation-workflow',
        duration: '4小时',
        level: 'advanced',
        lessons: 6,
        tags: ['工作流', '自动化', '效率'],
        createdAt: '2026-03-12',
        updatedAt: '2026-03-12',
      },
    ],
    createdAt: '2026-03-12',
    updatedAt: '2026-03-12',
  },
]

/**
 * 课程Mock数据
 */
export const courses: Course[] = majors.flatMap(major => major.courses)

/**
 * 获取指定ID的专业
 */
export function getMajorById(id: string): Major | undefined {
  return majors.find(major => major.id === id)
}

/**
 * 获取指定slug的专业
 */
export function getMajorBySlug(slug: string): Major | undefined {
  return majors.find(major => major.slug === slug)
}

/**
 * 获取指定ID的课程
 */
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id)
}

/**
 * 获取指定slug的课程
 */
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug)
}

/**
 * 获取指定专业的所有课程
 */
export function getCoursesByMajorId(majorId: string): Course[] {
  return courses.filter(course => course.majorId === majorId)
}

/**
 * 获取热门课程
 */
export function getPopularCourses(limit: number = 6): Course[] {
  return courses
    .filter(course => course.isFree)
    .slice(0, limit)
}

/**
 * 获取热门专业
 */
export function getPopularMajors(limit: number = 3): Major[] {
  return majors.slice(0, limit)
}
