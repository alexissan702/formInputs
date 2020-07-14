var textInput= document.getElementById("textInput");
var numberInput = document.getElementById("numberInput");
var passwordInput = document.getElementById("passwordInput");
var dateInput = document.getElementById("dateInput");
var textOutput = document.getElementById("textOutput");
var numberOutput = document.getElementById("numberOutput");
var passwordOutput = document.getElementById("passwordOutput");
var dateOutput = document.getElementById("dateOutput");
var form = document.getElementById("form");

form.addEventListener("submit", run);

function run(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    textOutput.innerHTML = textInput.value;
    numberOutput.innerHTML = numberInput.value;
    passwordOutput.innerHTML = passwordInput.value;
    dateOutput.innerHTML = dateInput.value;

}