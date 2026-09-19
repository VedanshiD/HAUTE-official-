const popups = document.querySelectorAll(".popup");
const popupimgs = document.querySelectorAll(".popupimg");
const closebtn = document.querySelectorAll(".close");
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