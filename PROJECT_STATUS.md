# 久合手绘喷绘工艺 — 项目进度

---

## 📂 项目结构

```
~/Projects/jiuhe-handpaint/
├── app/
│   ├── layout.tsx                  # 根布局 + SEO metadata
│   ├── page.tsx                    # 首页（全量）
│   ├── globals.css                 # 全局样式
│   ├── robots.ts                   # SEO robots
│   ├── sitemap.ts                  # SEO sitemap
│   ├── components/
│   │   ├── ContactForm.tsx         # 预约表单
│   │   ├── HeroCarousel.tsx        # 首屏背景轮播（3张渲染优化）
│   │   └── GalleryCarousel.tsx     # 作品展示交叉淡入淡出轮播
│   └── api/contact/route.ts        # 表单提交 API
├── public/images/                  # 49 张图片（已对齐）
├── next.config.ts
└── .gitignore
```

---

## 🎯 已完成功能

### 1. 首屏 Hero Section
- 全屏黑底 + HeroCarousel 自动轮播背景（2秒间隔）
- 主标题："久合手绘喷绘工艺"（超大字号，自适应）
- 副标题："手绘的温度，让每件单品都独一无二 · 广州批发市场都在找的手绘厂"
- 卖点文字 + 两个 CTA 按钮
- **预约打样表单叠加在左下角**（半透明背景 + 毛玻璃效果）
- **联系方式固定悬停在右下角**（手机/微信、地址、工作时间）

### 2. 信任背书 Section
- 6 个广州批发市场标签
- 4 大业务数据：20+年经验、5000+客户、100000+年产量、3天打样

### 3. 作品展示 Gallery
- GalleryCarousel：交叉淡入淡出轮播
- 49 张图片，4.5 秒切换一组，每组 6 张
- 前一组渐渐消失，后一组同时渐渐出现
- 底部指示点导航

### 4. 三大品类 Section
- 服装手绘 / 鞋履喷绘 / 箱包手绘

### 5. 四大理由 Section
- 手绘的温度 / 交期靠谱 / 灵活接单 / 技术过硬

### 6. 四步流程 Section
- 沟通需求 → 报价打样 → 确认生产 → 验货交付

### 7. 客户评价 Section
- 4 位客户真实评价

### 8. Footer
- 版权信息 + 品牌描述

---

## 🎨 视觉设计
- **主题**：奢华暗黑色调（bg-gray-900 / bg-black）
- **主色**：黄色 (#EAB308) + 橙色 (#F97316) 作为强调
- **首屏**：主标题超大字号 + 联系方式黄色高亮
- **响应式**：grid-cols-2 → md:grid-cols-3/4/6

---

## 📸 图片资源
- public/images/ 目录共 **49 张有效图片**（排除文件名含空格的）
- HeroCarousel 引用 49 张（运行时只渲染 3 张优化性能）
- GalleryCarousel 引用 49 张

---

## ✅ 已完成优化
- Git 初始化 + 首次提交
- SEO metadata（标题/描述/关键词/OpenGraph）
- robots.ts + sitemap.ts
- HeroCarousel 性能优化（只渲染当前+相邻图片）
- GalleryCarousel 使用 lazy loading
- 图片列表对齐（49 张）

---

## ⚠️ 待办事项

### 中优先级
1. **表单后端集成** — 当前只 console.log，需对接邮件/微信通知服务
2. **百度/Google 站长验证** — layout.tsx 中 verification 字段待填

### 低优先级
3. **图片压缩/WebP 格式** — 大图加载需考虑压缩
4. **多页面扩展** — 关于我们、服务详情等子页面

---

## 📞 联系方式
- 手机/微信：13168873754
- 地址：广州市白云区石井大冈村大园街12号
- 工作时间：周一至周六 9:00-18:00
