# 久合手绘喷绘厂 — 项目状态

**项目名称：** jiuhe-handpaint  
**项目路径：** /Users/mac/Projects/jiuhe-handpaint  
**开始日期：** 2026-06-09  
**最后更新：** 2026-06-10  
**当前状态：** 开发完成，待部署上线

---

## 技术栈

- **框架：** Next.js 16.2.7
- **语言：** TypeScript 5
- **样式：** Tailwind CSS 4
- **测试：** Vitest + React Testing Library（16个用例）
- **部署目标：** Vercel（免费静态托管）

---

## Git 提交历史（18次）

```
4624fa6 feat: 视频号展示板块 + 社交平台双栏布局
feef6ec feat: 抖音账号引流板块 + 社交平台串联
17d83b1 docs: 社交平台提交指南 PLATFORM_GUIDE.md
827d3a6 seo: 社交平台可见性 - 微信/抖音/小红书/微博/QQ分享
9f5a358 seo: AI大模型可见性优化 - robots+llms.txt+ai.txt+meta
f29aedc seo: FAQ结构化数据+Service schema+FAQ板块+H1优化
bccf48c feat: 安全响应头+滚动动画+表单体验+图片优化配置
ca38c12 seo: 全面SEO优化 - 结构化数据+社交卡片+alt文本
8de0aa3 feat: 手机端适配+品类折叠+Footer增强+回到顶部
1a3893d feat: 图片压缩+favicon+自动化测试+多项修复
d11e343 layout: 去掉宽度限制，内容铺满全屏
fbe601c content: 全面扩展品类细分+全国批发市场覆盖
a390112 seo: 全面覆盖线上线下商家搜索关键词
a4085f0 content: 扩大目标客户群 — 服装/鞋包/品牌/电商全覆盖
ed237da content: 市场定位从广州扩展到全国
8b747e4 content: 删除所有起订和周期内容 + 更新进度文件
af62fa9 perf: HeroCarousel 性能优化 + 更新进度文件
6a486de feat: 久合手绘喷绘工艺官网 - 首页全量完成
```

---

## 项目结构

```
jiuhe-handpaint/
├── app/
│   ├── api/contact/route.ts           # 表单提交API
│   ├── components/
│   │   ├── AnimateOnScroll.tsx        # 滚动入场动画
│   │   ├── CollapsibleCategories.tsx  # 品类折叠组件
│   │   ├── ContactForm.tsx            # 预约表单
│   │   ├── DouyinSection.tsx          # 抖音引流板块
│   │   ├── FAQ.tsx                    # 常见问题折叠
│   │   ├── GalleryCarousel.tsx        # 作品轮播
│   │   ├── HeroCarousel.tsx           # 首屏背景轮播
│   │   ├── ScrollToTop.tsx            # 回到顶部按钮
│   │   ├── ShareButtons.tsx           # 社交分享按钮
│   │   └── VideoChannelSection.tsx    # 视频号引流板块
│   ├── globals.css                    # 全局样式+动画
│   ├── layout.tsx                     # 根布局+SEO+JSON-LD
│   ├── page.tsx                       # 首页
│   ├── robots.ts                      # SEO robots（含14个AI爬虫）
│   └── sitemap.ts                     # SEO sitemap
├── public/
│   ├── favicon.svg                    # SVG favicon
│   ├── favicon.png                    # PNG favicon
│   ├── llms.txt                       # AI模型信息指引
│   ├── ai.txt                         # AI访问指引
│   └── images/                        # 28.4MB（48张压缩后）
├── tests/
│   ├── setup.ts                       # 测试配置
│   ├── page.test.tsx                  # 首页测试（14个）
│   └── contact-api.test.ts            # 联系信息测试（2个）
├── vitest.config.ts                   # 测试配置
├── next.config.ts                     # 安全响应头+图片优化
├── package.json                       # 含 lint/test/check 脚本
├── AGENTS.md                          # Next.js agent rules
├── CLAUDE.md                          # Claude 配置
├── PROJECT_STATUS.md                  # 本文件
├── PROJECT_PROGRESS.md                # 进度详情
└── PLATFORM_GUIDE.md                  # 社交平台提交指南
```

---

## 已完成功能（全量）

