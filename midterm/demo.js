var hRad = document.getElementById("hSelect");
var bRad = document.getElementById("bSelect");
var lRad = document.getElementById("lSelect");
var fRad = document.getElementById("fSelect");

var hImg = document.getElementById("headImg");
var bImg = document.getElementById("bodyImg");
var lImg = document.getElementById("legImg");
var fImg = document.getElementById("footImg");

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

var inText = document.getElementById("inText");

var hBool = false;
var bBool = false;
var lBool = false;
var fBool = false;

var h=1,b=1,l=1,f=1;

function rng(range) {
    return Math.floor(Math.random() * Math.floor(range));
}

hRad.addEventListener("click", function(){
    hBool = true;
    bBool = false;
    lBool = false;
    fBool = false;
});

bRad.addEventListener("click", function(){
    hBool = false;
    bBool = true;
    lBool = false;
    fBool = false;
});

lRad.addEventListener("click", function(){
    hBool = false;
    bBool = false;
    lBool = true;
    fBool = false;
});

fRad.addEventListener("click", function(){
    hBool = false;
    bBool = false;
    lBool = false;
    fBool = true;
});

nextButton.addEventListener("click", function(){
    if(hBool){
        h++;
        if(h>3)
            h=1;
        hImg.src = "imgs/gears/h"+h+".png";
    } else if(bBool){
        b++;
        if(b>3)
            b=1;
        bImg.src = "imgs/gears/b"+b+".png";
    } else if(lBool){
        l++;
        if(l>3)
            l=1;
        lImg.src = "imgs/gears/l"+l+".png";
    } else if(fBool){
        f++;
        if(f>3)
            f=1;
        fImg.src = "imgs/gears/f"+f+".png";
    } else {
        window.alert("No option selected!");
    }
});

prevButton.addEventListener("click", function(){
    if(hBool){
        h--;
        if(h<1)
            h=3;
        hImg.src = "imgs/gears/h"+h+".png";
    } else if(bBool){
        b--;
        if(b<1)
            b=3;
        bImg.src = "imgs/gears/b"+b+".png";
    } else if(lBool){
        l--;
        if(l<1)
            l=3;
        lImg.src = "imgs/gears/l"+l+".png";
    } else if(fBool){
        f--;
        if(f<1)
            f=3;
        fImg.src = "imgs/gears/f"+f+".png";
    } else {
        window.alert("No option selected!");
    }
});

inText.addEventListener("keyup", function(e){
    if(e.keyCode == 13) {
        if(inText.value == "combo1") {
            h=1,b=1,l=1,f=1;
        } else if(inText.value == "combo2") {
            h=2,b=2,l=2,f=2;
        } else if(inText.value == "combo3") {
            h=3,b=3,l=3,f=3;
        } else if(inText.value == "combo4") {
            h=4,b=4,l=4,f=4;
        } else if(inText.value == "random") {
            h=rng(3)+1;
            b=rng(3)+1;
            l=rng(3)+1;
            f=rng(3)+1;
            console.log(h,b,l,f);
        }
        
        hImg.src = "imgs/gears/h"+h+".png";
        bImg.src = "imgs/gears/b"+b+".png";
        lImg.src = "imgs/gears/l"+l+".png";
        fImg.src = "imgs/gears/f"+f+".png";
        inText.value = "";
    }
});