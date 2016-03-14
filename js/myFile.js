function getAsText(file){
    var reader = new FileReader();
    reader.readAsText(file, "utf-8");
    reader.onprogress = updateProgress;
    reader.onload = loaded;
    reader.onerror = errorHandler;
    return reader.result;
}
function updateProgress(event){
    if(event.lengthComputable){
        // evt.loaded and evt.total are ProgressEvent properties
        var loaded = (evt.loaded / evt.total);
        if (loaded < 1) {
            // Increase the prog bar length
            // style.width = (loaded * 200) + "px";
        }
    }
}
function loaded(evt) {
    // Obtain the read file data    
    var fileString = evt.target.result;
    // Handle UTF-8 file dump
    if (utils.regexp.isChinese(fileString)) {
        //Chinese Characters + Name validation
    }
    else {
        // run other charset test
    }
        
}
function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        // The file could not be read
    }
}