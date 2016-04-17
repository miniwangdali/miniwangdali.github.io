var shareBtn, share1, share2, share3;
var shareOpenState = false;
function onMouseOver(button){
    if(button.id == "shareBtn"){
        shareBtn = document.getElementById("shareBtn");
        if(shareOpenState){
            button.style.backgroundColor = "#009688";
            var svg = button.getElementsByTagName("svg")[0];
            svg.setAttribute("fill", "#FFFFFF");
        }else{
            button.style.backgroundColor = "#009688";
            var svg = button.getElementsByTagName("svg")[0];
            svg.setAttribute("fill", "#FFFFFF");
        }
    }else{
        button.style.backgroundColor = "#009688";
        var svg = button.getElementsByTagName("svg")[0];
        svg.setAttribute("fill", "#FFFFFF");
    }
}
function onMouseOut(button){
    if(button.id == "shareBtn"){
        shareBtn = document.getElementById("shareBtn");
        if(shareOpenState){
            button.style.backgroundColor = "#009688";
            var svg = button.getElementsByTagName("svg")[0];
            svg.setAttribute("fill", "#FFFFFF");
        }else{
            button.style.backgroundColor = "#FFFFFF";
            var svg = button.getElementsByTagName("svg")[0];
            svg.setAttribute("fill", "#009688");
        }
    }else{
        button.style.backgroundColor = "#FFFFFF";
        var svg = button.getElementsByTagName("svg")[0];
        svg.setAttribute("fill", "#009688");
    }
}
function onMouseClick(){
    
    if(shareOpenState){
        shareClose();
        shareOpenState = false;
    }else{
        shareOpen();
        shareOpenState = true;
    }
}

function shareOpen(){
    share1 = document.getElementById("share1");
    share1.style.animation = "flopen1 0.7s";
    share1.style.webkitAnimation = "flopen1 0.7s";
    share1.addEventListener("animationend", function(){
        share1.style.animation = "";
        share1.style.webkitAnimation = "";
        share1.style.transform = "rotate(360deg)";
        share1.style.webketTransform = "rotate(360deg)";
        share1.style.bottom = "140px";
        share1.style.right = "70px";
        share1.style.visibility = "visible";
    });
    share1.addEventListener("webkitAnimationEnd", function(){
        share1.style.animation = "";
        share1.style.webkitAnimation = "";
        share1.style.transform = "rotate(360deg)";
        share1.style.webketTransform = "rotate(360deg)";
        share1.style.bottom = "140px";
        share1.style.right = "70px";
        share1.style.visibility = "visible";
    });
    
    share2 = document.getElementById("share2");
    share2.style.animation = "flopen2 0.7s 0.2s";
    share2.style.webkitAnimation = "flopen2 0.7s 0.2s";
    share2.addEventListener("animationend", function(){
        share2.style.animation = "";
        share2.style.webkitAnimation = "";
        share2.style.transform = "rotate(360deg)";
        share2.style.webketTransform = "rotate(360deg)";
        share2.style.bottom = "70px";
        share2.style.right = "70px";
        share2.style.visibility = "visible";
    });
    share2.addEventListener("webkitAnimationEnd", function(){
        share2.style.animation = "";
        share2.style.webkitAnimation = "";
        share2.style.transform = "rotate(360deg)";
        share2.style.webketTransform = "rotate(360deg)";
        share2.style.bottom = "70px";
        share2.style.right = "70px";
        share2.style.visibility = "visible";
    });
    
    share3 = document.getElementById("share3");
    share3.style.animation = "flopen3 0.7s 0.4s";
    share3.style.webkitAnimation = "flopen3 0.7s 0.4s";
    share3.addEventListener("animationend", function(){
        share3.style.animation = "";
        share3.style.webkitAnimation = "";
        share3.style.transform = "rotate(360deg)";
        share3.style.webketTransform = "rotate(360deg)";
        share3.style.bottom = "0px";
        share3.style.right = "70px";
        share3.style.visibility = "visible";
    });
    share1.addEventListener("webkitAnimationEnd", function(){
        share3.style.animation = "";
        share3.style.webkitAnimation = "";
        share3.style.transform = "rotate(360deg)";
        share3.style.webketTransform = "rotate(360deg)";
        share3.style.bottom = "0px";
        share3.style.right = "70px";
        share3.style.visibility = "visible";
    });
}
function shareClose(){
    share1 = document.getElementById("share1");
    share1.style.animation = "flclose1 0.7s 0.4s";
    share1.style.webkitAnimation = "flclose1 0.7s 0.4s";
    share1.addEventListener("animationend", function(){
        share1.style.animation = "";
        share1.style.webkitAnimation = "";
        share1.style.transform = "rotate(0deg)";
        share1.style.webketTransform = "rotate(0deg)";
        share1.style.bottom = "0px";
        share1.style.right = "0px";
        share1.style.visibility = "hidden";
    });
    share1.addEventListener("webkitAnimationEnd", function(){
        share1.style.animation = "";
        share1.style.webkitAnimation = "";
        share1.style.transform = "rotate(0deg)";
        share1.style.webketTransform = "rotate(0deg)";
        share1.style.bottom = "0px";
        share1.style.right = "0px";
        share1.style.visibility = "hidden";
    });
    
    share2 = document.getElementById("share2");
    share2.style.animation = "flclose2 0.7s 0.2s";
    share2.style.webkitAnimation = "flclose2 0.7s 0.2s";
    share2.addEventListener("animationend", function(){
        share2.style.animation = "";
        share2.style.webkitAnimation = "";
        share2.style.transform = "rotate(0deg)";
        share2.style.webketTransform = "rotate(0deg)";
        share2.style.bottom = "0px";
        share2.style.right = "0px";
        share2.style.visibility = "hidden";
    });
    share2.addEventListener("webkitAnimationEnd", function(){
        share2.style.animation = "";
        share2.style.webkitAnimation = "";
        share2.style.transform = "rotate(0deg)";
        share2.style.webketTransform = "rotate(0deg)";
        share2.style.bottom = "0px";
        share2.style.right = "0px";
        share2.style.visibility = "hidden";
    });
    
    share3 = document.getElementById("share3");
    share3.style.animation = "flclose3 0.7s";
    share3.style.webkitAnimation = "flclose3 0.7s";
    share3.addEventListener("animationend", function(){
        share3.style.animation = "";
        share3.style.webkitAnimation = "";
        share3.style.transform = "rotate(0deg)";
        share3.style.webketTransform = "rotate(0deg)";
        share3.style.bottom = "0px";
        share3.style.right = "0px";
        share3.style.visibility = "hidden";
    });
    share1.addEventListener("webkitAnimationEnd", function(){
        share3.style.animation = "";
        share3.style.webkitAnimation = "";
        share3.style.transform = "rotate(0deg)";
        share3.style.webketTransform = "rotate(0deg)";
        share3.style.bottom = "0px";
        share3.style.right = "0px";
        share3.style.visibility = "hidden";
    });
}