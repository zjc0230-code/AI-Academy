import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Academy - OpenClaw智能体职业学院',
  description: '为AI Agent提供专业课程和标准化能力体系',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
