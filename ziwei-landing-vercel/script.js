// ============================================================
// EDIT YOUR LINKS HERE
// Replace each placeholder with the destination you want to use.
// ============================================================
const LINKS = {
  "free-question": "https://example.com/private-reading",
  "telegram": "https://t.me/your-community",
  "facebook": "https://facebook.com/your-group",
  // Future placeholders:
  "booking": "https://example.com/booking",
  "payment": "https://example.com/payment",
  "email": "mailto:hello@example.com"
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  if (LINKS[key]) el.href = LINKS[key];
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  mobileMenu.setAttribute("aria-hidden", String(!open));
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});
