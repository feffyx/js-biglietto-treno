// Chiedi informazioni
let distance = parseFloat(prompt("Type distance in km"));
let age = parseInt(prompt("Enter your age"));

// Calcola il prezzo del biglietto
let prezzoBase = distance * 0.21;

// Sconti
if (age < 18) {
    prezzoBase -= prezzoBase * 0.2; 
} else if (age >= 65) {
    prezzoBase -= prezzoBase * 0.4; 
}

// Prezzo
let prezzoFinale = prezzoBase.toFixed(2);

// HTML
let risultatoElement = document.createElement("p");
risultatoElement.textContent = "Ticket Price: " + prezzoFinale + " €";
document.body.appendChild(risultatoElement);