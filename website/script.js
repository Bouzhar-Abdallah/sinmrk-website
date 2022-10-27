/* clickCounter(); */

let hada=document.getElementById("Btn1");


localStorage.setItem(Btn1, 0);
localStorage.setItem(Btn2, 0);
localStorage.setItem(Btn3, 0);
localStorage.setItem(Btn4, 0);




function clickCounter(ID) {
    let counter=localStorage.getItem(ID);
    counter++;
     localStorage.setItem(ID, counter); 
     let test='show-'+ID;
    document.getElementById(test).innerText=localStorage.getItem(ID);
    counter=0;
  }

function deleteLSByID(){
   let ID=document.getElementById("toBeDeleted").value;
   console.log(console.log(document.getElementById("toBeDeleted").value)
   );
   clearCounter(ID);
}


function clearCounter(ID) {
    counter=0;
    localStorage.removeItem(ID);
    let test='show-'+ID;
    document.getElementById(test).innerText=counter;
  }




    document.getElementById("show-btn1").innerText=localStorage.getItem("Btn1");
  



