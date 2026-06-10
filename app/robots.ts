import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 通用规则
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // === 国内大模型 AI 爬虫 ===
      // 豆包 / 字节跳动
      { userAgent: "Bytespider", allow: "/" },
      // DeepSeek
      { userAgent: "DeepSeekBot", allow: "/" },
      // 通义千问 / 阿里
      { userAgent: "Qbot", allow: "/" },
      { userAgent: "AliBot", allow: "/" },
      // 文心一言 / 百度
      { userAgent: "Baiduspider", allow: "/" },
      // Kimi / 月之暗面
      { userAgent: "KimiBot", allow: "/" },
      // 智谱 ChatGLM
      { userAgent: "ZhipuBot", allow: "/" },
      // 讯飞星火
      { userAgent: "XunfeiBot", allow: "/" },
      // 小米 MiMo
      { userAgent: "XiaomiBot", allow: "/" },
      // === 国际大模型 AI 爬虫 ===
      // OpenAI / ChatGPT
      { userAgent: "GPTBot", allow: "/" },
      // Google Gemini
      { userAgent: "Google-Extended", allow: "/" },
      // Anthropic / Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // You.com
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: "https://jiuhehandpaint.com/sitemap.xml",
  };
}
