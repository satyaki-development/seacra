console.log("Hello");
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        }
    }
  mousewheel: true,
  keyboard: true,
});