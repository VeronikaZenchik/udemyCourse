//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height){
let heightOfMeter = Math.pow(height, 2)
let bmiResult = Math.round(weight / heightOfMeter)
return bmiResult
}


// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

let bmi = bmiCalculator(65, 1.8); 
console.log(bmi);


// bmi should equal 20 when it's rounded to the nearest whole number.


