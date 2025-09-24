
// Javascript Variables Exercise
// Given the existing code below, can you write some code so that their values are switched around?

// var a = "3";
// var b = "8";
// So that the variable a holds the value "8".

// And the variable b holds the value "3".
// When the code is run, it should output:
// a is 8
// b is 3

// Do NOT change any of the existing code.
// You are NOT allowed to type any numbers.
// You should NOT redeclare the variables a and b.
// Hint: Use this code playground to run your code and see if it matches your expectations.
// Hint: The solution is just 3 lines of code.


    let a = "3";
    let b = "8";

    let c = a
    a = b
    b = c

    console.log("a is " + a);
    console.log("b is " + b);


// Naming variable

    // let message = "Hello"
    // let guestName = prompt("Write your name...")
    // alert(message + ", " + guestName)


    // String length 

  // let name = "Veronika"
  // console.log(name.length);

  // let enterPromt = prompt("Write your thoughts...")
  // let countLetters = enterPromt.length
  // let leftLetters = 140 - countLetters
  // alert("You have written" + countLetters + " characters, you have " + leftLetters + " characters left")


  // Slicing and Extracting parts of a String

  let name = "Veronika"
  console.log(name.slice(0,5));
  

  // let enterPromt = prompt("Write your thoughts...")
  // let sliceLetter = enterPromt.slice(0, 140)
  // alert(sliceLetter)
  // alert(enterPromt.slice(0, 140))


  // Casing String

  let city = "Grodno"
  console.log(city.toUpperCase());

//   let promptName = prompt("What is your name?")
//   let firstLetter = promptName.slice(0,1).toUpperCase()
//   let restLetter = promptName.slice(1, promptName.length).toLowerCase()
//   let fullName = firstLetter + restLetter

//   alert("Hello," + " " + fullName)


  //Numbers


let dogAge = prompt("How old is your dog?")
let humanAge = ((dogAge - 2) * 4) + 21

alert("Your dog is " + humanAge + " years old in human years")



