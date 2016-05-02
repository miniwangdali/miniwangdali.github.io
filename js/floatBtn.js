var shareBtn, share1, share2, share3;
var shareOpenState = false, clickable = true;

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
    if(clickable){
        clickable = false;
        if(shareOpenState){
            shareClose();
            shareOpenState = false;
        }else{
            shareOpen();
            shareOpenState = true;
        }
    }
    
}

function shareOpen(){
    share1 = document.getElementById("share1");
    share1.style.display = "inline";
    share1.style.animation = "flopen1 0.7s";
    share1.style.webkitAnimation = "flopen1 0.7s";
    var share1openfunc = function(){
        share1.style.animation = "";
        share1.style.webkitAnimation = "";
        share1.style.transform = "rotate(360deg)";
        share1.style.webkitTransform = "rotate(360deg)";
        share1.style.bottom = "140px";
        share1.style.right = "70px";
        share1.style.opacity = "1";
        share1.removeEventListener("animationend", share1openfunc);
        share1.removeEventListener("webkitAnimationEnd", share1openfunc);
    };
    share1.addEventListener("animationend", share1openfunc);
    share1.addEventListener("webkitAnimationEnd", share1openfunc);
    
    share2 = document.getElementById("share2");
    share2.style.display = "inline";
    share2.style.animation = "flopen2 0.7s 0.2s";
    share2.style.webkitAnimation = "flopen2 0.7s 0.2s";
    var share2openfunc = function(){
        share2.style.animation = "";
        share2.style.webkitAnimation = "";
        share2.style.transform = "rotate(360deg)";
        share2.style.webkitTransform = "rotate(360deg)";
        share2.style.bottom = "70px";
        share2.style.right = "70px";
        share2.style.opacity = "1";
        share2.removeEventListener("animationend", share2openfunc);
        share2.removeEventListener("webkitAnimationEnd", share2openfunc);
    };
    share2.addEventListener("animationend", share2openfunc);
    share2.addEventListener("webkitAnimationEnd", share2openfunc);
    
    share3 = document.getElementById("share3");
    share3.style.display = "inline";
    share3.style.animation = "flopen3 0.7s 0.4s";
    share3.style.webkitAnimation = "flopen3 0.7s 0.4s";
    var share3openfunc = function(){
        share3.style.animation = "";
        share3.style.webkitAnimation = "";
        share3.style.transform = "rotate(360deg)";
        share3.style.webkitTransform = "rotate(360deg)";
        share3.style.bottom = "0px";
        share3.style.right = "70px";
        share3.style.opacity = "1";
        share3.removeEventListener("animationend", share3openfunc);
        share3.removeEventListener("webkitAnimationEnd", share3openfunc);
        clickable = true;    
    };
    share3.addEventListener("animationend", share3openfunc);
    share3.addEventListener("webkitAnimationEnd", share3openfunc);
}
function shareClose(){
    share1 = document.getElementById("share1");
    share1.style.animation = "flclose1 0.7s 0.4s";
    share1.style.webkitAnimation = "flclose1 0.7s 0.4s";
    var share1closefunc = function(){
        share1.style.animation = "";
        share1.style.webkitAnimation = "";
        share1.style.transform = "rotate(0deg)";
        share1.style.webkitTransform = "rotate(0deg)";
        share1.style.bottom = "0px";
        share1.style.right = "0px";
        share1.style.opacity = "0";
        share1.style.display = "none";
        share1.removeEventListener("animationend", share1closefunc);
        share1.removeEventListener("webkitAnimationEnd", share1closefunc);
        clickable = true;
    };
    share1.addEventListener("animationend", share1closefunc);
    share1.addEventListener("webkitAnimationEnd", share1closefunc);
    
    share2 = document.getElementById("share2");
    share2.style.animation = "flclose2 0.7s 0.2s";
    share2.style.webkitAnimation = "flclose2 0.7s 0.2s";
    var share2closefunc = function(){
        share2.style.animation = "";
        share2.style.webkitAnimation = "";
        share2.style.transform = "rotate(0deg)";
        share2.style.webkitTransform = "rotate(0deg)";
        share2.style.bottom = "0px";
        share2.style.right = "0px";
        share2.style.opacity = "0";
        share2.style.display = "none";
        share2.removeEventListener("animationend", share2closefunc);
        share2.removeEventListener("webkitAnimationEnd", share2closefunc);
    };
    share2.addEventListener("animationend", share2closefunc);
    share2.addEventListener("webkitAnimationEnd", share2closefunc);
    
    share3 = document.getElementById("share3");
    share3.style.animation = "flclose3 0.7s";
    share3.style.webkitAnimation = "flclose3 0.7s";
    var share3closefunc = function(){
        share3.style.animation = "";
        share3.style.webkitAnimation = "";
        share3.style.transform = "rotate(0deg)";
        share3.style.webkitTransform = "rotate(0deg)";
        share3.style.bottom = "0px";
        share3.style.right = "0px";
        share3.style.opacity = "0";
        share3.style.display = "none";
        share3.removeEventListener("animationend", share3closefunc);
        share3.removeEventListener("webkitAnimationEnd", share3closefunc);
    };
    share3.addEventListener("animationend", share3closefunc);
    share3.addEventListener("webkitAnimationEnd", share3closefunc);
    
}