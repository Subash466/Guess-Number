"use strict";

let secretNumber=Math.trunc(Math.random()*15) + 1;
const check=document.querySelector(".check");
const msg=document.querySelector(".msg");
const highScore=document.querySelector(".high-score");
const yourScore=document.querySelector(".your-score");
const again=document.querySelector(".again");
let score=20;
yourScore.textContent=score;
let maxScore=10;
highScore.textContent=maxScore;
check.addEventListener("click",checkfunction);


function checkfunction(){
  let userAnswer=Number(document.querySelector("#userInput").value);
  if(userAnswer>0 && userAnswer<21){
    if(score>0){
     if(userAnswer==secretNumber){
       msg.textContent="Congratulations🤝 Correct Answer👏!!";
       document.body.style.backgroundColor="rgb(75, 163, 3)";

       if(maxScore<score){
         maxScore=score;
         highScore.textContent=maxScore;
       }else{
         highScore.textContent=maxScore;
       }
     }else if(userAnswer>secretNumber){
       msg.textContent="Your guess is greater than Hidden number";
       document.querySelector("#userInput").value='';
       score -=2;
       yourScore.textContent=score;
     }else{
       msg.textContent="Your guess is lesser than Hidden number";
       document.querySelector("#userInput").value='';
       score -=2;
       yourScore.textContent=score;
    }}else{
       msg.textContent=`Game Over!👎  Hidden Number is ${secretNumber}`;
       document.body.style.backgroundColor="rgb(168, 22, 3)";
       msg.style.fontSize="205%";
      }
  }else{
    msg.textContent="Please enter correcty";
  }
}

again.addEventListener('click',function(){
  document.body.style.backgroundColor="var(--primary)";
  msg.style.fontSize="105%";
  secretNumber=Math.trunc(Math.random()*15) + 1;
  secret.textContent = secretNumber;
  msg.textContent="Start Guessing....";
  document.querySelector("#userInput").value='';
  score=20;
  yourScore.textContent=score;
})

