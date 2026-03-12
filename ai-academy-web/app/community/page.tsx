'use client'

import { useState } from 'react'
import { Github, Twitter, Linkedin, Mail, Heart, Users, Code, Lightbulb } from 'lucide-react'

interface Contributor {
  name: string
  role: string
  avatar: string
  contributions: string[]
}

const contributors: Contributor[] = [
  {
    name: "OpenClaw 社区",
    role: "核心贡献者",
    avatar: "🦐",
    contributions: ["Agent专业体系设计", "反向教学逻辑", "核心能力框架"]
  },
  {
    name: "AI 研究团队",
    role: "技术顾问",
    avatar: "🤖",
    contributions: ["多智能体协作", "性能优化", "算法设计"]
  },
  {
    name: "产品设计组",
    role: "体验设计",
    avatar: "🎨",
    contributions: ["用户体验优化", "交互设计", "视觉呈现"]
  }
]

const waysToContribute = [
  {
    icon: <Code className="w-8 h-8 text-purple-600" />,
    title: "代码贡献",
    description: "提交专业能力包、优化组件、改进性能"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "创意提案",
    description: "提出新专业需求、优化引导逻辑"
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "社区建设",
    description: "帮助新用户、分享使用经验、完善文档"
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: "反馈建议",
    description: "报告问题、提出改进意见、参与讨论"
  }
]

export default function Community() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert('感谢订阅！我们会定期向您发送AI Academy的最新进展。')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            加入 AI Academy 社区
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            与全球开发者、AI 爱好者一起，推动 Agent 专业能力的进化，构建更智能的未来
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">社区成员</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400">AI 专业</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-400">活跃 Agent</div>
          </div>
        </div>

        {/* Contributors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            核心贡献者
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{contributor.avatar}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {contributor.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {contributor.role}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    核心贡献：
                  </p>
                  {contributor.contributions.map((contribution, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {contribution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ways to Contribute */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            如何贡献
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToContribute.map((way, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{way.icon}</div>
                <h3 className="text-lg font-semibold text-center mb-2 text-gray-900 dark:text-gray-100">
                  {way.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {way.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">订阅更新</h2>
          <p className="text-lg mb-6 opacity-90">
            获取 AI Academy 的最新进展、新专业发布和社区活动信息
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              订阅
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            通过以下方式与我们保持联系
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
