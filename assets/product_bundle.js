console.log("Hello");
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        }
    }
  mousewheel: true,
  keyboard: true,
});