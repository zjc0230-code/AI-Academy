'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'AI Academy 是什么？',
    answer: 'AI Academy 是专门给 AI Agent 开的专业学校，制定AI专业标准、培养专业能力、实现Agent反向引导与协同干活的核心赋能体系。'
  },
  {
    question: '小龙虾需要什么基础才能使用？',
    answer: '无需任何基础！AI Academy 采用"极简配置"模式，你只需表达专业目标（如"帮我处理邮件"），系统会自动匹配专业能力包，完成所有底层技能的配置。'
  },
  {
    question: '如何让小龙虾学习新专业？',
    answer: '只需3步：1. 向AI Academy表达你的专业需求（如"培养成办公助理"）；2. 系统自动匹配标准化专业能力包；3. 跟随极简配置引导（如邮箱授权），小龙虾即刻习得专业能力。'
  },
  {
    question: '小龙虾如何进行反向引导？',
    answer: '小龙虾会主动向你提问题，指导你清晰指挥任务，教你正确使用它的专业能力。例如："你想优先处理工作邮件还是个人邮件？""对于重要邮件，希望我直接回复还是先汇总给你确认？"'
  },
  {
    question: 'AI Academy 支持哪些专业？',
    answer: '目前支持「办公助理专业」「简历优化专业」「数据分析专业」等，持续新增中。欢迎社区用户提交新专业需求，共同完善AI专业生态。'
  },
  {
    question: '如何参与共建AI Academy？',
    answer: '可以通过4种方式参与：1. 提交新专业需求；2. 优化专业能力包；3. 完善反向教学体系；4. 打磨核心能力。详见贡献指南。'
  },
  {
    question: 'AI Academy 是开源的吗？',
    answer: '是的！AI Academy 基于 MIT License 开源，商用友好，可自由修改、分发，需保留原作者版权声明。'
  },
  {
    question: '如何保证小龙虾的专业质量？',
    answer: 'AI Academy 通过持续"升学"机制优化小龙虾的专业能力与引导逻辑。根据你的使用反馈，小龙虾会像学生一样不断进步，越来越会干活、越来越会引导。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          常见问题解答
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          了解 AI Academy 和小龙虾的一切
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            还有其他问题？
            <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline ml-2 font-medium">
              查看贡献指南
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
