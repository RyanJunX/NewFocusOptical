window.NFO_DATA = {
  business: {
    nameEn: "New Focus Optical Centre",
    nameZh: "新视眼镜",
    whatsapp: "+60 12-512 8668",
    whatsappWaMe: "60125128668",
    address: "261, Jalan Gunung Rapat, Taman Ipoh Jaya, 31350 Ipoh, Perak",
    hours: "11:00 AM - 7:30 PM"
  },
  categories: [
    { id: "myopia-hyperopia", zh: "近视 / 远视隐形眼镜", en: "Myopia / Hyperopia Contact Lenses", ms: "Kanta Sentuh Rabun Jauh / Dekat" },
    { id: "define-beauty", zh: "美瞳日抛 ACUVUE DEFINE", en: "Beauty Daily ACUVUE DEFINE", ms: "ACUVUE DEFINE Harian" },
    { id: "astigmatism", zh: "散光隐形眼镜", en: "Astigmatism Contact Lenses", ms: "Kanta Sentuh Astigmatism" },
    { id: "multifocal", zh: "老花隐形眼镜", en: "Multifocal Contact Lenses", ms: "Kanta Sentuh Multifokal" }
  ],
  products: [
    {
      id: "acuvue-oasys",
      brand: "ACUVUE",
      category: "myopia-hyperopia",
      type: "standard",
      name: { zh: "ACUVUE OASYS", en: "ACUVUE OASYS", ms: "ACUVUE OASYS" },
      summary: { zh: "适合日常佩戴的清晰舒适系列，可选择日抛或双周抛规格。", en: "A clear comfort series for everyday wear, available in daily and bi-weekly options.", ms: "Siri selesa untuk kegunaan harian, tersedia dalam pilihan harian dan dua minggu." },
      image: "ACUVUE_official_HD_images/02_website_square_1200_white/01_ACUVUE_OASYS_1-Day_30-Pack_1200x1200.jpg",
      active: true,
      variants: [
        { id: "oasys-daily-30", image: "ACUVUE_official_HD_images/02_website_square_1200_white/01_ACUVUE_OASYS_1-Day_30-Pack_1200x1200.jpg", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, singlePrice: 215, bundle: { qty: 4, unitPrice: 190 } },
        { id: "oasys-biweekly-6", image: "ACUVUE_official_HD_images/02_website_square_1200_white/03_ACUVUE_OASYS_2-Week_1200x1200.jpg", replacement: { zh: "双周抛", en: "Bi-weekly", ms: "Dua minggu" }, pack: { zh: "6片装", en: "6 lenses/box", ms: "6 keping/kotak" }, singlePrice: 166, bundle: { qty: 4, unitPrice: 153 } }
      ]
    },
    {
      id: "acuvue-moist",
      brand: "ACUVUE",
      category: "myopia-hyperopia",
      type: "standard",
      name: { zh: "1-Day ACUVUE MOIST", en: "1-Day ACUVUE MOIST", ms: "1-Day ACUVUE MOIST" },
      summary: { zh: "日抛型隐形眼镜，适合想要每日更换和方便护理的顾客。", en: "Daily disposable contact lenses for customers who prefer fresh lenses every day.", ms: "Kanta sentuh pakai buang harian untuk pelanggan yang mahu kanta baharu setiap hari." },
      image: "ACUVUE_official_HD_images/02_website_square_1200_white/02_1-Day_ACUVUE_MOIST_1200x1200.jpg",
      active: true,
      variants: [
        { id: "moist-daily-30", image: "ACUVUE_official_HD_images/02_website_square_1200_white/02_1-Day_ACUVUE_MOIST_1200x1200.jpg", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, singlePrice: 172, bundle: { qty: 4, unitPrice: 155 } }
      ]
    },
    {
      id: "acuvue-vita",
      brand: "ACUVUE",
      category: "myopia-hyperopia",
      type: "standard",
      name: { zh: "ACUVUE VITA", en: "ACUVUE VITA", ms: "ACUVUE VITA" },
      summary: { zh: "月抛型隐形眼镜，适合固定周期更换的顾客。", en: "Monthly contact lenses for customers who prefer a regular replacement cycle.", ms: "Kanta sentuh bulanan untuk pelanggan yang memilih kitaran gantian tetap." },
      image: "ACUVUE_official_HD_images/02_website_square_1200_white/04_ACUVUE_VITA_Monthly_1200x1200.jpg",
      active: true,
      variants: [
        { id: "vita-monthly-6", image: "ACUVUE_official_HD_images/02_website_square_1200_white/04_ACUVUE_VITA_Monthly_1200x1200.jpg", replacement: { zh: "月抛", en: "Monthly", ms: "Bulanan" }, pack: { zh: "6片装", en: "6 lenses/box", ms: "6 keping/kotak" }, singlePrice: 218, bundle: { qty: 2, unitPrice: 183 } }
      ]
    },
    {
      id: "acuvue-define",
      brand: "ACUVUE",
      category: "define-beauty",
      type: "color",
      name: { zh: "ACUVUE DEFINE", en: "ACUVUE DEFINE", ms: "ACUVUE DEFINE" },
      summary: { zh: "以颜色和自然放大效果为主的美瞳日抛系列。点进商品后可选择颜色并查看佩戴示例。", en: "Beauty daily lenses focused on color and natural eye definition. Select a color inside the product detail to preview the wearing effect.", ms: "Kanta harian berwarna untuk efek mata lebih jelas secara semula jadi. Pilih warna dalam butiran produk untuk pratonton kesan pemakaian." },
      image: "pic/美瞳封面.png",
      colors: [
        { id: "fresh-grayzel", name: "Fresh Grayzel", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/13_FRESH_GRAYZEL_冷灰棕.png", colorHex: "#8f918c" },
        { id: "fresh-hazel", name: "Fresh Hazel", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/12_FRESH_HAZEL_琥珀棕.png", colorHex: "#9b7048" },
        { id: "fresh-latte", name: "Fresh Latte", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/11_FRESH_LATTE_拿铁啡.png", colorHex: "#b5906a" },
        { id: "fresh-lilac", name: "Fresh Lilac", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/10_FRESH_LILAC_丁香紫.png", colorHex: "#aa92b8" },
        { id: "mystic-style", name: "Mystic Style", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/08_MYSTIC_STYLE_神秘灰.png", colorHex: "#5f6b73" },
        { id: "radiant-timeless", name: "Radiant Timeless", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/09_RADIANT_TIMELESS_永恒棕.png", colorHex: "#7d705f" },
        { id: "sheer-allure", name: "Sheer Allure", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/07_SHEER_ALLURE_柔魅灰棕.png", colorHex: "#746452" },
        { id: "sheer-dream", name: "Sheer Dream", group: "Fresh Collection", image: "美瞳13款独立图片_600x600/06_SHEER_DREAM_柔美紫灰.png", colorHex: "#857a70" },
        { id: "radiant-chic", name: "Radiant Chic", group: "Classic Collection", image: "美瞳13款独立图片_600x600/01_RADIANT_CHIC_闪耀铜.png", colorHex: "#5e5146" },
        { id: "radiant-charm", name: "Radiant Charm", group: "Classic Collection", image: "美瞳13款独立图片_600x600/05_RADIANT_CHARM_闪耀金.png", colorHex: "#725745" },
        { id: "radiant-bright", name: "Radiant Bright", group: "Classic Collection", image: "美瞳13款独立图片_600x600/02_RADIANT_BRIGHT_闪耀啡.png", colorHex: "#a4865f" },
        { id: "natural-shine", name: "Natural Shine", group: "Classic Collection", image: "美瞳13款独立图片_600x600/04_NATURAL_SHINE_闪亮金.png", colorHex: "#6b5848" },
        { id: "vivid-style", name: "Vivid Style", group: "Classic Collection", image: "美瞳13款独立图片_600x600/03_VIVID_STYLE_动人啡.png", colorHex: "#4f534d" }
      ],
      active: true,
      variants: [
        { id: "define-30-1", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, quantityLabel: { zh: "1盒", en: "1 box", ms: "1 kotak" }, singlePrice: 193 },
        { id: "define-30-4", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, quantityLabel: { zh: "4盒", en: "4 boxes", ms: "4 kotak" }, singlePrice: 174, bundle: { qty: 4, unitPrice: 174 } },
        { id: "define-10-1", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "10片装", en: "10 lenses/box", ms: "10 keping/kotak" }, quantityLabel: { zh: "1盒", en: "1 box", ms: "1 kotak" }, singlePrice: 82.5 }
      ]
    },
    {
      id: "acuvue-oasys-astigmatism",
      brand: "ACUVUE",
      category: "astigmatism",
      type: "standard",
      name: { zh: "ACUVUE OASYS for Astigmatism", en: "ACUVUE OASYS for Astigmatism", ms: "ACUVUE OASYS for Astigmatism" },
      summary: { zh: "散光专用 OASYS 系列，可选择日抛或双周抛规格。", en: "OASYS series for astigmatism, available in daily and bi-weekly options.", ms: "Siri OASYS untuk astigmatism, tersedia dalam pilihan harian dan dua minggu." },
      image: "ACUVUE_official_HD_images/02_website_square_1200_white/05_ACUVUE_OASYS_1-Day_Astigmatism_1200x1200.jpg",
      active: true,
      variants: [
        { id: "oasys-astigmatism-daily-30", image: "ACUVUE_official_HD_images/02_website_square_1200_white/05_ACUVUE_OASYS_1-Day_Astigmatism_1200x1200.jpg", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, singlePrice: 254, bundle: { qty: 4, unitPrice: 225 } },
        { id: "oasys-astigmatism-biweekly-6", image: "ACUVUE_official_HD_images/02_website_square_1200_white/07_ACUVUE_OASYS_2-Week_Astigmatism_1200x1200.jpg", replacement: { zh: "双周抛", en: "Bi-weekly", ms: "Dua minggu" }, pack: { zh: "6片装", en: "6 lenses/box", ms: "6 keping/kotak" }, singlePrice: 223, bundle: { qty: 4, unitPrice: 198 } }
      ]
    },
    {
      id: "acuvue-moist-astigmatism",
      brand: "ACUVUE",
      category: "astigmatism",
      type: "standard",
      name: { zh: "1-Day ACUVUE MOIST for Astigmatism", en: "1-Day ACUVUE MOIST for Astigmatism", ms: "1-Day ACUVUE MOIST for Astigmatism" },
      summary: { zh: "散光日抛隐形眼镜，适合每日更换。", en: "Daily disposable lenses for astigmatism.", ms: "Kanta sentuh harian untuk astigmatism." },
      image: "ACUVUE_official_HD_images/02_website_square_1200_white/06_1-Day_ACUVUE_MOIST_Astigmatism_1200x1200.jpg",
      active: true,
      variants: [
        { id: "moist-astigmatism-daily-30", image: "ACUVUE_official_HD_images/02_website_square_1200_white/06_1-Day_ACUVUE_MOIST_Astigmatism_1200x1200.jpg", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, singlePrice: 213, bundle: { qty: 4, unitPrice: 189 } }
      ]
    },
    {
      id: "acuvue-vita-astigmatism",
      brand: "ACUVUE",
      category: "astigmatism",
      type: "standard",
      name: { zh: "ACUVUE VITA for Astigmatism", en: "ACUVUE VITA for Astigmatism", ms: "ACUVUE VITA for Astigmatism" },
      summary: { zh: "散光月抛隐形眼镜，适合固定周期更换。", en: "Monthly contact lenses for astigmatism.", ms: "Kanta sentuh bulanan untuk astigmatism." },
      image: "ACUVUE_official_HD_images/02_website_square_1200_white/08_ACUVUE_VITA_Astigmatism_1200x1200.jpg",
      active: true,
      variants: [
        { id: "vita-astigmatism-monthly-6", image: "ACUVUE_official_HD_images/02_website_square_1200_white/08_ACUVUE_VITA_Astigmatism_1200x1200.jpg", replacement: { zh: "月抛", en: "Monthly", ms: "Bulanan" }, pack: { zh: "6片装", en: "6 lenses/box", ms: "6 keping/kotak" }, singlePrice: 276, bundle: { qty: 2, unitPrice: 239 } }
      ]
    },
    {
      id: "acuvue-moist-multifocal",
      brand: "ACUVUE",
      category: "multifocal",
      type: "standard",
      name: { zh: "1-Day ACUVUE MOIST Multifocal", en: "1-Day ACUVUE MOIST Multifocal", ms: "1-Day ACUVUE MOIST Multifocal" },
      summary: { zh: "老花/多焦点日抛隐形眼镜。", en: "Daily disposable multifocal contact lenses.", ms: "Kanta sentuh multifokal harian." },
      image: "ACUVUE_official_HD_images/02_website_square_1200_white/09_1-Day_ACUVUE_MOIST_Multifocal_1200x1200.jpg",
      active: true,
      variants: [
        { id: "moist-multifocal-daily-30", image: "ACUVUE_official_HD_images/02_website_square_1200_white/09_1-Day_ACUVUE_MOIST_Multifocal_1200x1200.jpg", replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, singlePrice: 257, bundle: { qty: 4, unitPrice: 224 } }
      ]
    }
  ],
  orders: []
};






