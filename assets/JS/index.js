const hamburger = document.querySelector(".cabecalho .hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  menu.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
