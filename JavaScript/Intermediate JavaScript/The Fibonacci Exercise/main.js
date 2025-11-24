function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    let output = []
    for (let i = 0; i < n; i++) {
      if (i === 0) {
            output.push(0)
          } else if (i === 1) {
              output.push(1)
          } else {
            output.push(output[i-1] + output[i-2])
          }
      
      
    }
    return output
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
console.log(fibonacciGenerator(8));