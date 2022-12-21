var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "4",
  centeredSlides: true,
  autoplay: {
    delay: 1000,
  },
  spaceBetween: 0,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 15,
    modifier: 10,
    initialSlide: 3,
    slideShadows: true,
  },
  pagination: {
    clickable: true,
  },
});
