$(".icones-carousel").slick({
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        autoplay: false,
        autoplaySpeed: 2500,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        cssEase: "linear",
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows:false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
           {
            // If Screen Size More than 1024px
            breakpoint: 1024,
            settings: {
             dots: true,
              arrows:true,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });