const km = parseInt(prompt("Inserisci quanti kilometri vuoi fare"));
const age = parseInt(prompt("Inserisci la tua età"));

let price = km * 0.21;

if (age < 18){
    price = price - ((price / 100) * 20)
} else if (age > 65){
    price = price - ((price / 100) * 40)
}

document.getElementById('price').innerHTML = price.toFixed(2) + '&euro;';