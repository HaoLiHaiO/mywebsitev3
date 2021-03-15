const entirebody = document.querySelector(".entirecontent");
const moon = document.getElementById("right");
const nav = document.querySelector("nav");
const links = document.querySelector(".links");

moon.addEventListener("click", () => {
  entirebody.classList.toggle("light");
  nav.classList.toggle("light");
  links.classList.toggle("light");
});
