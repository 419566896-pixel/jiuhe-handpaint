import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于久合手绘喷绘厂",
  description: "久合手绘喷绘厂2006年创立于广州，20年专注服装/鞋履/箱包手绘定制，服务5000+客户，覆盖全国30+城市。电话13168873754",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
