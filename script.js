const popup = document.getElementById("colaromapopup");
const popupimg = document.getElementById("colaromabottle");
const closebtn = document.getElementById("colaromaclose");
popupimg.addEventListener("click", function() {
    popup.style.display = "block";
});
closebtn.addEventListener("click", function() {
    popup.style.display = "none";
});
