import {convertToRoman} from "./romanConverter.js";

const typeScreen = document.getElementById("textfield")
const submitBtn = document.getElementById("submitBtn")
const numShowScreen = document.getElementById("showScreen")

const regexNum = /\d+/; //the regex to check if the value passed is a number

submitBtn.addEventListener("click", () => {
    
    //if it's a number, turn it to roman
    if (regexNum.test(typeScreen.value)){
        
        //if it's length it's more than 4 characters, throw the message below
        if (typeScreen.value.length > 4){
            numShowScreen.innerHTML = "Number it's more than 4 digits";
        }
        else numShowScreen.innerHTML = convertToRoman(typeScreen.value);
        
    }
    //if not, throw the message below
    else numShowScreen.innerHTML = "That's not a valid data";


})





