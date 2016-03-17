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

function scrollSmoothly(iframe, pos){
    if(iframe == null) iframe = window;
    var times = pos / 50;
    if(repeatCount < times){
        iframe.contentWindow.scrollBy(0, 50);
        repeatCount ++;
        clearTimeOut = setTimeout("scrollSmoothly('" + iframe + "','" + pos +"')", 100);
    }else{
        repeatCount = 0;
        clearTimeout(clearTimeOut);
    }
}
function scrollToOnIframe(iframe, id){
    if(iframe == null) iframe = window;
    var element = iframe.contentDocument.getElementById(id);
    var scrollToPos = elementPosition(element).y;
    scrollToPos -= iframe.contentDocument.documentElement.scrollTop;
    var remainder = scrollToPos % 50;
    scrollSmoothly(iframe, scrollToPos - remainder);
    iframe.contentWindow.scrollBy(0, remainder);
}