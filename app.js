
// button clicked 
var translateButton = document.querySelector("#btn-translate"); 
translateButton.addEventListener("click",clickHandler);

// read input 
var textInput = document.querySelector("#txtarea");

// show output
var textOutput = document.querySelector("#txtarea2");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text) { 
    // var encodedText = encodeURI(text); 
    return serverURL + "?" + "text=" + text
    // return '${serverURL}?text=${text}'
    // return '${serverURL}?text=${encodedText}'
}

function errorHandler(error) { 
    console.log("error occured",error); 
    alert("something wrong with server! try again after some time.");
}


function clickHandler() {
    var inputText = textInput.value; // taking input

    // calling server for processing 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText; 
    })
    .catch(errorHandler)
}


