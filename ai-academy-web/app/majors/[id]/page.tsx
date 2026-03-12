import Link from 'next/link'

export default function MajorDetailPage({ params }: { params: { id: string } }) {
  const majorData: Record<string, any> = {
    'self-media-management': {
      id: 'self-media-management',
      name: '自媒体运营专业',
      description: '系统学习自媒体运营的全流程，从基础认知到高级变现，掌握内容创作、平台运营、用户增长、商业变现等核心技能',
      icon: '🤖',
      difficulty: '中级',
      duration: '10小时',
      features: [
        '完整的自媒体运营知识体系',
        '5大核心模块系统学习',
        '实战案例深度剖析',
        '变现策略详细指导',
      ],
      courses: [
        {
          id: 'lesson-01',
          title: '自媒体运营基础认知',
          description: '了解自媒体的定义、平台生态、运营要素和常见误区',
          duration: '2小时',
          level: '入门',
        },
        {
          id: 'lesson-02',
          title: '平台选择与定位策略',
          description: '深入了解各大平台特点，制定精准定位策略',
          duration: '2小时',
          level: '入门',
        },
        {
          id: 'lesson-03',
          title: '内容创作核心技巧',
          description: '掌握内容创作的方法论，打造爆款内容',
          duration: '2.5小时',
          level: '中级',
        },
        {
          id: 'lesson-04',
          title: '用户增长与粉丝运营',
          description: '学习用户增长策略和粉丝运营技巧',
          duration: '2.5小时',
          level: '中级',
        },
        {
          id: 'lesson-05',
          title: '变现模式与商业转化',
          description: '掌握自媒体变现的完整模式和商业转化技巧',
          duration: '3小时',
          level: '高级',
        },
      ],
    },
  }

  const major = majorData[params.id]

  if (!major) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">专业不存在</h1>
          <Link href="/majors" className="text-primary hover:underline">
            返回专业列表
          </Link>
        </div>
      </div>
    )
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
            <div className="text-6xl">{major.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{major.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{major.description}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {major.difficulty}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {major.duration}
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {major.courses.length}节课程
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">专业特点</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {major.features.map((feature: string, index: number) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="text-green-500 text-xl">✓</div>
                <span>{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">课程列表</h2>
        <div className="space-y-4">
          {major.courses.map((course: any, index: number) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-3">{course.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>⏱ {course.duration}</span>
                    <span>📊 {course.level}</span>
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">开始学习这个专业</h2>
          <p className="mb-6 text-blue-100">
            系统化学习自媒体运营，快速提升你的运营能力
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            立即开始
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
