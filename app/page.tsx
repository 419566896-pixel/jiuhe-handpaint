import Image from "next/image";
import ContactForm from "./components/ContactForm";
import GalleryCarousel from "./components/GalleryCarousel";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        {/* 轮播背景 */}
        <HeroCarousel />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
        <div className="relative z-20 text-center px-8 w-full" style={{ marginTop: '-13cm' }}>
          <h1 className="font-black mb-8 leading-tight tracking-wider whitespace-nowrap" style={{ fontSize: 'clamp(4rem, 14vw, 16rem)' }}>
            久合手绘喷绘工艺
          </h1>
          <p className="text-5xl md:text-6xl mb-6 text-gray-300 font-medium">
            手绘的温度，让每件单品都独一无二 · 全国服装老板都在找的手绘厂
          </p>
          <p className="text-3xl mb-10 text-gray-400">
            20年画师团队 | 3天打样 | 全国发货 | 服务5000+品牌客户
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#gallery"
              className="px-12 py-5 bg-white text-gray-900 rounded-full text-2xl font-semibold hover:bg-gray-100 transition"
            >
              看作品案例
            </a>
            <a
              href="#contact"
              className="px-12 py-5 bg-orange-500 text-white rounded-full text-2xl font-semibold hover:bg-orange-600 transition"
            >
              立即预约打样
            </a>
          </div>
        </div>

        {/* 预约打样 — 叠加在首屏左下角 */}
        <div className="absolute bottom-8 left-8 z-30 w-[60rem] bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white mb-3">预约打样</h3>
          <p className="text-gray-400 text-lg mb-6">48小时内回复，3天出样品</p>
          <ContactForm />
          <div className="mt-6 pt-6 border-t border-gray-700 text-lg">
            <p className="text-gray-400">手机/微信：<span className="text-white font-semibold">13168873754</span></p>
          </div>
        </div>

        {/* 联系方式 — 叠加在首屏右下角 */}
        <div className="fixed bottom-8 right-8 z-50 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <p className="text-yellow-400 text-4xl font-bold">
            📞 13168873754
            &nbsp;&nbsp;|&nbsp;&nbsp;
            📍 白云区石井大冈村大园街12号
            &nbsp;&nbsp;|&nbsp;&nbsp;
            ⏰ 周一至周六 9:00-18:00
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            服务全国服装商圈 · 20年口碑见证
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center max-w-5xl mx-auto">
            {[
              '广州十三行/白马/红棉',
              '佛山童装/张槎针织',
              '东莞虎门女装',
              '杭州四季青/意法',
              '上海七浦路',
              '武汉汉正街',
              '成都荷花池',
              '全国电商卖家'
            ].map((market) => (
              <div key={market} className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-yellow-600 transition">
                <span className="text-yellow-500 text-2xl">✓</span>
                <p className="mt-2 font-medium text-gray-200">{market}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center max-w-4xl mx-auto">
            {[
              { num: '20+', label: '年手绘经验' },
              { num: '5000+', label: '合作客户' },
              { num: '100000+', label: '年产手绘作品' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-yellow-500">{stat.num}</div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black border-t border-gray-800">
        <div className="px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">看看我们画过什么</h2>
          <p className="text-center text-gray-400 mb-12">每一件都是画师手工创作，拒绝机器印花的千篇一律</p>
        </div>

        {/* Carousel - full width */}
        <GalleryCarousel />

        <p className="text-center text-gray-400 mt-8 px-4">
          以上仅展示部分案例，更多作品请添加微信查看完整作品集
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">三大品类全覆盖</h2>
          <p className="text-center text-gray-400 mb-16">你的创意我们来实现</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Why Us Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">四大理由让全国服装老板都选我们</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
            {[
              { icon: '🎨', title: '手绘的温度', desc: '拒绝机器印花的冰冷感，每件都有画师的笔触和情感，图案生动灵活，细节丰富有层次' },
              { icon: '⚡', title: '交期靠谱', desc: '打样3天出货，批量7-15天，急单可加急处理，配合你的上新节奏，20年老厂从不拖延' },
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

      {/* Process Section */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">四步搞定，简单高效</h2>
          <p className="text-center text-gray-400 mb-16">从咨询到收货，全程跟进</p>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              { num: '01', title: '沟通需求', desc: '加微信发图片，告诉我们：要画在什么上、想要什么风格、数量和交期要求。没有设计稿？我们可以帮你原创设计' },
              { num: '02', title: '报价打样', desc: '根据复杂度和数量报价，满意后3天内完成样品。看到实物再决定是否批量生产' },
              { num: '03', title: '确认生产', desc: '样品满意后签订合同，支付定金开始批量生产，过程中可随时跟进进度' },
              { num: '04', title: '验货交付', desc: '逐件质检，确保每件符合标准，支持自提或发货，有问题7天内可返工' }
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-600 text-white flex items-center justify-center text-xl font-bold">
                  {step.num}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">合作客户这样说</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { quote: '合作5年了，画工没得说，每次都按时交货，价格也公道', name: '李老板', from: '红棉女装批发档口' },
              { quote: '小批量也接单，很适合我们电商测款，爆了再加单', name: '陈小姐', from: '淘宝店主' },
              { quote: '手绘的质感真的比印花好太多，客户都说有艺术感', name: '王设计师', from: '独立设计师品牌' },
              { quote: '画师技术很好，什么风格都能画，而且每件都有细微差异，不会千篇一律', name: '张总', from: '十三行服装品牌商' }
            ].map((t) => (
              <div key={t.name} className="p-6 bg-gray-800 border border-gray-700 rounded-2xl hover:border-yellow-600 transition">
                <p className="text-gray-300 mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.from}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-500 text-sm text-center">
        <p>© 2024 久合手绘喷绘厂 版权所有 | 广州市白云区石井大冈村大园街12号</p>
        <p className="mt-2">专注服装/鞋履/箱包手绘定制 · 全国发货 · 20年品质保障</p>
      </footer>
    </div>
  );
}
