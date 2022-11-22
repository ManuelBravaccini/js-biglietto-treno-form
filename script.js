/*
const distance = parseInt(prompt("Inserisci quanti kilometri vuoi fare"));
const age = parseInt(prompt("Inserisci la tua età"));
*/
const distance = document.querySelector(parseInt('input#distance'))
const age = document.querySelector(parseInt('input#age'))
const button = document.querySelector('button')

button.addEventListener('click', function(){
    let price = distance * 0.2762;
    if (age < 18){
        price = price - ((price / 100) * 17.5)
    } else if (age > 65){
        price = price - ((price / 100) * 33.3)
    }
    console.log(price)
})

    
/*
console.log(inputDistance.value)
console.log(inputAge.value)
*/