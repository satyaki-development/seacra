var avatarElement = document.getElementsByClassName("avatar-initials");
var nameElement = document.getElementsByClassName("testimonial__author");
var avatarWidth = avatarElement[0].getAttribute("width");
var avatarHeight = avatarElement[0].getAttribute("height");

var initials = [];
var colorIndex = charIndex % 19;

console.log(avatarElement, initials);
for (let i = 0; i < nameElement.length; i++) {
  initials.push("");
  var name = nameElement[i].innerHTML.split(" ");
  var namelen = nameElement[i].innerHTML.split(" ").length;
  for (let j = 0; j < namelen; j++) {
    var charIndex = initials[i].charCodeAt(0) - 65;
    initials[i] += name[j].charAt(0).toUpperCase();
  }
}

avatarElement.style.backgroundColor = "#F6E1E4";
avatarElement.style.width = avatarWidth;
avatarElement.style.height = avatarHeight;
avatarElement.style.font = (avatarWidth / 2).toString() + "px Arial";
avatarElement.style.color = "#cc4e61";
avatarElement.style.textAli = n = "center";
avatarElement.style.borderRadius = "50%";
avatarElement.innerHTML = initials;
