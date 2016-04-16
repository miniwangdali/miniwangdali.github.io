var naviWrapper, contentWrapper;
var width, height, aspect;
function init(){
    naviWrapper = document.getElementById("navi-wrapper");
    contentWrapper = document.getElementById("content-wrapper");
    window.addEventListener("resize", onWindowResize, false);
    onWindowResize();
}

function onWindowResize(){
    width = window.innerWidth;
    height = window.innerHeight;
    aspect = width / height;
    if(aspect < 1 || width < 640){
        resizeNavi(1);
    }else if(width < 960){
        resizeNavi(2);
    }else{
        resizeNavi(3);
    }
}

// mode : 1 - mobile, 2 - square screen, 3 - wide screen
function resizeNavi(mode) {
    switch (mode) {
        case 1:
            naviWrapper.style.width = "100%";
            var header = document.getElementById("navi-header");
            header.style.display = "none";
            var menu = document.getElementById("menu");
            var ul = menu.getElementsByTagName("ul")[0];
            ul.style.padding = "0px 20px 0px 20px";
            var lis = ul.getElementsByTagName("li");
            for(var i = 0; i < lis.length; i ++){
                lis[i].style.padding = "10px 20px 10px 20px";
            }
            var texts = menu.getElementsByClassName("text");
            for(var i = 0; i < texts.length; i ++){
                texts[i].style.display="table-cell";
            }
            contentWrapper.style.width = "100%";
            break;
        case 2:
            naviWrapper.style.width = "60px";
            var header = document.getElementById("navi-header");
            header.style.display = "none";
            var menu = document.getElementById("menu");
            var ul = menu.getElementsByTagName("ul")[0];
            ul.style.padding = "0";
            var lis = ul.getElementsByTagName("li");
            for(var i = 0; i < lis.length; i ++){
                lis[i].style.padding = "10px 10px 10px 10px";
            }
            var texts = menu.getElementsByClassName("text");
            for(var i = 0; i < texts.length; i ++){
                texts[i].style.display="none";
            }
            contentWrapper.style.width = width - 60 + "px";
            break;
        case 3:
            naviWrapper.style.width = "300px";
            var header = document.getElementById("navi-header");
            header.style.display = "inline";
            var menu = document.getElementById("menu");
            var ul = menu.getElementsByTagName("ul")[0];
            ul.style.padding = "0px 20px 0px 20px";
            var lis = ul.getElementsByTagName("li");
            for(var i = 0; i < lis.length; i ++){
                lis[i].style.padding = "10px 20px 10px 20px";
            }
            var texts = menu.getElementsByClassName("text");
            for(var i = 0; i < texts.length; i ++){
                texts[i].style.display="table-cell";
            }
            contentWrapper.style.width = width - 300 + "px";
            break;
        default:
            break;
    }
}