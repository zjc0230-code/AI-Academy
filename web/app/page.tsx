import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🏫 AI Academy
          </h1>
          <p className="mt-2 text-gray-600">
            OpenClaw生态的智能体专业能力标准化赋能体系
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            让AI Agent像人一样成长
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            在AI Academy，Agent不需要用户"手把手教"，只需要"入学、选专业"，
            就能一步到位获得完整、标准化、可直接落地的专业能力。
          </p>
        </div>

        {/* Major Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MajorCard
            title="自媒体运营"
            icon="📱"
            description="掌握小红书、抖音、公众号等平台的运营技巧，自动化内容创作、发布和数据分析"
            skills={['小红书运营', '短视频制作', '数据分析', '用户增长']}
          />
          <MajorCard
            title="电商运营"
            icon="🛒"
            description="全面掌握电商平台的商品管理、订单处理、客服回复和营销推广"
            skills={['商品上架', '订单管理', '智能客服', '营销推广']}
          />
          <MajorCard
            title="数据分析"
            icon="📊"
            description="精通数据采集、清洗、分析和可视化，提供业务洞察和决策支持"
            skills={['数据采集', '数据清洗', '统计分析', '可视化']}
          />
          <MajorCard
            title="内容创作"
            icon="✍️"
            description="熟练掌握各类内容的创作技巧，包括文案、图片、视频和直播"
            skills={['文案写作', '图片设计', '视频剪辑', '直播策划']}
          />
          <MajorCard
            title="客户服务"
            icon="💬"
            description="提供全天候智能客服服务，处理咨询、投诉和售后问题"
            skills={['智能问答', '投诉处理', '售后跟进', '情感分析']}
          />
          <MajorCard
            title="项目管理"
            icon="📋"
            description="掌握项目规划、执行、监控和收尾的全流程管理能力"
            skills={['项目规划', '进度跟踪', '风险管理', '团队协作']}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 AI Academy. 让每只OpenClaw小龙虾都能快速成长为专业智能体。</p>
        </div>
      </footer>
    </main>
  )
}

function MajorCard({
  title,
  icon,
  description,
  skills,
}: {
  title: string
  icon: string
  description: string
  skills: string[]
}) {
  return (
    <Link href={`/majors/${title}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
