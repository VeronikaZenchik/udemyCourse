// let playerOne = document.querySelector(".img1")
// let playerTwo = document.querySelector(".img2")
// let title = document.querySelector("h1")
// let randomNumber1 = Math.floor(Math.random() * 6) + 1
// let randomNumber2 = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber1, randomNumber2);

// if (randomNumber1 === 1) {
//   playerOne.setAttribute('src', './images/dice1.png')
// } 
// if (randomNumber1 === 2) {
//   playerOne.setAttribute('src', './images/dice2.png')
// } 
// if (randomNumber1 === 3) {
//   playerOne.setAttribute('src', './images/dice3.png')
// } 
// if (randomNumber1 === 4) {
//   playerOne.setAttribute('src', './images/dice4.png')
// } 
// if (randomNumber1 === 5) {
//   playerOne.setAttribute('src', './images/dice5.png')
// } 
// if (randomNumber1 === 6) {
//   playerOne.setAttribute('src', './images/dice6.png')
// } 


// if (randomNumber2 === 1) {
//   playerTwo.setAttribute('src', './images/dice1.png')
// } 
// if (randomNumber2 === 2) {
//   playerTwo.setAttribute('src', './images/dice2.png')
// } 
// if (randomNumber2 === 3) {
//   playerTwo.setAttribute('src', './images/dice3.png')
// } 
// if (randomNumber2 === 4) {
//   playerTwo.setAttribute('src', './images/dice4.png')
// } 
// if (randomNumber2 === 5) {
//   playerTwo.setAttribute('src', './images/dice5.png')
// } 
// if (randomNumber2 === 6) {
//   playerTwo.setAttribute('src', './images/dice6.png')
// } 


// if(randomNumber1 > randomNumber2){
//   title.innerHTML ='<h1>🚩Player One Wins!</h1>'
// } else if (randomNumber2 > randomNumber1) {
//   title.innerHTML ='<h1>🚩Player Two Wins!</h1>'
// } else {
//   title.innerHTML ='<h1>Draw!</h1>'
// }



// другой способ решения
let image1 = document.querySelector(".img1")
let randomNumberOne = Math.floor(Math.random() * 6) + 1
let randomDiceImage = "dice" + randomNumberOne +".png"
let randomImageSourceOne = "./images/" + randomDiceImage
image1.setAttribute("src", randomImageSourceOne)


let image2 = document.querySelector(".img2")
let randomNumberTwo = Math.floor(Math.random() * 6) + 1
let randomImageSourceTwo = "./images/dice" + randomNumberTwo + ".png"
image2.setAttribute("src", randomImageSourceTwo)

let win = document.querySelector("h1")


if(randomNumberOne > randomNumberTwo){
  win.innerHTML ='🚩Player One Wins!'
} else if (randomNumberTwo > randomNumberOne) {
  win.innerHTML ='🚩Player Two Wins!'
} else {
  win.innerHTML ='Draw!'
}