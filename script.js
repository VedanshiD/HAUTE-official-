const popups = document.querySelectorAll(".popup");
const popupimgs = document.querySelectorAll(".popupimg");
const closebtn = document.querySelectorAll(".close");
if (popupimgs.length > 0) {
    popupimgs.forEach((img,index) => {
    img.addEventListener("click", function() {
        popups[index].style.display = "flex";
        });
    });
    closebtn.forEach((btn,index) => {
    btn.addEventListener("click", function() {
        popups[index].style.display = "none";
        });
    });
}
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");

if (menuBtn) {
    menuBtn.addEventListener("click", function() {
        menu.style.display = "flex";
    });
}
if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", function() {
        menu.style.display = "none";
    });
}