import FadeIn from '@/components/FadeIn'
import HoverCard from '@/components/HoverCard'

interface Capability {
  id: string
  title: string
  description: string
  icon: string
  level: 'basic' | 'intermediate' | 'advanced'
  scenario: string
}

const capabilities: Capability[] = [
  {
    id: '1',
    title: '主动引导与提问',
    description: '教Agent主动识别需求缺口，向用户提出关键问题，引导用户明确需求和目标',
    icon: '🗣',
    level: 'advanced',
    scenario: '用户说"帮我处理邮件"，Agent主动询问"需要处理哪些类型的邮件？是回复、转发还是归档？"'
  },
  {
    id: '2',
    title: '任务智能拆解',
    description: '将复杂专业任务拆解为标准化步骤，指导用户分步指挥、协同执行',
    icon: '🧩',
    level: 'intermediate',
    scenario: '用户要求"做一次市场调研"，Agent拆解为：确定目标→选择方法→收集数据→分析整理→输出报告'
  },
  {
    id: '3',
    title: '边界与风险管控',
    description: '内置专业能力边界与风险预警逻辑，识别自身能力、规避误操作风险',
    icon: '🛡',
    level: 'advanced',
    scenario: 'Agent识别到某操作超出自身能力范围时，主动提醒用户"这个操作需要特殊权限，我无法独立完成"'
  },
  {
    id: '4',
    title: '进度透明化',
    description: '主动汇报执行进度、解释操作逻辑，让用户清晰感知执行过程',
    icon: '📊',
    level: 'intermediate',
    scenario: 'Agent在执行任务时实时同步"已完成步骤1/5，正在处理第二步..."'
  },
  {
    id: '5',
    title: '持续记忆与自适应',
    description: '记住用户习惯、指挥方式，持续优化自身执行与引导逻辑',
    icon: '🧠',
    level: 'advanced',
    scenario: 'Agent记住用户"每周五需要发送周报"，主动提醒"今天是周五，需要准备周报吗？"'
  },
  {
    id: '6',
    title: '错误纠正与协同优化',
    description: '主动识别执行错误，向用户说明原因、提供修正方案，引导用户共同优化',
    icon: '🔄',
    level: 'intermediate',
    scenario: 'Agent发现操作有误时解释"这个路径不存在，可能是指XXX？建议尝试另一种方式"'
  },
  {
    id: '7',
    title: '反向教学能力',
    description: '主动指导用户如何清晰下指令、科学指挥任务、正确使用自身能力',
    icon: '📚',
    level: 'advanced',
    scenario: 'Agent发现用户指令模糊时主动引导"您希望我做什么？我可以通过XX方式帮您实现"'
  },
  {
    id: '8',
    title: '协同完成任务',
    description: '理解人类专业人才的协同模式，与用户形成双向互补的协作关系',
    icon: '🤝',
    level: 'intermediate',
    scenario: 'Agent与用户分工合作："您负责创意和决策，我负责执行和优化"'
  }
]

const levelColors = {
  basic: 'bg-green-100 text-green-700',
  intermediate: 'bg-blue-100 text-blue-700',
  advanced: 'bg-purple-100 text-purple-700'
}

const levelLabels = {
  basic: '基础',
  intermediate: '中级',
  advanced: '高级'
}

export default function AgentCapabilitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Agent核心能力</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI Academy 的独特之处在于：我们不仅教Agent「会干活」，更教Agent「会引导用户、会协同干活」
            </p>
          </div>
        </FadeIn>

        {/* Mission Statement */}
        <FadeIn delay={200}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">从单向指挥到双向协同</h2>
                <p className="text-lg opacity-90">
                  传统模式：用户 → 下模糊指令 → Agent → 被动执行 → 低效返工
                </p>
                <p className="text-lg opacity-90 mt-4">
                  AI Academy：用户 ↔ Agent ↔ 主动引导 ↔ 双向协同 ↔ 高效完成
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">核心使命</h2>
                <p className="text-lg opacity-90">
                  让每一只小龙虾都成为具备专业素养的智能体：
                  既拥有解决复杂实际问题的完整专业能力，
                  又懂得主动提问、引导用户、拆解任务、协同完成工作
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Capabilities Grid */}
        <FadeIn delay={400}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">8大核心能力</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={capability.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{capability.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{capability.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[capability.level]}`}>
                          {levelLabels[capability.level]}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{capability.description}</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-sm text-blue-600 font-medium mb-2">📖 实际场景</div>
                        <p className="text-sm text-gray-700">{capability.scenario}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Comparison */}
        <FadeIn delay={600}>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">能力对比</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-4 px-6 font-semibold">能力维度</th>
                    <th className="text-left py-4 px-6 font-semibold">普通Agent</th>
                    <th className="text-left py-4 px-6 font-semibold">AI Academy Agent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6">执行模式</td>
                    <td className="py-4 px-6 text-gray-600">被动接收指令</td>
                    <td className="py-4 px-6 text-green-600 font-medium">主动引导用户</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">任务处理</td>
                    <td className="py-4 px-6 text-gray-600">机械执行单一动作</td>
                    <td className="py-4 px-6 text-green-600 font-medium">智能拆解复杂任务</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">风险识别</td>
                    <td className="py-4 px-6 text-gray-600">无边界意识</td>
                    <td className="py-4 px-6 text-green-600 font-medium">主动预警风险</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">进度透明</td>
                    <td className="py-4 px-6 text-gray-600">用户无法感知</td>
                    <td className="py-4 px-6 text-green-600 font-medium">实时同步进度</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6">持续学习</td>
                    <td className="py-4 px-6 text-gray-600">每次重新教</td>
                    <td className="py-4 px-6 text-green-600 font-medium">记住用户习惯</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">协同方式</td>
                    <td className="py-4 px-6 text-gray-600">单向指挥</td>
                    <td className="py-4 px-6 text-green-600 font-medium">双向协同</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={800}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">开始培养你的专业Agent</h2>
            <p className="text-xl text-gray-600 mb-8">
              选择一个专业方向，让小龙虾从"工具"成长为"专业伙伴"
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors">
                浏览专业
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg hover:bg-primary/10 transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
