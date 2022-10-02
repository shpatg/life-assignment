
//Visits logic

const visitNr = document.querySelector('#visitNr');
const storage = window.localStorage;
let visits = 0;
if (storage.visits !== undefined) {
    visits = storage.visits;
}
window.addEventListener('load', () => {
    visits++;
    storage.visits = visits;
    visitNr.innerHTML = visits;
    console.log('Hello');

})
function reset(){
    visits=0;
    storage.visits=visits;
    visitNr.innerHTML=visits;
}
