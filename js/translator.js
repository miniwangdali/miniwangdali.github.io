
function translateTo(targetLanguage){
    var textContent = document.getElementsByTagName("p");
    var titles = content.getElementsByTagName("h2");
    for(var i = 0; i < textContent.length; i ++){
        var text = textContent[i].innerText;
        var result = translate(targetLanguage, text);
        textContent[i].innerText = result;
    }
}

function translate(language, text){
    
}