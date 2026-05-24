/* ========================================
   Main JS — Nav scroll + App Store deep link
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  // Add subtle background opacity on scroll
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 10) {
          nav.style.backdropFilter = "saturate(180%) blur(20px)";
          nav.style.background = "rgba(0, 0, 0, 0.92)";
        } else {
          nav.style.backdropFilter = "none";
          nav.style.background = "#000000";
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // App Store deep link — open App Store app directly on Apple devices
  const isApple = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
  const APP_ID = "6764510070";

  if (isApple) {
    document.querySelectorAll(".badge-link[data-store]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const store = link.getAttribute("data-store");
        if (store === "mac") {
          // macappstore:// scheme opens Mac App Store directly
          window.location.href = "macappstore://apps.apple.com/app/id" + APP_ID;
        } else {
          // itms-apps:// scheme opens iOS App Store directly
          window.location.href = "itms-apps://apps.apple.com/app/id" + APP_ID;
        }
      });
    });
  }
});
