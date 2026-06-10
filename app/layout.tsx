import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://jiuhehandpaint.com";

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
    // 后续添加百度/Google站长验证码
    // google: "your-google-verification-code",
    // baidu: "your-baidu-verification-code",
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
      </head>
      <body className="min-h-full flex flex-col">
        {/* JSON-LD 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "久合手绘喷绘厂",
              description: "20年专注服装/鞋履/箱包手绘定制，全国发货，服务5000+品牌客户",
              url: SITE_URL,
              telephone: "13168873754",
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
              areaServed: {
                "@type": "Country",
                name: "中国",
              },
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
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
