const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
let score = 0;

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1*num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    console.log(userAns);
    if(userAns === correctAns){
        score++
    }else{
        score--
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
};



