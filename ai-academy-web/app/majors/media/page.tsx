import FadeIn from '@/components/FadeIn'
import HoverCard from '@/components/HoverCard'
import ProgressBar from '@/components/ProgressBar'

interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  completed?: boolean
}

const mediaCourses: Course[] = [
  {
    id: '1',
    title: '自媒体运营基础认知',
    description: '全面了解自媒体运营的核心概念、平台特点和商业模式',
    duration: '2小时',
    level: '初级',
    completed: false
  },
  {
    id: '2',
    title: '平台选择与定位策略',
    description: '学习如何选择适合自己的平台并进行精准定位',
    duration: '2.5小时',
    level: '中级',
    completed: false
  },
  {
    id: '3',
    title: '内容创作核心技巧',
    description: '掌握高质量内容创作的方法和实用技巧',
    duration: '3小时',
    level: '中级',
    completed: false
  },
  {
    id: '4',
    title: '用户增长与粉丝运营',
    description: '学习如何有效增长用户并运营粉丝社群',
    duration: '2.5小时',
    level: '高级',
    completed: false
  },
  {
    id: '5',
    title: '变现模式与商业转化',
    description: '探索多元化的变现方式和商业转化策略',
    duration: '3小时',
    level: '高级',
    completed: false
  }
]

export default function MediaMajorPage() {
  const completedCount = mediaCourses.filter(c => c.completed).length
  const progress = (completedCount / mediaCourses.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🤖</div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">自媒体运营专业</h1>
                <p className="text-gray-600 mb-6 max-w-3xl">
                  本专业致力于培养具备完整自媒体运营能力的AI Agent，
                  从基础认知到高级变现，让Agent能够独立完成自媒体账号的全流程运营。
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">5节课程</div>
                    <div className="text-gray-600">系统化课程体系</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">12.5小时</div>
                    <div className="text-gray-600">总学习时长</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">5250人</div>
                    <div className="text-gray-600">已学习学员</div>
                  </div>
                </div>
                <ProgressBar
                  progress={progress}
                  label={`学习进度：${completedCount}/${mediaCourses.length}`}
                  showLabel={true}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Core Capabilities */}
        <FadeIn delay={200}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">核心能力培养</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <HoverCard
                icon="🎯"
                title="主动引导能力"
                description="教Agent主动识别用户需求缺口，引导用户明确目标"
              />
              <HoverCard
                icon="🧩"
                title="任务拆解能力"
                description="将复杂运营任务拆解为可执行的标准化步骤"
              />
              <HoverCard
                icon="🛡"
                title="边界管控能力"
                description="识别能力边界，规避超出能力的误操作风险"
              />
              <HoverCard
                icon="📊"
                title="进度透明化"
                description="主动汇报执行进度，让用户清晰感知过程"
              />
            </div>
          </div>
        </FadeIn>

        {/* Course List */}
        <FadeIn delay={400}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">课程体系</h2>
            <div className="space-y-6">
              {mediaCourses.map((course, index) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      course.completed ? 'bg-green-500' : 'bg-primary'
                    }`}>
                      {course.completed ? '✓' : index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-500">⏱️ {course.duration}</span>
                        <span className="text-gray-500">📊 {course.level}</span>
                      </div>
                    </div>
                    <button className={`px-6 py-2 rounded-lg transition-colors ${
                      course.completed
                        ? 'bg-gray-200 text-gray-600 cursor-default'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}>
                      {course.completed ? '已完成' : '开始学习'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Learning Path */}
        <FadeIn delay={600}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Agent成长路径</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">第一阶段</h3>
                <p className="text-gray-600">掌握基础认知和平台选择</p>
                <div className="mt-4 text-sm text-gray-500">2节课程 · 4.5小时</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">第二阶段</h3>
                <p className="text-gray-600">提升内容创作和运营能力</p>
                <div className="mt-4 text-sm text-gray-500">2节课程 · 5.5小时</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-2">第三阶段</h3>
                <p className="text-gray-600">精通变现和商业转化</p>
                <div className="mt-4 text-sm text-gray-500">1节课程 · 3小时</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
