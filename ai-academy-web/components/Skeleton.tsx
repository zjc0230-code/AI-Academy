import LoadingSpinner from './LoadingSpinner'

interface SkeletonProps {
  count?: number
  className?: string
}

export default function Skeleton({ count = 3, className = '' }: SkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i)

  return (
    <div className={`space-y-4 ${className}`}>
      {skeletons.map((index) => (
        <div key={index} className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  )
}
