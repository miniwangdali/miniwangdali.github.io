var resumeCH, resumeEN;
var language = "CH";

function init(){
    resumeCH = document.getElementsByName("CH");
    resumeEN = document.getElementsByName("EN");
    if(language == "EN"){
        document.getElementById("resumeEN").style.color = "#EC407A";
        document.getElementById("resumeCH").style.color = "#d5d5d5";
        for(var i = 0; i < resumeCH.length; i ++){
            resumeCH[i].style.display = "none";
        }
    }else if(language == "CH"){
        document.getElementById("resumeCH").style.color = "#EC407A";
        document.getElementById("resumeEN").style.color = "#d5d5d5";
        for(var i = 0; i < resumeEN.length; i ++){
            resumeEN[i].style.display = "none";
        }
    }
}
function toCH(){
    language = "CH";
    document.getElementById("resumeCH").style.color = "#EC407A";
    document.getElementById("resumeEN").style.color = "#d5d5d5";
    for (var i = 0; i < resumeEN.length; i++) {
        resumeEN[i].style.display = "none";
        resumeCH[i].style.display = "inline";
    }
    
}
function toEN(){
    language = "EN";
    document.getElementById("resumeCH").style.color = "#d5d5d5";
    document.getElementById("resumeEN").style.color = "#EC407A";
    for (var i = 0; i < resumeEN.length; i++) {
        resumeEN[i].style.display = "inline";
        resumeCH[i].style.display = "none";
    }
}