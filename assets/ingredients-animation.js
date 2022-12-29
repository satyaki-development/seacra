var Interval = 5000;
var index = 0;
var owl = $(".custom-carousel");

$(window)
  .resize(function () {
    $("#dimensions").html($(window).width());
  })
  .resize();

owl.children().each(function (index) {
  $(this).attr("data-position", index); // NB: .attr() instead of .data()
});
owl.owlCarousel({
  autoWidth: true,
  loop: true,
  rewind: true,
  itemsCustom: [
    [0, 2],
    [450, 5],
    [600, 8],
    [700, 9],
    [1000, 10],
    [1200, 12],
    [1400, 13],
    [1600, 15]
  ],
  // margin:10,
  rtl: true,
  autoplay: true,
  autoplayTimeout: Interval,
  dots: false,
  // nav: tru
  responsive: {
    0: {
      items: 1,
      loop: true
    },
    600: {
      items: 3,
      loop: true
    },
    1000: {
      items: 4,
      loop: true
    }
  }
});

checkClasses();
owl.on("translated.owl.carousel", function (event) {
  checkClasses();
});

$(".next-button").click(function () {
  owl.trigger("next.owl.carousel");
});

var x = 0;
function checkClasses() {
  var total = $(".game-section .owl-stage .owl-item.active").length;
  $(".game-section .owl-stage .owl-item")
    .children(".item")
    .removeClass("active");
  $(".game-section .owl-stage .owl-item.active").each(function (index) {
    if (index === 0 && total > 0) {
      // animate();
      $(this).children(".item").addClass("active");
    }
  });
}

$(document).on("click", ".owl-item>div", function () {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 700; // in ms
  $(".custom-carousel .item").not($(this)).removeClass("active");
  $(this).toggleClass("active");
  owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
});

$(".slider2").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  rtl: true,
  singleItem: true,
  slideSpeed: 1000,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  transitionStyle: "fade",
  responsiveRefreshRate: 200,
  smartSpeed: 1000,
  navText: ["", $(".next-button")],
  afterInit: function (el) {
    el.find(".owl-item").eq(0).addClass("synced");
  }
});

function syncPosition(el) {
  var current = this.currentItem;
  $("#sync2")
    .find(".owl-item")
    .removeClass("synced")
    .eq(current)
    .addClass("synced");
  if ($("#sync2").data("owlCarousel") !== undefined) {
    center(current);
  }
}

$("#sync2").on("click", ".owl-item", function (e) {
  e.preventDefault();
  var number = $(this).data("owlItem");
  sync1.trigger("owl.goTo", number);
});

function center(number) {
  var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
  var num = number;
  var found = false;
  for (var i in sync2visible) {
    if (num === sync2visible[i]) {
      var found = true;
    }
  }

  if (found === false) {
    if (num > sync2visible[sync2visible.length - 1]) {
      sync2.trigger("owl.goTo", num - sync2visible.length + 2);
    } else {
      if (num - 1 === -1) {
        num = 0;
      }
      sync2.trigger("owl.goTo", num);
    }
  } else if (num === sync2visible[sync2visible.length - 1]) {
    sync2.trigger("owl.goTo", sync2visible[1]);
  } else if (num === sync2visible[0]) {
    sync2.trigger("owl.goTo", num - 1);
  }
}
