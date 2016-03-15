var rightframe;
var leftheader;
var portrait;
var pagesframe;

function init(){
    leftheader = document.getElementById("lHeader");
    portrait = document.getElementById("portrait");
    rightframe = document.getElementById("rightframe");
    pagesframe = document.getElementById("pages");
}
function gotoResume(){
    pagesframe.src = "./resumeEN.html";
}
