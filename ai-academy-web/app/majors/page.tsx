import FadeIn from '@/components/FadeIn'
import HoverCard from '@/components/HoverCard'
import Link from 'next/link'

interface Major {
  id: string
  title: string
  description: string
  icon: string
  courseCount: number
  students: number
  level: string
}

const majors: Major[] = [
  {
    id: 'media',
    title: '自媒体运营专业',
    description: '学习自媒体运营的核心技巧，从内容创作到变现转化的完整流程',
    icon: '🤖',
    courseCount: 5,
    students: 5250,
    level: '中级'
  },
  {
    id: 'llm',
    title: '大模型开发专业',
    description: '掌握大模型开发技术，从基础原理到实战应用的全面学习',
    icon: '🧠',
    courseCount: 10,
    students: 3200,
    level: '高级'
  },
  {
    id: 'creation',
    title: 'AI创作专业',
    description: '学习AI辅助创作，提升内容生产效率和质量',
    icon: '🎨',
    courseCount: 8,
    students: 4100,
    level: '中级'
  }
]

export default function MajorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              专业方向
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              选择适合你的专业方向，系统化学习AI技术
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {majors.map((major, index) => (
            <FadeIn key={major.id} delay={index * 150}>
              <HoverCard
                icon={major.icon}
                title={major.title}
                description={major.description}
                extraInfo={[
                  { label: '课程数量', value: `${major.courseCount}节` },
                  { label: '学员数', value: `${major.students}人` },
                  { label: '难度等级', value: major.level }
                ]}
                link={`/majors/${major.id}`}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={450}>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">为什么选择我们</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">系统化课程</h3>
                <p className="text-gray-600">完整的课程体系，循序渐进</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2">实战导向</h3>
                <p className="text-gray-600">真实项目案例，边学边练</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">持续更新</h3>
                <p className="text-gray-600">紧跟技术发展，内容更新</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">准备好开始学习了吗？</h2>
            <p className="text-xl text-gray-600 mb-8">
              立即加入AI Academy，开启你的AI学习之旅
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors"
              >
                浏览课程
              </Link>
              <Link
                href="/"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg hover:bg-primary/10 transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
