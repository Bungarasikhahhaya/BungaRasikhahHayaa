// Toggle finance items
const financeItems = document.querySelectorAll(".finance-item");
financeItems.forEach((item) => {
  const header = item.querySelector(".item-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Mobile sidebar toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const sidebar = document.querySelector(".sidebar");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
