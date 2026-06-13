'use client';

import { useState } from 'react';

const allCategories = [
  'T恤手绘', '卫衣手绘', '牛仔外套', '裤子手绘', '衬衫手绘', '连衣裙',
  '男装手绘', '女装手绘', '童装手绘', '汉服手绘', '旗袍手绘', '民族服饰',
  '欧货手绘', '潮牌手绘', '国潮风格', '复古风格', '油画风格', '卡通IP',
  '帆布鞋手绘', '板鞋手绘', '小白鞋', '运动鞋喷绘', '皮鞋手绘', '靴子手绘',
  '帆布包手绘', '手提包', '双肩包', '行李箱手绘', '钱包手绘', '卡包手绘'
];

const filterGroups = [
  { label: '全部', filter: null },
  { label: '👕 服装', keywords: ['T恤', '卫衣', '牛仔', '裤子', '衬衫', '连衣裙', '男装', '女装', '童装', '汉服', '旗袍', '民族服饰', '欧货', '潮牌'] },
  { label: '👟 鞋履', keywords: ['帆布鞋', '板鞋', '小白鞋', '运动鞋', '皮鞋', '靴子'] },
  { label: '👜 箱包', keywords: ['帆布包', '手提包', '双肩包', '行李箱', '钱包', '卡包'] },
  { label: '🎨 风格', keywords: ['国潮', '复古', '油画', '卡通', '油画风格', '国潮风格', '复古风格'] },
];

export default function CollapsibleCategories() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const filtered = allCategories.filter((item) => {
    if (!activeFilter) return true;
    const group = filterGroups.find((g) => g.label === activeFilter);
    if (!group?.keywords) return true;
    return group.keywords.some((kw) => item.includes(kw));
  });

  const visibleItems = expanded ? filtered : filtered.slice(0, 12);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {filterGroups.map((group) => (
          <button
            key={group.label}
            onClick={() => setActiveFilter(group.filter ?? null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === group.filter || (group.filter === null && activeFilter === null)
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {visibleItems.map((item) => (
          <div key={item} className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-center hover:border-yellow-600 hover:bg-gray-700/50 transition">
            <p className="text-sm text-gray-300">{item}</p>
          </div>
        ))}
      </div>

      {/* Show count */}
      <p className="text-center text-gray-500 text-xs mt-2">
        显示 {visibleItems.length} / {filtered.length} 个品类
      </p>

      {allCategories.length > 12 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 mx-auto block px-6 py-2 text-yellow-400 hover:text-yellow-300 transition text-sm font-medium"
        >
          {expanded ? `收起 ↑` : `展开全部 ${filtered.length} 个品类 ↓`}
        </button>
      )}
    </div>
  );
}