### 页面板块
| 板块 | 状态 | 说明 |
|------|------|------|
| Hero 首屏 | ✅ | 轮播背景+大标题+CTA+联系方式+微信二维码（手机端底部联系条） |
| 作品展示 | ✅ | GalleryCarousel 交叉淡入淡出轮播（48张，4.5s切换） |
| 抖音引流 | ✅ | 引导关注 @jiuheshouhui |
| 视频号引流 | ✅ | 引导关注微信视频号 |
| 信任背书 | ✅ | 8类客户+30品类可折叠+12城市市场+4项数据 |
| 三大品类 | ✅ | 服装手绘/鞋履喷绘/箱包手绘 |
| 四大理由 | ✅ | 手绘的温度/交期靠谱/灵活接单/技术过硬 |
| 四步流程 | ✅ | 沟通→打样→生产→交付 |
| 客户评价 | ✅ | 4条评价 |
| FAQ | ✅ | 6个常见问题手风琴式展开 |
| 预约表单 | ✅ | 6字段表单+验证+API |
| Footer | ✅ | 三栏（品牌/联系/快速导航）+分享按钮 |

### 技术功能
| 功能 | 状态 |
|------|------|
| 自动化测试 | ✅ Vitest 16个用例 |
| 一键检查 | ✅ npm run check（lint+test+build） |
| 图片压缩 | ✅ 140MB→28.4MB |
| 手机端适配 | ✅ 响应式布局 |
| 平滑滚动 | ✅ scroll-smooth |
| 滚动动画 | ✅ IntersectionObserver 淡入 |
| 回到顶部 | ✅ 滚动600px后出现 |
| 安全响应头 | ✅ CSP/X-Frame-Options等 |
| 图片优化 | ✅ AVIF/WebP/30天缓存 |

### SEO 优化
| 优化项 | 状态 |
|--------|------|
| JSON-LD LocalBusiness | ✅ 地址/电话/营业时间/评分/服务目录 |
| JSON-LD FAQPage | ✅ 6个问答 |
| OpenGraph | ✅ title/description/image |
| Twitter Card | ✅ summary_large_image |
| canonical URL | ✅ |
| title template | ✅ |
| robots.txt | ✅ 屏蔽/api/ /_next/，允许14个AI爬虫 |
| sitemap.xml | ✅ |
| 48张图片 alt 文本 | ✅ 每张独立描述 |
| H1 优化 | ✅ "久合手绘喷绘工艺"与title一致 |
| Footer 关键词 | ✅ 品类锚文本 |

### AI 大模型可见性
| 平台 | 状态 | User-Agent |
|------|------|-----------|
| 豆包（字节） | ✅ | Bytespider |
| DeepSeek | ✅ | DeepSeekBot |
| 通义千问（阿里） | ✅ | Qbot/AliBot |
| 文心一言（百度） | ✅ | Baiduspider |
| Kimi（月之暗面） | ✅ | KimiBot |
| ChatGLM（智谱） | ✅ | ZhipuBot |
| 讯飞星火 | ✅ | XunfeiBot |
| 小米 MiMo | ✅ | XiaomiBot |
| ChatGPT | ✅ | GPTBot |
| Gemini | ✅ | Google-Extended |
| Claude | ✅ | ClaudeBot |
| Perplexity | ✅ | PerplexityBot |
| llms.txt | ✅ | AI专用信息指引 |
| ai.txt | ✅ | AI访问指引 |

### 社交平台可见性
| 平台 | 状态 | 说明 |
|------|------|------|
| 微信 | ✅ | og:image/域名验证预留/分享按钮 |
| 抖音 | ✅ | bytedance meta/引流板块/@jiuheshouhui |
| 小红书 | ✅ | xiaohongshu meta/分享按钮 |
| 视频号 | ✅ | 引流板块/搜一搜引导 |
| 微博 | ✅ | 分享按钮 |
| QQ | ✅ | 分享按钮 |

---

## 待办事项

### 🔴 部署上线（需用户操作）
- [ ] 购买域名（jiuhehandpaint.com 或其他）
- [ ] 推代码到 GitHub
- [ ] Vercel 部署（一键导入）
- [ ] 填入百度/Google 站长验证码

### 🟡 功能完善
- [ ] 表单通知对接（微信/邮件）
- [ ] 百度统计/Google Analytics

### 🟢 后续优化
- [ ] 更多页面（关于我们、服务详情）
- [ ] 图片灯箱查看
- [ ] ICP 备案号

---

## 微信小程序

**项目路径：** /Users/mac/Projects/jiuhe-handpaint-miniprogram  
**状态：** 代码完成，待注册审核

### 三个页面
- **首页：** Banner轮播+三大品类+数据统计+四步流程+快捷联系
- **作品：** 分类筛选（服装/鞋履/箱包/国潮）+图片预览+抖音引流
- **联系：** 预约打样表单+一键拨号+复制微信号

### 待办
- [ ] 注册小程序账号
- [ ] 下载微信开发者工具
- [ ] 填入 AppID
- [ ] 替换专业 TabBar 图标
- [ ] 提交审核

---

## 联系信息

- 电话/微信：13168873754
- 地址：广州市白云区石井大冈村大园街12号
- 抖音：@jiuheshouhui
- 视频号：久合手绘喷绘厂
