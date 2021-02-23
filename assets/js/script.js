const burgermenu = document.getElementById("burgerbutton");
const closeicon = document.getElementById("closeicon");
const nav = document.getElementById("navigation");
const hometext = document.getElementById("hometext");
const theme = document.getElementById("theme");
const topicons = document.getElementById("topicons");
const navelements = document.querySelectorAll(".navelements");
const homepicwebp = document.getElementById("mewebp");
const homepicjpg = document.getElementById("mejpg");
const meimg = document.getElementById("meimg");

burgermenu.addEventListener("click", () => {
  burgermenu.classList.remove("show");
  closeicon.classList.remove("hide");
  burgermenu.classList.toggle("hide");
  closeicon.classList.toggle("show");

  nav.classList.remove("hide");
  hometext.classList.remove("show");
  nav.classList.toggle("show");
  hometext.classList.toggle("hide");
});

closeicon.addEventListener("click", () => {
  burgermenu.classList.remove("hide");
  closeicon.classList.remove("show");
  burgermenu.classList.toggle("show");
  closeicon.classList.toggle("hide");

  nav.classList.remove("show");
  hometext.classList.remove("hide");
  nav.classList.toggle("hide");
  hometext.classList.toggle("show");
});

theme.addEventListener("click", () => {
  hometext.classList.toggle("light");
  topicons.classList.toggle("light");
  nav.classList.toggle("light");

  navelements.forEach((element) => {
    element.classList.toggle("light");
  });

  homepicwebp.classList.toggle("light");
  homepicjpg.classList.toggle("light");
  meimg.classList.toggle("light");
  togglePicture();
});

function togglePicture() {
  if (
    homepicjpg.classList.contains("light") &&
    homepicwebp.classList.contains("light") &&
    meimg.classList.contains("light")
  ) {
    homepicjpg.srcset = "/assets/images/melighttheme.jpg";
    homepicwebp.srcset = "/assets/images/melighttheme.webp";
    meimg.src = "/assets/images/melighttheme.jpg";
  } else {
    homepicjpg.srcset = "/assets/images/medarktoosmall.jpg";
    homepicwebp.srcset = "/assets/images/medarktoosmall.webp";
    meimg.src = "/assets/images/medarktoosmall.jpg";
  }
}
