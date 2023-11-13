// Chiedi informazioni
let distance = parseFloat(prompt('Type distance in km'));
let age = parseInt(prompt('Enter your age'));

// Calcola il prezzo del biglietto
let price = distance * 0.21;

// Sconti
if (age < 18) {
    price -= price * 0.2;
} else if (age >= 65) {
    price -= price * 0.4;
}

// Prezzo
let finalPrice = price.toFixed(2);

// HTML
let risultatoElement = document.getElementById("finalPrice").addEventListener("click", function () {
    finalPrice = price.toFixed(2);
    // PREZZO VISUALIZZATO SULLA PAGINA
    document.getElementById("finalPriceShow").innerHTML = `Price: ${finalPrice}€`;
});
