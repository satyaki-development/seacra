var avatarElement = document.getElementsByClassName("avatar-initials")[0];
var nameElement = document.getElementsByClassName("testimonial__author")[0];
var avatarWidth = avatarElement.getAttribute("width");
var avatarHeight = avatarElement.getAttribute("height");
var name = nameElement.dataset["name"];
var initials =
  name.split(" ")[0].charAt(0).toUpperCase() +
  name.split(" ")[1].charAt(0).toUpperCase();
var charIndex = initials.charCodeAt(0) - 65;
var colorIndex = charIndex % 19;

console.log(
  nameElement,
  avatarWidth,
  avatarWidth / 2,
  (avatarWidth / 2).toString() + "px Arial"
);
avatarElement.style.backgroundColor = "#F6E1E4";
avatarElement.style.width = avatarWidth;
avatarElement.style.height = avatarHeight;
avatarElement.style.font = (avatarWidth / 2).toString() + "px Arial";
avatarElement.style.color = "#cc4e61";
avatarElement.style.textAli = n = "center";
avatarElement.style.borderRadius = "50%";
avatarElement.innerHTML = initials;
