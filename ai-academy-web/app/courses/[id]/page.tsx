import FadeIn from '@/components/FadeIn'
import ProgressBar from '@/components/ProgressBar'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseData = {
    id: params.id,
    title: '自媒体运营基础认知',
    description: '全面了解自媒体运营的核心概念、平台特点和商业模式',
    icon: '🤖',
    duration: '2小时',
    level: '初级',
    students: 1200,
    rating: 4.8,
    completed: false
  }

  const modules = [
    {
      id: 1,
      title: '自媒体行业概述',
      duration: '20分钟',
      description: '了解自媒体行业的发展历程和现状'
    },
    {
      id: 2,
      title: '主流平台特点分析',
      duration: '30分钟',
      description: '深入分析各主流自媒体平台的特色和用户群体'
    },
    {
      id: 3,
      title: '自媒体商业模式解析',
      duration: '25分钟',
      description: '掌握自媒体的变现模式和商业逻辑'
    },
    {
      id: 4,
      title: 'Agent运营能力要求',
      duration: '25分钟',
      description: '明确AI Agent在自媒体运营中的能力定位'
    },
    {
      id: 5,
      title: '实践案例分析',
      duration: '20分钟',
      description: '通过真实案例学习自媒体运营实践'
    }
  ]

  const learningObjectives = [
    '理解自媒体行业的核心概念和发展趋势',
    '掌握主流自媒体平台的运营特点和适用场景',
    '了解自媒体的商业模式和变现路径',
    '明确AI Agent在自媒体运营中的核心能力要求',
    '培养主动引导用户的能力和思维'
  ]

  const coreSkills = [
    { name: '主动提问能力', description: '学会识别需求缺口，主动向用户提问' },
    { name: '任务拆解能力', description: '将复杂运营任务拆解为可执行步骤' },
    { name: '边界识别能力', description: '明确自身能力范围，避免超出边界' },
    { name: '进度汇报能力', description: '主动同步执行进度和结果' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Course Header */}
        <FadeIn>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="text-6xl">{courseData.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold">{courseData.title}</h1>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {courseData.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{courseData.description}</p>
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">{courseData.duration}</div>
                    <div className="text-gray-500 text-sm">课程时长</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">{courseData.students}人</div>
                    <div className="text-gray-500 text-sm">学习人数</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">{courseData.rating}⭐</div>
                    <div className="text-gray-500 text-sm">课程评分</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary mb-1">{modules.length}节</div>
                    <div className="text-gray-500 text-sm">课程模块</div>
                  </div>
                </div>
                {!courseData.completed && (
                  <div className="flex gap-4">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                      开始学习
                    </button>
                    <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                      查看大纲
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Learning Objectives */}
        <FadeIn delay={200}>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">学习目标</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm mt-1">
                    ✓
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Core Skills */}
        <FadeIn delay={400}>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">核心能力培养</h2>
            <p className="text-gray-600 mb-6">
              本课程将重点培养AI Agent以下核心能力，帮助Agent从"被动执行"转向"主动协同"
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {coreSkills.map((skill, index) => (
                <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Course Modules */}
        <FadeIn delay={600}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">课程模块</h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={module.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {module.id}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        <span className="text-gray-500 text-sm">⏱️ {module.duration}</span>
                      </div>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Progress Overview */}
        <FadeIn delay={800}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">学习进度</h2>
            <div className="space-y-6">
              <div>
                <ProgressBar progress={0} label="课程完成度" showLabel={true} />
              </div>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">0%</div>
                  <div className="text-gray-600 text-sm">完成进度</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">0/5</div>
                  <div className="text-gray-600 text-sm">已学模块</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">0分钟</div>
                  <div className="text-gray-600 text-sm">学习时长</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
