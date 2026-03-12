'use client'

import { useEffect, useState } from 'react'

interface ProgressBarProps {
  progress: number
  color?: string
  height?: number
  showLabel?: boolean
  label?: string
  animated?: boolean
}

export default function ProgressBar({
  progress,
  color = '#3B82F6',
  height = 8,
  showLabel = false,
  label,
  animated = true
}: ProgressBarProps) {
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setCurrentProgress(progress)
    }
  }, [progress, animated])

  const clampedProgress = Math.min(100, Math.max(0, currentProgress))

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-700">{clampedProgress}%</span>
        </div>
      )}
      <div
        className="relative overflow-hidden rounded-full bg-gray-200"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${clampedProgress}%`,
            backgroundColor: color,
            ...(animated && {
              background: `linear-gradient(90deg, ${color} 0%, ${color} 100%)`,
            })
          }}
        />
      </div>
    </div>
  )
}
