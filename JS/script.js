const mengetik = new Typed(".typing", {
  strings: ["student", "Newbie Programing"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.toggle("darkmode");
    document.getElementById("navbar").classList.toggle("darkmode");
    document.getElementById("profile").classList.toggle("darkmode");
    document.getElementById("aboutme").classList.toggle("darkmode");
    document.getElementById("myprojects").classList.toggle("darkmode");
    document.getElementById("contactme").classList.toggle("darkmode");
    document.getElementById("signIn").classList.toggle("darkmode");
    document.getElementById("signUp").classList.toggle("darkmode");
    document.getElementById("navbar").classList.toggle("border");
    document.getElementById("menu-list").classList.toggle("darkmode");
  } else {
  }
}
