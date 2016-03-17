var rightframe;
var leftheader;
var portrait;
var pagesframe;
var startTime;
var listOpen = false;
var currentPos = 0;
var iframe;

function init(){
    leftheader = document.getElementById("lHeader");
    portrait = document.getElementById("portrait");
    rightframe = document.getElementById("rightframe");
    pagesframe = document.getElementById("pages");
}
function gotoResume(){
    if(listOpen) return;
    listOpen = true;
    // pagesframe.src = "./resumeEN.html";
    var ul = document.getElementById("mainul");
    var li = ul.getElementsByClassName("li");
    function onulEnd(){
        ul.style.animation = "";
        ul.style.webkitAnimation = "";
        ul.style.width = "50%";
        for (var i = 0; i < li.length; i++) {
            if (i != 1) {
                li[i].style.animation = "";
                li[i].style.webkitAnimation = "";
                li[i].style.opacity = 0.5;
                li[i].onmouseover = function(){
                    this.style.opacity = 1;    
                };
                li[i].onmouseout = function(){
                    this.style.opacity = 0.5;
                };
            }
        }
        li[1].style.backgroundColor = "#1976D2";
        openResume();
    }
    ul.addEventListener("webkitAnimationEnd", onulEnd);  // Chrome, Safari 和 Opera
    ul.addEventListener("animationend", onulEnd);        // 标准语法
    ul.style.animation = "narrowWidth 1.2s";
    ul.style.webkitAnimation = "narrowWidth 1.2s";
    for(var i = 0; i < li.length; i ++){
        if(i != 1){
            li[i].style.animation = "fadeOut 1.2s";
            li[i].style.webkitAnimation = "fadeOut 1.2s";
        }
    }
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
    resumeList.style.animation = "expandWidth 1.2s";
    resumeList.style.webkitAnimation = "expandWidth 1.2s";
    resumeList.style.display = "inline";
    pagesframe.src = "./resumeEN.html";
}
function resumeListFadeIn(parent){
    var children = parent.getElementsByClassName("subli");
    for(var i = 0; i < children.length; i ++){
        children[i].style.visibility = "visible";
        children[i].style.animation = "fadeInVertical 1.2s";
        children[i].style.webkitAnimation = "fadeInVertical 1.2s";
    }
    
}
function gotoPro(){
    if(iframe == null) iframe = document.getElementById("pages");
    scrollToOnIframe(iframe, "projects");
}
