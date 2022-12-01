document
.getElementsByClassName("positive-negative-container")[0]
.addEventListener("mousemove", function (n) {
  (t.style.left = n.clientX + "px"),
    (t.style.top = n.clientY + "px"),
    (e.style.left = n.clientX + "px"),
    (e.style.top = n.clientY + "px");
  // i.style.left = n.clientX + "px",
  // i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
e = document.getElementById("cursor2");
// console.log("t", t)

// console.log("e", e)
function n(t) {
e.classList.add("hover");
}
function s(t) {
e.classList.remove("hover");
}
s();
for (
var r = document.querySelectorAll(".hover-link"), a = r.length - 1;
a >= 0;
a--
) {
o(r[a]);
console.log(r[a]);
}

function o(t) {
t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
}
//Color change on scroll

$(".section .positive").on("mouseover", function (event) {
$(".positive-negative-container").addClass("color-cyan");
});
$(".section .positive").on("mouseout", function (event) {
$(".positive-negative-container").removeClass("color-cyan");
});

$(".section .negative").on("mouseover", function (event) {
$(".positive-negative-container").addClass("color-red");
});
$(".section .negative").on("mouseout", function (event) {
$(".positive-negative-container").removeClass("color-red");
});