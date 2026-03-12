import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Academy - 在线教育平台',
  description: '专业的AI技术在线教育平台，提供系统化的AI课程学习',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
