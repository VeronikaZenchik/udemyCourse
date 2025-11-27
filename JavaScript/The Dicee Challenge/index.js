let playerOne = document.querySelector(".img1")
let playerTwo = document.querySelector(".img2")
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
