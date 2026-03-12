import { getMajorBySlug, getCoursesByMajorId } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function MajorDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const major = getMajorBySlug(params.slug)

  if (!major) {
    notFound()
  }

  const courses = getCoursesByMajorId(major.id)

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
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            首页
          </Link>
          <span>/</span>
          <Link href="/majors" className="hover:text-primary">
            专业
          </Link>
          <span>/</span>
          <span className="text-gray-900">{major.name}</span>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Cover */}
            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-9xl">{major.icon}</span>
            </div>

            {/* Content */}
            <div className="p-8">
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

              <h1 className="text-4xl font-bold mb-4">{major.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{major.description}</p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <span>{major.courses.length}节课程</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span>{major.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span>
                    {major.level === 'beginner' && '入门级'}
                    {major.level === 'intermediate' && '中级'}
                    {major.level === 'advanced' && '高级'}
                  </span>
                </div>
              </div>

              <button className="w-full bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                开始学习
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">课程列表</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Course Number */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 md:w-20 flex items-center justify-center">
                  <span className="text-3xl font-bold">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    {course.isFree && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        免费
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📖</span>
                      <span>{course.lessons}课时</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎯</span>
                      <span>
                        {course.level === 'beginner' && '入门'}
                        {course.level === 'intermediate' && '中级'}
                        {course.level === 'advanced' && '高级'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
