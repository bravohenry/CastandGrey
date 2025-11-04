# Cast & Grey Botanical - Shopify Theme

一个精美的植物商店 Shopify 主题，采用日本美学设计理念：留白、克制、精致、呼吸感。

## 主题特色

- 🎨 **日本美学设计**：强调留白和克制的设计理念
- 🌿 **植物商店专属**：专为植物和园艺产品设计的界面
- 📱 **响应式设计**：完美适配桌面和移动设备
- ⚡ **高性能**：优化的 CSS 和 Liquid 模板
- 🎯 **易于定制**：通过 Shopify 主题编辑器轻松配置

## 主题结构

```
shopify-theme/
├── assets/                 # 静态资源文件
│   ├── theme.css          # 主题样式
│   ├── storepicture.jpg   # 英雄区域背景图
│   └── logo-high-res.png  # Logo 文件
├── config/
│   └── settings_schema.json # 主题设置
├── layout/
│   └── theme.liquid       # 主布局文件
├── locales/               # 多语言文件
├── sections/              # 可复用组件
│   ├── header.liquid      # 网站头部
│   ├── footer.liquid      # 网站底部
│   ├── hero.liquid        # 英雄区域
│   ├── quick-access.liquid # 快速访问
│   ├── best-sellers.liquid # 热销产品
│   ├── features.liquid    # 特色功能
│   ├── reviews.liquid     # 客户评价
│   └── cta-blocks.liquid  # 行动召唤
├── snippets/              # 小组件
└── templates/
    └── index.liquid       # 首页模板
```

## 安装步骤

1. **下载主题文件**
   - 下载整个 `shopify-theme` 文件夹

2. **压缩主题**
   ```bash
   cd shopify-theme
   zip -r cast-grey-botanical.zip .
   ```

3. **上传到 Shopify**
   - 登录 Shopify 后台
   - 进入 **在线商店 > 主题**
   - 点击 **添加主题 > 上传**
   - 选择 `cast-grey-botanical.zip` 文件

4. **设置主题**
   - 进入 **主题编辑器**
   - 配置各个 section 的内容
   - 设置产品集合和链接

## 主要组件

### Hero Section (英雄区域)
- 大型背景图片
- 主要标题和副标题
- 两个行动按钮
- 可配置背景图和文字内容

### Quick Access (快速访问)
- 四个主要功能区域的卡片
- 悬停动画效果
- 可配置标题、描述和链接

### Best Sellers (热销产品)
- 产品网格展示
- 支持产品评价和标签
- 可配置产品数量和集合

### Features (特色功能)
- 四个核心特色展示
- Lucide 图标库
- 动画效果

### Customer Reviews (客户评价)
- 评价轮播展示
- 星级评分系统
- 支持多个评价

### CTA Blocks (行动召唤)
- 三个行动区域
- 统一的视觉风格

## 定制指南

### 颜色方案
主题使用以下颜色变量：
- 主色：`#459361` (绿色)
- 背景：`#FFFEF6` (米色)
- 文字：`#111111` (深灰)

### 字体
- 标题：Petrona (serif)
- 正文：Archivo (sans-serif)

### 响应式断点
- 移动端：< 768px
- 平板端：768px - 1024px
- 桌面端：> 1024px

## 技术栈

- **Liquid**：Shopify 模板语言
- **CSS**：自定义样式表
- **JavaScript**：基础交互功能
- **Lucide Icons**：图标库
- **Google Fonts**：Petrona 和 Archivo 字体

## 浏览器支持

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 许可证

本主题仅供个人和商业使用。请遵守 Shopify 的使用条款。

## 支持

如有问题或需要定制，请联系主题开发者。
