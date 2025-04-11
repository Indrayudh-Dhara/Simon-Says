let body = document.querySelector("body");
let h2 = document.querySelector('h2');
let level = 0;
let gameSeq = [];
let userSeq = [];
let started = false;
let btns = ['yellow', 'green','red', 'purple'];
let allBtns = document.querySelectorAll('.btns');
let highScore=0;
let h3 = document.querySelector('h3');

document.addEventListener("keypress", function () {
   if(started==false) {
    console.log('Game has started');
    started = true ;
    levelUp();
   }
});
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    btnFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    if(level >= highScore){
        highScore = level ;
        h3.innerText = `Highest Score : ${highScore}`;
    }
}
function btnFlash(btn){
    btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove('flash');
        },250);
    }

function userFlash(btn){
    btn.classList.add('opacity');
    setTimeout(function(){
        btn.classList.remove('opacity');
    },250);
}
function btnPress(){
    let btn = this ;
    userFlash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

for (btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function checkAns(idx){

    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length == userSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText = `Game Over ! Your score was ${level} . Press any Key to Restart`;
        reset();
        wrongFlash();

    }
}
function reset(){
    level = 0 ;
    started = false;
    gameSeq = [];
    userSeq = [];
}
function wrongFlash(){
    body.classList.add('wrong');
        setTimeout(function(){
            body.classList.remove('wrong');
        },250);
}