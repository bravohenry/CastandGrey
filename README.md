# Cast & Grey Botanical - Design System

一个基于 Figma 设计稿提取的完整设计系统，专为 Cast & Grey Botanical 植物精品店打造。

## 🎨 设计理念

### 温暖自然 (Warm & Natural)
绿色代表活力与自然，奶油色营造温暖宜人的氛围，体现植物店的本质。

### 友好亲和 (Friendly & Accessible)
圆润的按钮和卡片设计传达亲和力，3D阴影增添手工质感和趣味性。

### 清晰层次 (Clear Hierarchy)
清晰的视觉层次和一致的间距系统确保高效准确的信息传递。

## 📁 项目结构

```
src/
├── design-system/           # 设计系统主目录
│   ├── components/          # 可复用 UI 组件
│   │   ├── Button.jsx       # 按钮组件（主按钮、次级按钮）
│   │   ├── Card.jsx         # 卡片组件（产品卡、信息卡）
│   │   ├── Input.jsx        # 表单输入组件
│   │   └── index.js         # 统一导出
│   ├── tokens/              # 设计 Tokens
│   │   ├── colors.js        # 颜色系统
│   │   ├── spacing.js       # 间距系统
│   │   ├── typography.js    # 字体系统
│   │   └── index.js
│   ├── hooks/               # 通用 UI hooks
│   │   ├── useMediaQuery.js # 响应式媒体查询
│   │   └── index.js
│   └── index.js             # 顶层导出
└── components/
    └── DesignSystemShowcase.jsx  # 设计系统展示页面
```

## 🎨 核心设计 Tokens

### 颜色系统
- **Brand Green** `#459361` - 主品牌色，用于按钮、标题、关键元素
- **Background Cream** `#FFFEF6` - 页面背景、卡片背景
- **Accent Gray** `#848484` - 边框、阴影、禁用状态
- **Accent Red** `#E85C41` - 必填字段、错误状态
- **Pure Black** `#111111` - 高对比度文字、图标
- **Pure White** `#FFFFFF` - 纯白背景、覆盖层

### 字体系统
- **Display Font**: Petrona Bold - 用于标题，优雅的衬线字体
- **Body Font**: Archivo Bold - 用于正文，清晰易读

#### 字体大小
- H1: 48px - 英雄标题
- H2: 28.8px - 区块标题
- H3: 19.6px - 小节标题
- H4: 15.6px - 卡片标题
- Body: 14.6px - 正文
- Button: 13.9px - 按钮文字
- Navigation: 13.6px - 导航

### 间距系统
- **XS** `5px` - 卡片内小间距
- **SM** `10px` - 组件内边距、小间隙
- **MD** `20px` - 组件间距、区块内边距
- **LG** `50px` - 大块内边距、容器内边距
- **XL** `64px` - 区块间距
- **2XL** `246px` - 页面水平内边距

## 🧩 核心组件

### Button 按钮
具有独特 3D 阴影效果和药丸形状边框的按钮组件。

```jsx
import { Button } from './design-system'

<Button variant="primary">Add to cart</Button>
<Button variant="secondary">Shop all</Button>
<Button variant="onDark">Choose options</Button>
```

**变体 (Variants):**
- `primary` - 主按钮，品牌绿背景
- `secondary` - 次级按钮，奶油白背景
- `onDark` - 深色背景按钮

**尺寸 (Sizes):**
- `sm` - 小尺寸
- `default` - 默认尺寸
- `lg` - 大尺寸

### Card 卡片
设计系统的核心，具有强烈的色彩对比和粗阴影设计。

```jsx
import { 
  Card, 
  CardImage, 
  CardContent, 
  CardTitle, 
  CardPrice 
} from './design-system'

// 产品卡片
<Card variant="product" padding="none">
  <CardImage alt="🪴" />
  <CardContent>
    <CardTitle variant="product">Product Name</CardTitle>
    <CardPrice variant="product">$21.00 USD</CardPrice>
  </CardContent>
</Card>

// 信息卡片
<Card variant="info" padding="lg">
  <h2>Houseplant Expertise</h2>
  <p>Your description here...</p>
</Card>
```

**变体 (Variants):**
- `product` - 产品卡，品牌绿背景
- `info` - 信息卡，奶油白背景
- `compact` - 简洁卡，用于列表
- `emphasized` - 强调卡，反色高亮

### Input 表单输入
清晰简洁的表单输入设计，注重可访问性。

```jsx
import { Input, Form, FormGroup } from './design-system'

<Form onSubmit={handleSubmit}>
  <FormGroup>
    <Input
      label="Email Address"
      type="email"
      required
      placeholder="your@email.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </FormGroup>
  
  <FormGroup>
    <Input
      label="First Name"
      type="text"
      placeholder="John"
    />
  </FormGroup>
</Form>
```

## 🎣 Hooks

### useMediaQuery
响应式媒体查询 Hook。

```jsx
import { useMediaQuery, useBreakpoint } from './design-system'

// 方式 1：自定义查询
const isMobile = useMediaQuery('(max-width: 768px)')

// 方式 2：使用预设断点
const { isMobile, isTablet, isDesktop, current } = useBreakpoint()
```

## 🚀 开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 📦 技术栈

- **React** - UI 框架
- **Vite** - 构建工具
- **TailwindCSS v4** - 样式框架
- **Framer Motion** - 动画库
- **Tailwind Variants** - 组件样式管理
- **clsx** - 类名工具

## 🎯 设计原则

### 按钮设计
- 圆润的药丸形状传达友好性
- 3D 阴影增强可点击性
- 双边框增加视觉深度

### 卡片设计
- 保持清晰的内容层次
- 使用一致的内边距和间距
- 产品卡使用品牌绿背景
- 信息卡使用奶油白背景
- 保持阴影方向一致（右下）

### 表单设计
- 标签在输入框上方，左对齐
- 必填字段用红色星号清晰标记
- 支持键盘导航
- 错误消息清晰有帮助

## ♿️ 可访问性

- 使用语义化 HTML
- 正确关联标签与输入框
- 确保颜色对比度符合 WCAG AA 标准
- 支持键盘导航
- 提供清晰的焦点状态

## 📝 License

© 2025 Cast & Grey Botanical

---

**注意**: 本设计系统基于 Figma 设计稿 1:1 还原，遵循技术美术的架构眼光，提取了核心设计系统理念而非生硬复制页面。
