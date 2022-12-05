function init(elTabGroup) {
  let elNext = elTabGroup.querySelector(".im21--tab-group__button_next");
  let elPrev = elTabGroup.querySelector(".im21--tab-group__button_prev");
  let elSwiperContainer = elTabGroup.querySelector(".swiper-container");
  let elSwiperWrapper = elSwiperContainer.querySelector(".swiper-wrapper");
  const stars = document.querySelectorAll(".star");
let _rating = 0; // [0..5]
var total = 0;
var starsCount = [0, 0, 0, 0, 0];
const setRating = (num) => {
  _rating = num;
};
  let currentTab = null;
  let swiper = null;
  let swiperInit = false;
  let hasNav = false;

  function enableNav() {
    elTabGroup.classList.add("im21--tab-group_has-nav");

    swiper.params.slidesOffsetAfter = 34;
    swiper.params.slidesOffsetBefore = 34;

    hasNav = true;

    if (swiperInit) swiper.update();
  }

  function disableNav() {
    elTabGroup.classList.remove("im21--tab-group_has-nav");

    swiper.params.slidesOffsetAfter = 0;
    swiper.params.slidesOffsetBefore = 0;

    hasNav = false;

    if (swiperInit) swiper.update();
  }

  function onResize() {
    if (elSwiperWrapper.clientWidth < elSwiperWrapper.scrollWidth && !hasNav) {
      enableNav();
    } else if (
      elSwiperWrapper.clientWidth >= elSwiperWrapper.scrollWidth &&
      hasNav
    ) {
      disableNav();
    }
  }

  function setCurrentTab(elTab) {
    if (currentTab) currentTab.classList.remove("im21--tab-item_active");
    elTab.classList.add("im21--tab-item_active");
    currentTab = elTab;
  }

  function onClick(swiper, e) {
    let elTab = e.target.closest(".im21--tab-item");

    if (!elTab) return;

    let index = swiper.slides.indexOf(elTab);

    swiper.slideTo(index);

    let event = new CustomEvent("tab:change", { detail: index });

    elTabGroup.dispatchEvent(event);

    setCurrentTab(elTab);
  }

  let elTab = elTabGroup.querySelector(".im21--tab-item");

  setCurrentTab(elTab);

  let options = {
    init: false,
    slidesPerView: "auto",
    on: {
      click: onClick,
    },
    navigation: {
      disabledClass: "im21--tab-group__button_disabled",
      nextEl: elNext,
      prevEl: elPrev,
    },
  };

  swiper = new Swiper(elSwiperContainer, options);

  onResize();

  swiper.init();
  swiperInit = true;

  window.addEventListener("resize", onResize);
}

let elTabGroups = document.querySelectorAll(".im21--tab-group");

elTabGroups.forEach((el) => {
  init(el);
  el.addEventListener("tab:change", (e) => console.log(e));
});

$(".like, .dislike").on("click", function () {
  event.preventDefault();
  $(".active").removeClass("active");
  $(this).addClass("active");
});

stars.forEach((star, i) => {
  document.getElementsByClassName("count")[4 - i].innerHTML =
    "(" +
    document.getElementsByClassName("progressbar")[4 - i].value.toString() +
    ")";
});

// For example: out of 5 existing reviews, the average is 3.2
let avg = 3.2;
let count = 5.0;

// Round a floating point number to n decimal places.
const rounded = (f, n = 2) => {
  let i = 0;
  if (n > 0) {
    i = Math.round(f * Math.pow(10, n));
    return i / Math.pow(10, n);
  }
  return f;
};

const getAvg = () => {
  if (avg + _rating) {
    if (_rating === 0) return 1.0 * avg;
    if (avg === 0) return 1.0 * _rating;
    return rounded((count * avg + 1.0 * _rating) / (1 + count));
  }
  return "(unrated)";
};
const getRate = () => {
  if (_rating) {
    return _rating * 1.0;
  }
  return "(unrated)";
};

const updateDOM = () => {
  document.querySelector("span.avg").innerHTML = getAvg();
  // document.querySelector("span.rate").innerHTML = getRate();
};

const customRange = () => {
  document.getElementById("total").innerHTML =
    document.getElementById("progressbar").value + 1;
};

$(function () {
  // onload
  updateDOM();
});

$(".star").on("click", function (e) {
  stars.forEach((star, i) => {
    if (star === e.currentTarget) {
      setRating(i + 1);
      starsCount[4 - i] += 1;
      total += 1;

      console.log("Done");
      document.getElementsByClassName("count")[4 - i].innerHTML =
        "(" + starsCount[4 - i].toString() + ")";
      document.getElementsByClassName("progressbar")[4 - i].value =
        (starsCount[4 - i] / total) * 100;
      $("#game_rating").addClass("rated");
      if ($(".star.rated").length) {
        $(".star.rated").removeClass("rated");
      }
      e.currentTarget.classList.add("rated");
      $(".stars").addClass("rated");
      updateDOM();
    }
  });
});

$("#clear").click(function () {
  setRating(0);
  $(".rated").removeClass("rated");
  updateDOM();
});

$(document).ready(function () {
  /* 1. Visualizing things on Hover - See next part for action on click */
  $("#stars li")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          $(this).removeClass("hover");
        });
    });

  /* 2. Action to perform on click */
  $("#stars li").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // setRating(i + 1);
    // starsCount[4 - i] += 1;
    // total += 1;
    // document.getElementsByClassName("count").innerHTML = starsCount[4 - i];
    // document.getElementsByClassName("progressbar")[4 - i].value = (starsCount[4 - i] / total) * 100;
    // document.getElementById("total").innerHTML = total;
    console.dir(stars);
    console.log(stars, stars.children(".selected"));
  });
});
