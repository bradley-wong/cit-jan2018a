var menu = document.getElementById("menu");
var downImg = document.getElementById("downImg");
var clicked = false;

downImg.addEventListener("click", function(){
    if(clicked){
        menu.style.top = "-55px";
        clicked = false;
    } else {
        menu.style.top = "25px";
        clicked = true;
    }
});