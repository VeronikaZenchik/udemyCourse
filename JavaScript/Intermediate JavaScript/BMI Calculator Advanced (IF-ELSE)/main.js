function bmiCalculator (weight, height) {
let heightOfMeter = Math.pow(height, 2)
let bmiResult = (weight / heightOfMeter).toFixed(1)
if (bmiResult < 18.5) {
  return `Your BMI is ${bmiResult}, so you are underweight.`
}
if (bmiResult >= 18.5 && bmiResult < 24.9) {
  return `Your BMI is ${bmiResult}, so you have a normal weight.`
}
if (bmiResult >= 24.9) {
  return `Your BMI is ${bmiResult}, so you are overweight.`
}
}

let bmi = bmiCalculator(82, 1.71); 
console.log(bmi);
