import Link from 'next/link'
import { getMajorBySlug, getCoursesByMajorSlug } from '@/lib/data'
import { getLevelColor, getLevelText } from '@/lib/utils'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function MajorDetailPage({ params }: { params: { slug: string } }) {
  const major = getMajorBySlug(params.slug)
  const courses = getCoursesByMajorSlug(params.slug)

  if (!major) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              首页
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link href="/majors" className="text-blue-600 hover:text-blue-800">
              专业
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-600">{major.name}</li>
        </ol>
      </nav>

      {/* Back Button */}
      <Link
        href="/majors"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>返回专业列表</span>
      </Link>

      {/* Major Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-start space-x-6">
          <div className="text-6xl">{major.icon}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {major.name}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{major.description}</p>
            <div className="flex flex-wrap gap-2">
              {major.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          课程列表 ({courses.length} 门)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200"
            >
              <div className="mb-4">
                <span
                  className={`${getLevelColor(course.level)} px-3 py-1 rounded-full text-sm`}
                >
                  {getLevelText(course.level)}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} 节</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {courses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">该专业暂无课程</p>
        </div>
      )}
    </div>
  )
}
