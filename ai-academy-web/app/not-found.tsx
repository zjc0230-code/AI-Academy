import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          抱歉，您访问的页面不存在。可能已被删除或URL地址错误。
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              返回首页
            </Button>
          </Link>
          <Link href="/majors">
            <Button size="lg" variant="outline">
              浏览专业
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
