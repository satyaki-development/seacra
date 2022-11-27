var avatarElement = document.getElementsByClassName("avatar-initials");
var nameElement = document.getElementsByClassName("testimonial__author");
var avatarWidth = avatarElement[0].getAttribute("width");
var avatarHeight = avatarElement[0].getAttribute("height");
var name = nameElement.innerHTML.split(" ");
var namelen = nameElement.innerHTML.split(" ").length;
var initials = "";
var charIndex = initials.charCodeAt(0) - 65;
var colorIndex = charIndex % 19;

console.log(avatarElement, initials);
for (let i = 0; i < namelen; i++) {
  initials += name[i].charAt(0).toUpperCase();
}

avatarElement.style.backgroundColor = "#F6E1E4";
avatarElement.style.width = avatarWidth;
avatarElement.style.height = avatarHeight;
avatarElement.style.font = (avatarWidth / 2).toString() + "px Arial";
avatarElement.style.color = "#cc4e61";
avatarElement.style.textAli = n = "center";
avatarElement.style.borderRadius = "50%";
avatarElement.innerHTML = initials;
