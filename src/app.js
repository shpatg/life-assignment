/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

var div = document.querySelector("fixed-bottom p-4");
div.setAttribute(onclick => {
  div.setAttribute('style', "background-color: red;")
})