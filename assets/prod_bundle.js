console.log("Hello");
var swiper = new Swiper(".myBundleSwiper", {
    cssMode: true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});