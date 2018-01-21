let parserResult = "";

const parseFile = () => {
    const fileInput = document.getElementById("file_input");
    const reader = new FileReader();
    reader.readAsText(fileInput.files[0]);
    reader.onload = function () {
        const text = this.result;
        const results = analyzeDoc(text);
        $("#json_view").JSONView(results);
        parserResult = JSON.stringify(results, null, 2);
    }
};

const copy = () => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = parserResult;
    tempInput.select();
    document.execCommand("Copy", parserResult);
    document.body.removeChild(tempInput);
}