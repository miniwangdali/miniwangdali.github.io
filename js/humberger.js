var humberger, l1, l2, l3;
var opened = false;

function menuBtnInit(){
    humberger = document.getElementById("humberger");
    l1 = document.getElementById("l1");
    l2 = document.getElementById("l2");
    l3 = document.getElementById("l3");
    l1.style.top = "0px";
    l2.style.top = "5px";
    l3.style.top = "10px";
}

function onClick(){
    if(opened){
        toHumberger();
        opened = false;
        menuFolder();
    }else{
        toArrow();
        opened = true;
        menuFolder();
    }
}
function toHumberger(){
    l1.style.animation="close1 0.7s";
    l2.style.animation="close2 0.7s";
    l3.style.animation="close3 0.7s";
    l1.style.webkitAnimation="close1 0.7s";
    l2.style.webkitAnimation="close2 0.7s";
    l3.style.webkitAnimation="close3 0.7s";
    l1.addEventListener("animationend",function(){
        removeAnimation();
        setHumberger(); 
    });
    l1.addEventListener("webkitAnimationEnd",function(){
        removeAnimation();
        setHumberger(); 
    });
}
function toArrow(){
    l1.style.animation="open1 0.7s";
    l2.style.animation="open2 0.7s";
    l3.style.animation="open3 0.7s";
    l1.style.webkitAnimation="open1 0.7s";
    l2.style.webkitAnimation="open2 0.7s";
    l3.style.webkitAnimation="open3 0.7s";
    l1.addEventListener("animationend",function(){
        removeAnimation();
        setArrow(); 
    });
    l1.addEventListener("webkitAnimationEnd",function(){
        removeAnimation();
        setArrow(); 
    });
}
function removeAnimation(){
    l1.style.animation="";
    l2.style.animation="";
    l3.style.animation="";
    l1.style.webkitAnimation="";
    l2.style.webkitAnimation="";
    l3.style.webkitAnimation="";
}
function setArrow(){
    l1.style.transform = "rotate(-45deg)";
    l1.style.webkitTransform = "rotate(-45deg)";
    l1.style.width = "14px";
    l1.style.top = "3px"; 
    l1.style.left = "-1px";
    l2.style.transform = "rotate(180deg)";
    l2.style.webkitTransform = "rotate(180deg)";
    
    l3.style.transform = "rotate(45deg)";
    l3.style.webkitTransform = "rotate(45deg)";
    l3.style.width = "14px";
    l3.style.top = "7px";
    l3.style.left = "-1px";
}
function setHumberger(){
    l1.style.transform = "rotate(0deg)";
    l1.style.webkitTransform = "rotate(0deg)";
    l1.style.width = "20px";
    l1.style.top = "0px"; 
    l1.style.left = "0px";
    l2.style.transform = "rotate(0deg)";
    l2.style.webkitTransform = "rotate(0deg)";
    
    l3.style.transform = "rotate(0deg)";
    l3.style.webkitTransform = "rotate(0deg)";
    l3.style.width = "20px";
    l3.style.top = "10px";
    l3.style.left = "0px";
}
