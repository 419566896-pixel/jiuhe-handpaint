import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://419566896-pixel.github.io/jiuhe-handpaint";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "久合手绘喷绘工艺-服装鞋包手绘定制工厂-全国批发市场商圈供应商",
    template: "%s | 久合手绘喷绘厂",
  },
  description: "久合手绘喷绘工艺20年专注T恤/卫衣/裤子/牛仔/汉服/旗袍/欧货/潮牌/帆布鞋/板鞋/帆布包/行李箱纯手工绘制加工，全国发货，覆盖广州十三行/白马/红棉、佛山童装城、东莞虎门、杭州四季青、武汉汉正街、成都荷花池等全国30+城市批发市场。电话13168873754",
  keywords: [
    "服装手绘", "手绘加工厂", "手绘代加工", "手绘喷绘工厂",
    "T恤手绘", "卫衣手绘", "裤子手绘", "牛仔手绘", "衬衫手绘", "连衣裙手绘",
    "男装手绘", "女装手绘", "童装手绘", "汉服手绘", "旗袍手绘", "民族服饰手绘",
    "欧货手绘", "潮牌手绘", "国潮手绘", "复古手绘", "油画风手绘", "卡通IP手绘",
    "帆布鞋手绘", "板鞋手绘", "小白鞋手绘", "运动鞋喷绘", "鞋子手绘定制",
    "帆布包手绘", "手提包手绘", "双肩包手绘", "行李箱手绘", "箱包手绘定制",
    "手绘打样", "小批量手绘", "全国手绘定制", "手绘定制全国发货",
    "广州手绘厂", "十三行手绘", "白马手绘", "红棉手绘",
    "佛山手绘", "东莞手绘", "虎门手绘", "杭州手绘", "四季青手绘",
    "武汉手绘", "汉正街手绘", "成都手绘", "荷花池手绘",
    "电商手绘加工", "直播带货手绘", "品牌手绘定制", "文创周边手绘", "企业礼品手绘"
  ],
  authors: [{ name: "久合手绘喷绘厂", url: SITE_URL }],
  creator: "久合手绘喷绘厂",
  publisher: "久合手绘喷绘厂",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "久合手绘喷绘工艺 - 全国服装老板信赖的手绘定制工厂",
    description: "20年手绘经验，全国发货，服务5000+品牌客户。T恤/鞋履/箱包纯手工绘制，覆盖全国30+城市批发市场。",
    url: SITE_URL,
    siteName: "久合手绘喷绘厂",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: `${SITE_URL}/images/IMG_1189.JPG`,
        width: 1920,
        height: 1280,
        alt: "久合手绘喷绘厂 - 手绘作品展示",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "久合手绘喷绘工艺 - 服装鞋包手绘定制工厂",
    description: "20年手绘经验，全国发货，服务5000+品牌客户。电话13168873754",
    images: [`${SITE_URL}/images/IMG_1189.JPG`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
        {/* AI 模型爬取许可 */}
        <meta name="ai-content-declaration" content="human-authored" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="baiduspider" content="index, follow" />
        <meta name="bytedance" content="index, follow" />
        <meta name="page-type" content="business-service" />
        <meta name="business-type" content="hand-painting-custom-factory" />
        <meta name="service-area" content="全国" />
        <meta name="contact-phone" content="13168873754" />

        {/* 微信分享优化 */}
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* 微信域名验证 - 需要在微信公众平台获取验证码 */}
        {/* <meta name="weixin:verification" content="your-wechat-verification-code" /> */}

        {/* 抖音分享优化 */}
        <meta name="bytedance:image" content={`${SITE_URL}/images/IMG_1189.JPG`} />
        <meta name="bytedance:title" content="久合手绘喷绘工艺 - 服装鞋包手绘定制" />

        {/* 小红书分享优化 */}
        <meta name="xiaohongshu:card" content="summary_large_image" />
        <meta name="xiaohongshu:title" content="久合手绘喷绘厂 | 服装鞋包手绘定制" />
        <meta name="xiaohongshu:description" content="20年手绘工厂，T恤/帆布鞋/帆布包手绘定制，全国发货" />
        <meta name="xiaohongshu:image" content={`${SITE_URL}/images/IMG_1189.JPG`} />

        {/* 通用社交分享 */}
        <meta name="thumbnail" content={`${SITE_URL}/images/IMG_1189.JPG`} />
        <meta name="image" content={`${SITE_URL}/images/IMG_1189.JPG`} />
        {/* 百度统计 — 替换 HMT-xxx 为实际代码 */}
        {/* 
        <script>
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?HMT-xxx";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        </script>
        */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* JSON-LD: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}#business`,
              name: "久合手绘喷绘厂",
              alternateName: "久合手绘喷绘工艺",
              description: "20年专注服装/鞋履/箱包手绘定制，全国发货，服务5000+品牌客户",
              url: SITE_URL,
              telephone: "13168873754",
              email: "contact@jiuhehandpaint.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "大冈村大园街12号",
                addressLocality: "广州市",
                addressRegion: "广东省",
                postalCode: "510000",
                addressCountry: "CN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.2317,
                longitude: 113.2663,
              },
              areaServed: [
                { "@type": "Country", name: "中国" },
                { "@type": "City", name: "广州" },
                { "@type": "City", name: "杭州" },
                { "@type": "City", name: "武汉" },
                { "@type": "City", name: "成都" },
                { "@type": "City", name: "深圳" },
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [],
              image: `${SITE_URL}/images/IMG_1189.JPG`,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "5000",
                bestRating: "5",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "手绘定制服务",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "服装手绘定制" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "鞋履喷绘定制" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "箱包手绘定制" } },
                ],
              },
            }),
          }}
        />
        {/* JSON-LD: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "久合手绘喷绘厂主要做什么？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "久合手绘喷绘厂专注服装（T恤/卫衣/牛仔/汉服等）、鞋履（帆布鞋/板鞋/运动鞋等）、箱包（帆布包/手提包/行李箱等）纯手工绘制加工，全国发货，20年画师团队经验。",
                  },
                },
                {
                  "@type": "Question",
                  name: "手绘定制起订量是多少？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "久合手绘支持小批量测款，灵活接单，大批量价格更优。具体起订量根据产品类型和图案复杂度而定，欢迎咨询。",
                  },
                },
                {
                  "@type": "Question",
                  name: "手绘会掉色吗？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "久合手绘使用专业纺织颜料和喷绘工艺，水洗不褪色，日常穿着无忧。鞋履喷绘颜料附着牢固，防水不掉色。",
                  },
                },
                {
                  "@type": "Question",
                  name: "手绘定制流程是怎样的？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "四步流程：1.沟通需求（加微信发图片说明风格要求）→ 2.报价打样（满意后完成样品）→ 3.确认生产（签合同付定金）→ 4.验货交付（逐件质检，支持自提或发货）。",
                  },
                },
                {
                  "@type": "Question",
                  name: "久合手绘厂在哪里？发货到全国吗？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "工厂位于广州市白云区石井大冈村大园街12号，全国发货，覆盖广州十三行/白马/红棉、杭州四季青、武汉汉正街、成都荷花池等30+城市批发市场。",
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
