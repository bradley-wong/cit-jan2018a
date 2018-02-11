backdrop = document.getElementById("zoom");

previousButton = document.getElementById("prev");

bg1 = document.getElementById("bg1");
bg2 = document.getElementById("bg2");
bg3 = document.getElementById("bg3");
bg4 = document.getElementById("bg4");

nextButton = document.getElementById("next");

currentRotation = 0;

circle1 = document.getElementById("ch1");
circle2 = document.getElementById("ch2");
circle3 = document.getElementById("ch3");

function set1() {
    currentRotation = 1;
    circle1.style.backgroundImage = "url(imgs/i1.jpg)";
    circle2.style.backgroundImage = "url(imgs/i2.jpg)";
    circle3.style.backgroundImage = "url(imgs/i3.jpg)";
}

function set2() {
    currentRotation = 2;
    circle1.style.backgroundImage = "url(imgs/i4.jpg)";
    circle2.style.backgroundImage = "url(imgs/i5.jpg)";
    circle3.style.backgroundImage = "url(imgs/i6.jpg)";
}

function set3() {
    currentRotation = 3;
    circle1.style.backgroundImage = "url(imgs/i7.jpg)";
    circle2.style.backgroundImage = "url(imgs/i8.jpg)";
    circle3.style.backgroundImage = "url(imgs/i9.jpg)";
}

function set4() {
    currentRotation = 4;
    circle1.style.backgroundImage = "url(imgs/i10.jpg)";
    circle2.style.backgroundImage = "url(imgs/i11.jpg)";
    circle3.style.backgroundImage = "url(imgs/i12.jpg)";
}

bg1.addEventListener("click", function(){
    set1();
});

bg2.addEventListener("click", function(){
    set2();
});

bg3.addEventListener("click", function(){
    set3();
});

bg4.addEventListener("click", function(){
    set4();
});

circle1.addEventListener("mouseenter",function(){
    backdrop.style.backgroundImage = circle1.style.backgroundImage;
});

circle2.addEventListener("mouseenter",function(){
    backdrop.style.backgroundImage = circle2.style.backgroundImage;
});

circle3.addEventListener("mouseenter",function(){
    backdrop.style.backgroundImage = circle3.style.backgroundImage;
});

nextButton.addEventListener("click",function(){
    if(currentRotation == 0) {
        set1();
    } else if(currentRotation == 1) {
        set2();
    } else if(currentRotation == 2) {
        set3();
    } else if(currentRotation == 3) {
        set4();
    } else if(currentRotation == 4) {
        set1();
    }
});

previousButton.addEventListener("click",function(){
    if(currentRotation == 0) {
        set4();
    } else if(currentRotation == 1) {
        set4();
    } else if(currentRotation == 2) {
        set1();
    } else if(currentRotation == 3) {
        set2();
    } else if(currentRotation == 4) {
        set3();
    }
});


