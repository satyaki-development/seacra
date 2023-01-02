  var circle = document.querySelector(".circle");
  var start = document.querySelector("#animate");
  var offset = [
    "Break-Out",
    "GP",
    "Dermatologist",
    "Prescription",
    "Feeling low, tummy-ache",
    "Dry skin, sensitivity, irritations",
    "Flare-up",
    "Stop acne treatment"
  ];
  window.addEventListener("click", (event) => {
    console.log("Its Delayed");
    document.getElementsByClassName("btn-yellow")[0].addEventListener("click",  (event) => {startanimation()
    setTimeout(function () {
      appeardiv("step21");
    }, 500);
    setTimeout(function () {
      appeardiv("step22");
    }, 1500);
    setTimeout(function () {
      appeardiv("step23");
    }, 2000);
    setTimeout(function () {
      appeardiv("step24");
    }, 2500);
    setTimeout(function () {
      appeardiv("step25");
    }, 3000);
    setTimeout(function () {
      appeardiv("step26");
    }, 3500);
    setTimeout(function () {
      appeardiv("step27");
    }, 4000);
    setTimeout(function () {
      appeardiv("step28");
    }, 4500);

    document
      .getElementById("button-2")
      .addEventListener("click", (event) => {
        document.getElementsByClassName("svg-box")[1].style.display =
          "none";
        document.getElementById("layout").classList.add("show");
      });
    });
  });
  function appeardiv(id) {
    var bullet = document.getElementById(id);
    console.log(id);
    text = bullet.getElementsByTagName("span")[0];
    text.innerHTML = offset[id[parseInt(id.length) - 1] - 1];
    bullet.style.display = "block";
  }
  
  function startanimation() {
    start.style.display = "block";
    deanimate = document.querySelector(".yellow-container");
    deanimate.style.display = "none";
  }