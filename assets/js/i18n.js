/* ========================================
   i18n — Language detection & switching
   ======================================== */

const translations = {
  zh: {
    "nav-title": "秒译",
    "nav-cta": "下载",
    "hero-title": "秒译",
    "hero-subtitle": "Apple 原生离线同声传译，实时语音识别与翻译，隐私安全，无需联网。",
    "features-heading": "核心功能",
    "feature-1-title": "实时同声传译",
    "feature-1-desc": "边说边译，原文与译文实时并排呈现，如同专业同传在耳边。",
    "feature-2-title": "完全离线运行",
    "feature-2-desc": "100% 设备端处理，无需上传云端，你的对话只属于你。",
    "feature-3-title": "16+ 语言支持",
    "feature-3-desc": "英语、日语、韩语、法语、德语、西班牙语等主流语言全覆盖。",
    "feature-4-title": "AI 智能总结",
    "feature-4-desc": "可选接入 AI 服务，一键生成会议摘要与要点提炼。",
    "footer-privacy": "隐私政策",
    "footer-platforms": "支持 iOS 和 macOS",
    "footer-copy": "© 2025 秒译. All rights reserved.",
    "badge-ios-alt": "在 App Store 下载",
    "badge-mac-alt": "在 Mac App Store 下载",
    "lang-label": "EN"
  },
  en: {
    "nav-title": "Miao Yi",
    "nav-cta": "Download",
    "hero-title": "Live Translation",
    "hero-subtitle": "On-device real-time speech recognition & translation for Apple platforms. Private. Offline. Instant.",
    "features-heading": "Key Features",
    "feature-1-title": "Real-time Interpretation",
    "feature-1-desc": "Translate speech as it happens — source and translation displayed side by side, just like a live interpreter.",
    "feature-2-title": "100% On-Device",
    "feature-2-desc": "All processing stays on your device. No cloud uploads, no server dependencies. Your conversations remain yours.",
    "feature-3-title": "16+ Languages",
    "feature-3-desc": "English, Chinese, Japanese, Korean, French, German, Spanish, and many more languages supported.",
    "feature-4-title": "AI-Powered Summaries",
    "feature-4-desc": "Optionally connect AI services to generate meeting summaries and key takeaways with one tap.",
    "footer-privacy": "Privacy Policy",
    "footer-platforms": "Available on iOS & macOS",
    "footer-copy": "© 2025 Miao Yi. All rights reserved.",
    "badge-ios-alt": "Download on the App Store",
    "badge-mac-alt": "Download on the Mac App Store",
    "lang-label": "中文"
  }
};

function detectLanguage() {
  const stored = localStorage.getItem("miaoyiLang");
  if (stored && translations[stored]) return stored;
  const nav = navigator.language || navigator.userLanguage || "en";
  return nav.startsWith("zh") ? "zh" : "en";
}

function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (t[key]) {
      el.alt = t[key];
    }
  });

  // Show/hide language-specific badges
  document.querySelectorAll("[data-lang-show]").forEach((el) => {
    el.style.display = el.getAttribute("data-lang-show") === lang ? "" : "none";
  });

  localStorage.setItem("miaoyiLang", lang);
  window.__currentLang = lang;
}

function toggleLanguage() {
  const current = window.__currentLang || detectLanguage();
  const next = current === "zh" ? "en" : "zh";
  applyLanguage(next);
}

// Init on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLanguage();
  applyLanguage(lang);

  const btn = document.getElementById("lang-switch");
  if (btn) {
    btn.addEventListener("click", toggleLanguage);
  }
});
