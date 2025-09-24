function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money, costPerBottle)
}

// getMilk(4) //1.5 3


function calcBottles(money, costPerBottle) {
  let numbOfBottles = Math.floor(money / costPerBottle)
  return numbOfBottles
}

function calcChange(startingAmount , costPerBottle){
  let change = startingAmount % costPerBottle
  return change

}

console.log('Hello Master, here is your ' + getMilk(10, 3) + " change.");
