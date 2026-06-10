import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, phone, wechat, type, quantity, message } = body;

  // Basic validation
  if (!name || !phone || !type || !message) {
    return NextResponse.json({ error: "请填写必填字段" }, { status: 400 });
  }

  const phoneRegex = /^1[3-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
    return NextResponse.json({ error: "请输入正确的手机号码" }, { status: 400 });
  }

  // In production: integrate with email/WeChat notification service here
  // For now, log the submission
  console.log("New booking:", { name, phone, wechat, type, quantity, message });

  return NextResponse.json({ success: true, message: "预约成功！我们将在48小时内与您联系。" });
}
