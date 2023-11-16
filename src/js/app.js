import Swiper from "swiper";
import { Navigation } from "swiper/modules";
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Скрипт для добавления класса "active" при клике на пункт меню
document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
      menuItem.classList.toggle("active");
    });
  });
});
