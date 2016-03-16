var rightframe;
var leftheader;
var portrait;
var pagesframe;
var startTime;

function init(){
    leftheader = document.getElementById("lHeader");
    portrait = document.getElementById("portrait");
    rightframe = document.getElementById("rightframe");
    pagesframe = document.getElementById("pages");
}
function gotoResume(){
    pagesframe.src = "./resumeEN.html";
    var ul = document.getElementById("mainul");
    function onulEnd(){
        ul.style.animation = "";
        ul.style.webkitAnimation = "";
        ul.style.width = "50%";
        openResume();
    }
    ul.addEventListener("webkitAnimationEnd", onulEnd);  // Chrome, Safari 和 Opera
    ul.addEventListener("animationend", onulEnd);        // 标准语法
    ul.style.animation = "narrowWidth 2s";
    ul.style.webkitAnimation = "narrowWidth 2s";
}
function openResume(){
    var resumeList = document.getElementById("resumeList");
    function onulEnd(){
        resumeList.style.animation = "";
        resumeList.style.webkitAnimation = "";
        resumeListFadeIn(resumeList);
    }
    resumeList.addEventListener("webkitAnimationEnd", onulEnd);  // Chrome, Safari 和 Opera
    resumeList.addEventListener("animationend", onulEnd);
    resumeList.style.animation = "expandWidth 2s";
    resumeList.style.webkitAnimation = "expandWidth 2s";
    resumeList.style.display = "inline";
    
}
function resumeListFadeIn(parent){
    var children = parent.getElementsByClassName("subli");
    for(var i = 0; i < children.length; i ++){
        children[i].style.visibility = "visible";
        children[i].style.animation = "fadeInVertical 2s";
        children[i].style.webkitAnimation = "fadeInVertical 2s";
    }
}
