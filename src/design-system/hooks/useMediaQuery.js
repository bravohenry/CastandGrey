import { useState, useEffect } from 'react'

/**
 * useMediaQuery Hook - 响应式媒体查询
 * 
 * 用于检测屏幕尺寸变化，实现响应式设计
 * 
 * @param {string} query - 媒体查询字符串
 * @returns {boolean} - 是否匹配查询条件
 * 
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)')
 * const isDesktop = useMediaQuery('(min-width: 1024px)')
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    
    // 设置初始值
    setMatches(media.matches)

    // 监听变化
    const listener = (event) => {
      setMatches(event.matches)
    }

    // 添加监听器
    if (media.addEventListener) {
      media.addEventListener('change', listener)
    } else {
      // 兼容旧版浏览器
      media.addListener(listener)
    }

    // 清理函数
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [query])

  return matches
}

// 预设断点
export const useBreakpoint = () => {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    current: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
  }
}

