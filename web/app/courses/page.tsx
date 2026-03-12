import Link from 'next/link'
import { getAllCourses, getAllMajors } from '@/lib/data'
import { getLevelColor, getLevelText } from '@/lib/utils'
import { Clock, BookOpen, Filter } from 'lucide-react'

export default function CoursesPage() {
  const courses = getAllCourses()
  const majors = getAllMajors()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          课程列表
        </h1>
        <p className="text-lg text-gray-600">
          探索我们的专业课程，提升AI Agent技能
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            筛选条件
          </h2>
          <span className="text-sm text-gray-500">共 {courses.length} 门课程</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Major Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              专业
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">所有专业</option>
              {majors.map((major) => (
                <option key={major.id} value={major.slug}>
                  {major.name}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              难度级别
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">所有级别</option>
              <option value="beginner">入门</option>
              <option value="intermediate">进阶</option>
              <option value="advanced">高级</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              排序方式
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="latest">最新发布</option>
              <option value="duration">按时长</option>
              <option value="lessons">按章节数</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const major = majors.find(m => m.id === course.majorId)
          return (
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

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>

              {major && (
                <div className="text-sm text-blue-600 mb-3">
                  {major.icon} {major.name}
                </div>
              )}

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
          )
        })}
      </div>
    </div>
  )
}
