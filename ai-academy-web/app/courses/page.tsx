import { getPopularCourses } from '@/lib/data'
import Link from 'next/link'
import { getDifficultyText, getDifficultyColor } from '@/lib/utils'

export default function CoursesPage() {
  const courses = getPopularCourses(10)

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

      {/* Page Header */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          全部课程
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
          系统化的AI课程，从基础到进阶，满足不同阶段的学习需求
        </p>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                搜索课程
              </label>
              <input
                type="text"
                placeholder="输入课程名称..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                专业类别
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">全部专业</option>
                <option value="1">自媒体运营</option>
                <option value="2">大模型开发</option>
                <option value="3">AI创作</option>
              </select>
            </div>
            <div className="min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                难度等级
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">全部难度</option>
                <option value="beginner">入门</option>
                <option value="intermediate">中级</option>
                <option value="advanced">高级</option>
              </select>
            </div>
            <div className="min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                价格
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">全部价格</option>
                <option value="free">免费</option>
                <option value="paid">付费</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Cover Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl">📚</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {course.isFree && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      免费
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Info */}
                <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span>⏱️</span>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📖</span>
                      {course.lessons}课时
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(course.level)}`}>
                    {getDifficultyText(course.level)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            加载更多课程
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">开始你的AI学习之旅</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            加入AI Academy，系统化学习AI技术，从基础到进阶，成为AI领域的专业人才
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors">
            免费注册
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
