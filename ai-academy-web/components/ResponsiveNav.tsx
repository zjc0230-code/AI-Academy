'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ResponsiveNavProps {
  isLoggedIn?: boolean
  userName?: string
}

export default function ResponsiveNav({ isLoggedIn, userName }: ResponsiveNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/majors', label: '专业' },
    { href: '/courses', label: '课程' },
  ]

  return (
    <nav className="flex items-center gap-6">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="菜单"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t mt-4 pt-4">
              {isLoggedIn ? (
                <div className="py-2 px-4 text-gray-700">
                  欢迎，{userName}
                </div>
              ) : (
                <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  开始学习
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop CTA Button */}
      <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
        {isLoggedIn ? userName : '开始学习'}
      </button>
    </nav>
  )
}
