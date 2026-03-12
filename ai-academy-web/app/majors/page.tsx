import { getPopularMajors } from '@/lib/data'
import Link from 'next/link'

export default function MajorsPage() {
  const majors = getPopularMajors()

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

      {/* Page Header */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          专业列表
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
          选择您感兴趣的专业，开始系统化的AI学习之旅
        </p>
      </section>

      {/* Majors Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {majors.map((major) => (
            <Link
              key={major.id}
              href={`/majors/${major.slug}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Cover Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-8xl">{major.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {major.name}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {major.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {major.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex gap-4">
                    <span>📚 {major.courses.length}节课程</span>
                    <span>⏱️ {major.duration}</span>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                    {major.level === 'beginner' && '入门'}
                    {major.level === 'intermediate' && '中级'}
                    {major.level === 'advanced' && '高级'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">没有找到合适的专业？</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            我们正在持续开发新的专业课程，敬请期待。您也可以通过反馈告诉我们您希望学习的内容。
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors">
            提交反馈
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 AI Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
