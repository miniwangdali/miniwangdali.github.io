var resumeCH, resumeEN, resumeCard;
var language = "CH";

function resumeInit(){
    resumeCH = document.getElementsByName("CH");
    resumeEN = document.getElementsByName("EN");
    resumeCard = document.getElementsByClassName("card");
    if(language == "EN"){
        document.getElementById("resumeEN").style.color = "#EC407A";
        document.getElementById("resumeCH").style.color = "#d5d5d5";
        for(var i = 0; i < resumeCH.length; i ++){
            resumeCH[i].style.display = "none";
        }
    }else if(language == "CH"){
        document.getElementById("resumeCH").style.color = "#EC407A";
        document.getElementById("resumeEN").style.color = "#d5d5d5";
        for(var i = 0; i < resumeEN.length; i ++){
            resumeEN[i].style.display = "none";
        }
    }
}

function toCH(){
    //animationClear();
    language = "CH";
    document.getElementById("resumeCH").style.color = "#EC407A";
    document.getElementById("resumeEN").style.color = "#d5d5d5";
    for (var i = 0; i < resumeEN.length; i ++) {
        resumeEN[i].style.display = "none";
        resumeCH[i].style.display = "inline";
    }
    //animateIn();
}
function toEN(){
    //animationClear();
    language = "EN";
    document.getElementById("resumeCH").style.color = "#d5d5d5";
    document.getElementById("resumeEN").style.color = "#EC407A";
    for (var i = 0; i < resumeEN.length; i ++) {
        resumeEN[i].style.display = "inline";
        resumeCH[i].style.display = "none";
    }
    //animateIn();
}
function animateOut(toFunc){
    for(var i = 0; i < resumeCard.length; i ++){
        resumeCard[i].addEventListener("webkitAnimationEnd", toFunc);  // Chrome, Safari 和 Opera
        resumeCard[i].addEventListener("animationend", toFunc);
        resumeCard[i].style.animation = "flipOutX 0.5s";
        resumeCard[i].style.webkitAnimation = "flipOutX 0.5s";
    }
}
function animateIn(){
    for(var i = 0; i < resumeCard.length; i ++){
        resumeCard[i].addEventListener("webkitAnimationEnd", animationClear);  // Chrome, Safari 和 Opera
        resumeCard[i].addEventListener("animationend", animationClear);
        resumeCard[i].style.animation = "flipInX 0.5s";
        resumeCard[i].style.webkitAnimation = "flipInX 0.5s";
    }
}
function animationClear(){
    for(var i = 0; i < resumeCard.length; i ++){
        resumeCard[i].style.animation = "";
        resumeCard[i].style.webkitAnimation = "";
    }
}