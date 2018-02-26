var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");

var main = document.getElementById("main");
var mcontents = document.getElementById("mcontents");
var theTitle = document.getElementById("theTitle");
var theFirst = document.getElementById("theFirst");
var theSecond = document.getElementById("theSecond");
var theThird = document.getElementById("theThird");

bg1.addEventListener("click", function(){
    main.style.display = "block";
    theTitle.innerText = "Head Gear";
    theFirst.src = "imgs/gears/h1.png";
    theSecond.src = "imgs/gears/h2.png";
    theThird.src = "imgs/gears/h3.png";
});

bg2.addEventListener("click", function(){
    main.style.display = "block";
    theTitle.innerText = "Body Gear";
    theFirst.src = "imgs/gears/b1.png";
    theSecond.src = "imgs/gears/b2.png";
    theThird.src = "imgs/gears/b3.png";
});

bg3.addEventListener("click", function(){
    main.style.display = "block";
    theTitle.innerText = "Leg Gear";
    theFirst.src = "imgs/gears/l1.png";
    theSecond.src = "imgs/gears/l2.png";
    theThird.src = "imgs/gears/l3.png";
});

bg4.addEventListener("click", function(){
    main.style.display = "block";
    theTitle.innerText = "Foot Gear";
    theFirst.src = "imgs/gears/f1.png";
    theSecond.src = "imgs/gears/f2.png";
    theThird.src = "imgs/gears/f3.png";
});

