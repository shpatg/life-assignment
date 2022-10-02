let btnSuccess = document.querySelector("#success");
let btnDanger = document.querySelector("#danger");

btnDanger.addEventListener(
  "click",
  () => (btnDanger.style.backgroundColor = "red")
);

btnSuccess.addEventListener(
  "click",
  () => (btnSuccess.style.backgroundColor = "green")
);
