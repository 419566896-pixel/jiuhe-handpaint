import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "久合手绘喷绘厂-广州服装鞋子箱包手绘定制-白马红棉十三行批发市场供应商",
  description: "久合手绘喷绘厂20年专注服装、鞋履、箱包纯手工绘制加工，服务广州中大、十三行、白马、红棉、站西等批发市场。可大批量可小单，3天打样，交货快。民族风、旗袍汉服、国潮手绘首选。电话13168873754",
  keywords: [
    "广州手绘",
    "服装手绘",
    "鞋子喷绘",
    "箱包定制",
    "白马批发市场手绘",
    "十三行服装手绘",
    "民族风手绘定制",
    "旗袍手绘加工",
    "中大布料市场",
    "红棉国际时装城",
    "手工绘制",
    "纯手工喷绘",
    "广州白云区手绘厂",
    "石井手绘加工"
  ],
  authors: [{ name: "久合手绘喷绘厂" }],
  openGraph: {
    title: "久合手绘喷绘厂 - 广州批发市场信赖的手绘定制工厂",
    description: "20年手绘经验，服务白马/红棉/十三行千家品牌。3天打样，10件起订。",
    type: "website",
    locale: "zh_CN",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // 后续添加百度/Google站长验证码
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
