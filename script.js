let navbar = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#00173c";
    // navbar.style.borderBottomColor = "white";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
let items = document.getElementsByClassName("list-data");
for (let item of items) {
  item.addEventListener("mouseenter", () => {
    item.style.color = "#4ac4cf";
  });
  item.addEventListener("mouseleave", () => {
    item.style.color = "white";
  });
}
let images = document.getElementsByClassName("fleximg");
let texts = document.getElementsByClassName("fleximgText");
let videoBg = document.getElementById("video-container");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseenter", () => {
    texts[i].style.color = "#4ac4cf";
    images[i].style.borderRight = "2px solid #4ac4cf";
    images[i].style.borderBottom = "2px solid #4ac4cf";
  });
  images[i].addEventListener("mouseleave", () => {
    texts[i].style.color = "white";
    images[i].style.borderRight = "none";
    images[i].style.borderBottom = "none";
  });
}
images[0].addEventListener("click", () => {
  videoBg.style.backgroundImage = "url('images/bigvideo1.jpg')";
});
images[1].addEventListener("click", () => {
  videoBg.style.backgroundImage = "url('images/bigvideo2.png')";
});
images[2].addEventListener("click", () => {
  videoBg.style.backgroundImage = "url('images/bigvideo3.png')";
});
images[3].addEventListener("click", () => {
  videoBg.style.backgroundImage = "url('images/bigvideo4.png')";
});
let textt = document.getElementsByClassName("lastText");
for (let i = 0; i < textt.length; i++) {
  textt[i].addEventListener("mouseover", () => {
    textt[i].style.color = "#4ac4cf";
  });
  textt[i].addEventListener("mouseout", () => {
    textt[i].style.color = "black";
  });
}
let child = document.getElementsByClassName("childDiv");
let trans = document.getElementsByClassName("transparent");
child[0].addEventListener("mouseover", () => {
  trans[0].style.width = "400px";
  trans[0].style.left = "210px";
});
child[0].addEventListener("mouseout", () => {
  trans[0].style.width = "300px";
  trans[0].style.left = "260px";
});

child[1].addEventListener("mouseover", () => {
  trans[1].style.width = "400px";
});
child[1].addEventListener("mouseout", () => {
  trans[1].style.width = "300px";
});

child[2].addEventListener("mouseover", () => {
  trans[2].style.width = "400px";
  trans[2].style.right = "210px";
});
child[2].addEventListener("mouseout", () => {
  trans[2].style.width = "300px";
  trans[2].style.right = "260px";
});

// let bigContainer = document.querySelector(".fleximgs");
// let containers = document.getElementsByClassName("imagesContainer");
// let imgs = document.getElementsByClassName("flexim");
// let divv = document.createElement("div");
// divv.style.position = "absolute";
// divv.style.width = "25%";
// divv.style.height = "100%";
// divv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
// divv.style.zIndex = "2";
// divv.style.display = "none"; // Initially hidden
// for (let i = 0; i < containers.length; i++) {
//   console.log("Forloop entered!");
//   containers[i].appendChild(divv);
//   containers[i].addEventListener("mouseover", () => {
//     imgs[i].style.zIndex = "1";
//     divv.style.display = "block"; // Show the overlay div
//   });

//   containers[i].addEventListener("mouseout", () => {
//     divv.style.display = "none"; // Hide the overlay div
//   });
// }

// console.log("Helooo from js");
// console.log("Helooo");
// console.log("Hellooo");
// console.log("Hellooo Mariam");
// console.log("Hellooo Mariam22");
// console.log("Hellooo Mariam22345");
// console.log("Hellooo Mariam22345");
