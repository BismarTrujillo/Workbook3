"use strict";

window.onload = init;

function init() {
    const button = document.getElementById("button");
    button.onclick = buttonOnClick;
}

function buttonOnClick() {
    const inputField = document.getElementById("inputField");
    const paraField = document.getElementById("paraField");
    
    let date = new Date (inputField.value);
    
    paraField.value = date;

}