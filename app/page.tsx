import AnimateOnScroll from "./components/AnimateOnScroll";
import CollapsibleCategories from "./components/CollapsibleCategories";
import ContactForm from "./components/ContactForm";
import DouyinSection from "./components/DouyinSection";
import FAQ from "./components/FAQ";
import GalleryCarousel from "./components/GalleryCarousel";
import HeroCarousel from "./components/HeroCarousel";
import ScrollToTop from "./components/ScrollToTop";
import ShareButtons from "./components/ShareButtons";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[50vh] flex items-start justify-center bg-black text-white overflow-hidden pt-16 md:pt-[4cm]">
        {/* 轮播背景 */}
        <HeroCarousel />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
        <div className="relative z-20 text-center px-4 md:px-8 w-full">
          <h1 className="font-black mb-4 md:mb-8 leading-tight tracking-wider whitespace-nowrap" style={{ fontSize: 'clamp(2.5rem, 14vw, 16rem)' }}>
            久合手绘喷绘工艺
          </h1>
          <p className="text-xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gray-300 font-medium">
            手绘的温度，让每件单品都独一无二 · 服装鞋包品牌商都在找的手绘厂
          </p>
          <p className="text-base md:text-3xl mb-6 md:mb-10 text-gray-400">
            20年画师团队 | 全国发货 | 服务批发/品牌/电商5000+客户
          </p>
          <div className="flex gap-3 md:gap-6 justify-center flex-wrap">
            <a
              href="#gallery"
              className="px-6 md:px-12 py-3 md:py-5 bg-white text-gray-900 rounded-full text-base md:text-2xl font-semibold hover:bg-gray-100 transition"
            >
              看作品案例
            </a>
            <a
              href="#contact"
              className="px-6 md:px-12 py-3 md:py-5 bg-orange-500 text-white rounded-full text-base md:text-2xl font-semibold hover:bg-orange-600 transition"
            >
              立即预约打样
            </a>
          </div>
        </div>

        {/* 联系方式 — 左下角（手机端隐藏，避免与二维码重叠） */}
        <div className="hidden md:block absolute bottom-4 left-4 z-30">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl px-10 py-5">
            <p className="text-yellow-400 text-3xl md:text-4xl font-bold">
              📞 13168873754
              &nbsp;&nbsp;|&nbsp;&nbsp;
              📍 广州市白云区大冈村大园街12号
            </p>
          </div>
        </div>

        {/* 微信二维码 — 右下角偏左（手机端隐藏） */}
        <div className="hidden md:block absolute bottom-4 right-24 z-30">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
            <div className="w-52 h-52 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/wechat-qr.png" alt="微信二维码" className="w-full h-full object-contain rounded-lg" />
            </div>
            <p className="text-yellow-400 text-lg font-bold">扫码加微信</p>
            <p className="text-gray-400 text-sm">13168873754</p>
          </div>
        </div>

        {/* 手机端 — 底部联系条 */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 z-30 bg-gray-900/90 backdrop-blur-sm border-t border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <p className="text-yellow-400 text-lg font-bold">📞 13168873754</p>
            <a href="#contact" className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold">
              立即咨询
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <AnimateOnScroll>
        <section id="gallery" className="py-12 md:py-20 bg-black border-t border-gray-800">
          <div className="px-8 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">看看我们画过什么</h2>
            <p className="text-center text-gray-400 mb-12">每一件都是画师手工创作，拒绝机器印花的千篇一律</p>
          </div>

          {/* Carousel - full width */}
          <GalleryCarousel />

          <p className="text-center text-gray-400 mt-8 px-4">
            以上仅展示部分案例，更多作品请添加微信查看完整作品集
          </p>
        </section>
      </AnimateOnScroll>

      {/* 抖音视频展示 */}
      <AnimateOnScroll>
        <section className="py-12 md:py-20 bg-gray-900 border-t border-gray-800">
          <div className="px-8">
            <DouyinSection />
          </div>
        </section>
      </AnimateOnScroll>

      {/* Trust Section */}
      <AnimateOnScroll>
      <section className="py-12 md:py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            服务全国线上线下商家 · 20年口碑见证
          </h2>

          {/* 客户类型 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
            {[
              '服装批发/档口商家',
              '鞋履品牌/工厂',
              '箱包设计师/工厂',
              '独立品牌/设计师',
              '淘宝/拼多多/抖音电商',
              '跨境亚马逊/速卖通',
              '直播带货/社群团购',
              '文创/企业/礼品定制'
            ].map((market) => (
              <div key={market} className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-yellow-600 transition">
                <span className="text-yellow-500 text-2xl">✓</span>
                <p className="mt-2 font-medium text-gray-200">{market}</p>
              </div>
            ))}
          </div>

          {/* 手绘品类细分 */}
          <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-yellow-500">手绘品类全覆盖</h3>
          <CollapsibleCategories />

          {/* 全国批发市场覆盖 */}
          <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-yellow-500">覆盖全国批发市场商圈</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {[
              { city: '广州', markets: '十三行 · 白马 · 红棉 · 沙河 · 中大布料 · 站西金宝 · 国际轻纺城' },
              { city: '佛山', markets: '童装城 · 张槎针织 · 南海盐步内衣' },
              { city: '东莞', markets: '虎门女装 · 大朗毛织 · 厚街鞋业' },
              { city: '深圳', markets: '南油女装 · 华强北 · 东门' },
              { city: '杭州', markets: '四季青 · 意法服饰 · 新杭派' },
              { city: '上海', markets: '七浦路 · 轻纺市场' },
              { city: '武汉', markets: '汉正街 · 万商白马' },
              { city: '成都', markets: '荷花池 · 蓝光金荷花' },
              { city: '北京', markets: '动物园 · 大红门 · 木樨园' },
              { city: '常熟', markets: '服装城 · 招商城' },
              { city: '织里', markets: '童装批发市场' },
              { city: '即墨', markets: '服装批发市场' }
            ].map((item) => (
              <div key={item.city} className="p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-yellow-600 transition">
                <p className="text-yellow-500 font-bold text-lg mb-1">{item.city}</p>
                <p className="text-gray-400 text-sm">{item.markets}</p>
              </div>
            ))}
          </div>

          {/* 数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center ">
            {[
              { num: '20+', label: '年手绘经验' },
              { num: '5000+', label: '合作客户' },
              { num: '100000+', label: '年产手绘作品' },
              { num: '30+', label: '覆盖城市' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-yellow-500">{stat.num}</div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Services Section */}
      <AnimateOnScroll>
      <section id="services" className="py-12 md:py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">三大品类全覆盖</h2>
          <p className="text-center text-gray-400 mb-16">你的创意我们来实现</p>

          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                title: '服装手绘',
                icon: '👗',
                desc: 'T恤 · 卫衣 · 牛仔外套 · 民族服饰',
                features: ['适配各类面料（棉/牛仔/雪纺/真丝）', '国风/潮流/复古/文艺各种风格', '可按设计稿定制或原创设计', '水洗不褪色，日常穿着无忧'],
              },
              {
                title: '鞋履喷绘',
                icon: '👟',
                desc: '帆布鞋 · 板鞋 · 小白鞋 · 运动鞋',
                features: ['卡通IP、油画风、国潮、涂鸦任选', '颜料附着牢固，防水不掉色', '适合测款和批量', '可来样定制，也可看图报价'],
              },
              {
                title: '箱包手绘',
                icon: '👜',
                desc: '帆布包 · 手提包 · 背包 · 行李箱',
                features: ['纯手工绘制，每个都是独立艺术品', '适配帆布/皮革/牛津布等材质', '可配合品牌Logo融入设计', '适合电商差异化、文创周边、品牌礼品'],
              }
            ].map((service) => (
              <div key={service.title} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-yellow-600 transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-yellow-500 mt-0.5">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Why Us Section */}
      <AnimateOnScroll>
      <section id="why-us" className="py-12 md:py-20 bg-black border-t border-gray-800">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">四大理由让全国商家都选我们</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ">
            {[
              { icon: '🎨', title: '手绘的温度', desc: '拒绝机器印花的冰冷感，每件都有画师的笔触和情感，图案生动灵活，细节丰富有层次' },
              { icon: '⚡', title: '交期靠谱', desc: '急单可加急处理，配合你的上新节奏，20年老厂从不拖延' },
              { icon: '🎯', title: '灵活接单', desc: '测款无压力，大批量价格更优，质量稳定，可大可小，可快可慢' },
              { icon: '🏆', title: '技术过硬', desc: '画师团队20年经验，什么风格都能画，国风、潮流、卡通、油画...你要的我们都擅长' }
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-yellow-600 transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Process Section */}
      <AnimateOnScroll>
      <section id="process" className="py-12 md:py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">四步搞定，简单高效</h2>
          <p className="text-center text-gray-400 mb-16">从咨询到收货，全程跟进</p>
          <div className="space-y-8 ">
            {[
              { num: '01', title: '沟通需求', desc: '加微信发图片，告诉我们：要画在什么上、想要什么风格、数量和交期要求。没有设计稿？我们可以帮你原创设计' },
              { num: '02', title: '报价打样', desc: '根据复杂度和数量报价，满意后完成样品。看到实物再决定是否批量生产' },
              { num: '03', title: '确认生产', desc: '样品满意后签订合同，支付定金开始批量生产，过程中可随时跟进进度' },
              { num: '04', title: '验货交付', desc: '逐件质检，确保每件符合标准，支持自提或发货，有问题7天内可返工' }
            ].map((step) => (
              <div key={step.num} className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-600 text-white flex items-center justify-center text-lg md:text-xl font-bold">
                  {step.num}
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Testimonials */}
      <AnimateOnScroll>
      <section id="testimonials" className="py-12 md:py-20 bg-black border-t border-gray-800">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">合作客户这样说</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {[
              { quote: '合作5年了，画工没得说，每次都按时交货，价格也公道', name: '李老板', from: '红棉女装批发档口' },
              { quote: '小批量也接单，很适合我们电商测款，爆了再加单', name: '陈小姐', from: '淘宝店主' },
              { quote: '手绘的质感真的比印花好太多，客户都说有艺术感', name: '王设计师', from: '独立设计师品牌' },
              { quote: '画师技术很好，什么风格都能画，而且每件都有细微差异，不会千篇一律。', name: '张总', from: '十三行服装品牌商' }
            ].map((t) => (
              <div key={t.name} className="p-6 bg-gray-800 border border-gray-700 rounded-2xl hover:border-yellow-600 transition">
                <p className="text-gray-300 mb-6 leading-relaxed">{`“${t.quote}”`}</p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.from}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ 常见问题 */}
      <AnimateOnScroll>
      <section id="faq" className="py-12 md:py-20 bg-black border-t border-gray-800">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">常见问题</h2>
          <p className="text-center text-gray-400 mb-12">关于手绘定制，你想知道的都在这里</p>
          <FAQ />
        </div>
      </section>
      </AnimateOnScroll>

      {/* 预约打样 */}
      <AnimateOnScroll>
      <section id="contact" className="py-12 md:py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">预约打样</h2>
          <p className="text-center text-gray-400 mb-12">48小时内回复</p>
          <ContactForm />
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-lg">手机/微信：<span className="text-white font-semibold">13168873754</span></p>
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Footer */}
      <footer className="py-10 md:py-12 bg-black border-t border-gray-800">
        <div className="px-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 品牌 */}
            <div>
              <h4 className="text-yellow-500 font-bold text-lg mb-3">久合手绘喷绘厂</h4>
              <p className="text-gray-400 text-sm leading-relaxed">20年专注服装/鞋履/箱包手绘定制，全国发货，服务5000+品牌客户。</p>
            </div>
            {/* 联系 */}
            <div>
              <h4 className="text-yellow-500 font-bold text-lg mb-3">联系我们</h4>
              <p className="text-gray-400 text-sm mb-1">📞 13168873754（微信同号）</p>
              <p className="text-gray-400 text-sm">📍 广州市白云区大冈村大园街12号</p>
            </div>
            {/* 快速链接 */}
            <div>
              <h4 className="text-yellow-500 font-bold text-lg mb-3">快速导航</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href="#gallery" className="text-gray-400 hover:text-yellow-400 transition">作品案例</a>
                <a href="#services" className="text-gray-400 hover:text-yellow-400 transition">服务品类</a>
                <a href="#why-us" className="text-gray-400 hover:text-yellow-400 transition">我们的优势</a>
                <a href="#faq" className="text-gray-400 hover:text-yellow-400 transition">常见问题</a>
                <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition">预约打样</a>
              </div>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                T恤手绘 · 卫衣手绘 · 帆布鞋手绘 · 帆布包手绘 · 汉服手绘 · 国潮手绘 · 卡通IP手绘
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <div className="mb-4">
              <ShareButtons />
            </div>
            <p className="text-gray-500 text-sm text-center">© 2026 久合手绘喷绘厂 版权所有</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
