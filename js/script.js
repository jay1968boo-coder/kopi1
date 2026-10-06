// ==================== Swiper js ====================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // spaceBetween: 20, // Jika ingin ada jarak, isi dengan angka, bukan boolean true
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ==================== Nav open close ====================
const body = document.querySelector("body"),
  navMenu = document.querySelector(".menu-content"),
  navOpenBtn = document.querySelector(".navOpen-btn"),
  navCloseBtn = document.querySelector(".navClose-btn");

if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("Open");
    body.style.overflowY = "hidden"; // Diperbaiki: hidden
  });
}

if (navMenu && navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("Open");
    body.style.overflowY = "scroll";
  });
}

// ==================== Scroll Event Features ====================
// Mengambil semua elemen section sekali saja di luar event scroll
const sections = document.querySelectorAll(".section[id]"); // Diperbaiki: querySelectorAll

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Diperbaiki: window.scrollY

  // 1. Change header bg color
  const header = document.querySelector("header");
  if (header) {
    if (scrollY > 5) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  }

  // 2. Scroll up button
  const scrollUpBtn = document.querySelector(".scrollUp-btn");
  if (scrollUpBtn) {
    if (scrollY > 250) {
      scrollUpBtn.classList.add("scrollUpBtn-active");
    } else {
      scrollUpBtn.classList.remove("scrollUpBtn-active");
    }
  }

  // 3. Nav link indicator
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 60;

    const navId = document.querySelector(
      `.menu-content a[href="${section.id}"]`,
    );

    if (navId) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navId.classList.add("active-navlink");
      } else {
        navId.classList.remove("active-navlink");
      }
    }
  });
});

// ==================== Nav link click auto-close (Pindahkan ke luar scroll) ====================
const navLinks = document.querySelectorAll(".menu-content a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("Open"); // Biasanya ketika link diklik, menu ditutup, bukan dibuka
    body.style.overflowY = "scroll";
  });
});

// ==================== Scroll Reveal Animation ====================
// Diperbaiki: Menggunakan ScrollReveal dan sr.reveal yang benar
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 200,
});

sr.reveal(
  ".homeSubtitle, .homeTitle, .section-subtitle, .section-title, .section-description, .brand-img, .testimonial, .newsletter-logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links",
  { interval: 100 },
);
sr.reveal(".about-imageContent, .menu-items", { origin: "left" });
sr.reveal(".about-details, .time-table", { origin: "right" });
