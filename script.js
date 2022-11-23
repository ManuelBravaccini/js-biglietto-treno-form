/*
const distance = parseInt(prompt("Inserisci quanti kilometri vuoi fare"));
const age = parseInt(prompt("Inserisci la tua età"));
*/
const button = document.querySelector('button')

button.addEventListener('click', function(){
    const distance = document.querySelector('input#distance').value
    const age = document.querySelector('input#age').value
    let price = distance * 0.2762;
    if (age < 18){
        price = price - ((price / 100) * 17.5)
    } else if (age > 65){
        price = price - ((price / 100) * 33.3)
    }
    /*console.log(price)*/
    document.getElementById('price').innerHTML = price.toFixed(2) + '&euro;';
})

    
/*
console.log(inputDistance.value)
console.log(inputAge.value)
*/