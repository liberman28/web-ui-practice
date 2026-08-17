const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("nav-item--active"));
    item.classList.add("nav-item--active");
    console.log("Sección activa:", item.dataset.item);
  });
});
