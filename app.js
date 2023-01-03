// // console.log("Hello World !");

// // alert("this script works !!!")

// //input
// var username = prompt("What is your name ?");

// //processing
// var welcomeMeassage = "this script works ! " + username ;

// //output
// alert(welcomeMeassage);

var btnTranslate = document.querySelector("#btn-translate");

// console.log(btnTranslate);

btnTranslate.addEventListener("click" , function clickEventHandler() {
    // console.log("clicked!!!")
    // console.log("input " , txtInput.value)
    outputText.innerText = "nabannaa " + txtInput.value;

})

var txtInput = document.querySelector("#txt-input");

// console.log(txtInput)

var outputText = document.querySelector("#output");

// outputText.innerText = "Ayushi Pandey";

// console.log(outputText);

