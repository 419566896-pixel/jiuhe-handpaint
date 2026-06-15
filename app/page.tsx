import AnimateOnScroll from "./components/AnimateOnScroll";
import CategoryShowcase from "./components/CategoryShowcase";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import GalleryCarousel from "./components/GalleryCarousel";
import Navbar from "./components/Navbar";
import ShareButtons from "./components/ShareButtons";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 pb-14 md:pb-0">
      {/* SEO 隐藏文案 - 搜索引擎可爬取 */}
      <div className="sr-only" role="complementary" aria-label="网站介绍">
        <h1>久合手绘喷绘工艺 - 全国服装鞋包箱商家都在找的手绘厂</h1>
        <p>
          久合手绘喷绘工艺厂位于广州市白云区，拥有20余年手绘喷绘经验，是一家专业为服装、鞋履、箱包品牌商提供纯手工绘制加工的工厂。
          我们拥有一支经验丰富的画师团队，擅长国潮、油画风、卡通IP、复古文艺、涂鸦街头等多种风格，
          能够在T恤、卫衣、牛仔外套、汉服、旗袍、连衣裙、衬衫、裤子等各类服装面料上进行手绘创作。
        </p>
        <p>
          鞋履手绘方面，久合手绘支持帆布鞋、板鞋、小白鞋、运动鞋、皮鞋等各类鞋款的纯手工喷绘和绘制，
          使用专业颜料，防水不掉色，适合品牌测款和批量生产。
          箱包手绘覆盖帆布包、手提包、双肩包、行李箱、皮包等，可根据客户提供的设计稿或图片进行定制绘制。
        </p>
        <p>
          久合手绘工厂服务全国线上线下商家，覆盖广州十三行、白马、红棉、沙河、中大布料、站西金宝、国际轻纺城，
          佛山童装城、张槎针织、南海盐步内衣，东莞虎门女装、大朗毛织、厚街鞋业，
          深圳南油女装、华强北、东门，杭州四季青、意法服饰、新杭派，
          上海七浦路、轻纺市场，武汉汉正街、万商白马，成都荷花池、蓝光金荷花，
          北京动物园、大红门、木樨园，常熟服装城、招商城，织里童装批发市场，即墨服装批发市场等全国30多个城市的核心批发商圈。
        </p>
        <p>
          久合手绘支持来图定制、来样打样，小批量灵活接单，大批量价格更优。
          合作客户包括服装批发档口商家、鞋履品牌工厂、箱包设计师工厂、独立品牌设计师、
          淘宝拼多多抖音电商卖家、跨境亚马逊速卖通商家、直播带货社群团购、文创企业礼品定制等各类商家。
          20年来累计服务超过5000家客户，年产手绘作品超过100000件。
        </p>
        <p>
          手绘定制流程简单：第一步沟通需求，加微信发送图片说明风格要求；第二步报价打样，画师出样确认后完成样品；
          第三步确认生产，签合同付定金开始批量绘制；第四步验货交付，逐件质检合格后自提或物流发货。
          久合手绘使用专业纺织颜料和喷绘设备，确保水洗不褪色、日常穿着无忧。
        </p>
        <p>
          联系久合手绘：电话13168873754，地址广州市白云区大冈村大园街12号。
          欢迎全国各地服装鞋包箱品牌商、批发商、电商卖家、设计师前来咨询合作。
          久合手绘，手绘的温度，让每件单品都独一无二。
        </p>
      </div>
      <Navbar />
      {/* 手机端底部固定联系条 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-yellow-400 text-lg font-bold">📞 13168873754</p>
          <a href="tel:13168873754" className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold">
            立即咨询
          </a>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-black text-white overflow-hidden pt-16 pb-4 md:pt-20 md:pb-8">
        <div className="relative z-20 text-center px-4 md:px-8 w-full">
          <h1 className="font-black mb-2 md:mb-4 leading-tight tracking-wider" style={{ fontSize: 'clamp(2.5rem, 10vw, 16rem)' }}>
            久合手绘喷绘工艺
          </h1>
          <p className="text-xl md:text-5xl lg:text-6xl mb-3 md:mb-6 text-gray-300 font-medium leading-snug">
            全国服装鞋包箱商家都在找的手绘厂
          </p>
        </div>

      </section>

      {/* Gallery Section */}
      <AnimateOnScroll>
        <section id="gallery" className="py-12 md:py-20 bg-black border-t border-gray-800">

          {/* Carousel - full width */}
          <GalleryCarousel />

          <p className="text-center text-gray-400 mt-8 px-4">
            以上仅展示部分案例，更多作品请添加微信查看完整作品集
          </p>
        </section>
      </AnimateOnScroll>

      {/* Services Section */}
      <AnimateOnScroll>
        <CategoryShowcase />
      </AnimateOnScroll>

      {/* Why Us Section */}
      <AnimateOnScroll>
      <section id="why-us" className="py-12 md:py-20 bg-black border-t border-gray-800">
        <div className="px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">四大理由让全国商家都选我们</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-12 ">
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
        <div className="px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">四步搞定，简单高效</h2>
          <p className="text-center text-gray-400 mb-8 md:mb-16">从咨询到收货，全程跟进</p>
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
        <div className="px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-white">合作客户这样说</h2>
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

      {/* 关于我们 */}
      <AnimateOnScroll>
      <section id="about" className="py-12 md:py-20 bg-gray-900 border-t border-gray-800">
        <div className="px-4 md:px-8 max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white">关于我们</h2>
          <p>久合手绘喷绘工艺厂位于广州市白云区，拥有20余年手绘喷绘经验，是一家专业为服装、鞋履、箱包品牌商提供纯手工绘制加工的工厂。我们拥有一支经验丰富的画师团队，擅长国潮、油画风、卡通IP、复古文艺、涂鸦街头等多种风格。</p>
          <p><strong className="text-white">服装手绘喷绘：</strong>T恤、卫衣、牛仔外套、汉服、旗袍、连衣裙、衬衫、裤子等各类面料，适配棉、牛仔、雪纺、真丝等材质，水洗不褪色，日常穿着无忧。</p>
          <p><strong className="text-white">鞋履手绘：</strong>帆布鞋、板鞋、小白鞋、运动鞋、皮鞋等各类鞋款纯手工喷绘，颜料附着牢固，防水不掉色，适合品牌测款和批量生产。</p>
          <p><strong className="text-white">箱包手绘：</strong>帆布包、手提包、双肩包、行李箱、皮包等，可根据客户设计稿或图片进行定制绘制。</p>
          <p><strong className="text-white">服务客户：</strong>服装批发档口商家、鞋履品牌工厂、箱包设计师工厂、独立品牌设计师、淘宝拼多多抖音电商卖家、跨境亚马逊速卖通商家、直播带货社群团购、文创企业礼品定制等。</p>
          <p><strong className="text-white">覆盖市场：</strong>广州十三行、白马、红棉、沙河，佛山童装城，东莞虎门，深圳南油，杭州四季青，上海七浦路，武汉汉正街，成都荷花池，北京动物园、大红门，常熟服装城，织里童装市场等全国30+城市批发商圈。</p>
          <p><strong className="text-white">合作数据：</strong>20年手绘经验，5000+合作客户，年产手绘作品100000+件，覆盖30+城市。</p>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ + 预约 + 社交平台 */}
      <AnimateOnScroll>
      <section className="py-12 md:py-20 bg-black border-t border-gray-800">
        <div className="px-4 md:px-8">
          {/* 手机端单栏 */}
          <div className="lg:hidden space-y-8">
            <div id="faq">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">常见问题</h2>
              <p className="text-gray-400 mb-8">关于手绘定制，你想知道的都在这里</p>
              <FAQ />
            </div>
            <div id="contact">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">预约打样</h2>
              <p className="text-gray-400 mb-6">48小时内回复</p>
              <ContactForm />
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-base">手机/微信：<span className="text-white font-semibold">13168873754</span></p>
              </div>
            </div>
          </div>

          {/* 桌面端双栏（之前OK的版本） */}
          <div
            className="hidden lg:grid gap-8"
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gridTemplateAreas: '"faq social" "contact social"',
            }}
          >
            {/* 左上：常见问题 */}
            <div id="faq" style={{ gridArea: 'faq' }}>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">常见问题</h2>
              <p className="text-gray-400 mb-8">关于手绘定制，你想知道的都在这里</p>
              <FAQ />
            </div>

            {/* 左下：预约打样 */}
            <div id="contact" style={{ gridArea: 'contact' }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">预约打样</h2>
              <p className="text-gray-400 mb-6">48小时内回复</p>
              <ContactForm />
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-base">手机/微信：<span className="text-white font-semibold">13168873754</span></p>
              </div>
            </div>

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
                <a href="#about" className="text-gray-400 hover:text-yellow-400 transition">关于我们</a>
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
            <p className="text-gray-500 text-sm text-center mb-2">
              © 2026 久合手绘喷绘工艺 版权所有
            </p>
            <p className="text-gray-600 text-xs">
              {/* TODO: ICP 备案号 — 取得备案后取消注释 */}
              {/* <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">粤ICP备XXXXXXXX号-1</a> */}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
