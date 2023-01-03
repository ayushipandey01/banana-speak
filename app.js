// // console.log("Hello World !");

// // alert("this script works !!!")

// //input
// var username = prompt("What is your name ?");

// //processing
// var welcomeMeassage = "this script works ! " + username ;

// //output
// alert(welcomeMeassage);

// var btnTranslate = document.querySelector("#btn-translate");

// console.log(btnTranslate);



// var txtInput = document.querySelector("#txt-input");

// console.log(txtInput)

// var outputText = document.querySelector("#output");

// outputText.innerText = "Ayushi Pandey";

// console.log(outputText);



var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputText = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured" , error)
    alert("someting wrong with serverURL. please try again after sometime!")
}

function clickHandler() {
    var inputText = txtInput.value
    // console.log("clicked!!!")
    // console.log("input " , txtInput.value)
    // outputText.innerText = "nabannaa " + txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated ;
        outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click" , clickHandler )
