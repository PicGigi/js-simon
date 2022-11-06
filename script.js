const countdownSection = document.getElementById("countdown");
const startButton = document.getElementById('newgame');
const leftHand = document.querySelector(".lefthand");
const rightHand = document.querySelector(".righthand");
const fiveNum = document.querySelector(".five-numbers");
let randomNum = []
const guessNumSection = document.querySelector(".guess-numbers");
const guessNum = document.querySelectorAll(".num-guess");
let guessNumList = []
const checkButton = document.getElementById('endgame');
const results = document.querySelector('.risultati');
let risultato = 0;

startButton.addEventListener('click', function(){
    startButton.classList.add('hidden')
    guessNumSection.classList.add('hidden')
    leftHand.classList.remove('leftanimation')
    rightHand.classList.remove('rightanimation')
    fiveNum.innerHTML = '';
    randomNum = []
    guessNumList = [];
    risultato = 0;

    for(i=0; i<5; i++){
        guessNum[i].value = '';
        guessNum[i].classList.remove('correct');
        guessNum[i].classList.remove('wrong');
    }

    let countdown = setInterval(timer, 1000);
    let timerNum = 10;
    function timer() {
        countdownSection.innerHTML = `<div class="timerNum">${timerNum}</div>`;
        timerNum--;
        if(timerNum === -1){
            clearInterval(countdown);
            countdownSection.innerHTML = `<div class="timerNum">Quali sono i numeri?</div>`;
            for(i=0; i<5; i++){
                guessNum[i].value = '';
            }
            startButton.classList.remove('hidden')
            guessNumSection.classList.remove('hidden')
            leftHand.classList.add('leftanimation')
            rightHand.classList.add('rightanimation')
        }
    }

    while(randomNum.length < 5) {
        let number = Math.floor(Math.random() * 99) + 1;
        if(randomNum.indexOf(number) === -1) {
            randomNum.push(number);
        }
    }
    
    for(i=0; i<5; i++){
        fiveNum.innerHTML += `<span> ${randomNum[i]} </span>`;
        if(i!=4){
            fiveNum.innerHTML += `<span>/</span>`;
        }
    }
});

checkButton.addEventListener('click', function(){
    leftHand.classList.remove('leftanimation')
    rightHand.classList.remove('rightanimation')
    for(i=0; i<5; i++){
        guessNumList.push(parseInt(guessNum[i].value))
        if(randomNum.includes(guessNumList[i])){
            guessNum[i].classList.add('correct')
            
        }
        else{
            guessNum[i].classList.add('wrong')
        }
    }
});