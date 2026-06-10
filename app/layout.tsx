import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "久合手绘喷绘工艺-全国服装鞋子箱包手绘定制工厂-20年画师团队",
  description: "久合手绘喷绘工艺20年专注服装、鞋履、箱包纯手工绘制加工，全国发货，服务广州十三行/白马/红棉、佛山、东莞虎门、杭州四季青等全国服装商圈。3天打样，交货快。民族风、旗袍汉服、国潮手绘首选。电话13168873754",
  keywords: [
    "服装手绘",
    "鞋子喷绘",
    "箱包定制",
    "手绘加工厂",
    "全国手绘定制",
    "广州手绘厂",
    "佛山手绘",
    "东莞手绘",
    "民族风手绘定制",
    "旗袍手绘加工",
    "国潮手绘",
    "纯手工喷绘",
    "服装手绘工厂",
    "手绘定制全国发货"
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
