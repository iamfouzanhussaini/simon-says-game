let gameSeq = [];
let UserSeq = [];
let btns = ["yellow", "red", "green", "purple"]

let started = false

let level = 0;
let h2 = document.querySelector("h2")

let highScore = 0;

document.addEventListener("keypress", function(){
    if(started ==false){
        console.log("game is started");
        started = true;
        levelUp();
    }
})

function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 300);
}

function levelUp(){
    UserSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    GameFlash(randBtn);
}

function checkAns(idx) {

if(UserSeq[idx]===gameSeq[idx]){
    if(UserSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000)
    }
} else {
    if(level > highScore){
        highScore = level;
    }
        h2.innerHTML = `Game Over!, Your Score was <b>${level}</b> <br> Last Highest Record ${highScore}  <br> Press any key to start`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#89c1bb";
        }, 150)
        reset();
}
}

function BtnPress(){
let btn = this;
userFlash(btn);

userColor = btn.getAttribute("id");
UserSeq.push(userColor);

checkAns(UserSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", BtnPress);
} 

function reset(){
    started = false
    gameSeq = []
    UserSeq = []
    level = 0;
}