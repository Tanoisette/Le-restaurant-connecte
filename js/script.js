document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
function showPage(page) {
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");

if (page === 1) {
    page1.style.display = "block";
    page2.style.display = "none";
} else {
    page1.style.display = "none";
    page2.style.display = "block";
  }
}

console.log("menu loaded");