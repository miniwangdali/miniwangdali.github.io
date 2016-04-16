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
            contentWrapper.style.width = "100%";
            break;
        case 2:
            naviWrapper.style.width = "60px";
            contentWrapper.style.width = width - 60 + "px";
            break;
        case 3:
            naviWrapper.style.width = "300px";
            contentWrapper.style.width = width - 300 + "px";
            break;
        default:
            break;
    }
}