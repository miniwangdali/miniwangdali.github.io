function elementPosition(obj) {
    var curleft = 0, curtop = 0;
    var headerbar = iframe.contentDocument.getElementsByClassName("header")[0];
    if (obj.offsetParent) {
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
        while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
    }
    curtop = curtop - headerbar.offsetHeight;
    return { x: curleft, y: curtop };
}
var repeatCount = 0;
var clearTimeOut;
var myframe;
function scrollSmoothly(pos){
    if(myframe == null) myframe = window;
    var length = 10;
    if(pos < 0) length = -length;
    var times;
    if(pos < 0) times = -pos / 10;
    else times = pos / 10;
    if(repeatCount < times){
        myframe.contentWindow.scrollBy(0, length);
        repeatCount ++;
        clearTimeOut = setTimeout("scrollSmoothly('" + pos +"')", 1);
    }else{
        repeatCount = 0;
        clearTimeout(clearTimeOut);
    }
}
function scrollToOnIframe(iframe, id){
    if(iframe == null) iframe = window;
    myframe = iframe;
    var element = myframe.contentDocument.getElementById(id);
    var scrollToPos = elementPosition(element).y;
    scrollToPos -= myframe.contentWindow.pageYOffset;
    var remainder = scrollToPos % 10;
    scrollSmoothly(scrollToPos - remainder);
    myframe.contentWindow.scrollBy(0, remainder);
}