import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import clsx from 'clsx'
import { colors } from '../tokens'

// 输入框样式变体
const inputVariants = tv({
  base: [
    'w-full px-[13px] py-[9px]',
    'bg-white',
    'border border-[#ABB0B2]',
    'rounded-[3px]',
    'text-[14px] leading-[16px]',
    'transition-all duration-200',
    'placeholder:text-[#ABB0B2]',
    'focus:outline-none focus:border-[#459361] focus:ring-1 focus:ring-[#459361]',
  ].join(' '),
  variants: {
    error: {
      true: 'border-[#E85C41] focus:border-[#E85C41] focus:ring-[#E85C41]',
    },
    disabled: {
      true: 'bg-gray-50 cursor-not-allowed opacity-50',
    },
  },
})

// 标签样式变体
const labelVariants = tv({
  base: [
    'block mb-[3px]',
    'text-[14px] leading-[21px]',
    'text-[rgba(69,147,97,0.75)]',
  ].join(' '),
})

/**
 * Input 组件 - 清晰简洁的表单输入设计
 * 
 * 可访问性指南：
 * - 使用语义化 HTML
 * - 正确关联标签与输入框
 * - 必填字段同时使用视觉和文字指示器
 * - 错误消息清晰有帮助
 * - 支持键盘导航
 * 
 * @param {Object} props
 * @param {string} props.label - 输入框标签
 * @param {boolean} props.required - 是否必填
 * @param {boolean} props.error - 是否有错误
 * @param {string} props.errorMessage - 错误提示信息
 * @param {string} props.placeholder - 占位符文字
 * @param {boolean} props.disabled - 是否禁用
 */
export const Input = forwardRef(({
  label,
  required = false,
  error = false,
  errorMessage,
  className,
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className={labelVariants()}>
          <span style={{ fontFamily: 'Helvetica, sans-serif' }}>
            {label}
          </span>
          {required && (
            <span className="text-[#E85C41] text-[21px] ml-1">*</span>
          )}
        </label>
      )}
      
      <input
        ref={ref}
        id={inputId}
        className={inputVariants({ error, disabled: props.disabled, className })}
        style={{ fontFamily: 'Helvetica, sans-serif' }}
        {...props}
      />
      
      {error && errorMessage && (
        <p className="mt-[4px] text-[#E85C41] text-[12px]">
          {errorMessage}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

/**
 * FormGroup 组件 - 表单字段分组容器
 */
export const FormGroup = ({ children, className, ...props }) => {
  return (
    <div className={clsx('mb-[16.8px]', className)} {...props}>
      {children}
    </div>
  )
}

/**
 * Form 组件 - 表单容器
 * 
 * 表单布局原则：
 * - 标签在输入框上方，左对齐
 * - 标签到输入框间距：3px
 * - 字段间距：16.8px
 * - 必填字段用红色星号清晰标记
 * - 提交按钮与字段间距：10px
 */
export const Form = ({ children, onSubmit, className, ...props }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={clsx('space-y-[16.8px]', className)}
      {...props}
    >
      {children}
    </form>
  )
}

