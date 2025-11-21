const nameUser = document.getElementById("nameUser")
const namePartner = document.getElementById("namePartner")
const result = document.querySelector(".result");
const button = document.querySelector(".button");


button.addEventListener('click', (event) => {
  event.preventDefault();
  let caltulateNaumber = Math.floor(Math.random() * 100) + 1
  result.textContent = `Результат: ${caltulateNaumber}%`
})
