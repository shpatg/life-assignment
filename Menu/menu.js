var arrow = document.getElementById("arrow");
var count = 0;

arrow.addEventListener("click",() => {
    count++;
    if(count%2 == 1){
       arrow.className = "down-arrow"; 
       document.getElementById("list").className = "show";
    }
    else{        
          arrow.className = "right-arrow";
          document.getElementById("list").className = "hide";
        }
});