let rnHit = 0;
let score = 0;
let timer = 0;
let diff = 0;

function buildBubble(){
    let createBubble = "";

    for(let i = 1; i<=90; i++) {
        let rn = Math.floor(Math.random()*10);
        createBubble += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".bpart").innerHTML = createBubble;
}

function buildHit(){
    rnHit = Math.floor(Math.random()*10); 
    document.getElementById("hitBox").innerHTML = rnHit;
}

function buildTimer(){
    timer = 60;
    let timerval = setInterval(function(){
        if (timer>0) {
            timer--;
            document.getElementById("timerBox").textContent = timer;
            
        } else {
            clearInterval(timerval);
            document.querySelector(".bpart").innerHTML = `<h1>GAME OVER!</h1>`;
            document.querySelector(".bpart h1").style.display = "block";
        }
        
    }, 1000)
}

function buildScore(){
    score += 10;
    document.getElementById("scoreBox").textContent = score;
}

document.querySelector(".bpart").addEventListener("click", function(details){
    let clickedNum = Number(details.target.textContent);
    if(clickedNum===rnHit){
        buildScore();
        buildBubble();
        buildHit();
    }
})

document.querySelector(".tpart button").addEventListener("click", function(){
    
    if(diff===0){
        buildTimer();
        document.querySelector(".tpart button").style.display = "none";
    }
})

buildBubble();
buildHit();

