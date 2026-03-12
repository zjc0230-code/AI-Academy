import FadeIn from '@/components/FadeIn'
import HoverCard from '@/components/HoverCard'

interface Course {
  id: string
  title: string
  description: string
  icon: string
  duration: string
  level: string
  students: number
  rating: number
}

const courses: Course[] = [
  {
    id: '1',
    title: '自媒体运营基础认知',
    description: '全面了解自媒体运营的核心概念、平台特点和商业模式',
    icon: '🤖',
    duration: '2小时',
    level: '初级',
    students: 1200,
    rating: 4.8
  },
  {
    id: '2',
    title: '平台选择与定位策略',
    description: '学习如何选择适合自己的平台并进行精准定位',
    icon: '🎯',
    duration: '2.5小时',
    level: '中级',
    students: 980,
    rating: 4.9
  },
  {
    id: '3',
    title: '内容创作核心技巧',
    description: '掌握高质量内容创作的方法和实用技巧',
    icon: '✍️',
    duration: '3小时',
    level: '中级',
    students: 1500,
    rating: 4.7
  },
  {
    id: '4',
    title: '用户增长与粉丝运营',
    description: '学习如何有效增长用户并运营粉丝社群',
    icon: '📈',
    duration: '2.5小时',
    level: '高级',
    students: 850,
    rating: 4.9
  },
  {
    id: '5',
    title: '变现模式与商业转化',
    description: '探索多元化的变现方式和商业转化策略',
    icon: '💰',
    duration: '3小时',
    level: '高级',
    students: 720,
    rating: 4.8
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              课程中心
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              系统化的AI课程体系，从基础到进阶，助你成为AI领域专家
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <FadeIn key={course.id} delay={index * 100}>
              <HoverCard
                icon={course.icon}
                title={course.title}
                description={course.description}
                extraInfo={[
                  { label: '课程时长', value: course.duration },
                  { label: '难度等级', value: course.level },
                  { label: '学员数', value: `${course.students}人` },
                  { label: '评分', value: `${course.rating}⭐` }
                ]}
                link={`/courses/${course.id}`}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600}>
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">学习路径推荐</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">初级路径</h3>
                <p className="text-gray-600">从零开始，建立基础认知</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">中级路径</h3>
                <p className="text-gray-600">深入实践，提升专业技能</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-2">高级路径</h3>
                <p className="text-gray-600">精通应用，成为行业专家</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
