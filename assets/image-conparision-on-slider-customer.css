$(".gallery-responsive").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//   comparision slider

// Call & init
$(document).ready(function () {
  $(".ba-slider").each(function () {
    var cur = $(this);
    // Adjust the slider
    var width = cur.width() + "px";
    cur.find(".resize img").css("width", width);
    // Bind dragging events
    drags(cur.find(".handle"), cur.find(".resize"), cur);
  });
});

// Update sliders on resize.
// We all do it: i.imgur.com/YkbaV.gif
$(window).resize(function () {
  $(".ba-slider").each(function () {
    var cur = $(this);
    var width = cur.width() + "px";
    cur.find(".resize img").css("width", width);
  });
});

function drags(dragElement, resizeElement, container) {
  // Initialize the dragging event on mousedown.
  dragElement
    .on("mousedown touchstart", function (e) {
      dragElement.addClass("draggable");
      resizeElement.addClass("resizable");

      // Check if it's a mouse or touch event and pass along the correct value
      var startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;

      // Get the initial position
      var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();

      // Set limits
      minLeft = containerOffset + 10;
      maxLeft = containerOffset + containerWidth - dragWidth - 10;

      // Calculate the dragging distance on mousemove.
      dragElement
        .parents()
        .on("mousemove touchmove", function (e) {
          // Check if it's a mouse or touch event and pass along the correct value
          var moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
          console.log(startX, e.pageX);
          leftValue = moveX + posX - dragWidth;

          // Prevent going off limits
          if (leftValue < minLeft) {
            leftValue = minLeft;
          } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
          }

          // Translate the handle's left value to masked divs width.
          widthValue =
            ((leftValue + dragWidth / 2 - containerOffset) * 100) /
              containerWidth +
            "%";

          // Set the new values for the slider and the handle.
          // Bind mouseup events to stop dragging.
          $(".draggable")
            .css("left", widthValue)
            .on("mouseup touchend touchcancel", function () {
              $(this).removeClass("draggable");
              resizeElement.removeClass("resizable");
            });
          $(".resizable").css("width", widthValue);
        })
        .on("mouseup touchend touchcancel", function () {
          dragElement.removeClass("draggable");
          resizeElement.removeClass("resizable");
        });
      e.preventDefault();
    })
    .on("mouseup touchend touchcancel", function (e) {
      dragElement.removeClass("draggable");
      resizeElement.removeClass("resizable");
    });
}
