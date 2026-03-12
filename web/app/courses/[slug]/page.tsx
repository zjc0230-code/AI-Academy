import Link from 'next/link'
import { getCourseBySlug, getMajorBySlug, getAllMajors } from '@/lib/data'
import { getLevelColor, getLevelText } from '@/lib/utils'
import { ArrowLeft, Clock, BookOpen, PlayCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  const majors = getAllMajors()
  const major = majors.find(m => m.id === course.majorId)

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
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">
              课程
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-600">{course.title}</li>
        </ol>
      </nav>

      {/* Back Button */}
      <Link
        href="/courses"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>返回课程列表</span>
      </Link>

      {/* Course Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <span
            className={`${getLevelColor(course.level)} px-4 py-2 rounded-full`}
          >
            {getLevelText(course.level)}
          </span>
          {major && (
            <div className="text-lg text-gray-600">
              {major.icon} {major.name}
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {course.title}
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          {course.description}
        </p>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">时长：{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">{course.lessons} 个章节</span>
          </div>
        </div>
      </div>

      {/* Start Learning Button */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">准备好开始学习了吗？</h2>
            <p className="text-blue-100">
              系统化提升您的AI Agent技能
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            <PlayCircle className="w-6 h-6" />
            <span>开始学习</span>
          </button>
        </div>
      </div>

      {/* Course Chapters */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          课程章节
        </h2>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          {/* Mock chapters */}
          {Array.from({ length: course.lessons }, (_, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    第 {i + 1} 章
                  </h3>
                  <p className="text-sm text-gray-600">
                    章节内容概述...
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{Math.floor(Math.random() * 20) + 10} 分钟</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Courses */}
      {major && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {major.name} 相关课程
          </h2>
          <p className="text-gray-600">
            更多相关课程正在开发中...
          </p>
        </div>
      )}
    </div>
  )
}
