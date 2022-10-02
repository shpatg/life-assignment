/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


let toggle = document.querySelector('.toggleGreeting') 
// This function hides(shows) the greeting the 'toggleGreeting' is clicked
let greeting = document.querySelector('.greeting')
let isBeingShown = true
let buttonMessage = 'Hide the greeting'
const toggleGreeting = () => {
  if (isBeingShown){
    greeting.style.display = 'none'
    isBeingShown = false;
    buttonMessage = 'Show the greeting'
  }else if (!isBeingShown) {
    greeting.style.display = ''
    isBeingShown = true
    buttonMessage = 'Hide the greeting'    
  }
  toggle.innerText = buttonMessage
}

toggle.addEventListener('click', toggleGreeting)
