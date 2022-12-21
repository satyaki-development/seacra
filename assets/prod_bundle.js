console.log("Hello");
var swiper = new Swiper(".myBundleSwiper", {
    cssMode: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});