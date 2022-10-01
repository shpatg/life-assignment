/* eslint-disable */
import "bootstrap";
import "./style.css";


import "./assets/img/4geeks.ico";

window.onload = function () {
  document.body.style.backgroundColor = "red";
  console.log("Hello Rigo from the console!");
};


function changeStyle(){
  var element = document.getElementById("myDiv");
  element.style.backgroundColor = "#00FF00";}

  var getbyid = document.getElementById("divbyme");
  getbyid.style.display = "none";