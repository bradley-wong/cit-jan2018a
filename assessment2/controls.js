var cchange = document.getElementById("cchange"),
    prevDiv = document.getElementById("preview"),
    nchange = document.getElementById("numB"),
    r1 = document.getElementById("r1"),
    r2 = document.getElementById("r2"),
    r3 = document.getElementById("r3"),
    r4 = document.getElementById("r4"),
    rchange = document.getElementById("rangeB"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    h=1, e=1, n=1, m=1,
    createButton = document.getElementById("increaseB"),
    dispDiv = document.getElementById("display"),
    rngButton = document.getElementById("randomB"),
    startB = document.getElementById("startB"),
    stopB = document.getElementById("stopB"),
    timer = null;

cchange.addEventListener("change", function(){
    prevDiv.style.backgroundColor = cchange.value;
});

nchange.addEventListener("click", function(){
    changeType("number");
});

rchange.addEventListener("click", function(){
    changeType("range");
});

r1.addEventListener("change", function(){
    hair.style.width = r1.value + "%";
});

r2.addEventListener("change", function(){
    eyes.style.width = r2.value + "%";
});

r3.addEventListener("change", function(){
    nose.style.width = r3.value + "%";
});

r4.addEventListener("change", function(){
    mouth.style.width = r4.value + "%";
});

hair.addEventListener("click", function(){
    h = cycleImg(hair,h,"hair");  
});

eyes.addEventListener("click", function(){
    e = cycleImg(eyes,e,"eyes");  
});

nose.addEventListener("click", function(){
    n = cycleImg(nose,n,"nose");  
});

mouth.addEventListener("click", function(){
    m = cycleImg(mouth,m,"mouth");  
});

rngButton.addEventListener("click", function(){
    randomFace();
});

createButton.addEventListener("click", function(){
    createDiv();
});

function cycleImg(part, count, name){
    count++;
    if(count>3)
        count=1;
    part.src = "img/"+name+count+".png";
    return count;
}

function copyValues(old,newE){
    newE.src=old.src;
    newE.style.top=old.style.top;
    newE.style.width=old.style.width;
    newE.style.position=old.style.position;
    return newE;
}

function rng(){
    return Math.floor((Math.random() * 3) + 1);
}

function createFace(ndiv){
    var img1 = document.createElement("img"),
        img2 = document.createElement("img"),
        img3 = document.createElement("img"),
        img4 = document.createElement("img");
    img1 = copyValues(hair,img1);
    img2 = copyValues(eyes,img2);
    img3 = copyValues(nose,img3);
    img4 = copyValues(mouth,img4);
    img1.className = "items";
    img2.className = "items";
    img3.className = "items";
    img4.className = "items";
    ndiv.appendChild(img1);
    ndiv.appendChild(img2);
    ndiv.appendChild(img3);
    ndiv.appendChild(img4);
    return ndiv;
}

function randomFace(){
    h = cycleImg(hair,rng(),"hair");
    e = cycleImg(eyes,rng(),"eyes");
    n = cycleImg(nose,rng(),"nose");
    m = cycleImg(mouth,rng(),"mouth");
}

function changeType(type){
    if(type=="number" || type=="range"){
        r1.type = type;
        r2.type = type; 
        r3.type = type; 
        r4.type = type;
    }
}

function createDiv(){
    //col-sm-4 col-md-6 col-lg-8 col-xl-12
    var ndiv = document.createElement("div");
    ndiv = createFace(ndiv);
    ndiv.style.backgroundColor = prevDiv.style.backgroundColor;
    ndiv.style.position = "relative";
    ndiv.id = "savedDiv"
    dispDiv.appendChild(ndiv);
}

startB.addEventListener("click", function(){
    timer = setInterval(function(){
        randomFace();
        createDiv();
    },500);
});

stopB.addEventListener("click", function(){
    clearInterval(timer);
});