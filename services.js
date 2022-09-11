// All Page 2 Scripts
// Sidebar toggle function
const page2SideB = document.querySelector(".page-2-side-bar");
const page2BtnLogo = document.querySelector(".page-2-logo");
const page2 = document.querySelector(".page-2");

page2BtnLogo.addEventListener("click", (e) => {
  if (e.target.innerText == "+") {
    e.target.innerText = "-";
    page2SideB.classList.add("togg");
    page2.classList.add("page-2-1");
  } else {
    e.target.innerText = "+";
    page2SideB.classList.remove("togg");
    page2.classList.remove("page-2-1");
  }
});

// Section Content toggle function
const section = document.querySelectorAll(".section-togg");

section.forEach((key) => {
  key.addEventListener("click", () => {
    key.classList.toggle("active");
  });
});
