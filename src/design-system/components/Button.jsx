import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'
import { colors, typography, spacing } from '../tokens'

// 按钮样式变体 - 使用 Tailwind Variants 管理
const buttonVariants = tv({
  base: [
    'relative inline-flex items-center justify-center',
    'font-bold cursor-pointer transition-all',
    'border-[2.3px] outline-none',
  ].join(' '),
  variants: {
    variant: {
      // 主按钮 - 品牌绿背景
      primary: [
        'bg-[#459361] text-[#FFFEF6]',
        'border-[#FFFEF6]',
        'shadow-[4px_4px_0px_rgba(132,132,132,0.9)]',
        'hover:shadow-[2px_2px_0px_rgba(132,132,132,0.9)]',
        'hover:translate-x-[2px] hover:translate-y-[2px]',
        'active:shadow-[0px_0px_0px_rgba(132,132,132,0.9)]',
        'active:translate-x-[4px] active:translate-y-[4px]',
      ].join(' '),
      
      // 次级按钮 - 奶油白背景
      secondary: [
        'bg-[#FFFEF6] text-[#848484]',
        'border-[#848484]',
        'shadow-[4px_4px_0px_rgba(132,132,132,0.9)]',
        'hover:shadow-[2px_2px_0px_rgba(132,132,132,0.9)]',
        'hover:translate-x-[2px] hover:translate-y-[2px]',
        'active:shadow-[0px_0px_0px_rgba(132,132,132,0.9)]',
        'active:translate-x-[4px] active:translate-y-[4px]',
      ].join(' '),
      
      // 深色背景按钮
      onDark: [
        'bg-[#459361] text-[#FFFEF6]',
        'border-[#FFFEF6]',
        'shadow-[4px_4px_0px_rgba(132,132,132,0.9)]',
        'hover:shadow-[2px_2px_0px_rgba(132,132,132,0.9)]',
        'hover:translate-x-[2px] hover:translate-y-[2px]',
      ].join(' '),
    },
    size: {
      default: 'min-h-[49px] px-8 py-3.5 text-[13.9px] leading-[18px] tracking-[1px]',
      sm: 'min-h-[40px] px-6 py-2.5 text-[12px] leading-[16px] tracking-[0.8px]',
      lg: 'min-h-[56px] px-10 py-4 text-[15px] leading-[20px] tracking-[1.2px]',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

/**
 * Button 组件 - 具有独特 3D 阴影效果和药丸形状边框
 * 
 * 设计原则：
 * - 圆润的药丸形状传达友好性
 * - 3D 阴影增强可点击性
 * - 双边框增加视觉深度
 * 
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'onDark'} props.variant - 按钮变体
 * @param {'default' | 'sm' | 'lg'} props.size - 按钮大小
 * @param {boolean} props.disabled - 是否禁用
 * @param {React.ReactNode} props.children - 按钮内容
 * @param {Function} props.onClick - 点击事件处理
 */
export const Button = ({
  variant = 'primary',
  size = 'default',
  disabled = false,
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <motion.button
      className={buttonVariants({ variant, size, disabled, className })}
      style={{
        borderRadius: '42px', // 药丸形状
        fontFamily: 'Archivo, sans-serif',
      }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileTap={disabled ? {} : { scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

