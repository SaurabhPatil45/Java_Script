let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.gusses')
const remaining=document.querySelector('#lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[];
let numGuess=1

let palyGame=true

if(palyGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        //console.log(guess);
        
        validateGuess(guess)

    })
}

function validateGuess(guess){
if(isNaN(guess)){
    alert('please enter valid Number')
}
else if(guess<1){
    alert('please enter number more tahn 1')
}
else if(guess>100){
    alert('please enter number less tahn 100')
}
else{
   prevGuess.push(guess) 
   console.log("Yes");
   
   if(numGuess===11){
    dispalyGuess(guess)
    dispalyMessage(`GAME OVER. RANDOM NUMBER WAS ${randomNumber}`)
    endGame()

   }
   else{
    dispalyGuess(guess)
    checkGuess(guess)

   }
}
}

function checkGuess(guess){
if(guess===randomNumber){
 dispalyMessage(`You guessed it Right`)
 endGame();
}
else if(guess<randomNumber){
dispalyMessage(`Number is TOO LOW`)
}
else if(guess>randomNumber){
dispalyMessage(`number is TOO HIGH`)
}
}

function dispalyGuess(guess){
userInput.value=''  // this is cleanup method
guessSlot.innerHTML+=`${guess}   `
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}

function dispalyMessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
     palyGame=true
})
}

function endGame(){
   userInput.value=''
   userInput.setAttribute('disabled', '') 
   p.classList.add('button')
   p.innerHTML=`<h2 id="newGame">Start New game</h2>`
   startOver.appendChild(p)
   palyGame=false
   newGame()
}