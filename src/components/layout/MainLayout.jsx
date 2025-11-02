import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

/**
 * MainLayout 组件 - 主布局容器
 * 包含全局 Header、内容区域和 Footer
 */
export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* 主内容区域 - 顶部留出 header 高度 */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

