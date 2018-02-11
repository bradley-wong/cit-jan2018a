open = "0px";
close = "-110px";
bg = document.getElementById("bg");
zoom = document.getElementById("zoom");
app1 = document.getElementById("app1");

plus = document.getElementById("plus");
minus = document.getElementById("minus");

openButton = document.getElementById("openapp");
closeButton = document.getElementById("closeapp");
makeButton = document.getElementById("makebg");
resetButton = document.getElementById("reset");
showButton = document.getElementById("showapp");
hideButton = document.getElementById("hideapp");

menuBox = document.getElementById("menu");

openButton.addEventListener("click",function(){
    menu.style.left = open;
});

closeButton.addEventListener("click",function(){
    menu.style.left = close;
});

makeButton.addEventListener("click",function(){
    bg.style.backgroundImage = zoom.style.backgroundImage;
});

resetButton.addEventListener("click",function(){
    bg.style.backgroundImage = "none";
});

showButton.addEventListener("click",function(){
    app1.style.display = "block";
});

hideButton.addEventListener("click",function(){
    app1.style.display = "none";
});

zoom.addEventListener("click",function(){
   document.getElementById("zoomcontrols").style.display = "block"; 
});


tempW = 100;
tempH = 70;

plus.addEventListener("click",function(){
    tempW += 10;
    tempH += 7;
    zoom.style.width = tempW + "%";
    zoom.style.maxWidth = tempW + "%";
    zoom.style.height = tempH + "%";
    zoom.style.maxHeight = tempH + "%";
});

minus.addEventListener("click",function(){
    tempW -= 10;
    tempH -= 7;
    zoom.style.width = tempW + "%";
    zoom.style.maxWidth = tempW + "%";
    zoom.style.height = tempH + "%";
    zoom.style.maxHeight = tempH + "%";
});
