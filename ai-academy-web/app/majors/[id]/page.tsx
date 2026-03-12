import { getMajorBySlug } from '@/lib/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function MajorDetailPage({ params }: { params: { id: string } }) {
  const major = getMajorBySlug(params.id)

  if (!major) {
    notFound()
  }

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
            <Link href="/majors" className="text-primary font-semibold">
              专业
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary transition-colors">
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
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">首页</Link>
          <span>/</span>
          <Link href="/majors" className="hover:text-primary">专业</Link>
          <span>/</span>
          <span className="text-primary">{major.name}</span>
        </div>
      </section>

      {/* Major Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-6">
            <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${major.color} flex items-center justify-center text-4xl`}>
              {major.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{major.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{major.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  难度：{major.level}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  时长：{major.duration}
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {major.coursesCount}节课程
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  {major.students}人学习
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                  ⭐ {major.rating}分
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">专业标签</h3>
          <div className="flex flex-wrap gap-2">
            {major.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">课程列表</h2>
        <div className="space-y-4">
          {major.courses.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${major.color} text-white flex items-center justify-center font-bold flex-shrink-0`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>⏱️ {course.duration}</span>
                    <span>📚 {course.lessons}课时</span>
                    <span className="px-2 py-1 bg-gray-100 rounded">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="text-primary text-2xl">→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className={`bg-gradient-to-r ${major.color} rounded-xl p-8 text-white text-center`}>
          <h2 className="text-2xl font-bold mb-4">开始学习{major.name}</h2>
          <p className="mb-6 text-blue-100">
            系统化学习{major.name}，快速提升你的专业能力
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            立即开始学习
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AI Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

