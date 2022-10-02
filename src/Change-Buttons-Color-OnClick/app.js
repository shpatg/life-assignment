let btnSuccess = document.querySelector("#success");
let btnDanger = document.querySelector("#danger");

btnDanger.addEventListener(
  "click",
  () => (btnDanger.style.backgroundColor = "#c9302c")
);

btnSuccess.addEventListener(
  "click",
  () => (btnSuccess.style.backgroundColor = "#4cae4c")
);
