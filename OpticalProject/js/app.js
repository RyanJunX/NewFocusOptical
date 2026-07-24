(function () {
  const STORAGE_KEY = "nfo.contact.catalog.v2";
  const OLD_STORAGE_KEYS = ["nfo.contact.demo.v1", "nfo.local.demo.v2"];
  const ADMIN_AUTH_KEY = "nfo.admin.auth";
  const ADMIN_USER = "newfocusoptical";
  const ADMIN_PASSWORD = "newfocus@1668";

  const copy = {
    zh: {
      menuHome: "主页", menuContactsLens: "隐形眼镜商品", menuContact: "联系方式",
      heroEyebrow: "怡保本地眼镜店 · 老字号服务", heroTitle: "New Focus Optical Centre / 新视眼镜", heroText: "扎根怡保多年的社区眼镜店，提供验光咨询、眼镜配置、隐形眼镜选购与售后调整服务。我们重视清楚说明、合适推荐和稳定的门店跟进。", browseProducts: "查看隐形眼镜",
      addressLabel: "地址", hoursLabel: "营业时间", catalogEyebrow: "隐形眼镜", catalogTitle: "按品牌与系列筛选", catalogIntro: "先选择品牌，再选择品牌内的系列或类别。当前示例品牌为 ACUVUE。", brandLabel: "品牌", categoryLabel: "Series / Categories", all: "ALL",
      product: "产品", ask: "WhatsApp 询问", priceNote: "以上为建议零售价，并已包含 SST。请以 WhatsApp 或门店最终确认为准。",
      featureYears: "多年本地服务", featureYearsText: "服务怡保与周边社区，熟悉本地顾客日常配镜和隐形眼镜需求。", featureService: "主打服务", featureServiceText: "验光咨询、眼镜配置、隐形眼镜零售、镜框调整与售后跟进。", featureCare: "清楚报价", featureCareText: "线上先查看产品与参考价，再通过 WhatsApp 或门店确认库存和最终价格。", homeFeatureOne: "专业建议", homeFeatureOneText: "根据日常使用场景、预算和舒适度需求，协助顾客选择适合的镜片或隐形眼镜。", homeFeatureTwo: "门店跟进", homeFeatureTwoText: "线上咨询后可到怡保门店确认产品、取货、调整或询问后续护理方式。", homeFeatureThree: "品牌选择", homeFeatureThreeText: "先以 ACUVUE 隐形眼镜为示例，后续可逐步加入更多品牌和真实库存。", contactEyebrow: "联系方式", contactWhatsapp: "WhatsApp 咨询",
      viewDetails: "查看规格", startingFrom: "起", imagePlaceholder: "产品图片位置", chooseSpec: "选择规格", chooseColor: "选择颜色", chooseQuantity: "选择数量", selectedPrice: "当前参考价", unitPrice: "单盒价", estimatedTotal: "预计总价", color: "颜色", spec: "规格", selectedQty: "已选数量", defaultOnly: "此商品目前只有一个默认规格。",
      saved: "已保存。", deleted: "已删除。", imported: "导入完成。", reset: "样本数据已重置。", invalid: "资料格式不正确。", loginBad: "用户名或密码不正确 / Invalid username or password", empty: "暂无资料", emptyText: "请新增商品或重置样本数据。"
    },
    en: {
      menuHome: "Home", menuContactsLens: "Contact Lenses", menuContact: "Contact",
      heroEyebrow: "Ipoh optical store · Established local service", heroTitle: "New Focus Optical Centre", heroText: "A community optical store rooted in Ipoh, offering optical consultation, eyewear fitting, contact lens retail, and follow-up care. We focus on clear explanation, suitable recommendations, and reliable store support.", browseProducts: "View contact lenses",
      addressLabel: "Address", hoursLabel: "Business hours", catalogEyebrow: "Contact Lenses", catalogTitle: "Filter by Brand and Series", catalogIntro: "Select a brand first, then filter by the brand series or category. Current sample brand: ACUVUE.", brandLabel: "Brand", categoryLabel: "Series / Categories", all: "ALL",
      product: "Product", ask: "Ask on WhatsApp", priceNote: "Prices shown are suggested retail prices and include SST. Final stock and price should be confirmed by WhatsApp or in store.",
      featureYears: "Established Local Service", featureYearsText: "Serving Ipoh and nearby communities with practical eyewear and contact lens advice.", featureService: "Core Services", featureServiceText: "Optical consultation, eyewear fitting, contact lens retail, frame adjustment, and follow-up care.", featureCare: "Clear Quotation", featureCareText: "Customers can review products and reference prices online, then confirm stock and final pricing by WhatsApp or in store.", homeFeatureOne: "Professional Advice", homeFeatureOneText: "We help customers choose lenses or contact lenses based on daily use, comfort needs, and budget.", homeFeatureTwo: "Store Follow-up", homeFeatureTwoText: "After online inquiry, customers can visit the Ipoh store for confirmation, pickup, adjustment, and care questions.", homeFeatureThree: "Brand Selection", homeFeatureThreeText: "ACUVUE is used as the first sample brand, with more brands and real stock data ready to add later.", contactEyebrow: "Contact", contactWhatsapp: "Ask on WhatsApp",
      viewDetails: "View options", startingFrom: "From", imagePlaceholder: "Product image slot", chooseSpec: "Choose specification", chooseColor: "Choose color", chooseQuantity: "Choose quantity", selectedPrice: "Selected reference price", unitPrice: "Unit price", estimatedTotal: "Estimated total", color: "Color", spec: "Specification", selectedQty: "Selected quantity", defaultOnly: "This product currently has one default specification.",
      saved: "Saved.", deleted: "Deleted.", imported: "Import completed.", reset: "Sample data reset.", invalid: "Invalid data format.", loginBad: "用户名或密码不正确 / Invalid username or password", empty: "No data", emptyText: "Add products or reset sample data."
    },
    ms: {
      menuHome: "Utama", menuContactsLens: "Kanta Sentuh", menuContact: "Hubungi",
      heroEyebrow: "Kedai optik Ipoh · Servis tempatan lama", heroTitle: "New Focus Optical Centre", heroText: "Kedai optik komuniti di Ipoh yang menyediakan konsultasi optik, pemasangan cermin mata, jualan kanta sentuh dan penjagaan susulan. Kami menekankan penerangan jelas, cadangan sesuai dan sokongan kedai yang stabil.", browseProducts: "Lihat kanta sentuh",
      addressLabel: "Alamat", hoursLabel: "Waktu operasi", catalogEyebrow: "Kanta Sentuh", catalogTitle: "Tapis Mengikut Jenama dan Siri", catalogIntro: "Pilih jenama dahulu, kemudian tapis mengikut siri atau kategori. Jenama contoh: ACUVUE.", brandLabel: "Jenama", categoryLabel: "Series / Categories", all: "ALL",
      product: "Produk", ask: "Tanya WhatsApp", priceNote: "Harga ialah cadangan harga runcit dan termasuk SST. Stok dan harga akhir perlu disahkan melalui WhatsApp atau kedai.",
      featureYears: "Servis Tempatan Lama", featureYearsText: "Berkhidmat untuk komuniti Ipoh dan kawasan sekitar dengan nasihat cermin mata dan kanta sentuh.", featureService: "Servis Utama", featureServiceText: "Konsultasi optik, pemasangan cermin mata, jualan kanta sentuh, pelarasan bingkai dan susulan penjagaan.", featureCare: "Harga Jelas", featureCareText: "Pelanggan boleh semak produk dan harga rujukan online, kemudian sahkan stok dan harga akhir melalui WhatsApp atau kedai.", homeFeatureOne: "Nasihat Profesional", homeFeatureOneText: "Kami membantu pelanggan memilih kanta atau kanta sentuh mengikut kegunaan harian, keselesaan dan bajet.", homeFeatureTwo: "Susulan Kedai", homeFeatureTwoText: "Selepas pertanyaan online, pelanggan boleh datang ke kedai Ipoh untuk pengesahan, ambilan, pelarasan dan soalan penjagaan.", homeFeatureThree: "Pilihan Jenama", homeFeatureThreeText: "ACUVUE digunakan sebagai jenama contoh pertama, dengan lebih banyak jenama dan stok sebenar boleh ditambah kemudian.", contactEyebrow: "Hubungi", contactWhatsapp: "Tanya WhatsApp",
      viewDetails: "Lihat pilihan", startingFrom: "Dari", imagePlaceholder: "Ruang gambar produk", chooseSpec: "Pilih spesifikasi", chooseColor: "Pilih warna", chooseQuantity: "Pilih kuantiti", selectedPrice: "Harga rujukan dipilih", unitPrice: "Harga seunit", estimatedTotal: "Jumlah anggaran", color: "Warna", spec: "Spesifikasi", selectedQty: "Kuantiti dipilih", defaultOnly: "Produk ini mempunyai satu spesifikasi lalai sahaja.",
      saved: "Disimpan.", deleted: "Dipadam.", imported: "Import selesai.", reset: "Data sampel telah diset semula.", invalid: "Format data tidak sah.", loginBad: "用户名或密码不正确 / Invalid username or password", empty: "Tiada data", emptyText: "Tambah produk atau set semula data sampel."
    }
  };


  const defaultImages = {
    products: {
      "acuvue-oasys": "ACUVUE_official_HD_images/02_website_square_1200_white/01_ACUVUE_OASYS_1-Day_30-Pack_1200x1200.jpg",
      "acuvue-moist": "ACUVUE_official_HD_images/02_website_square_1200_white/02_1-Day_ACUVUE_MOIST_1200x1200.jpg",
      "acuvue-vita": "ACUVUE_official_HD_images/02_website_square_1200_white/04_ACUVUE_VITA_Monthly_1200x1200.jpg",
      "acuvue-oasys-astigmatism": "ACUVUE_official_HD_images/02_website_square_1200_white/05_ACUVUE_OASYS_1-Day_Astigmatism_1200x1200.jpg",
      "acuvue-moist-astigmatism": "ACUVUE_official_HD_images/02_website_square_1200_white/06_1-Day_ACUVUE_MOIST_Astigmatism_1200x1200.jpg",
      "acuvue-vita-astigmatism": "ACUVUE_official_HD_images/02_website_square_1200_white/08_ACUVUE_VITA_Astigmatism_1200x1200.jpg",
      "acuvue-moist-multifocal": "ACUVUE_official_HD_images/02_website_square_1200_white/09_1-Day_ACUVUE_MOIST_Multifocal_1200x1200.jpg",
      "acuvue-define": "pic/美瞳封面.png"
    },
    colors: {
      "fresh-grayzel": "美瞳13款独立图片_600x600/13_FRESH_GRAYZEL_冷灰棕.png",
      "fresh-hazel": "美瞳13款独立图片_600x600/12_FRESH_HAZEL_琥珀棕.png",
      "fresh-latte": "美瞳13款独立图片_600x600/11_FRESH_LATTE_拿铁啡.png",
      "fresh-lilac": "美瞳13款独立图片_600x600/10_FRESH_LILAC_丁香紫.png",
      "mystic-style": "美瞳13款独立图片_600x600/08_MYSTIC_STYLE_神秘灰.png",
      "radiant-timeless": "美瞳13款独立图片_600x600/09_RADIANT_TIMELESS_永恒棕.png",
      "sheer-allure": "美瞳13款独立图片_600x600/07_SHEER_ALLURE_柔魅灰棕.png",
      "sheer-dream": "美瞳13款独立图片_600x600/06_SHEER_DREAM_柔美紫灰.png",
      "radiant-chic": "美瞳13款独立图片_600x600/01_RADIANT_CHIC_闪耀铜.png",
      "radiant-charm": "美瞳13款独立图片_600x600/05_RADIANT_CHARM_闪耀金.png",
      "radiant-bright": "美瞳13款独立图片_600x600/02_RADIANT_BRIGHT_闪耀啡.png",
      "natural-shine": "美瞳13款独立图片_600x600/04_NATURAL_SHINE_闪亮金.png",
      "vivid-style": "美瞳13款独立图片_600x600/03_VIVID_STYLE_动人啡.png"
    },
    variants: {
      "oasys-daily-30": "ACUVUE_official_HD_images/02_website_square_1200_white/01_ACUVUE_OASYS_1-Day_30-Pack_1200x1200.jpg",
      "oasys-biweekly-6": "ACUVUE_official_HD_images/02_website_square_1200_white/03_ACUVUE_OASYS_2-Week_1200x1200.jpg",
      "moist-daily-30": "ACUVUE_official_HD_images/02_website_square_1200_white/02_1-Day_ACUVUE_MOIST_1200x1200.jpg",
      "vita-monthly-6": "ACUVUE_official_HD_images/02_website_square_1200_white/04_ACUVUE_VITA_Monthly_1200x1200.jpg",
      "oasys-astigmatism-daily-30": "ACUVUE_official_HD_images/02_website_square_1200_white/05_ACUVUE_OASYS_1-Day_Astigmatism_1200x1200.jpg",
      "oasys-astigmatism-biweekly-6": "ACUVUE_official_HD_images/02_website_square_1200_white/07_ACUVUE_OASYS_2-Week_Astigmatism_1200x1200.jpg",
      "moist-astigmatism-daily-30": "ACUVUE_official_HD_images/02_website_square_1200_white/06_1-Day_ACUVUE_MOIST_Astigmatism_1200x1200.jpg",
      "vita-astigmatism-monthly-6": "ACUVUE_official_HD_images/02_website_square_1200_white/08_ACUVUE_VITA_Astigmatism_1200x1200.jpg",
      "moist-multifocal-daily-30": "ACUVUE_official_HD_images/02_website_square_1200_white/09_1-Day_ACUVUE_MOIST_Multifocal_1200x1200.jpg"
    }
  };

  const state = { lang: "zh", data: loadData(), selectedBrand: "ACUVUE", selectedCategory: "all", selectedProductId: null, selectedVariantId: null, selectedQty: 1, selectedColorId: null, clientSection: "home", adminId: null, adminAuthed: sessionStorage.getItem(ADMIN_AUTH_KEY) === "1" };

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function loadData() {
    try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) return normalizeData(JSON.parse(raw)); } catch (error) {}
    OLD_STORAGE_KEYS.forEach(key => localStorage.removeItem(key));
    return normalizeData(clone(window.NFO_DATA));
  }
  function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data)); }
  function normalizeData(data) {
    data.business = data.business || clone(window.NFO_DATA.business);
    data.categories = data.categories || [];
    data.orders = data.orders || [];
    data.products = (data.products || []).map(normalizeProduct);
    return data;
  }
  function normalizeProduct(item) {
    const variants = Array.isArray(item.variants) && item.variants.length ? item.variants : [legacyVariant(item)];
    return { ...item, id: String(item.id || slug(item.name || item.brand || "product")), brand: item.brand || "ACUVUE", type: item.type || (Array.isArray(item.colors) && item.colors.length ? "color" : "standard"), name: localizeObject(item.name || item.product || "Untitled Product"), summary: localizeObject(item.summary || ""), notes: item.id === "acuvue-define" ? localizeObject("") : localizeObject(item.notes || ""), image: item.id === "acuvue-define" ? defaultImages.products[item.id] : (item.image || defaultImages.products[item.id] || ""), active: item.active !== false, colors: normalizeColors(item), variants: variants.map((variant, index) => normalizeVariant(variant, item.id || "product", index)) };
  }
  function normalizeColors(product) {
    return (Array.isArray(product.colors) ? product.colors : []).map(color => ({
      ...color,
      image: defaultImages.colors[color.id] || color.image || ""
    }));
  }
  function legacyVariant(item) { return { id: (item.id || "product") + "-default", replacement: item.replacement, pack: item.pack, singlePrice: item.singlePrice, bundle: item.bundle || (item.bundleQty ? { qty: Number(item.bundleQty), unitPrice: Number(item.bundleUnitPrice || item.singlePrice) } : null) }; }
  function normalizeVariant(variant, productId, index) {
    const bundle = variant.bundle && Number(variant.bundle.qty) ? { qty: Number(variant.bundle.qty), unitPrice: Number(variant.bundle.unitPrice || variant.singlePrice || 0) } : null;
    return { ...variant, id: String(variant.id || `${productId}-variant-${index + 1}`), replacement: localizeObject(variant.replacement || ""), pack: localizeObject(variant.pack || ""), quantityLabel: variant.quantityLabel ? localizeObject(variant.quantityLabel) : null, singlePrice: Number(variant.singlePrice || 0), image: variant.image || defaultImages.variants[variant.id] || "", bundle };
  }
  function localizeObject(value) {
    if (value && typeof value === "object") return { zh: value.zh || value.en || value.ms || "", en: value.en || value.zh || value.ms || "", ms: value.ms || value.en || value.zh || "" };
    const fallback = String(value || "");
    return { zh: textForLang(fallback, "zh"), en: textForLang(fallback, "en"), ms: textForLang(fallback, "ms") };
  }
  function textForLang(value, lang) {
    if (value && typeof value === "object") return value[lang] || value.en || value.zh || value.ms || "";
    const fallback = String(value || "");
    const map = { "日抛": { zh: "日抛", en: "Daily", ms: "Harian" }, "双周抛": { zh: "双周抛", en: "Bi-weekly", ms: "Dua minggu" }, "月抛": { zh: "月抛", en: "Monthly", ms: "Bulanan" }, "30片装": { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, "10片装": { zh: "10片装", en: "10 lenses/box", ms: "10 keping/kotak" }, "6片装": { zh: "6片装", en: "6 lenses/box", ms: "6 keping/kotak" } };
    return map[fallback]?.[lang] || fallback;
  }
  function localText(value) { return textForLang(value, state.lang); }
  function slug(value) { return String(localText(value) || value || "item").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item"; }
  function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }
  function rm(value) { return "RM" + Number(value || 0).toLocaleString("en-MY", { minimumFractionDigits: Number(value) % 1 ? 2 : 0, maximumFractionDigits: 2 }); }
  function boxWord(qty) { if (state.lang === "zh") return "盒"; if (state.lang === "ms") return "kotak"; return Number(qty) === 1 ? "box" : "boxes"; }
  function qtyText(qty) { return state.lang === "zh" ? `${qty}盒` : `${qty} ${boxWord(qty)}`; }
  function perBox() { return state.lang === "zh" ? "/盒" : state.lang === "ms" ? "/kotak" : "/box"; }
  function activeProducts() { return state.data.products.filter(item => item.active); }
  function brands() { return Array.from(new Set(activeProducts().map(item => item.brand))).sort(); }
  function categoriesForBrand(brand) { return state.data.categories.filter(cat => activeProducts().some(item => item.brand === brand && item.category === cat.id)); }
  function catLabel(categoryId) { const cat = state.data.categories.find(item => item.id === categoryId); return cat ? (cat[state.lang] || cat.en || cat.zh) : categoryId; }
  function productRows() { return activeProducts().filter(item => item.brand === state.selectedBrand && (state.selectedCategory === "all" || item.category === state.selectedCategory)); }
  function productById(id) { return state.data.products.find(item => item.id === id); }
  function variantById(product, id) { return (product?.variants || []).find(item => item.id === id) || product?.variants?.[0] || null; }
  function colorById(product, id) { return (product?.colors || []).find(item => item.id === id) || product?.colors?.[0] || null; }
  function emptyState() { return `<div class="empty-state"><strong>${copy[state.lang].empty}</strong><p>${copy[state.lang].emptyText}</p></div>`; }

  function lowestUnitPrice(product) {
    const prices = (product.variants || []).flatMap(variant => [variant.singlePrice, variant.bundle?.unitPrice]).filter(value => Number.isFinite(value) && value > 0);
    return prices.length ? Math.min(...prices) : 0;
  }
  function variantLabel(variant, includeQuantity) {
    const parts = [localText(variant?.replacement), localText(variant?.pack)];
    if (includeQuantity && variant?.quantityLabel) parts.push(localText(variant.quantityLabel));
    return parts.filter(Boolean).join(" · ");
  }
  function quantityOptions(variant) {
    const options = [{ qty: 1, unitPrice: Number(variant?.singlePrice || 0) }];
    if (variant?.bundle?.qty && variant.bundle.qty !== 1) options.push({ qty: Number(variant.bundle.qty), unitPrice: Number(variant.bundle.unitPrice || variant.singlePrice || 0) });
    return options;
  }
  function inferQtyFromLabel(label) {
    const text = [label?.zh, label?.en, label?.ms].filter(Boolean).join(" ");
    const match = text.match(/\d+/);
    return match ? Number(match[0]) : 1;
  }
  function selectedPricing(product, variant) {
    if (!variant) return { qty: 1, unitPrice: 0, total: 0 };
    if (product.type === "color" && variant.quantityLabel) {
      const qty = variant.bundle?.qty || inferQtyFromLabel(variant.quantityLabel);
      return { qty, unitPrice: variant.singlePrice, total: variant.singlePrice * qty };
    }
    const options = quantityOptions(variant);
    if (!options.some(option => option.qty === Number(state.selectedQty))) state.selectedQty = options[0].qty;
    const selected = options.find(option => option.qty === Number(state.selectedQty)) || options[0];
    return { qty: selected.qty, unitPrice: selected.unitPrice, total: selected.qty * selected.unitPrice };
  }

  function applyLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.dataset.i18n;
      if (copy[lang][key]) node.textContent = copy[lang][key];
    });
    document.querySelectorAll("[data-lang]").forEach(button => button.classList.toggle("active", button.dataset.lang === lang));
    renderClient();
    if (state.adminAuthed) renderAdmin();
  }
  function renderClient() { renderClientSection(); renderBrandSelect(); renderCategoryTabs(); renderLensSections(); }
  function renderClientSection() {
    document.querySelectorAll("[data-client-section]").forEach(section => section.classList.toggle("active", section.dataset.clientSection === state.clientSection));
    document.querySelectorAll("[data-client-nav]").forEach(link => link.classList.toggle("active", link.dataset.clientNav === state.clientSection));
  }
  function renderBrandSelect() {
    const select = document.getElementById("brandSelect");
    if (!select) return;
    const currentBrands = brands();
    if (!currentBrands.includes(state.selectedBrand)) state.selectedBrand = currentBrands[0] || "ACUVUE";
    select.innerHTML = currentBrands.map(brand => `<option value="${escapeHtml(brand)}">${escapeHtml(brand)}</option>`).join("");
    select.value = state.selectedBrand;
  }
  function renderCategoryTabs() {
    const tabs = document.getElementById("categoryTabs");
    if (!tabs) return;
    const cats = categoriesForBrand(state.selectedBrand);
    const valid = cats.some(cat => cat.id === state.selectedCategory);
    if (!valid && state.selectedCategory !== "all") state.selectedCategory = "all";
    tabs.innerHTML = [`<button type="button" class="${state.selectedCategory === "all" ? "active" : ""}" data-category="all">${copy[state.lang].all}</button>`, ...cats.map(cat => `<button type="button" class="${state.selectedCategory === cat.id ? "active" : ""}" data-category="${escapeHtml(cat.id)}">${escapeHtml(cat[state.lang] || cat.en)}</button>`)].join("");
  }
  function renderLensSections() {
    const host = document.getElementById("lensSectionList");
    if (!host) return;
    const rows = productRows();
    if (!rows.length) { host.innerHTML = emptyState(); return; }
    if (state.selectedProductId && !rows.some(item => item.id === state.selectedProductId)) resetProductSelection();
    const grouped = rows.reduce((map, item) => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
      return map;
    }, {});
    const detail = state.selectedProductId ? renderProductDetail(productById(state.selectedProductId)) : "";
    const sections = Object.entries(grouped).map(([categoryId, items]) => `
      <section class="lens-product-section">
        <div class="lens-section-heading"><h3>${escapeHtml(catLabel(categoryId))}</h3><span>${items.length} ${copy[state.lang].product}</span></div>
        <div class="lens-card-row">${items.map(renderProductCard).join("")}</div>
      </section>`).join("");
    host.innerHTML = detail + sections;
  }
  function renderProductCard(product) {
    const selected = product.id === state.selectedProductId;
    const replacements = Array.from(new Set((product.variants || []).map(v => localText(v.replacement)).filter(Boolean))).join(" / ");
    return `<button type="button" class="lens-product-card ${selected ? "active" : ""}" data-product-id="${escapeHtml(product.id)}">
      ${renderImageSlot(product)}
      <span class="product-category-pill">${escapeHtml(catLabel(product.category))}</span>
      <strong>${escapeHtml(localText(product.name))}</strong>
      <p>${escapeHtml(localText(product.summary))}</p>
      <span class="product-card-meta">${escapeHtml(replacements || copy[state.lang].defaultOnly)}</span>
      <span class="product-card-price">${copy[state.lang].startingFrom} ${rm(lowestUnitPrice(product))}${perBox()}</span>
      <span class="btn secondary mini">${copy[state.lang].viewDetails}</span>
    </button>`;
  }
  function renderImageSlot(product, color, variant) {
    const image = color?.image || variant?.image || product.image;
    if (image) return `<span class="product-image-slot has-image"><img src="${escapeHtml(image)}" alt="${escapeHtml(localText(product.name))}"></span>`;
    return `<span class="product-image-slot"><span>${copy[state.lang].imagePlaceholder}</span></span>`;
  }
  function renderProductDetail(product) {
    if (!product) return "";
    ensureProductSelection(product);
    const variant = variantById(product, state.selectedVariantId);
    const color = product.type === "color" ? colorById(product, state.selectedColorId) : null;
    const pricing = selectedPricing(product, variant);
    const colorText = color ? `<div><dt>${copy[state.lang].color}</dt><dd>${escapeHtml(color.name)}</dd></div>` : "";
    return `<section class="lens-detail-panel" id="lensDetailPanel">
      <div class="detail-media">${renderImageSlot(product, color, variant)}</div>
      <div class="detail-content">
        <div class="detail-title-row"><div><p class="eyebrow">${escapeHtml(product.brand)} · ${escapeHtml(catLabel(product.category))}</p><h3>${escapeHtml(localText(product.name))}</h3></div><button class="icon-close" type="button" data-close-detail aria-label="Close">x</button></div>
        <p class="detail-summary">${escapeHtml(localText(product.summary))}</p>
        ${localText(product.notes) ? `<p class="detail-notes">${escapeHtml(localText(product.notes))}</p>` : ""}
        ${renderColorOptions(product)}
        ${renderSpecOptions(product, variant)}
        ${renderQuantityOptions(product, variant)}
        <div class="price-summary">
          <strong>${copy[state.lang].selectedPrice}</strong>
          <dl>
            <div><dt>${copy[state.lang].spec}</dt><dd>${escapeHtml(variantLabel(variant, product.type === "color"))}</dd></div>
            ${colorText}
            <div><dt>${copy[state.lang].selectedQty}</dt><dd>${qtyText(pricing.qty)}</dd></div>
            <div><dt>${copy[state.lang].unitPrice}</dt><dd>${rm(pricing.unitPrice)}${perBox()}</dd></div>
            <div><dt>${copy[state.lang].estimatedTotal}</dt><dd>${rm(pricing.total)}</dd></div>
          </dl>
          <button class="btn whatsapp full" type="button" data-inquiry>${copy[state.lang].ask}</button>
        </div>
      </div>
    </section>`;
  }
  function ensureProductSelection(product) {
    if (!variantById(product, state.selectedVariantId)) state.selectedVariantId = product.variants[0]?.id || null;
    if (product.type === "color" && product.colors.length && !colorById(product, state.selectedColorId)) state.selectedColorId = product.colors[0].id;
  }
  function resetProductSelection() { state.selectedProductId = null; state.selectedVariantId = null; state.selectedQty = 1; state.selectedColorId = null; }
  function renderColorOptions(product) {
    if (product.type !== "color" || !product.colors?.length) return "";
    const grouped = product.colors.reduce((map, color) => { const group = color.group || "Colors"; if (!map[group]) map[group] = []; map[group].push(color); return map; }, {});
    return `<div class="detail-option-block"><strong>${copy[state.lang].chooseColor}</strong>${Object.entries(grouped).map(([group, colors]) => `<div class="color-group"><span>${escapeHtml(group)}</span><div class="color-options">${colors.map(color => `<button type="button" class="color-option ${state.selectedColorId === color.id ? "active" : ""}" data-color-id="${escapeHtml(color.id)}"><i style="background:${escapeHtml(color.colorHex || "#d9d9d9")}"></i>${escapeHtml(color.name)}</button>`).join("")}</div></div>`).join("")}</div>`;
  }
  function renderSpecOptions(product) {
    const variants = product.variants || [];
    return `<div class="detail-option-block"><strong>${copy[state.lang].chooseSpec}</strong><div class="option-grid">${variants.map(variant => `<button type="button" class="option-pill ${state.selectedVariantId === variant.id ? "active" : ""}" data-variant-id="${escapeHtml(variant.id)}"><span>${escapeHtml(variantLabel(variant, product.type === "color"))}</span><b>${rm(variant.singlePrice)}${perBox()}</b></button>`).join("")}</div>${variants.length === 1 ? `<p class="microcopy">${copy[state.lang].defaultOnly}</p>` : ""}</div>`;
  }
  function renderQuantityOptions(product, variant) {
    if (!variant) return "";
    if (product.type === "color" && variant.quantityLabel) return `<div class="detail-option-block compact"><strong>${copy[state.lang].chooseQuantity}</strong><p class="selected-line">${escapeHtml(localText(variant.quantityLabel))}</p></div>`;
    const options = quantityOptions(variant);
    return `<div class="detail-option-block"><strong>${copy[state.lang].chooseQuantity}</strong><div class="option-grid quantity-grid">${options.map(option => `<button type="button" class="option-pill ${Number(state.selectedQty) === option.qty ? "active" : ""}" data-qty="${option.qty}"><span>${qtyText(option.qty)}</span><b>${rm(option.unitPrice)}${perBox()}</b></button>`).join("")}</div></div>`;
  }

  function setView(view) {
    document.querySelectorAll("[data-view]").forEach(section => section.classList.toggle("active", section.dataset.view === view));
    document.querySelectorAll("[data-view-link]").forEach(link => link.classList.toggle("active", link.dataset.viewLink === view));
  }
  function route() {
    const hash = (location.hash || "#home").replace("#", "") || "home";
    if (hash === "admin" || hash === "orders") {
      if (!state.adminAuthed) { setView("admin-login"); return; }
      setView(hash === "orders" ? "orders" : "admin");
      if (hash === "orders") renderOrders(); else renderAdmin();
      return;
    }
    setView("store");
    state.clientSection = ["home", "contact-lenses", "contact"].includes(hash) ? hash : "home";
    renderClient();
  }

  function renderAdmin() {
    renderAdminStats();
    renderAdminRows();
    if (!state.adminId && state.data.products[0]) state.adminId = state.data.products[0].id;
    fillProductForm(productById(state.adminId) || state.data.products[0] || null);
  }
  function renderAdminStats() {
    const host = document.getElementById("adminStats");
    if (!host) return;
    const active = state.data.products.filter(item => item.active).length;
    const variants = state.data.products.reduce((sum, item) => sum + (item.variants?.length || 0), 0);
    host.innerHTML = `<div><strong>${state.data.products.length}</strong><span>Products</span></div><div><strong>${active}</strong><span>Active</span></div><div><strong>${variants}</strong><span>Variants</span></div>`;
  }
  function renderAdminRows() {
    const tbody = document.getElementById("adminProductRows");
    if (!tbody) return;
    tbody.innerHTML = state.data.products.map(product => `<tr class="${state.adminId === product.id ? "selected" : ""}" data-admin-product-id="${escapeHtml(product.id)}"><td>${escapeHtml(product.brand)}</td><td>${escapeHtml(catLabel(product.category))}</td><td>${escapeHtml(localText(product.name))}<small>${product.variants?.length || 0} variants</small></td><td>${rm(lowestUnitPrice(product))}${perBox()}</td><td>${product.active ? "Active" : "Hidden"}</td></tr>`).join("");
  }
  function fillProductForm(product) {
    const form = document.getElementById("productForm");
    if (!form || !product) return;
    const cat = state.data.categories.find(item => item.id === product.category) || { id: product.category, zh: product.category, en: product.category, ms: product.category };
    form.id.value = product.id;
    form.brand.value = product.brand || "";
    form.category.value = product.category || "";
    form.categoryZh.value = cat.zh || "";
    form.categoryEn.value = cat.en || "";
    form.categoryMs.value = cat.ms || "";
    form.type.value = product.type || "standard";
    form.nameZh.value = product.name?.zh || "";
    form.nameEn.value = product.name?.en || "";
    form.nameMs.value = product.name?.ms || "";
    form.image.value = product.image || "";
    form.active.value = String(product.active !== false);
    form.summaryZh.value = product.summary?.zh || "";
    form.summaryEn.value = product.summary?.en || "";
    form.summaryMs.value = product.summary?.ms || "";
    form.variants.value = JSON.stringify(product.variants || [], null, 2);
    form.colors.value = JSON.stringify(product.colors || [], null, 2);
    form.notes.value = JSON.stringify(product.notes || {}, null, 2);
  }
  function parseJsonArray(value) { const parsed = value.trim() ? JSON.parse(value) : []; if (!Array.isArray(parsed)) throw new Error("Expected array"); return parsed; }
  function parseJsonObject(value) { const parsed = value.trim() ? JSON.parse(value) : {}; if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Expected object"); return parsed; }
  function upsertCategory(category) { const index = state.data.categories.findIndex(item => item.id === category.id); if (index >= 0) state.data.categories[index] = category; else state.data.categories.push(category); }
  function saveProductFromForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("adminFormStatus");
    try {
      const id = form.id.value.trim();
      const category = form.category.value.trim();
      upsertCategory({ id: category, zh: form.categoryZh.value.trim(), en: form.categoryEn.value.trim(), ms: form.categoryMs.value.trim() });
      const product = normalizeProduct({ id, brand: form.brand.value.trim(), category, type: form.type.value, name: { zh: form.nameZh.value.trim(), en: form.nameEn.value.trim(), ms: form.nameMs.value.trim() }, summary: { zh: form.summaryZh.value.trim(), en: form.summaryEn.value.trim(), ms: form.summaryMs.value.trim() }, image: form.image.value.trim(), active: form.active.value === "true", variants: parseJsonArray(form.variants.value), colors: parseJsonArray(form.colors.value), notes: parseJsonObject(form.notes.value) });
      const index = state.data.products.findIndex(item => item.id === state.adminId || item.id === id);
      if (index >= 0) state.data.products[index] = product; else state.data.products.push(product);
      state.adminId = product.id;
      saveData();
      renderClient();
      renderAdmin();
      status.textContent = copy[state.lang].saved;
    } catch (error) { status.textContent = copy[state.lang].invalid; }
  }
  function newProduct() {
    const id = `new-product-${Date.now()}`;
    const category = state.data.categories[0] || { id: "myopia-hyperopia", zh: "近视 / 远视隐形眼镜", en: "Myopia / Hyperopia Contact Lenses", ms: "Kanta Sentuh Rabun Jauh / Dekat" };
    const product = normalizeProduct({ id, brand: state.selectedBrand || "ACUVUE", category: category.id, type: "standard", name: { zh: "新商品", en: "New Product", ms: "Produk Baharu" }, summary: { zh: "", en: "", ms: "" }, active: true, variants: [{ id: `${id}-default`, replacement: { zh: "日抛", en: "Daily", ms: "Harian" }, pack: { zh: "30片装", en: "30 lenses/box", ms: "30 keping/kotak" }, singlePrice: 0, bundle: null }] });
    state.data.products.push(product);
    state.adminId = product.id;
    saveData();
    renderAdmin();
  }
  function deleteProduct() {
    if (!state.adminId) return;
    state.data.products = state.data.products.filter(item => item.id !== state.adminId);
    resetProductSelection();
    state.adminId = state.data.products[0]?.id || null;
    saveData();
    renderClient();
    renderAdmin();
    const status = document.getElementById("adminFormStatus");
    if (status) status.textContent = copy[state.lang].deleted;
  }
  function exportData() {
    const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "new-focus-optical-data.json";
    link.click();
    URL.revokeObjectURL(url);
  }
  function importData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state.data = normalizeData(JSON.parse(reader.result));
        saveData(); renderClient(); renderAdmin();
        document.getElementById("adminFormStatus").textContent = copy[state.lang].imported;
      } catch (error) { document.getElementById("adminFormStatus").textContent = copy[state.lang].invalid; }
    };
    reader.readAsText(file);
  }
  function resetData() {
    state.data = normalizeData(clone(window.NFO_DATA));
    resetProductSelection();
    state.adminId = state.data.products[0]?.id || null;
    saveData(); renderClient(); renderAdmin();
    document.getElementById("adminFormStatus").textContent = copy[state.lang].reset;
  }
  function createInquiry() {
    const product = productById(state.selectedProductId);
    const variant = variantById(product, state.selectedVariantId);
    if (!product || !variant) return;
    const color = product.type === "color" ? colorById(product, state.selectedColorId) : null;
    const pricing = selectedPricing(product, variant);
    const order = { id: `INQ-${Date.now()}`, createdAt: new Date().toISOString(), productName: localText(product.name), productId: product.id, variantId: variant.id, variantLabel: variantLabel(variant, product.type === "color"), colorName: color?.name || "", quantity: pricing.qty, unitPrice: pricing.unitPrice, total: pricing.total, status: "New" };
    state.data.orders.unshift(order);
    saveData();
    const message = `Hi New Focus Optical Centre, I want to ask about ${order.productName} ${order.variantLabel}${order.colorName ? " - " + order.colorName : ""}, quantity ${order.quantity}, reference total ${rm(order.total)}.`;
    window.open(`https://wa.me/${state.data.business.whatsappWaMe}?text=${encodeURIComponent(message)}`, "_blank", "noreferrer");
  }
  function renderOrders() {
    const host = document.getElementById("orderBoard");
    if (!host) return;
    const orders = state.data.orders || [];
    host.innerHTML = orders.length ? orders.map(order => `<article class="card order-card"><div><strong>${escapeHtml(order.id)}</strong><span>${new Date(order.createdAt).toLocaleString()}</span></div><h3>${escapeHtml(order.productName)}</h3><p>${escapeHtml(order.variantLabel)}${order.colorName ? " · " + escapeHtml(order.colorName) : ""}</p><dl><div><dt>Qty</dt><dd>${qtyText(order.quantity)}</dd></div><div><dt>Unit</dt><dd>${rm(order.unitPrice)}${perBox()}</dd></div><div><dt>Total</dt><dd>${rm(order.total)}</dd></div></dl></article>`).join("") : emptyState();
  }
  function clearOrders() { state.data.orders = []; saveData(); renderOrders(); }

  function bindEvents() {
    document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
    document.getElementById("brandSelect")?.addEventListener("change", event => { state.selectedBrand = event.target.value; state.selectedCategory = "all"; resetProductSelection(); renderClient(); });
    document.getElementById("categoryTabs")?.addEventListener("click", event => {
      const button = event.target.closest("[data-category]"); if (!button) return;
      state.selectedCategory = button.dataset.category; resetProductSelection(); renderClient();
    });
    document.getElementById("lensSectionList")?.addEventListener("click", event => {
      const productButton = event.target.closest("[data-product-id]");
      const variantButton = event.target.closest("[data-variant-id]");
      const qtyButton = event.target.closest("[data-qty]");
      const colorButton = event.target.closest("[data-color-id]");
      if (productButton) {
        const product = productById(productButton.dataset.productId);
        state.selectedProductId = product?.id || null;
        state.selectedVariantId = product?.variants?.[0]?.id || null;
        state.selectedQty = 1;
        state.selectedColorId = product?.colors?.[0]?.id || null;
        renderClient();
        document.getElementById("lensDetailPanel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (variantButton) {
        state.selectedVariantId = variantButton.dataset.variantId; state.selectedQty = 1; renderClient();
      } else if (qtyButton) {
        state.selectedQty = Number(qtyButton.dataset.qty); renderClient();
      } else if (colorButton) {
        state.selectedColorId = colorButton.dataset.colorId; renderClient();
      } else if (event.target.closest("[data-close-detail]")) {
        resetProductSelection(); renderClient();
      } else if (event.target.closest("[data-inquiry]")) {
        createInquiry();
      }
    });
    const mobileSidebarQuery = window.matchMedia("(max-width: 980px)");
    const setSidebarCollapsed = collapsed => {
      const sidebar = document.getElementById("clientSidebar");
      const shell = document.querySelector(".client-shell");
      const toggle = document.getElementById("sideToggle");
      if (!sidebar || !shell) return;
      sidebar.classList.toggle("collapsed", collapsed);
      shell.classList.toggle("sidebar-collapsed", collapsed);
      toggle?.setAttribute("aria-expanded", String(!collapsed));
    };
    const syncSidebarForViewport = () => setSidebarCollapsed(mobileSidebarQuery.matches);
    document.getElementById("sideToggle")?.addEventListener("click", event => {
      event.stopPropagation();
      const sidebar = document.getElementById("clientSidebar");
      if (!sidebar) return;
      setSidebarCollapsed(!sidebar.classList.contains("collapsed"));
    });
    document.querySelectorAll("[data-client-nav]").forEach(link => link.addEventListener("click", () => {
      if (mobileSidebarQuery.matches) setSidebarCollapsed(true);
    }));
    document.addEventListener("click", event => {
      if (!mobileSidebarQuery.matches) return;
      const sidebar = document.getElementById("clientSidebar");
      const toggle = document.getElementById("sideToggle");
      if (!sidebar || sidebar.classList.contains("collapsed")) return;
      if (sidebar.contains(event.target) || toggle?.contains(event.target)) return;
      setSidebarCollapsed(true);
    });
    mobileSidebarQuery.addEventListener?.("change", syncSidebarForViewport);
    syncSidebarForViewport();
    document.getElementById("adminLoginForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.username.value === ADMIN_USER && form.password.value === ADMIN_PASSWORD) {
        sessionStorage.setItem(ADMIN_AUTH_KEY, "1"); state.adminAuthed = true; location.hash = location.hash === "#orders" ? "#orders" : "#admin"; route();
      } else { document.getElementById("adminLoginStatus").textContent = copy[state.lang].loginBad; }
    });
    document.querySelectorAll("[data-admin-logout]").forEach(button => button.addEventListener("click", () => { sessionStorage.removeItem(ADMIN_AUTH_KEY); state.adminAuthed = false; location.hash = "#home"; route(); }));
    document.getElementById("productForm")?.addEventListener("submit", saveProductFromForm);
    document.getElementById("adminProductRows")?.addEventListener("click", event => { const row = event.target.closest("[data-admin-product-id]"); if (!row) return; state.adminId = row.dataset.adminProductId; renderAdmin(); });
    document.getElementById("newProductBtn")?.addEventListener("click", newProduct);
    document.getElementById("deleteProductBtn")?.addEventListener("click", deleteProduct);
    document.getElementById("exportDataBtn")?.addEventListener("click", exportData);
    document.getElementById("importDataInput")?.addEventListener("change", event => importData(event.target.files[0]));
    document.getElementById("resetDataBtn")?.addEventListener("click", resetData);
    document.getElementById("clearOrdersBtn")?.addEventListener("click", clearOrders);
    window.addEventListener("hashchange", route);
  }

  document.addEventListener("DOMContentLoaded", () => { bindEvents(); applyLanguage(state.lang); route(); });
})();









