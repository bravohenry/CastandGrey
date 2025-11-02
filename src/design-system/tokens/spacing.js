// 间距系统 - 确保整体视觉和谐与节奏

export const spacing = {
  // 基础间距单位
  xs: '5px',    // 卡片内小间距
  sm: '10px',   // 组件内边距、小间隙
  md: '20px',   // 组件间距、区块内边距
  lg: '50px',   // 大块内边距、容器内边距
  xl: '64px',   // 区块间距
  '2xl': '246px', // 页面水平内边距（外边距）
  
  // 移动端响应式间距
  mobilePadding: '50px',
  desktopPadding: '246px',
}

// 数值版本（用于计算）
export const spacingValues = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 50,
  xl: 64,
  '2xl': 246,
}

// 布局约束
export const layout = {
  maxContentWidth: '1200px', // 主内容区最大宽度
  horizontalPadding: {
    desktop: '246px',
    mobile: '50px',
  },
}

