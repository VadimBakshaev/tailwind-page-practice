import "./../styles/styles.css";

const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");

document.getElementById("open").addEventListener("click", () => {
  overlay.classList.remove("hidden");
  menu.classList.remove("hidden");
});

document.getElementById("close").addEventListener("click", () => {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
});
