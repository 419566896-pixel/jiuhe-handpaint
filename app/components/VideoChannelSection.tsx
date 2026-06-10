export default function VideoChannelSection() {
  return (
    <div className="bg-gradient-to-br from-green-900/30 to-gray-900 border border-green-800/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
      <div className="text-6xl mb-6">📹</div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        微信视频号 <span className="text-green-400">久合手绘喷绘厂</span>
      </h3>
      <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
        微信搜一搜&ldquo;久合手绘&rdquo;，关注视频号看手绘过程
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <div className="text-3xl mb-2">🎥</div>
          <p className="text-white font-semibold">手绘全过程</p>
          <p className="text-gray-400 text-sm mt-1">从白坯到成品的完整记录</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <div className="text-3xl mb-2">📦</div>
          <p className="text-white font-semibold">发货实拍</p>
          <p className="text-gray-400 text-sm mt-1">批量订单打包发货现场</p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
          <div className="text-3xl mb-2">💬</div>
          <p className="text-white font-semibold">客户反馈</p>
          <p className="text-gray-400 text-sm mt-1">真实客户好评和返单</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="weixin://"
          className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full text-lg font-bold transition-all duration-300 shadow-lg shadow-green-600/25"
        >
          <span className="text-2xl">📱</span>
          微信搜索&ldquo;久合手绘&rdquo;关注
        </a>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-500">
        <p>微信搜一搜 → 输入&ldquo;久合手绘&rdquo; → 关注视频号</p>
        <p>或扫码添加微信 → 看朋友圈视频</p>
      </div>
    </div>
  );
}
