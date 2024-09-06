const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
  sideMenu.style.transform = "translate(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translate(16rem)";
}
