import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Button, 
  Card, 
  CardImage, 
  CardContent, 
  CardTitle, 
  CardPrice, 
  CardDescription,
  Input,
  Form,
  FormGroup,
  colors,
  spacing,
  typography,
} from '../design-system'

/**
 * 设计系统展示页面
 * 展示 Cast & Grey Botanical 设计系统的所有组件和设计元素
 */
export const DesignSystemShowcase = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  
  return (
    <div className="min-h-screen bg-[#FFFEF6]">
      {/* 顶部栏 */}
      <header className="bg-[#459361] text-[#FFFEF6] py-8 px-[246px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[1200px] mx-auto"
        >
          <h1 
            className="text-[48px] leading-[60px] tracking-[0.72px] font-bold mb-2"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Cast & Grey Botanical
          </h1>
          <p 
            className="text-[15.5px] leading-[28.8px] tracking-[0.6px] uppercase font-bold"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Design System Showcase
          </p>
        </motion.div>
      </header>

      {/* 主内容区 */}
      <main className="py-[64px] px-[246px]">
        <div className="max-w-[1200px] mx-auto space-y-[64px]">
          
          {/* 设计理念 */}
          <Section title="Design Philosophy" subtitle="设计理念">
            <div className="grid grid-cols-3 gap-[32px]">
              <Card variant="info" padding="lg">
                <h3 
                  className="text-[19.6px] leading-[24.5px] font-bold mb-4 text-[#111111]"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Warm & Natural
                </h3>
                <p className="text-[rgba(69,147,97,0.75)] text-[14.6px] leading-[28.8px]">
                  绿色代表活力与自然，奶油色营造温暖宜人的氛围，体现植物店的本质
                </p>
              </Card>
              
              <Card variant="info" padding="lg">
                <h3 
                  className="text-[19.6px] leading-[24.5px] font-bold mb-4 text-[#111111]"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Friendly & Accessible
                </h3>
                <p className="text-[rgba(69,147,97,0.75)] text-[14.6px] leading-[28.8px]">
                  圆润的按钮和卡片设计传达亲和力，3D阴影增添手工质感和趣味性
                </p>
              </Card>
              
              <Card variant="info" padding="lg">
                <h3 
                  className="text-[19.6px] leading-[24.5px] font-bold mb-4 text-[#111111]"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Clear Hierarchy
                </h3>
                <p className="text-[rgba(69,147,97,0.75)] text-[14.6px] leading-[28.8px]">
                  清晰的视觉层次和一致的间距系统确保高效准确的信息传递
                </p>
              </Card>
            </div>
          </Section>

          {/* 色彩系统 */}
          <Section title="Color Palette" subtitle="色彩系统">
            <div className="grid grid-cols-3 gap-[32px]">
              <ColorSwatch 
                name="Brand Green" 
                hex="#459361" 
                description="主品牌色，按钮、标题、关键元素"
                bg="#459361"
                textColor="#FFFEF6"
              />
              <ColorSwatch 
                name="Background Cream" 
                hex="#FFFEF6" 
                description="页面背景、卡片背景、浅色表面"
                bg="#FFFEF6"
                textColor="#111111"
                border
              />
              <ColorSwatch 
                name="Accent Gray" 
                hex="#848484" 
                description="边框、阴影、禁用状态、细节元素"
                bg="#848484"
                textColor="#FFFEF6"
              />
            </div>
          </Section>

          {/* 按钮组件 */}
          <Section title="Buttons" subtitle="按钮组件">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Button variant="primary">Add to cart</Button>
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="secondary">Shop all</Button>
                <Button variant="secondary" size="sm">Browse</Button>
                <Button variant="secondary" size="lg">View More</Button>
              </div>
            </div>
          </Section>

          {/* 卡片组件 */}
          <Section title="Cards" subtitle="卡片组件">
            <div className="grid grid-cols-3 gap-[32px]">
              {/* 产品卡片 */}
              <Card variant="product" padding="none">
                <CardImage alt="🪴" className="h-[200px]" />
                <div className="p-[16px] space-y-3">
                  <CardTitle variant="product">
                    Claxton Pot with Saucer 6"
                  </CardTitle>
                  <CardPrice variant="product">$21.00 USD</CardPrice>
                  <Button variant="onDark" className="w-full">
                    Add to cart
                  </Button>
                </div>
              </Card>

              {/* 信息卡片 */}
              <Card variant="info" padding="lg" className="col-span-2">
                <h2 
                  className="text-[48px] leading-[60px] font-bold mb-4 text-[#111111]"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Houseplant Expertise
                </h2>
                <CardDescription variant="info">
                  Cast & Grey Botanical 是您最喜欢的社区室内植物精品店！坐落在鲍德温公园边缘，这是一个您不想错过的购物体验。
                </CardDescription>
                <div className="pt-4">
                  <Button variant="secondary">Shop all</Button>
                </div>
              </Card>
            </div>
          </Section>

          {/* 表单元素 */}
          <Section title="Form Elements" subtitle="表单元素">
            <Card variant="info" padding="lg" className="max-w-[512px]">
              <h3 
                className="text-[19.6px] leading-[24.5px] font-bold mb-2 text-[#111111]"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Subscribe to our Mailing List
              </h3>
              <p className="text-[rgba(69,147,97,0.75)] text-[12px] mb-6">
                * indicates required
              </p>
              
              <Form onSubmit={(e) => e.preventDefault()}>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormGroup>
                
                <div className="pt-2">
                  <Button 
                    variant="primary"
                    className="bg-[#111111] border-[#111111]"
                  >
                    Subscribe
                  </Button>
                </div>
              </Form>
            </Card>
          </Section>

          {/* 间距系统 */}
          <Section title="Spacing System" subtitle="间距系统">
            <div className="space-y-4">
              {[
                { name: 'XS', value: '5px', description: '卡片内小间距' },
                { name: 'SM', value: '10px', description: '组件内边距、小间隙' },
                { name: 'MD', value: '20px', description: '组件间距、区块内边距' },
                { name: 'LG', value: '50px', description: '大块内边距、容器内边距' },
                { name: 'XL', value: '64px', description: '区块间距' },
                { name: '2XL', value: '246px', description: '页面水平内边距（外边距）' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#848484]">
                  <div className="w-32 font-bold text-[#111111]">{item.name}</div>
                  <div 
                    className="bg-[#459361] h-12 flex items-center justify-center text-white font-mono text-sm"
                    style={{ width: item.value }}
                  />
                  <div className="text-[14px] text-[rgba(69,147,97,0.75)]">{item.value} - {item.description}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-[#459361] text-[#FFFEF6] py-8 px-[246px]">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[11px] leading-[18.7px] tracking-[0.7px]">
            © 2025, Cast & Grey Botanical Design System
          </p>
        </div>
      </footer>
    </div>
  )
}

// 辅助组件：区块标题
const Section = ({ title, subtitle, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-8">
      <h2 
        className="text-[28.8px] leading-[36px] font-bold text-[#111111] mb-2"
        style={{ fontFamily: 'Petrona, serif' }}
      >
        {title}
      </h2>
      <p className="text-[14.6px] text-[rgba(69,147,97,0.75)]">
        {subtitle}
      </p>
    </div>
    {children}
  </motion.section>
)

// 辅助组件：颜色色板
const ColorSwatch = ({ name, hex, description, bg, textColor, border }) => (
  <Card variant="compact" padding="none" className="overflow-hidden">
    <div 
      className={`h-32 flex items-center justify-center text-5xl ${border ? 'border-2 border-[#848484]' : ''}`}
      style={{ backgroundColor: bg }}
    >
      <span style={{ color: textColor }}>Aa</span>
    </div>
    <div className="p-5">
      <h4 className="font-bold text-[15.6px] text-[#111111] mb-1">{name}</h4>
      <p className="text-[12px] font-mono text-[#848484] mb-2">{hex}</p>
      <p className="text-[12px] text-[rgba(69,147,97,0.75)]">{description}</p>
    </div>
  </Card>
)

