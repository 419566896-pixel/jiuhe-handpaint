'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      wechat: formData.get('wechat'),
      type: formData.get('type'),
      quantity: formData.get('quantity'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage(result.message || '提交成功！');
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage(result.error || '提交失败，请重试');
      }
    } catch (error) {
      setMessage('网络错误，请稍后重试');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium mb-2">您的称呼 *</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 disabled:opacity-50"
              placeholder="姓名或公司名"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">联系电话 *</label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 disabled:opacity-50"
              placeholder="手机号码"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contact-wechat" className="block text-sm font-medium mb-2">微信号</label>
            <input
              id="contact-wechat"
              type="text"
              name="wechat"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 disabled:opacity-50"
              placeholder="微信号（方便发作品集）"
            />
          </div>
          <div>
            <label htmlFor="contact-type" className="block text-sm font-medium mb-2">产品类型 *</label>
            <select
              id="contact-type"
              name="type"
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 disabled:opacity-50"
            >
              <option value="">请选择</option>
              <option value="clothes">服装</option>
              <option value="shoes">鞋履</option>
              <option value="bags">箱包</option>
              <option value="other">其他</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-quantity" className="block text-sm font-medium mb-2">订单数量</label>
          <select
            id="contact-quantity"
            name="quantity"
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 disabled:opacity-50"
          >
            <option value="">请选择</option>
            <option value="10-50">10-50件</option>
            <option value="50-200">50-200件</option>
            <option value="200+">200件以上</option>
            <option value="unknown">未确定</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium mb-2">需求描述 *</label>
          <textarea
            id="contact-message"
            name="message"
            required
            disabled={loading}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 resize-none disabled:opacity-50"
            placeholder="请描述您的需求：想要什么风格？是否有参考图？预期交货时间？"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {loading && (
            <svg className="w-5 h-5 animate-spin-slow" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {loading ? '提交中...' : '提交预约'}
        </button>

        {message && (
          <div
            className={`p-4 rounded-lg text-center animate-success ${
              message.includes('成功') ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}
          >
            {message.includes('成功') ? '✅ ' : '⚠️ '}{message}
          </div>
        )}
      </form>
    </>
  );
}
