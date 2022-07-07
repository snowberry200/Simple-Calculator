
 let calcBtn = document.querySelector(".calc",);

  function result (){
  let  input1 = parseInt(document.querySelector(".upperNumber").value);
  let input2 = parseInt(document.querySelector(".downNumber").value);
  let operator = document.querySelector(".operation").value;
  let calculate;
   
    if(operator == "addition"){
      calculate= input1+input2;
    }
    else if(operator == "subtruction"){
      calculate=input1-input2;
    }
    else if(operator == "division"){
      calculate=input1/input2;
    }
    else if(operator == "multiplication"){
      calculate=input1*input2;
    }
   
    else{console.log( "Error please select an operator")}
  
  //console.log({Ans:calculate});
  document.querySelector(".answer").innerHTML= calculate;

 }

 calcBtn.addEventListener("click",result);
