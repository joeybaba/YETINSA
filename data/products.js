/* ========================================
   产品数据配置
======================================== */

// 产品系列配置
const PRODUCT_SERIES = {
  COMMERCIAL_LIGHTING: {
    id: 'commercial-lighting',
    title: 'Commercial Lighting / White Light Series',
    description: 'Professional LED components for commercial and general lighting applications, featuring high efficiency, excellent color rendering, and reliable performance for various indoor and outdoor lighting solutions.',
    products: [
      {
        id: 'emc-2016',
        name: 'EMC 2016 Series',
        image: 'images/tdled_products/emc_2016.jpg',
        badge: 'EMC Package',
        specs: [
          'Package: 2.0×1.6mm',
          'High Efficiency White LED',
          'Excellent Thermal Performance',
          'Commercial Lighting Applications'
        ]
      },
      {
        id: 'emc-3020',
        name: 'EMC 3020 Series',
        image: 'images/tdled_products/emc_3020.jpg',
        badge: 'Mid Power',
        specs: [
          'Package: 3.0×2.0mm',
          'Mid Power White LED',
          'Optimized Light Output',
          'General Lighting Applications'
        ]
      },
      // 更多产品...
    ]
  },
  
  LANDSCAPE_LIGHTING: {
    id: 'landscape-lighting',
    title: 'Landscape Lighting Series',
    description: 'Colorful LED solutions for architectural lighting, landscape illumination, and decorative applications, offering vibrant colors, excellent color mixing, and dynamic lighting effects.',
    products: [
      {
        id: 'landscape-emc-2016',
        name: 'Landscape EMC 2016',
        image: 'images/tdled_products/landscape_emc_2016.jpg',
        badge: 'Color LED',
        specs: [
          'Package: 2.0×1.6mm',
          'Colored LED for Landscape',
          'Weather Resistant',
          'Outdoor Decorative Lighting'
        ]
      },
      // 更多产品...
    ]
  },
  
  STAGE_LIGHTING: {
    id: 'stage-lighting',
    title: 'Stage Lighting Series',
    description: 'Professional stage lighting LEDs designed for entertainment venues, concerts, and theatrical applications, delivering exceptional color accuracy, high brightness, and reliable performance.',
    products: [
      {
        id: 'stage-3639-rgbw',
        name: '3639 RGBW Series',
        image: 'images/tdled_products/stage_3639_rgbw.png',
        badge: 'Stage Compact',
        specs: [
          'Package: 3.6×3.9mm',
          'Compact Stage LED',
          'RGBW Color Mixing',
          'Studio & Small Venue'
        ]
      },
      // 更多产品...
    ]
  },
  
  AUTOMOTIVE_LED: {
    id: 'automotive-led',
    title: 'Automotive LED Series',
    description: 'Automotive-grade LED components for headlights, signal lights, interior lighting, and dashboard applications, meeting strict automotive standards for reliability and performance.',
    products: [
      {
        id: 'automotive-emc-1616',
        name: 'Automotive EMC 1616',
        image: 'images/tdled_products/automotive_emc_1616.jpg',
        badge: 'Automotive Grade',
        specs: [
          'Package: 1.6×1.6mm',
          'AEC-Q102 Qualified',
          'High Temperature Resistant',
          'Signal & Interior Lighting'
        ]
      },
      // 更多产品...
    ]
  },
  
  LED_BACKLIGHT: {
    id: 'led-backlight',
    title: 'LED Backlight Series',
    description: 'Specialized LED components for display backlighting applications, including TV, monitor, mobile device, and automotive display backlighting with excellent uniformity and efficiency.',
    products: [
      {
        id: 'backlight-1616-side',
        name: 'Backlight 1616 Side View',
        image: 'images/tdled_products/backlight_1616_side.png',
        badge: 'Side View',
        specs: [
          'Package: 1.6×1.6mm',
          'Side-View Design',
          'Compact Form Factor',
          'Mobile Device Backlight'
        ]
      },
      // 更多产品...
    ]
  }
};

// 应用场景配置
const APPLICATION_SCENARIOS = [
  {
    id: 'retail-display',
    title: 'Retail Display',
    description: 'High-quality LED display solutions for retail environments, providing excellent color reproduction and brightness for product showcasing and customer engagement.',
    image: 'images/applications/retail-display.jpg',
    link: '#'
  },
  {
    id: 'control-room',
    title: 'Control Room',
    description: 'Professional-grade LED displays for control rooms and monitoring centers, offering high reliability, excellent visibility, and 24/7 operation capability.',
    image: 'images/applications/control-room.jpg',
    link: '#'
  },
  {
    id: 'conference-room',
    title: 'Conference Room',
    description: 'Advanced LED display technology for conference and meeting rooms, delivering crystal-clear presentations and seamless video conferencing experiences.',
    image: 'images/applications/conference-room.jpg',
    link: '#'
  },
  {
    id: 'outdoor-advertising',
    title: 'Outdoor Advertising',
    description: 'Weather-resistant LED displays for outdoor advertising and digital signage, featuring high brightness, excellent visibility, and robust construction.',
    image: 'images/applications/outdoor-advertising.jpg',
    link: '#'
  },
  {
    id: 'home-display',
    title: 'Home Display',
    description: 'High-quality LED display products for home entertainment, offering excellent color performance and viewing experience for home theaters and living rooms.',
    image: 'images/applications/home-display.jpg',
    link: '#'
  },
  {
    id: 'film-production',
    title: 'Film Production',
    description: 'Professional-grade LED display solutions for film production, virtual shooting, and broadcasting, providing high color gamut coverage and stable performance.',
    image: 'images/applications/movie-production.jpg',
    link: '#'
  }
];

// 公司数据配置
const COMPANY_DATA = {
  stats: [
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Industry Leadership'
    },
    {
      number: '500+',
      label: 'Global Partners',
      description: 'Worldwide Network'
    },
    {
      number: '1000+',
      label: 'Projects Completed',
      description: 'Successful Deployments'
    },
    {
      number: '99.9%',
      label: 'Uptime Reliability',
      description: 'Mission Critical'
    }
  ],
  
  highlights: [
    {
      icon: '🏆',
      title: 'Industry Leadership',
      description: 'Leading provider of professional LED display solutions with cutting-edge technology and innovative designs.'
    },
    {
      icon: '🔬',
      title: 'R&D Excellence',
      description: 'Continuous investment in research and development to deliver next-generation LED display technologies.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Serving customers worldwide with comprehensive support and localized service networks.'
    },
    {
      icon: '⚡',
      title: 'Innovation Focus',
      description: 'Pioneering advanced LED technologies including MicroLED, MiniLED, and smart display solutions.'
    }
  ],
  
  culture: [
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of LED display technology, investing in research and development to create breakthrough solutions.'
    },
    {
      title: 'Quality',
      description: 'Our commitment to excellence ensures every product meets the highest standards of performance, reliability, and durability.'
    },
    {
      title: 'Customer Focus',
      description: 'We prioritize customer success, providing comprehensive support and customized solutions to meet unique requirements.'
    },
    {
      title: 'Sustainability',
      description: 'We are dedicated to environmental responsibility, developing energy-efficient products and sustainable manufacturing processes.'
    }
  ]
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PRODUCT_SERIES,
    APPLICATION_SCENARIOS,
    COMPANY_DATA
  };
}
