var naviWrapper, contentWrapper;
var width, height, aspect;
var clientWindow, menuState;
var mainContent;
function init(){
    naviWrapper = document.getElementById("navi-wrapper");
    contentWrapper = document.getElementById("content-wrapper");
    mainContent = document.getElementById("mainContent");
    contentWrapper.style.width = window.innerWidth + "px";
    window.addEventListener("resize", onWindowResize, false);
    onWindowResize();
    menuState = 0;
    menuBtnInit();
}

function onWindowResize(){
    width = window.innerWidth;
    height = window.innerHeight;
    aspect = width / height;
    if(aspect < 3.0 / 4.0 || width < 640){
        clientWindow = 1;
        resizeNavi();
    }else if(width < 960){
        clientWindow = 2;
        resizeNavi();
    }else{
        clientWindow = 3;
        resizeNavi();
    }
}

// mode : 1 - mobile, 2 - square screen, 3 - wide screen
function resizeNavi() {
    switch (clientWindow) {
        case 1:
            naviWrapper.style.width = "100%";
            naviWrapper.style.height = "33%";
            var header = document.getElementById("navi-header");
            header.style.display = "none";
            var menu = document.getElementById("menu");
            menu.style.position = "fixed";
            menu.style.width = 0;
            var menuBtn = document.getElementById("menu-btn");
            menuBtn.style.display = "block";
            menuBtn.style.padding = "0";
            var ul = menu.getElementsByTagName("ul")[0];
            ul.style.display = "none";
            ul.style.padding = "0px 20px 0px 20px";
            var lis = ul.getElementsByTagName("li");
            for(var i = 0; i < lis.length; i ++){
                lis[i].style.padding = "10px 20px 10px 20px";
            }
            var texts = menu.getElementsByClassName("text");
            for(var i = 0; i < texts.length; i ++){
                texts[i].style.display="table-cell";
            }
            contentWrapper.style.padding = naviWrapper.scrollHeight  + "px 0px 0px 0px";
            contentWrapper.style.width = document.documentElement.clientWidth + "px";
            break;
        case 2:
            naviWrapper.style.width = "60px";
            naviWrapper.style.height = "100%";
            var header = document.getElementById("navi-header");
            header.style.display = "none";
            var menu = document.getElementById("menu");
            menu.style.position = "static";
            menu.style.width = "100%";
            var menuBtn = document.getElementById("menu-btn");
            menuBtn.style.display = "block";
            menuBtn.style.padding = "0";
            var ul = menu.getElementsByTagName("ul")[0];
            ul.style.display = "block";
            ul.style.padding = "0";
            var lis = ul.getElementsByTagName("li");
            for(var i = 0; i < lis.length; i ++){
                lis[i].style.padding = "10px 10px 10px 10px";
            }
            var texts = menu.getElementsByClassName("text");
            for(var i = 0; i < texts.length; i ++){
                texts[i].style.display="none";
            }
            contentWrapper.style.padding = "0px 0px 0px 60px";
            contentWrapper.style.width = document.documentElement.clientWidth - 60 + "px";
            break;
        case 3:
            naviWrapper.style.width = "300px";
            naviWrapper.style.height = "100%";
            var header = document.getElementById("navi-header");
            header.style.display = "block";
            var menu = document.getElementById("menu");
            menu.style.position = "static";
            menu.style.width = "100%";
            var menuBtn = document.getElementById("menu-btn");
            menuBtn.style.display = "none";
            var ul = menu.getElementsByTagName("ul")[0];
            ul.style.display = "block";
            ul.style.padding = "0px 20px 0px 20px";
            var lis = ul.getElementsByTagName("li");
            for(var i = 0; i < lis.length; i ++){
                lis[i].style.padding = "10px 20px 10px 20px";
            }
            var texts = menu.getElementsByClassName("text");
            for(var i = 0; i < texts.length; i ++){
                texts[i].style.display="table-cell";
            }
            contentWrapper.style.padding = "0px 0px 0px 300px";
            contentWrapper.style.width = document.documentElement.clientWidth - 300 + "px";
            break;
        default:
            break;
    }
}

function menuFolder() {
    var menu = document.getElementById("menu");
    var ul = menu.getElementsByTagName("ul")[0];
    switch (menuState) {
        case 0: // should open
            if(clientWindow == "1"){
                menu.style.width = "70%";
                var myFunction = function(){
                    if(menuState == 1) {
                        ul.style.display = "block";
                    }
                    menu.removeEventListener("transitionend", myFunction);
                }
                menu.addEventListener("transitionend", myFunction);
                menuState = 1;
            }else{
                naviWrapper.style.width = "30%";
                menu.style.width="100%";
                var myFunction = function() {
                    if(menuState == 1){
                        var texts = menu.getElementsByClassName("text");
                        for(var i = 0; i < texts.length; i ++){
                            texts[i].style.display="table-cell";
                        }
                    }
                    naviWrapper.removeEventListener("transitionend", myFunction);
                }
                naviWrapper.addEventListener("transitionend", myFunction);
                
                ul.style.padding = "0px 20px 0px 20px";
                var lis = ul.getElementsByTagName("li");
                for(var i = 0; i < lis.length; i ++){
                    lis[i].style.padding = "10px 20px 10px 20px";
                }
                
                menuState = 1;
            }
            break;
        case 1: // should close
            if(clientWindow == 1){
                menu.style.width = "0px";
                ul.style.display = "none";
                menuState = 0;
            }else{
                naviWrapper.style.width = "60px";
                menu.style.width = "100%";
                ul.style.padding = "0";
                var lis = ul.getElementsByTagName("li");
                for(var i = 0; i < lis.length; i ++){
                    lis[i].style.padding = "10px 10px 10px 10px";
                }
                var texts = menu.getElementsByClassName("text");
                for(var i = 0; i < texts.length; i ++){
                    texts[i].style.display="none";
                }
                menuState = 0;
            }
            break;
        default:
            break;
    }
}