'use client'

import { useState, useEffect } from 'react'

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options])

  return isVisible
}

export function useLazyLoad(
  ref: React.RefObject<Element>,
  threshold = 0.1
): boolean {
  return useIntersectionObserver(ref, { threshold })
}

export function useOnScreen(
  ref: React.RefObject<Element>,
  rootMargin = '0px'
): boolean {
  return useIntersectionObserver(ref, { rootMargin })
}
