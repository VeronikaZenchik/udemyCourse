function isLeap(year) {
    
    //Write your code here.    


if (year % 4 === 0){
  if (year % 100 === 0){
    if (year % 400 === 0) {
      return `Leap year.`
    } else {
      return `Not leap year.`
    }
  } else {
  return `Leap year.`
  }
} else{
  return `Not leap year.`
}
}

console.log(isLeap(1948));


//FizzBuzz

let output = []
let count = 1

function fizzBuzz() {


if (count % 3 === 0 && count % 5 === 0) {
  output.push("FizzBuzz")
} else if (count % 3 === 0) {
    output.push("Fizz")
} else if(count % 5 === 0){
output.push("Buzz")
}
else{
  output.push(count)
}
count++

  console.log(output)
}
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
