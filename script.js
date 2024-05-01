function animation1() {
  document.getElementsByClassName("overlayMenu")[0].animate([{ right: 0 }], {
    duration: 400,
    fill: "forwards",
    easing: "ease-out",
  });
  document.body.style.overflow = 'hidden';

}

function animation2() {
  document
    .getElementsByClassName("overlayMenu")[0]
    .animate([{ right: "100%" }], {
      duration: 400,
      fill: "forwards",
      easing: "ease-out",
    });
    document.body.style.overflowY = 'scroll';
}


let i = 180;

function changeBackground() {
  if (i < 540) {
    document.body.style.backgroundImage = `linear-gradient(${i}deg, #09203F, #537895`;
    i++;
    setTimeout(changeBackground, 10);
  }
  if(i == 540){
    i = 180;
  }
}

changeBackground();




let intro = document.getElementsByClassName("intro")[0];
let hobbies = document.getElementsByClassName("hobbies")[0];
let sop = document.getElementsByClassName("sop")[0];

let currentSection = sessionStorage.getItem("currentSection");

if (!currentSection) {
  sessionStorage.setItem("currentSection", "intro");
}

function displayCurrentSection() {
  
  let currentSection = sessionStorage.getItem("currentSection");

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
  sessionStorage.setItem("currentSection", currentSection);
  animation2();
});

document.getElementById("hobbies").addEventListener("click", () => {
  intro.style.display = "none";
  if (window.innerWidth < 1024) hobbies.style.display = "flex";
  else hobbies.style.display = "grid";
  sop.style.display = "none";
  currentSection = 'hobbies';
  sessionStorage.setItem("currentSection", currentSection);
  animation2();
});

document.getElementById("sop").addEventListener("click", () => {
  intro.style.display = "none";
  hobbies.style.display = "none";
  sop.style.display = "flex";
  currentSection = 'sop';
  sessionStorage.setItem("currentSection", currentSection);
  animation2();
});

function time() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = formatting(m);
  s = formatting(s);
  document.getElementById('clock').innerHTML =  `<h2>${h}:${m}:${s}</h2>`;
  setTimeout(time, 1000);
}

function formatting(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

time()
