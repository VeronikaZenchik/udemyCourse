let count = 99

function buyingBeer (){
while (count >= 0){
  let bottleWord = "bottle";
    if (count === 1) {
        bottleWord = "bottles";
    }
    console.log(count + " " + bottleWord + " of beer on the wall");
    console.log(count + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	count--;
    console.log(count + " " + bottleWord + " of beer on the wall.");
}
console.log(count);
}
buyingBeer()