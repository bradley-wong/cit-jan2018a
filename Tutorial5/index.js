var dispDiv = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,
    stInp = document.getElementById("stickerUrl"),
    stC = document.getElementById("cursor"),
    stH = document.getElementById("stickerHeight"),
    imgH = 90;

document.getElementById("bgcolor").addEventListener("change", function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
    changeImage(this);
});

st2.addEventListener("click", function(){
    changeImage(this);
});

dispDiv.addEventListener("click", function(ev){
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className = "displayStickers";
    newImg.style.height = imgH+"px";
    console.log(imgH);
    dispDiv.appendChild(newImg);
    newImg.style.left = ev.pageX+"px";
    newImg.style.top = ev.pageY+"px";
});

stInp.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        var newSticker = document.createElement("img");
        newSticker.src = stInp.value;
        newSticker.className = "stickers";
        document.getElementById("stickers").appendChild(newSticker);
        stInp.value = "";
        newSticker.addEventListener("click", function(){
            changeImage(this);
        });
    }
});

dispDiv.addEventListener("mousemove", function(ev){
    stC.style.left = ev.pageX+"px";
    stC.style.top = ev.pageY+"px";
});

stH.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        imgH = stH.value;
        stH.value = "";
    }
});

function changeImage(el){
    imgSrc = el.src;
    stC.src = imgSrc;
}