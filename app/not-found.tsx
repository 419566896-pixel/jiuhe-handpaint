import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🎨</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">页面未找到</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          抱歉，您访问的页面不存在。也许你想看看我们的手绘作品？
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition"
          >
            返回首页
          </Link>
          <a
            href="tel:13168873754"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-full font-semibold transition"
          >
            📞 咨询我们
          </a>
        </div>
      </div>
    </div>
  );
}
