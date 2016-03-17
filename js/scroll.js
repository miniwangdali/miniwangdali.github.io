function elementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
        while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
    }
    return { x: curleft, y: curtop };
}
var repeatCount = 0;
var clearTimeOut;
var myframe;
function scrollSmoothly(pos){
    if(myframe == null) myframe = window;
    var times = pos / 50;
    if(repeatCount < times){
        myframe.contentWindow.scrollBy(0, 50);
        repeatCount ++;
        clearTimeOut = setTimeout("scrollSmoothly('" + pos +"')", 100);
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
    scrollToPos -= myframe.contentDocument.documentElement.scrollTop;
    var remainder = scrollToPos % 50;
    scrollSmoothly(crollToPos - remainder);
    myframe.contentWindow.scrollBy(0, remainder);
}