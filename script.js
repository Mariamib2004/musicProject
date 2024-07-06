let navbar = document.querySelector(".nav"); // Select the first element with class 'nav'
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#00173c";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
// let images = document.querySelectorAll(".fleximg");
// let texts = document.querySelectorAll(".fleximgText");
let Item = document.getElementsByClassName("item");

for (let i = 0; i < Item.length; i++) {
  Item[i].addEventListener("onmouseenter", () => {
    Item[i].style.color = "4ac4cf";
  });
}

console.log("Helooo from js");
