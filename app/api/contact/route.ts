import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const typeLabels: Record<string, string> = {
  clothes: "服装",
  shoes: "鞋履",
  bags: "箱包",
  other: "其他",
};

const quantityLabels: Record<string, string> = {
  "10-50": "10-50件",
  "50-200": "50-200件",
  "200+": "200件以上",
  unknown: "未确定",
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, phone, wechat, type, quantity, message } = body;

  if (!name || !phone || !type || !message) {
    return NextResponse.json({ error: "请填写必填字段" }, { status: 400 });
  }

  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(String(phone).replace(/\s/g, ""))) {
    return NextResponse.json({ error: "请输入正确的手机号码" }, { status: 400 });
  }

  // Log to console as fallback
  console.log("New booking:", { name, phone, wechat, type, quantity, message });

  // Send email notification
  const smtpPass = process.env.SMTP_PASS;
  const smtpUser = process.env.SMTP_USER;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (smtpPass && smtpUser && notifyEmail) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.qq.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const typeLabel = typeLabels[type] || type;
      const quantityLabel = quantityLabels[quantity] || quantity || "未填写";
      const wechatInfo = wechat || "未填写";

      await transporter.sendMail({
        from: `"久合手绘官网" <${smtpUser}>`,
        to: notifyEmail,
        subject: `🎨 新预约打样 - ${name}（${typeLabel}）`,
        html: `
          <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
            <div style="background: #1a1a1a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; color: #eab308;">久合手绘 — 新预约打样</h2>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #e5e5e5; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666; width: 100px;">称呼</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">电话</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">微信</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${wechatInfo}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">产品类型</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${typeLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">订单数量</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${quantityLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color: #666;">需求描述</td>
                  <td style="padding: 10px;">${message}</td>
                </tr>
              </table>
              <p style="margin-top: 20px; color: #999; font-size: 12px;">
                来自 jiuheshouhui.cn 官网预约表单 · ${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
      // Don't fail the request if email fails
    }
  }

  return NextResponse.json({ success: true, message: "预约成功！我们将在48小时内与您联系。" });
}
