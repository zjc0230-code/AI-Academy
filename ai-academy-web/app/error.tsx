"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-red-500 mb-4">出错了</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          应用程序遇到了一个错误
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {error.message || '服务器发生错误，请稍后再试。'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} size="lg">
            重试
          </Button>
          <Button onClick={() => window.location.href = '/'} size="lg" variant="outline">
            返回首页
          </Button>
        </div>
      </div>
    </div>
  )
}
