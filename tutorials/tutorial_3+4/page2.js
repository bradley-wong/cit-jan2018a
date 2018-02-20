var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");

var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");

var numUse = 0;

bgText.addEventListener("keyup", function(e){
    if(e.keyCode == 13) {
        
        if(c1.checked) {
            if(bgText.value == "bird") {
                document.body.style.backgroundImage = "url(imgs/1.jpg)";
            } else if (bgText == "grass") {
                document.body.style.backgroundImage = "url(imgs/2.jpg)";
            } else if (bgText == "dog") {
                document.body.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
        } else if(c2.checked) {
            if(bgText.value == "bird") {
                prevDiv.body.style.backgroundImage = "url(imgs/1.jpg)";
            } else if (bgText == "grass") {
                prevDiv.body.style.backgroundImage = "url(imgs/2.jpg)";
            } else if (bgText == "dog") {
                prevDiv.body.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
        } else if(c3.checked) {
            if(bgText.value == "bird") {
                menu.body.style.backgroundImage = "url(imgs/1.jpg)";
            } else if (bgText == "grass") {
                menu.body.style.backgroundImage = "url(imgs/2.jpg)";
            } else if (bgText == "dog") {
                menu.body.style.backgroundImage = "url(imgs/3.jpg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
        } else {
            alert("Choose an option");
        }
        
        bgText.value = "";
        
        numUse++;
        if(numUse > 5) {
            document.getElementById("display").innerHTML = "You've reached the limit. Please pay to use more!";
        }
    }
});

picChooser.addEventListener("change", function(){
    var picNum = parseInt(picChooser.value);
    if(picNum > 3)
        picChooser.value = 1;
    prevDiv.style.backgroundImage = "url(imgs/"+picChoser.value+".jpg";
});