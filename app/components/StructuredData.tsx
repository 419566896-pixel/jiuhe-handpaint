import Script from 'next/script';

const SITE_URL = 'https://jiuheshouhui.cn';

// 30+ 服务覆盖城市
const CITIES = [
  // 广东省
  { name: '广州', area: '十三行、白马、红棉、沙河、站西金宝、中大布料、国际轻纺城' },
  { name: '佛山', area: '童装城、张槎针织、南海盐步内衣' },
  { name: '东莞', area: '虎门女装、大朗毛织、厚街鞋业' },
  { name: '深圳', area: '南油女装、华强北、东门' },
  // 浙江省
  { name: '杭州', area: '四季青、意法服饰、新杭派' },
  { name: '织里', area: '童装批发市场' },
  // 上海/江苏
  { name: '上海', area: '七浦路、轻纺市场' },
  { name: '常熟', area: '服装城、招商城' },
  // 湖北/四川/北京
  { name: '武汉', area: '汉正街、万商白马' },
  { name: '成都', area: '荷花池、蓝光金荷花' },
  { name: '北京', area: '动物园、大红门、木樨园' },
  // 山东
  { name: '即墨', area: '服装批发市场' },
];

export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#business`,
    name: '久合手绘喷绘工艺厂',
    alternateName: ['久合手绘', '久合手绘喷绘厂', '广州市白云区久合手绘喷绘工艺厂'],
    description:
      '20年专注服装/鞋履/箱包纯手工绘制加工，全国发货，服务5000+品牌客户，年产手绘作品100000+件。覆盖广州十三行、杭州四季青、武汉汉正街、成都荷花池等全国30+城市批发市场。',
    url: SITE_URL,
    telephone: '+86-13168873754',
    email: 'contact@jiuheshouhui.cn',
    image: `${SITE_URL}/images/IMG_1189.webp`,
    logo: `${SITE_URL}/favicon.png`,
    priceRange: '$$',
    currenciesAccepted: 'CNY',
    paymentAccepted: 'Cash, Bank Transfer, WeChat Pay, Alipay',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '大冈村大园街12号',
      addressLocality: '广州市白云区',
      addressRegion: '广东省',
      postalCode: '510440',
      addressCountry: 'CN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.2317,
      longitude: 113.2663,
    },
    areaServed: [
      { '@type': 'Country', name: '中国' },
      ...CITIES.map((c) => ({
        '@type': 'City' as const,
        name: c.name,
        description: c.area,
      })),
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [] as string[],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '5000',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '手绘定制服务',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '服装手绘定制',
            description: 'T恤/卫衣/牛仔外套/裤子/衬衫/连衣裙/汉服/旗袍等各类服装纯手工绘制',
            serviceType: '手绘加工',
            areaServed: { '@type': 'Country', name: '中国' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '鞋履喷绘定制',
            description: '帆布鞋/板鞋/小白鞋/运动鞋/皮鞋纯手工喷绘，防水不掉色',
            serviceType: '喷绘加工',
            areaServed: { '@type': 'Country', name: '中国' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '箱包手绘定制',
            description: '帆布包/手提包/双肩包/行李箱纯手工绘制，适合电商差异化、文创周边',
            serviceType: '手绘加工',
            areaServed: { '@type': 'Country', name: '中国' },
          },
        },
      ],
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: '作品案例', item: `${SITE_URL}#gallery` },
      { '@type': 'ListItem', position: 3, name: '服务品类', item: `${SITE_URL}#services` },
      { '@type': 'ListItem', position: 4, name: '关于我们', item: `${SITE_URL}/about` },
      { '@type': 'ListItem', position: 5, name: '常见问题', item: `${SITE_URL}#faq` },
    ],
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: '久合手绘喷绘工艺厂',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-13168873754',
      contactType: 'customer service',
      areaServed: 'CN',
      availableLanguage: 'Chinese',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '大冈村大园街12号',
      addressLocality: '广州市白云区',
      addressRegion: '广东省',
      postalCode: '510440',
      addressCountry: 'CN',
    },
  };

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '久合手绘喷绘工艺 - 服装鞋包手绘定制工厂',
    description: '全国服装鞋包箱商家都在找的手绘厂，20年画师团队经验，全国发货',
    url: SITE_URL,
    inLanguage: 'zh-CN',
    isPartOf: { '@id': `${SITE_URL}#organization` },
    about: { '@id': `${SITE_URL}#business` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.faq-answer'],
    },
  };

  return (
    <>
      <Script
        id="ld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Script
        id="ld-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
    </>
  );
}
