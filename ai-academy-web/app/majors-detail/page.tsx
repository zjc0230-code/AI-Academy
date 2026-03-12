'use client'

import { useState } from 'react'
import { ArrowRight, BookOpen, Target, CheckCircle, Clock, Users, Star } from 'lucide-react'

interface Major {
  id: string
  name: string
  icon: string
  description: string
  goal: string
  skills: string[]
  scenarios: string[]
  level: string
  duration: string
  popularity: number
}

const majors: Major[] = [
  {
    id: 'office-assistant',
    name: '办公助理专业',
    icon: '💼',
    description: '培养小龙虾成为全能办公助手，能够统筹处理邮件、日程、文档等各类办公任务，并教用户如何高效指挥AI完成工作。',
    goal: '解决日常办公效率低、任务分散、需要人工协调的问题，让用户从繁琐事务中解放出来。',
    skills: [
      '邮件智能管理：自动分类、优先级排序、智能回复',
      '日程规划：智能预约、冲突检测、提醒设置',
      '文档处理：自动摘要、格式优化、内容生成',
      '会议协助：纪要生成、任务追踪、待办分配'
    ],
    scenarios: [
      '每天早晨自动整理邮件，优先处理紧急事项',
      '统筹协调团队会议，自动生成纪要和待办',
      '优化文档格式，提高报告质量',
      '智能提醒重要事项，避免遗漏'
    ],
    level: '入门级',
    duration: '3天',
    popularity: 95
  },
  {
    id: 'resume-optimizer',
    name: '简历优化专业',
    icon: '📄',
    description: '培养小龙虾成为简历专家，能够深度优化简历内容、格式和关键词，并引导用户清晰表达工作经历，提升求职竞争力。',
    goal: '解决简历质量差、无法突出优势、通过率低的问题，帮助用户获得更多面试机会。',
    skills: [
      '简历分析：结构诊断、内容评估、关键词匹配',
      '内容优化：工作经历提炼、技能亮点突出',
      '格式美化：专业模板应用、视觉优化',
      '模拟面试：常见问题准备、表达指导'
    ],
    scenarios: [
      '深度分析现有简历，找出不足之处',
      '引导用户补充关键工作经历和成就',
      '优化简历格式，提升视觉效果',
      '提供面试准备建议和技巧'
    ],
    level: '进阶级',
    duration: '5天',
    popularity: 88
  },
  {
    id: 'data-analyst',
    name: '数据分析专业',
    icon: '📊',
    description: '培养小龙虾成为数据分析师，能够处理复杂数据、生成可视化报表、挖掘数据洞察，并教用户如何理解和利用数据。',
    goal: '解决数据处理困难、分析效率低、洞察不足的问题，让数据真正驱动决策。',
    skills: [
      '数据处理：数据清洗、转换、合并',
      '统计分析：趋势分析、相关性分析、异常检测',
      '可视化：图表生成、仪表板创建、报告输出',
      '洞察挖掘：模式识别、预测分析、建议生成'
    ],
    scenarios: [
      '自动处理销售数据，生成月度报表',
      '分析用户行为数据，发现关键趋势',
      '创建实时仪表板，监控核心指标',
      '提供数据驱动的业务建议'
    ],
    level: '专业级',
    duration: '7天',
    popularity: 82
  },
  {
    id: 'content-creator',
    name: '内容创作专业',
    icon: '✍️',
    description: '培养小龙虾成为内容创作专家，能够撰写高质量文案、生成配图、优化SEO，并引导用户表达创意和需求。',
    goal: '解决内容创作效率低、质量不稳定、SEO优化不足的问题，提升内容传播效果。',
    skills: [
      '文案写作：标题优化、内容生成、风格调整',
      '配图生成：AI绘画、图片编辑、素材匹配',
      'SEO优化：关键词布局、元数据优化',
      '多平台适配：不同平台内容格式转换'
    ],
    scenarios: [
      '根据主题快速生成高质量文章',
      '为文章生成匹配的插图和封面',
      '优化内容SEO，提高搜索排名',
      '适配不同平台的内容格式'
    ],
    level: '进阶级',
    duration: '5天',
    popularity: 90
  }
]

export default function MajorsDetail() {
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI 专业详解
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            了解每个AI专业的核心能力、应用场景和学习路径
          </p>
        </div>

        {/* 专业列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {majors.map((major) => (
            <div
              key={major.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedMajor(major)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{major.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {major.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full">
                        {major.level}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {major.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">{major.popularity}%</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {major.description}
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                查看详情
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* 专业详情模态框 */}
        {selectedMajor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{selectedMajor.icon}</span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {selectedMajor.name}
                      </h2>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full">
                          {selectedMajor.level}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedMajor.duration}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-semibold">{selectedMajor.popularity}% 热度</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMajor(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {selectedMajor.description}
                  </p>
                </div>

                {/* Goal */}
                <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        专业目标
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedMajor.goal}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      核心技能
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedMajor.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scenarios */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      应用场景
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedMajor.scenarios.map((scenario, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {scenario}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg">
                    开始学习这个专业
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
