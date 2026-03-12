import { getCourseBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDifficultyText, getDifficultyColor } from '@/lib/utils'

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  // Mock lessons data
  const lessons = Array.from({ length: course.lessons }, (_, i) => ({
    id: `${course.id}-lesson-${i + 1}`,
    title: `第${i + 1}课：${['核心概念', '基础实践', '进阶技巧', '实战项目'][i % 4]}`,
    duration: `${Math.floor(Math.random() * 30 + 15)}分钟`,
    isFree: i === 0,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            🎓 AI Academy
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              首页
            </Link>
            <Link href="/majors" className="text-gray-700 hover:text-primary transition-colors">
              专业
            </Link>
            <Link href="/courses" className="text-primary font-semibold">
              课程
            </Link>
          </nav>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            开始学习
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            首页
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-primary">
            课程
          </Link>
          <span>/</span>
          <span className="text-gray-900">{course.title}</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Video Placeholder */}
            <div className="h-96 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">📚</div>
                <h2 className="text-2xl font-bold">课程预览</h2>
              </div>
              {course.isFree && (
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                    免费课程
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                <span className={`px-3 py-1 text-sm rounded-full ${getDifficultyColor(course.level)}`}>
                  {getDifficultyText(course.level)}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{course.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-1">⏱️</div>
                  <div className="font-semibold">{course.duration}</div>
                  <div className="text-sm text-gray-500">总时长</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-1">📖</div>
                  <div className="font-semibold">{course.lessons}</div>
                  <div className="text-sm text-gray-500">课时数</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-1">👥</div>
                  <div className="font-semibold">1,234</div>
                  <div className="text-sm text-gray-500">学员</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="font-semibold">4.8</div>
                  <div className="text-sm text-gray-500">评分</div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                  开始学习
                </button>
                <button className="px-6 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b">
            <button className="px-6 py-3 text-primary font-semibold border-b-2 border-primary">
              课程目录
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-primary">
              课程简介
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-primary">
              学员评价
            </button>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-3">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex items-center p-4">
                <div className="w-16 text-center mr-4">
                  <div className="text-sm font-semibold text-gray-500">课时 {index + 1}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{lesson.title}</h3>
                  <div className="text-sm text-gray-500 flex items-center gap-4">
                    <span>⏱️ {lesson.duration}</span>
                    {lesson.isFree && (
                      <span className="text-green-600">免费试看</span>
                    )}
                  </div>
                </div>
                <button className="ml-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                  {lesson.isFree ? '观看' : '锁定'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Info */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">课程简介</h2>
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-600 mb-4">
                本课程将带你系统性地学习{course.title.split('：')[0]}的核心知识和实践技能。
                通过理论讲解和实战演练相结合的方式，帮助你快速掌握相关技术。
              </p>
              <h3 className="text-xl font-bold mb-3">学习目标</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>理解{course.title.split('：')[0]}的基本概念和原理</li>
                <li>掌握核心技术和实践方法</li>
                <li>能够独立完成相关项目</li>
                <li>为进阶学习打下坚实基础</li>
              </ul>
              <h3 className="text-xl font-bold mb-3">适合人群</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>对{course.title.split('：')[0]}感兴趣的初学者</li>
                <li>希望系统提升相关技能的开发者</li>
                <li>需要快速入门新技术的职场人士</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 AI Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
