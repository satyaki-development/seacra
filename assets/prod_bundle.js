console.log("Hello");
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  cssMode: true,
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
    }
  mousewheel: true,
  keyboard: true,
});