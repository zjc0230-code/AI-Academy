import Link from 'next/link'

export default function CoursesPage() {
  const courses = [
    {
      id: 'lesson-01',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '自媒体运营基础认知',
      description: '了解自媒体的定义、平台生态、运营要素和常见误区',
      duration: '2小时',
      level: '入门',
    },
    {
      id: 'lesson-02',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '平台选择与定位策略',
      description: '深入了解各大平台特点，制定精准定位策略',
      duration: '2小时',
      level: '入门',
    },
    {
      id: 'lesson-03',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '内容创作核心技巧',
      description: '掌握内容创作的方法论，打造爆款内容',
      duration: '2.5小时',
      level: '中级',
    },
    {
      id: 'lesson-04',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '用户增长与粉丝运营',
      description: '学习用户增长策略和粉丝运营技巧',
      duration: '2.5小时',
      level: '中级',
    },
    {
      id: 'lesson-05',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '变现模式与商业转化',
      description: '掌握自媒体变现的完整模式和商业转化技巧',
      duration: '3小时',
      level: '高级',
    },
  ]

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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">全部课程</h1>
          <p className="text-xl text-gray-600">
            探索我们的所有课程，选择适合你的学习内容
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="container mx-auto px-4 pb-20">
        <div className="space-y-4">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  📚
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-primary font-medium">{course.majorName}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-3">{course.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <span>⏱</span>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📊</span>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="text-primary text-2xl flex-shrink-0">→</div>
              </div>
            </Link>
          ))}
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
