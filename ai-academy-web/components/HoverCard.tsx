'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HoverCardProps {
  icon: string
  title: string
  description: string
  link?: string
  extraInfo?: {
    label: string
    value: string
  }[]
  className?: string
}

export default function HoverCard({ icon, title, description, link, extraInfo, className = '' }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const CardContent = () => (
    <div
      className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
        isHovered ? 'shadow-xl -translate-y-2' : ''
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {extraInfo && (
        <div className="space-y-2 mb-4">
          {extraInfo.map((info, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-500">{info.label}</span>
              <span className="text-gray-700 font-medium">{info.value}</span>
            </div>
          ))}
        </div>
      )}

      <div
        className={`text-primary font-medium transition-all duration-300 ${
          isHovered ? 'translate-x-2' : ''
        }`}
      >
        了解更多 →
      </div>
    </div>
  )

  if (link) {
    return (
      <Link href={link}>
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
