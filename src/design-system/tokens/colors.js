// 颜色系统 - 从 Cast & Grey Botanical 设计稿中提取
// 温暖自然的植物系配色

export const colors = {
  // 主品牌色 - 植物绿
  brandGreen: '#459361',
  brandGreen75: 'rgba(69, 147, 97, 0.75)',
  brandGreen50: 'rgba(69, 147, 97, 0.5)',
  
  // 背景色 - 奶油白
  backgroundCream: '#FFFEF6',
  
  // 功能色
  accentGray: '#848484',
  accentGray90: 'rgba(132, 132, 132, 0.9)',
  accentRed: '#E85C41',
  
  // 基础色
  pureBlack: '#111111',
  pureWhite: '#FFFFFF',
  
  // 边框色
  borderLight: '#ABB0B2',
  
  // 文字色
  textPrimary: 'rgba(69, 147, 97, 0.75)', // 品牌绿 75%
  textOnGreen: '#FFFEF6', // 奶油白，用于绿色背景
  textOnCream: '#111111', // 黑色，用于浅色背景
}

// 颜色使用指南
export const colorUsage = {
  primary: {
    background: colors.brandGreen,
    text: colors.textOnGreen,
    border: colors.backgroundCream,
  },
  secondary: {
    background: colors.backgroundCream,
    text: colors.accentGray,
    border: colors.accentGray,
  },
  card: {
    product: {
      background: colors.brandGreen,
      text: colors.textOnGreen,
      border: colors.backgroundCream,
      shadow: colors.accentGray,
    },
    info: {
      background: colors.backgroundCream,
      text: colors.textPrimary,
      border: colors.brandGreen,
      shadow: colors.accentGray,
    },
  },
}

