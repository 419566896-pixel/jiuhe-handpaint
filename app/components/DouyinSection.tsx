export default function DouyinSection() {
  const douyinId = 'jiuheshouhui';

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12">
        <div className="text-6xl mb-6">🎵</div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          关注抖音 <span className="text-cyan-400">@{douyinId}</span>
        </h3>
        <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
          更多手绘过程视频、作品展示、画师日常，尽在抖音
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <div className="text-3xl mb-2">🎬</div>
            <p className="text-white font-semibold">手绘过程</p>
            <p className="text-gray-400 text-sm mt-1">看画师一笔一笔创作</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <div className="text-3xl mb-2">👟</div>
            <p className="text-white font-semibold">成品展示</p>
            <p className="text-gray-400 text-sm mt-1">服装/鞋履/箱包作品</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <div className="text-3xl mb-2">🏭</div>
            <p className="text-white font-semibold">工厂日常</p>
            <p className="text-gray-400 text-sm mt-1">20年老厂真实场景</p>
          </div>
        </div>

        <a
          href={`https://www.douyin.com/user/${douyinId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-full text-lg font-bold transition-all duration-300 shadow-lg shadow-cyan-500/25"
        >
          <span className="text-2xl">🎵</span>
          打开抖音看更多作品
        </a>

        <p className="text-gray-500 text-sm mt-4">
          抖音号：{douyinId} · 复制抖音号搜索关注
        </p>
      </div>
    </div>
  );
}
