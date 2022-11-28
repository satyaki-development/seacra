var avatarElement = document.getElementsByClassName("avatar-initials");
var nameElement = document.getElementsByClassName("testimonial__author");
var avatarWidth = avatarElement[0].getAttribute("width");
var avatarHeight = avatarElement[0].getAttribute("height");

var initials = [];
var colorIndex = charIndex % 19;

console.log(avatarElement, initials);
for (let i = 0; i < nameElement.length; i++) {
  initials = "";
  var name = nameElement[i].innerHTML.split(" ");
  var namelen = nameElement[i].innerHTML.split(" ").length;
  for (let j = 0; j < namelen; j++) {
    var charIndex = initials.charCodeAt(0) - 65;
    initials += name[j].charAt(0).toUpperCase();
  }
  avatarElement[i].style.backgroundColor = "#F6E1E4";
  avatarElement[i].style.width = avatarWidth;
  avatarElement[i].style.height = avatarHeight;
  avatarElement[i].style.font = "15px Arial";
  avatarElement[i].style.color = "#cc4e61";
  avatarElement[i].style.textAli = n = "center";
  avatarElement[i].style.borderRadius = "50%";
  avatarElement[i].innerHTML = initials;
}

