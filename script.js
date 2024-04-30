function animation1() {
  document.getElementsByClassName("overlayMenu")[0].animate([{ right: 0 }], {
    duration: 400,
    fill: "forwards",
    easing: "ease-out",
  });
}

function animation2() {
  document
    .getElementsByClassName("overlayMenu")[0]
    .animate([{ right: "100%" }], {
      duration: 400,
      fill: "forwards",
      easing: "ease-out",
    });
}

let intro = document.getElementsByClassName("intro")[0];
let hobbies = document.getElementsByClassName("hobbies")[0];
let sop = document.getElementsByClassName("sop")[0];

let currentSection = window.localStorage.getItem("currentSection");

if (!currentSection) {
  window.localStorage.setItem("currentSection", "intro");
}

function displayCurrentSection() {
  
  let currentSection = window.localStorage.getItem("currentSection");

  if (currentSection == "intro") {
    intro.style.display = "flex";
    hobbies.style.display = "none";
    sop.style.display = "none";
  } else if (currentSection == "hobbies") {
    intro.style.display = "none";
    if (window.innerWidth < 1024) hobbies.style.display = "flex";
    else hobbies.style.display = "grid";
    sop.style.display = "none";
  } else if (currentSection == "sop") {
    intro.style.display = "none";
    hobbies.style.display = "none";
    sop.style.display = "flex";
  }
}

displayCurrentSection();

document
  .getElementsByClassName("openMenu")[0]
  .addEventListener("click", animation1);
document
  .getElementsByClassName("closeMenu")[0]
  .addEventListener("click", animation2);

document.getElementById("intro").addEventListener("click", () => {
  intro.style.display = "flex";
  hobbies.style.display = "none";
  sop.style.display = "none";
  currentSection = 'intro';
  window.localStorage.setItem("currentSection", currentSection);
  animation2();
});

document.getElementById("hobbies").addEventListener("click", () => {
  intro.style.display = "none";
  if (window.innerWidth < 1024) hobbies.style.display = "flex";
  else hobbies.style.display = "grid";
  sop.style.display = "none";
  currentSection = 'hobbies';
  window.localStorage.setItem("currentSection", currentSection);
  animation2();
});

document.getElementById("sop").addEventListener("click", () => {
  intro.style.display = "none";
  hobbies.style.display = "none";
  sop.style.display = "flex";
  currentSection = 'sop';
  window.localStorage.setItem("currentSection", currentSection);
  animation2();
});
