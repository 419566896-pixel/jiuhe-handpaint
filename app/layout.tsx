import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "久合手绘喷绘工艺-服装鞋包手绘定制工厂-批发/品牌/电商全国发货",
  description: "久合手绘喷绘工艺20年专注服装、鞋履、箱包纯手工绘制加工，全国发货，服务批发商家、品牌商、电商卖家、独立设计师。3天打样，交货快。民族风、旗袍汉服、国潮手绘首选。电话13168873754",
  keywords: [
    "服装手绘",
    "鞋子喷绘",
    "箱包定制",
    "手绘加工厂",
    "全国手绘定制",
    "品牌手绘定制",
    "电商手绘加工",
    "民族风手绘定制",
    "旗袍手绘加工",
    "国潮手绘",
    "纯手工喷绘",
    "服装手绘工厂",
    "手绘定制全国发货",
    "文创周边手绘"
  ],
  authors: [{ name: "久合手绘喷绘厂" }],
  openGraph: {
    title: "久合手绘喷绘工艺 - 全国服装老板信赖的手绘定制工厂",
    description: "20年手绘经验，全国发货，服务5000+品牌客户。3天打样，品质保障。",
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
