let playerOne = document.querySelector(".img1")
let playerTwo = document.querySelector(".img2")
let title = document.querySelector("h1")
let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber1, randomNumber2);

if (randomNumber1 === 1) {
  playerOne.setAttribute('src', './images/dice1.png')
} 
if (randomNumber1 === 2) {
  playerOne.setAttribute('src', './images/dice2.png')
} 
if (randomNumber1 === 3) {
  playerOne.setAttribute('src', './images/dice3.png')
} 
if (randomNumber1 === 4) {
  playerOne.setAttribute('src', './images/dice4.png')
} 
if (randomNumber1 === 5) {
  playerOne.setAttribute('src', './images/dice5.png')
} 
if (randomNumber1 === 6) {
  playerOne.setAttribute('src', './images/dice6.png')
} 


if (randomNumber2 === 1) {
  playerTwo.setAttribute('src', './images/dice1.png')
} 
if (randomNumber2 === 2) {
  playerTwo.setAttribute('src', './images/dice2.png')
} 
if (randomNumber2 === 3) {
  playerTwo.setAttribute('src', './images/dice3.png')
} 
if (randomNumber2 === 4) {
  playerTwo.setAttribute('src', './images/dice4.png')
} 
if (randomNumber2 === 5) {
  playerTwo.setAttribute('src', './images/dice5.png')
} 
if (randomNumber2 === 6) {
  playerTwo.setAttribute('src', './images/dice6.png')
} 


if(randomNumber1 > randomNumber2){
  title.innerHTML ='<h1>Player One Wins!</h1>'
} else if (randomNumber2 > randomNumber1) {
  title.innerHTML ='<h1>Player Two Wins!</h1>'
} else {
  title.innerHTML ='<h1>Draw!</h1>'
}