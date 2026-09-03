(function () {
  "use strict";

  /* ============ i18n dictionary ============ */
  var DICT = {
    en: {
      hero: {
        eyebrow: "BURWOOD, NSW",
        title: "Hero headline, with a <span class=\"mark-circle\">key phrase</span> emphasis.",
        sub: "One to two sentences introducing the studio."
      },
      cta: { book: "Book Now", seePrices: "See prices", bookPrepay: "Book" },
      placeholder: {
        img: "Photo placeholder",
        vibeImg: "Photo placeholder — studio",
        video: "Video placeholder",
        logo: "Logo placeholder"
      },
      services: {
        eyebrow: "LOOKS",
        cut: { name: "Classic Cut" },
        balayage: { name: "Balayage", price: "$228" },
        color: { name: "Full Colour", price: "$128" },
        perm: { name: "Perm Wave", price: "$168" },
        bleach: { name: "Bleach & Tone", price: "$288" },
        kids: { name: "Kids Cut", price: "$35" }
      },
      team: {
        eyebrow: "STYLISTS & STUDIO",
        lead: "Intro line building familiarity with the team, placed before the price list.",
        founder: { role: "Role placeholder — e.g. Founder & Lead Stylist", quote: "Stylist name and a short intro line." },
        stylist1: { role: "Role placeholder — e.g. Senior Colourist", quote: "Stylist name and a short intro line." },
        stylist2: { role: "Role placeholder — e.g. Stylist", quote: "Stylist name and a short intro line." },
        stylist3: { role: "Role placeholder — e.g. Junior Stylist", quote: "Stylist name and a short intro line." },
        stylist4: { role: "Role placeholder — e.g. Studio Assistant", quote: "Stylist name and a short intro line." }
      },
      products: {
        eyebrow: "PRODUCTS WE USE",
        lead: "One line noting these are the retail/professional brands used in-studio."
      },
      pricing: {
        eyebrow: "PRICING",
        lead: "Each service links to a \"Book\" placeholder page — this reuses the prepay booking feature already available in Square.",
        cat: { cut: "Haircuts", color: "Colour", bleach: "Bleach", perm: "Perm & Styling" },
        item: {
          womensCut: "Women's Cut", womensCutPrice: "$58",
          mensCut: "Men's Cut", mensCutPrice: "$45",
          fullBleach: "Full Head Bleach + Toner", fullBleachPrice: "$499",
          blowdry: "Blow-dry & Style", blowdryPrice: "$48"
        },
        note: "Example categories shown for this prototype — final menu matches your real Square price list."
      },
      contact: {
        phone: "Phone", mobile: "Mobile", email: "Email", wechat: "WeChat", xhs: "Xiaohongshu"
      },
      location: {
        eyebrow: "ADDRESS & HOURS",
        transit: "Approx. 2 minutes' walk from Westfield Burwood and Burwood train station.",
        hoursTitle: "Opening Hours",
        hours: { weekday: "Mon – Fri", saturday: "Saturday", sunday: "Sunday", closed: "Closed" },
        hoursNote: "Example hours shown for this prototype — to confirm with the studio."
      },
      contactRepeat: {
        eyebrow: "CONTACT (REPEATED)"
      },
      footer: { disclaimer: "Prototype demo by AndieyAgent — not an official website." },
      booking: {
        eyebrow: "BOOK & PREPAY",
        title: "Confirm your booking",
        body: "This prototype is not connected to a payment system. In the final version, this button would open a Square prepay checkout for the services above.",
        empty: "You haven't selected any services yet — head back to the <a href=\"index.html#pricing\">price list</a> to add some.",
        total: "Total",
        pay: "Pay now",
        back: "← Back to the homepage"
      }
    },
    zh: {
      hero: {
        eyebrow: "BURWOOD",
        title: "Hero 标题，其中<span class=\"mark-circle\">关键词</span>做手绘圈画强调。",
        sub: "一到两句话介绍门店。"
      },
      cta: { book: "立即预约", seePrices: "查看价目表", bookPrepay: "预定" },
      placeholder: {
        img: "图片占位",
        vibeImg: "图片占位 — 门店",
        video: "视频占位",
        logo: "logo占位"
      },
      services: {
        eyebrow: "效果区",
        cut: { name: "基础剪发" },
        balayage: { name: "挑染", price: "$228" },
        color: { name: "全染", price: "$128" },
        perm: { name: "烫发", price: "$168" },
        bleach: { name: "漂发调色", price: "$288" },
        kids: { name: "儿童剪发", price: "$35" }
      },
      team: {
        eyebrow: "造型师/团队 + 门店氛围",
        lead: "团队/门店介绍引导语，放在价目表之前建立熟悉感。",
        founder: { role: "角色占位 — 例如「主理人 · 品牌创始人」", quote: "造型师姓名与一句话简介。" },
        stylist1: { role: "角色占位 — 例如「资深染发师」", quote: "造型师姓名与一句话简介。" },
        stylist2: { role: "角色占位 — 例如「造型师」", quote: "造型师姓名与一句话简介。" },
        stylist3: { role: "角色占位 — 例如「初级造型师」", quote: "造型师姓名与一句话简介。" },
        stylist4: { role: "角色占位 — 例如「门店助理」", quote: "造型师姓名与一句话简介。" }
      },
      products: {
        eyebrow: "商品区",
        lead: "一句话说明这些是店内实际使用/零售的产品品牌。"
      },
      pricing: {
        eyebrow: "价目表",
        lead: "每个项目旁边的按钮链接到「预定」占位说明页——这个功能复用了 Square 后台已有的预付预定能力。",
        cat: { cut: "剪发系列", color: "染发系列", bleach: "漂发系列", perm: "烫发/造型" },
        item: {
          womensCut: "女士剪发", womensCutPrice: "$58",
          mensCut: "男士剪发", mensCutPrice: "$45",
          fullBleach: "全头漂发+调色", fullBleachPrice: "$499",
          blowdry: "吹风造型", blowdryPrice: "$48"
        },
        note: "此处分类为 demo 示例结构，正式上线时会替换成你们真实的 Square 价目表。"
      },
      contact: {
        phone: "电话", mobile: "手机", email: "邮箱", wechat: "微信", xhs: "小红书"
      },
      location: {
        eyebrow: "地址 + 营业时间/交通",
        transit: "步行约两分钟可到 Westfield Burwood 和 Burwood 火车站。",
        hoursTitle: "营业时间",
        hours: { weekday: "周一 – 周五", saturday: "周六", sunday: "周日", closed: "休息" },
        hoursNote: "此处为 demo 示例营业时间，需与店家确认真实时间。"
      },
      contactRepeat: {
        eyebrow: "联系方式（二次强化）"
      },
      footer: { disclaimer: "Prototype demo by AndieyAgent · 非官方页面，仅供设计演示。" },
      booking: {
        eyebrow: "预定+预付",
        title: "确认预约",
        body: "这个 demo 暂未接入真实支付系统。正式版本中，这个按钮会为以上服务打开 Square 的预付页面。",
        empty: "还没有选择任何服务——回到<a href=\"index.html#pricing\">价目表</a>挑选后再来支付。",
        total: "总计",
        pay: "立即支付",
        back: "← 返回主页"
      }
    }
  };

  /* ============ Service catalogue (id -> i18n key paths), shared by the price list and the checkout page ============ */
  var SERVICE_CATALOG = {
    kids: { name: "services.kids.name", price: "services.kids.price", amount: 35 },
    womensCut: { name: "pricing.item.womensCut", price: "pricing.item.womensCutPrice", amount: 58 },
    mensCut: { name: "pricing.item.mensCut", price: "pricing.item.mensCutPrice", amount: 45 },
    color: { name: "services.color.name", price: "services.color.price", amount: 128 },
    balayage: { name: "services.balayage.name", price: "services.balayage.price", amount: 228 },
    bleach: { name: "services.bleach.name", price: "services.bleach.price", amount: 288 },
    fullBleach: { name: "pricing.item.fullBleach", price: "pricing.item.fullBleachPrice", amount: 499 },
    perm: { name: "services.perm.name", price: "services.perm.price", amount: 168 },
    blowdry: { name: "pricing.item.blowdry", price: "pricing.item.blowdryPrice", amount: 48 }
  };
  var CART_KEY = "jhc-cart";

  function getCart() {
    var cart;
    try {
      cart = JSON.parse(sessionStorage.getItem(CART_KEY) || "{}");
    } catch (e) {
      cart = {};
    }
    var clean = {};
    Object.keys(cart).forEach(function (id) {
      if (SERVICE_CATALOG[id] && cart[id] > 0) clean[id] = cart[id];
    });
    return clean;
  }

  function setCart(cart) {
    sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function cartTotalQty(cart) {
    return Object.keys(cart).reduce(function (sum, id) { return sum + cart[id]; }, 0);
  }

  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function applyLang(lang) {
    var dict = DICT[lang] || DICT.en;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n"));
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-html"));
      if (value !== undefined) el.innerHTML = value;
    });

    document.dispatchEvent(new CustomEvent("jhc:langchange"));
  }

  function detectLang() {
    var stored = localStorage.getItem("jhc-lang");
    if (stored === "en" || stored === "zh") return stored;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function initLang() {
    var lang = detectLang();
    applyLang(lang);
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-lang");
        var next = current === "zh" ? "en" : "zh";
        localStorage.setItem("jhc-lang", next);
        applyLang(next);
      });
    }
  }

  /* ============ Price list: per-service qty stepper feeding a cart, badge on the floating CTA ============ */
  function initPricingCart() {
    var rows = document.querySelectorAll(".price-list li[data-service-id]");
    if (!rows.length) return;

    var floatingBadge = document.getElementById("floatingCtaBadge");

    function render() {
      var dict = DICT[document.documentElement.getAttribute("data-lang")] || DICT.en;
      var cart = getCart();

      rows.forEach(function (li) {
        var id = li.dataset.serviceId;
        var qty = cart[id] || 0;
        var action = li.querySelector("[data-qty-action]");
        action.innerHTML = "";

        if (qty === 0) {
          var addBtn = document.createElement("button");
          addBtn.type = "button";
          addBtn.className = "btn-tiny";
          addBtn.textContent = getPath(dict, "cta.bookPrepay") || "Book";
          addBtn.addEventListener("click", function () {
            cart[id] = 1;
            setCart(cart);
            render();
          });
          action.appendChild(addBtn);
        } else {
          var stepper = document.createElement("div");
          stepper.className = "qty-stepper";

          var minus = document.createElement("button");
          minus.type = "button";
          minus.className = "qty-stepper__btn";
          minus.setAttribute("aria-label", "-1");
          minus.textContent = "−";
          minus.addEventListener("click", function () {
            if (cart[id] > 1) cart[id] -= 1; else delete cart[id];
            setCart(cart);
            render();
          });

          var count = document.createElement("span");
          count.className = "qty-stepper__count";
          count.textContent = qty;

          var plus = document.createElement("button");
          plus.type = "button";
          plus.className = "qty-stepper__btn";
          plus.setAttribute("aria-label", "+1");
          plus.textContent = "+";
          plus.addEventListener("click", function () {
            cart[id] = qty + 1;
            setCart(cart);
            render();
          });

          stepper.appendChild(minus);
          stepper.appendChild(count);
          stepper.appendChild(plus);
          action.appendChild(stepper);
        }
      });

      if (floatingBadge) {
        var total = cartTotalQty(cart);
        floatingBadge.hidden = total === 0;
        floatingBadge.textContent = total;
      }
    }

    document.addEventListener("jhc:langchange", render);
    render();
  }

  /* ============ Checkout page: render the cart carried over from the price list ============ */
  function initCheckoutPage() {
    var hasItemsBlock = document.getElementById("checkoutHasItems");
    var emptyBlock = document.getElementById("checkoutEmpty");
    var list = document.getElementById("checkoutList");
    var totalAmount = document.getElementById("checkoutTotalAmount");
    var payBtn = document.getElementById("checkoutPayBtn");
    if (!hasItemsBlock || !emptyBlock || !list || !totalAmount || !payBtn) return;

    function render() {
      var dict = DICT[document.documentElement.getAttribute("data-lang")] || DICT.en;
      var cart = getCart();
      var ids = Object.keys(cart);

      hasItemsBlock.hidden = ids.length === 0;
      emptyBlock.hidden = ids.length > 0;
      payBtn.disabled = ids.length === 0;

      list.innerHTML = "";
      var total = 0;
      ids.forEach(function (id) {
        var entry = SERVICE_CATALOG[id];
        total += entry.amount * cart[id];

        var li = document.createElement("li");
        var name = document.createElement("span");
        name.className = "price-list__name";
        name.textContent = (getPath(dict, entry.name) || id) + " × " + cart[id];
        var price = document.createElement("span");
        price.className = "price-list__price";
        price.textContent = "$" + entry.amount;
        li.appendChild(name);
        li.appendChild(price);
        list.appendChild(li);
      });
      totalAmount.textContent = "$" + total;
    }

    document.addEventListener("jhc:langchange", render);
    render();
  }

  /* ============ Vibe carousel: prev/next through slides ============ */
  function initVibeCarousel() {
    document.querySelectorAll(".vibe-carousel").forEach(function (carousel) {
      var slides = carousel.querySelectorAll(".vibe-carousel__slide");
      var prevBtn = carousel.querySelector(".vibe-carousel__btn--prev");
      var nextBtn = carousel.querySelector(".vibe-carousel__btn--next");
      if (!slides.length || !prevBtn || !nextBtn) return;

      var index = 0;
      function show(next) {
        index = (next + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
          slide.classList.toggle("is-active", i === index);
        });
      }
      prevBtn.addEventListener("click", function () { show(index - 1); });
      nextBtn.addEventListener("click", function () { show(index + 1); });
    });
  }

  /* ============ Team carousel: image + text panel + dots move together ============ */
  function initTeamCarousel() {
    var root = document.querySelector(".team__carousel");
    if (!root) return;

    var slides = root.querySelectorAll(".team__carousel-slide");
    var panels = root.querySelectorAll(".team__carousel-panel");
    var dots = root.querySelectorAll(".team__carousel-dot");
    var prevBtn = root.querySelector("[data-team-prev]");
    var nextBtn = root.querySelector("[data-team-next]");
    if (!slides.length || !prevBtn || !nextBtn) return;

    var index = 0;
    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) { slide.classList.toggle("is-active", i === index); });
      panels.forEach(function (panel, i) { panel.classList.toggle("is-active", i === index); });
      dots.forEach(function (dot, i) { dot.classList.toggle("is-active", i === index); });
    }
    prevBtn.addEventListener("click", function () { show(index - 1); });
    nextBtn.addEventListener("click", function () { show(index + 1); });
  }

  /* ============ Booking page back-link: use browser back so the homepage scroll position is kept ============ */
  function initBackLink() {
    var backLink = document.getElementById("backLink");
    if (!backLink) return;
    var cameFromThisSite = document.referrer && document.referrer.indexOf(window.location.origin) === 0;
    if (cameFromThisSite && window.history.length > 1) {
      backLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.history.back();
      });
    }
  }

  /* ============ Header contact popover ============ */
  function initContactPopover() {
    var toggle = document.getElementById("contactToggle");
    var popover = document.getElementById("contactPopover");
    if (!toggle || !popover) return;

    function close() {
      popover.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
    function open() {
      popover.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (popover.hidden) open(); else close();
    });
    document.addEventListener("click", function (e) {
      if (!popover.hidden && !popover.contains(e.target) && e.target !== toggle) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initPricingCart();
    initCheckoutPage();
    initVibeCarousel();
    initTeamCarousel();
    initBackLink();
    initContactPopover();
  });
})();
