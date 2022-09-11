//Global Alert
setTimeout(
  alert("This is a mobile website, resize your screen if on desktop!"),
  1000
);

// All Page 1 Scripts
// Video Makeshift Cover
const playDiv = document.querySelector(".asid");
const playBut = document.querySelector(".play");
const samVid = document.querySelector(".samtime");

playBut.addEventListener("click", (e) => {
  playDiv.classList.toggle("ass");
  e.target.classList.toggle("pla");

  if (samVid.paused) {
    samVid.play();
  } else {
    samVid.pause();
  }
});

// Sidebar toggle function
const sideB = document.querySelector(".side-bar");
const btnLogo = document.querySelector(".logo");
const page1 = document.querySelector(".page-1");

btnLogo.addEventListener("click", (e) => {
  if (e.target.innerText == "+") {
    e.target.innerText = "-";
    sideB.classList.add("togg");
    page1.classList.add("page-1-1");
  } else {
    e.target.innerText = "+";
    sideB.classList.remove("togg");
    page1.classList.remove("page-1-1");
  }
});
