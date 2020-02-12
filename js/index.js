// Your code goes here

const navBar = document.querySelector(".nav-container");
const logo = document.querySelector(".logo-heading");
const navLinks = document.querySelector(".nav");

// Logo background changes to sky blue with mouseover
logo.addEventListener("mouseover", () => {
  logo.style.backgroundColor = "skyblue";
});

// Clicking logo toggles navbar background
logo.addEventListener("click", (event) => {
    event.stopPropagation();
    if (navBar.style.backgroundColor == "pink") {
      navBar.style.backgroundColor = "initial";
    } else {
      navBar.style.backgroundColor = "pink";
    }
  },
  false
);

// Clicking navbar *outside of logo* toggles nav links background
navBar.addEventListener("click", () => {
  if (navLinks.style.backgroundColor == "hotpink") {
    navLinks.style.backgroundColor = "initial";
  } else {
    navLinks.style.backgroundColor = "hotpink";
  }
});

// Logo background changes to parent when mouse leaves navbar (not logo)
navBar.addEventListener("mouseleave", () => {
  logo.style.backgroundColor = "inherit";
});

//All images but first increase in size 30% over half a second when double-clicked
document.querySelectorAll("img").forEach((item, index) => {
  if (index > 0) {
    item.addEventListener("dblclick", () => {
      item.style.transform = "scale(1.3)";
      item.style.transition = "transform 0.5s";
    });
  }
});

//Second image decreases to 80% on mouseover, increases to 130% of original size when double-clicked.
const secondImg = document.querySelectorAll("img")[1];
secondImg.addEventListener("mouseenter", () => {
  secondImg.style.transform = "scale(0.8)";
  secondImg.style.transition = "transform 0.3s";
});

//All images return to original size over 2 seconds when mouse wheel input is detected
window.addEventListener("wheel", event => {
  document.querySelectorAll("img").forEach((item, index) => {
    item.style.transform = "scale(1.0)";
    item.style.transition = "transform 2.0s";
  });
  event.preventDefault();
});

const buttons = document.querySelectorAll(".btn");
const btnCount = [1, 1, 1];
buttons.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    item.innerText = "Not me!";
    buttons[(index + 1) % 3].innerText = "Not me!";
    buttons[(index + 2) % 3].innerText = "Click me!";
  });
  const myPar = item.parentNode.querySelector("p");
  myPar.innerText = ".";
  item.addEventListener("click", () => {
    if (btnCount[index] >= 17) {
      btnCount[index] = 0;
      myPar.innerText = ".";
    }
    btnCount[index]++;
    myPar.innerText = "BUFFALO " + myPar.innerText;
  });
});

const homeDiv = document.querySelector(".home");

window.addEventListener("keydown", () => {
  homeDiv.style.backgroundColor = "peachpuff";
});
window.addEventListener("keyup", () => {
  homeDiv.style.backgroundColor = "initial";
});

document.querySelectorAll('a').forEach((item, index) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("stopped the link");
    })
})