'use client';

import { useState } from 'react';

const categories = [
  'T恤手绘', '卫衣手绘', '牛仔外套', '裤子手绘', '衬衫手绘', '连衣裙',
  '男装手绘', '女装手绘', '童装手绘', '汉服手绘', '旗袍手绘', '民族服饰',
  '欧货手绘', '潮牌手绘', '国潮风格', '复古风格', '油画风格', '卡通IP',
  '帆布鞋手绘', '板鞋手绘', '小白鞋', '运动鞋喷绘', '皮鞋手绘', '靴子手绘',
  '帆布包手绘', '手提包', '双肩包', '行李箱手绘', '钱包手绘', '卡包手绘'
];

export default function CollapsibleCategories() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? categories : categories.slice(0, 12);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {visibleItems.map((item) => (
          <div key={item} className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-center hover:border-yellow-600 transition">
            <p className="text-sm text-gray-300">{item}</p>
          </div>
        ))}
      </div>
      {categories.length > 12 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 mx-auto block px-6 py-2 text-yellow-400 hover:text-yellow-300 transition text-sm font-medium"
        >
          {expanded ? '收起 ↑' : `展开全部 ${categories.length} 个品类 ↓`}
        </button>
      )}
    </div>
  );
}
