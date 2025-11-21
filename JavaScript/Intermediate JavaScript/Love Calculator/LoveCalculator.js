const nameUser = document.getElementById("nameUser")
const namePartner = document.getElementById("namePartner")
const result = document.querySelector(".result");
const button = document.querySelector(".button");


button.addEventListener('click', (event) => {
  event.preventDefault();
  let caltulateNaumber = Math.floor(Math.random() * 100) + 1
  if (caltulateNaumber > 70) {
      result.textContent = `Yourlove score is: ${caltulateNaumber}%, You love each other!`
  } 
  if (caltulateNaumber > 30 && caltulateNaumber <= 70) {
    result.textContent = `Yourlove score is: ${caltulateNaumber}%`
  }
  if (caltulateNaumber <= 30) {
    result.textContent = `Yourlove score is: ${caltulateNaumber}%, You go together like oil and water.`
  }
})
