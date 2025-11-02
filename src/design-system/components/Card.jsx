import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { colors, spacing } from '../tokens'

// 卡片样式变体
const cardVariants = tv({
  base: [
    'relative overflow-hidden',
    'transition-all duration-300',
  ].join(' '),
  variants: {
    variant: {
      // 产品卡 - 品牌绿背景，用于产品展示
      product: [
        'bg-[#459361]',
        'border-2 border-[#FFFEF6]',
        'rounded-[12px]',
        'shadow-[0px_4px_0px_#848484]',
        'hover:shadow-[0px_2px_0px_#848484]',
        'hover:translate-y-[2px]',
      ].join(' '),
      
      // 信息卡 - 奶油白背景，用于内容展示
      info: [
        'bg-[#FFFEF6]',
        'border-2 border-[#459361]',
        'rounded-[12px]',
        'shadow-[0px_6px_0px_#848484]',
        'hover:shadow-[0px_3px_0px_#848484]',
        'hover:translate-y-[3px]',
      ].join(' '),
      
      // 简洁卡 - 用于列表项和小信息块
      compact: [
        'bg-[#FFFEF6]',
        'border border-[#848484]',
        'rounded-[8px]',
      ].join(' '),
      
      // 强调卡 - 反色高亮重要内容
      emphasized: [
        'bg-[#459361]',
        'border-2 border-[#FFFEF6]',
        'rounded-[12px]',
        'shadow-[0px_8px_0px_#848484]',
      ].join(' '),
    },
    padding: {
      none: 'p-0',
      sm: 'p-[10px]',
      md: 'p-[20px]',
      lg: 'p-[37px]',
    },
  },
  defaultVariants: {
    variant: 'product',
    padding: 'md',
  },
})

/**
 * Card 组件 - 设计系统的核心，具有强烈的色彩对比和粗阴影设计
 * 
 * 设计原则：
 * - 保持清晰的内容层次
 * - 使用一致的内边距和间距
 * - 产品卡使用品牌绿背景
 * - 信息卡使用奶油白背景
 * - 保持阴影方向一致（右下）
 * 
 * @param {Object} props
 * @param {'product' | 'info' | 'compact' | 'emphasized'} props.variant - 卡片变体
 * @param {'none' | 'sm' | 'md' | 'lg'} props.padding - 内边距大小
 * @param {React.ReactNode} props.children - 卡片内容
 */
export const Card = ({
  variant = 'product',
  padding = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cardVariants({ variant, padding, className })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * CardImage 组件 - 卡片图片区域
 */
export const CardImage = ({ src, alt, className, ...props }) => {
  return (
    <div
      className={`rounded-t-[10px] overflow-hidden bg-[#FFFEF6] flex items-center justify-center ${className || ''}`}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="text-6xl">{alt || '🪴'}</div>
      )}
    </div>
  )
}

/**
 * CardContent 组件 - 卡片内容区域
 */
export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`space-y-[10px] ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

/**
 * CardTitle 组件 - 卡片标题
 */
export const CardTitle = ({ children, variant = 'product', className, ...props }) => {
  const textColor = variant === 'product' ? 'text-[#FFFEF6]' : 'text-[#111111]'
  
  return (
    <h4
      className={`font-bold text-[15.6px] leading-[19.5px] tracking-[0.72px] ${textColor} ${className || ''}`}
      style={{ fontFamily: 'Petrona, serif' }}
      {...props}
    >
      {children}
    </h4>
  )
}

/**
 * CardPrice 组件 - 产品价格
 */
export const CardPrice = ({ children, variant = 'product', className, ...props }) => {
  const textColor = variant === 'product' ? 'text-[#FFFEF6]' : 'text-[#459361]'
  
  return (
    <p
      className={`font-bold text-[20px] leading-[24px] ${textColor} ${className || ''}`}
      style={{ fontFamily: 'Petrona, serif' }}
      {...props}
    >
      {children}
    </p>
  )
}

/**
 * CardDescription 组件 - 卡片描述文字
 */
export const CardDescription = ({ children, variant = 'info', className, ...props }) => {
  const textColor = variant === 'info' ? 'text-[rgba(69,147,97,0.75)]' : 'text-[#FFFEF6]'
  
  return (
    <p
      className={`text-[14.6px] leading-[28.8px] tracking-[0.6px] ${textColor} ${className || ''}`}
      style={{ fontFamily: 'Archivo, sans-serif' }}
      {...props}
    >
      {children}
    </p>
  )
}

