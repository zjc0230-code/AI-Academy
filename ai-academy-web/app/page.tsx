import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import StatsSection from '@/components/StatsSection'
import FadeIn from '@/components/FadeIn'
import HoverCard from '@/components/HoverCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            🎓 AI Academy
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              首页
            </Link>
            <Link href="/majors" className="text-gray-700 hover:text-primary transition-colors">
              专业
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-primary transition-colors">
              课程
            </Link>
          </nav>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            开始学习
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            掌握AI技术
            <span className="text-primary">改变未来</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            专业的AI技术在线教育平台，提供系统化的AI课程学习，从基础到进阶，助你成为AI领域专家
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <SearchBar />
          </div>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors">
              免费开始
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg hover:bg-primary/10 transition-colors">
              了解更多
            </button>
          </div>
        </FadeIn>
      </section>

      {/* Stats */}
      <FadeIn delay={200}>
        <StatsSection />
      </FadeIn>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <FadeIn delay={400}>
          <h2 className="text-3xl font-bold text-center mb-12">为什么选择AI Academy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <HoverCard
              icon="📚"
              title="系统化课程"
              description="从基础到进阶的完整课程体系，循序渐进学习AI技术"
            />
            <HoverCard
              icon="🎯"
              title="实战导向"
              description="真实项目案例，边学边练，快速提升实战能力"
            />
            <HoverCard
              icon="💡"
              title="持续更新"
              description="紧跟AI技术发展，课程内容持续更新优化"
            />
          </div>
        </FadeIn>
      </section>

      {/* Popular Majors */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <FadeIn delay={600}>
          <h2 className="text-3xl font-bold text-center mb-12">热门专业</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HoverCard
              icon="🤖"
              title="自媒体运营专业"
              description="学习自媒体运营的核心技巧，从内容创作到变现变现"
              extraInfo={[
                { label: '课程数量', value: '5节' },
                { label: '难度等级', value: '中级' }
              ]}
              link="/majors/media"
            />
            <HoverCard
              icon="🧠"
              title="大模型开发专业"
              description="掌握大模型开发技术，从基础到实战应用"
              extraInfo={[
                { label: '课程数量', value: '10节' },
                { label: '难度等级', value: '高级' }
              ]}
              link="/majors/llm"
            />
            <HoverCard
              icon="🎨"
              title="AI创作专业"
              description="学习AI辅助创作，提升内容生产效率和质量"
              extraInfo={[
                { label: '课程数量', value: '8节' },
                { label: '难度等级', value: '中级' }
              ]}
              link="/majors/creation"
            />
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <FadeIn delay={800}>
          <h2 className="text-3xl font-bold mb-6">准备好开始学习了吗？</h2>
          <p className="text-xl text-gray-600 mb-8">
            立即加入AI Academy，开启你的AI学习之旅
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors">
            免费注册
          </button>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI Academy</h3>
              <p className="text-gray-400">
                专业的AI技术在线教育平台
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">专业</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/majors">自媒体运营</Link></li>
                <li><Link href="/majors">大模型开发</Link></li>
                <li><Link href="/majors">AI创作</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">资源</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses">全部课程</Link></li>
                <li><Link href="/">学习路径</Link></li>
                <li><Link href="/">社区讨论</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">关于</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/">关于我们</Link></li>
                <li><Link href="/">联系我们</Link></li>
                <li><Link href="/">隐私政策</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AI Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
