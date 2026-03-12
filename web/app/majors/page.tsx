import Link from 'next/link'
import { getAllMajors } from '@/lib/data'
import { GraduationCap, BookOpen } from 'lucide-react'

export default function MajorsPage() {
  const majors = getAllMajors()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          专业列表
        </h1>
        <p className="text-lg text-gray-600">
          选择一个专业，开启AI Agent的进阶之路
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {majors.map((major) => (
          <Link
            key={major.id}
            href={`/majors/${major.slug}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl">{major.icon}</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                <BookOpen className="w-4 h-4 inline mr-1" />
                {major.skills.length} 门课程
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {major.name}
            </h2>

            <p className="text-gray-600 mb-4 line-clamp-2">
              {major.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {major.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
              {major.skills.length > 3 && (
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm">
                  +{major.skills.length - 3}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
