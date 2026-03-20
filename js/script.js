
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
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

// page 1 affichée par défaut
window.onload = () => showPage(1);