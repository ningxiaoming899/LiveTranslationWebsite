/* ========================================
   Main JS — Nav scroll behavior
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
});
