function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.4

    let random = Math.floor(Math.random() * names.length)
    let name = names[random]
    return `${name} is going to buy lunch today!`


/******Don't change the code below*******/    
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
