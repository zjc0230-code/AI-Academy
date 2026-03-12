import Link from 'next/link'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseData: Record<string, any> = {
    'lesson-01': {
      id: 'lesson-01',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '自媒体运营基础认知',
      description: '了解自媒体的定义、平台生态、运营要素和常见误区，建立完整的自媒体运营知识框架',
      duration: '2小时',
      level: '入门',
      objectives: [
        '理解自媒体的定义和核心特征',
        '掌握主流自媒体平台的特点',
        '了解自媒体运营的关键要素',
        '认识自媒体运营的常见误区',
      ],
      chapters: [
        {
          title: '第一章：自媒体的定义与特征',
          duration: '20分钟',
          content: '什么是自媒体、自媒体与传统媒体的区别、自媒体的核心特征',
        },
        {
          title: '第二章：自媒体平台生态',
          duration: '30分钟',
          content: '主流自媒体平台分析、平台选择策略、多平台布局',
        },
        {
          title: '第三章：自媒体运营关键要素',
          duration: '40分钟',
          content: '内容创作、用户运营、平台运营、数据分析',
        },
        {
          title: '第四章：常见误区与规避',
          duration: '30分钟',
          content: '内容误区、运营误区、变现误区',
        },
      ],
    },
    'lesson-02': {
      id: 'lesson-02',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '平台选择与定位策略',
      description: '深入了解各大平台特点，制定精准定位策略，选择最适合的平台组合',
      duration: '2小时',
      level: '入门',
      objectives: [
        '分析主流自媒体平台的特点和用户群体',
        '掌握平台选择决策模型',
        '学习精准定位策略',
        '了解差异化定位方法',
      ],
      chapters: [
        {
          title: '第一章：主流平台深度分析',
          duration: '40分钟',
          content: '微信公众号、知乎、今日头条、抖音、快手等平台特点',
        },
        {
          title: '第二章：平台选择决策模型',
          duration: '30分钟',
          content: '如何选择适合的平台、多平台布局策略',
        },
        {
          title: '第三章：精准定位策略',
          duration: '30分钟',
          content: '用户定位、内容定位、差异化定位',
        },
        {
          title: '第四章：定位实践案例',
          duration: '20分钟',
          content: '成功定位案例分析、定位调整方法',
        },
      ],
    },
    'lesson-03': {
      id: 'lesson-03',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '内容创作核心技巧',
      description: '掌握内容创作的方法论，打造爆款内容，提升内容质量和影响力',
      duration: '2.5小时',
      level: '中级',
      objectives: [
        '掌握5W1H内容创作方法论',
        '理解爆款内容的4大要素',
        '学习标题优化技巧',
        '掌握内容节奏控制',
      ],
      chapters: [
        {
          title: '第一章：5W1H内容创作方法论',
          duration: '30分钟',
          content: 'What、Why、When、Where、Who、How',
        },
        {
          title: '第二章：爆款内容4大要素',
          duration: '40分钟',
          content: '价值性、可读性、传播性、时效性',
        },
        {
          title: '第三章：标题优化技巧',
          duration: '30分钟',
          content: '标题类型、优化方法、A/B测试',
        },
        {
          title: '第四章：内容节奏控制',
          duration: '30分钟',
          content: '内容节奏设计、用户阅读习惯',
        },
        {
          title: '第五章：实战案例分析',
          duration: '20分钟',
          content: '爆款内容案例分析、创作实践',
        },
      ],
    },
    'lesson-04': {
      id: 'lesson-04',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '用户增长与粉丝运营',
      description: '学习用户增长策略和粉丝运营技巧，建立稳定的粉丝群体，提升用户粘性',
      duration: '2.5小时',
      level: '中级',
      objectives: [
        '掌握用户增长3阶段策略',
        '学习粉丝分层运营方法',
        '了解数据化运营技巧',
        '提升互动和变现能力',
      ],
      chapters: [
        {
          title: '第一章：用户增长3阶段',
          duration: '30分钟',
          content: '启动期、增长期、稳定期',
        },
        {
          title: '第二章：粉丝分层运营',
          duration: '40分钟',
          content: '粉丝价值分层、运营策略差异化',
        },
        {
          title: '第三章：数据化运营',
          duration: '30分钟',
          content: '关键指标、数据分析方法、优化策略',
        },
        {
          title: '第四章：互动技巧',
          duration: '30分钟',
          content: '评论管理、私域运营、社群建设',
        },
        {
          title: '第五章：实战案例分析',
          duration: '20分钟',
          content: '成功增长案例分析',
        },
      ],
    },
    'lesson-05': {
      id: 'lesson-05',
      majorId: 'self-media-management',
      majorName: '自媒体运营专业',
      title: '变现模式与商业转化',
      description: '掌握自媒体变现的完整模式和商业转化技巧，实现内容价值的最大化',
      duration: '3小时',
      level: '高级',
      objectives: [
        '了解5大变现模式',
        '设计变现路径',
        '提升变现能力',
        '规避变现陷阱',
      ],
      chapters: [
        {
          title: '第一章：知识付费变现',
          duration: '40分钟',
          content: '付费产品设计、定价策略、销售渠道',
        },
        {
          title: '第二章：电商带货变现',
          duration: '40分钟',
          content: '选品策略、内容创作、转化优化',
        },
        {
          title: '第三章：品牌合作变现',
          duration: '30分钟',
          content: '合作类型、能力建设、执行流程',
        },
        {
          title: '第四章：流量变现',
          duration: '30分钟',
          content: '平台分成、广告收入、流量主',
        },
        {
          title: '第五章：私域变现',
          duration: '20分钟',
          content: '私域建设、转化技巧、社群运营',
        },
        {
          title: '第六章：变现路径设计',
          duration: '20分钟',
          content: '多变现模式组合、长期规划',
        },
      ],
    },
  }

  const course = courseData[params.id]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">课程不存在</h1>
          <Link href="/courses" className="text-primary hover:underline">
            返回课程列表
          </Link>
        </div>
      </div>
    )
  }

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
            <Link href="/courses" className="text-primary font-semibold">
              课程
            </Link>
          </nav>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            开始学习
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">首页</Link>
          <span>/</span>
          <Link href="/majors" className="hover:text-primary">专业</Link>
          <span>/</span>
          <Link href={`/majors/${course.majorId}`} className="hover:text-primary">{course.majorName}</Link>
          <span>/</span>
          <span className="text-primary">{course.title}</span>
        </div>
      </section>

      {/* Course Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-bold flex-shrink-0">
              📚
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{course.description}</p>
              <div className="flex gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  ⏱ {course.duration}
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {course.chapters.length}个章节
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">学习目标</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {course.objectives.map((objective: string, index: number) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  ✓
                </div>
                <span>{objective}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Content */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">课程内容</h2>
        <div className="space-y-4">
          {course.chapters.map((chapter: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
                  <p className="text-gray-600 mb-3">{chapter.content}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>⏱ {chapter.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">开始学习这门课程</h2>
          <p className="mb-6 text-blue-100">
            {course.duration}系统化学习，快速提升你的{course.majorName.replace('专业', '')}能力
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            立即开始
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AI Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
