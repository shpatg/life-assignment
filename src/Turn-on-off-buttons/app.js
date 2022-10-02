/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function bulb_on(){
    document.getElementById('bulb').src='./assets/img/2.png';
}
function bulb_off() {
  document.getElementById('bulb').src = './assets/img/1.png';
}
