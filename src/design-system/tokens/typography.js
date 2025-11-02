// 字体系统 - Petrona 优雅标题 + Archivo 清晰正文

export const fontFamilies = {
  display: '"Petrona", serif', // 标题字体 - 经典优雅的衬线字体
  body: '"Archivo", sans-serif', // 正文字体 - 清晰易读
  code: '"SF Mono", monospace', // 代码字体
}

// 字体大小
export const fontSizes = {
  h1: '48px',      // 英雄标题
  h2: '28.8px',    // 区块标题
  h3: '19.6px',    // 小节标题
  h4: '15.6px',    // 卡片标题
  
  announcement: '15.5px', // 公告文字
  body: '14.6px',         // 正文
  button: '13.9px',       // 按钮文字
  navigation: '13.6px',   // 导航
  small: '11px',          // 版权/脚注
}

// 行高
export const lineHeights = {
  h1: '60px',
  h2: '36px',
  h3: '24.5px',
  h4: '19.5px',
  
  announcement: '28.8px',
  body: '28.8px',
  button: '18px',
  navigation: '18.2px',
  small: '18.7px',
}

// 字重
export const fontWeights = {
  regular: 400,
  bold: 700,
}

// 字间距
export const letterSpacings = {
  tight: '0.6px',
  normal: '0.72px',
  wide: '1px',
  wider: '0.7px',
}

// 完整的排版样式
export const typography = {
  h1: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.h1,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.h1,
    letterSpacing: letterSpacings.normal,
  },
  h2: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.h2,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.h2,
    letterSpacing: letterSpacings.normal,
  },
  h3: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.h3,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.h3,
    letterSpacing: letterSpacings.normal,
  },
  h4: {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes.h4,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.h4,
    letterSpacing: letterSpacings.normal,
  },
  announcement: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.announcement,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.announcement,
    letterSpacing: letterSpacings.tight,
    textTransform: 'uppercase',
  },
  body: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.body,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.body,
    letterSpacing: letterSpacings.tight,
  },
  button: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.button,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.button,
    letterSpacing: letterSpacings.wide,
  },
  navigation: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.navigation,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.navigation,
    letterSpacing: letterSpacings.tight,
  },
  small: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.small,
    letterSpacing: letterSpacings.wider,
  },
}

