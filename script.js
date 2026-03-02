let gameSeq = [];
let userSeq  =[]; 

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function () {
   if(started == false){
    console.log("game is started");
    started = true;
   }

   levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {

    userSeq=[];
    level++;
    h3.innerText = `level ${level}`;
    
    let randInx = Math.floor(Math.random() * 4);
    let randCol = btns[randInx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    btnFlash(randBtn);
}

function checkAns(inx){
    
    if(userSeq[inx] === gameSeq[inx]){
        if(userSeq.length == gameSeq.length) {
          setTimeout(levelUp() , 800);
        }
    }else {
        h3.innerHTML = `Game over!your score is <b>${level}</b> <br>press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"
        }, 100);
        reset();
    }
}
 
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}