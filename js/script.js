
const form = document.querySelector("form");
const numKmInput = document.getElementById("numKm");
const etaInput = document.getElementById("eta");
const testoOutput = document.getElementById("testo");


form.addEventListener("click", function (event) {
    event.preventDefault();
    const numKm = numKmInput.value;
    const eta = etaInput.value;


    let prezzoFinale;
    let risultato = "";

    let prezzo = numKm * 0.21;
    let scontoMinorenni = (prezzo * 20) / 100;
    let scontoOver65 = (prezzo * 40) / 100;


    if (eta < 0 || numKm <= 0) {
        console.log("Dati inseriti non sono validi");
    } else if (Number.isNaN(eta) || Number.isNaN(numKm)) {
        console.log("Errore: inserisci solo numeri validi");

    } else {
        if (eta < 18) {
            prezzoFinale = (prezzo - scontoMinorenni);
            prezzoFinale = Math.round(prezzoFinale * 100) / 100;
            risultato = "Il prezzo finale è: " + prezzoFinale + " €";

        } else if (eta > 65) {
            prezzoFinale = (prezzo - scontoOver65);
            prezzoFinale = Math.round(prezzoFinale * 100) / 100;
            risultato = "Il prezzo finale è: " + prezzoFinale + " €";
        } else {
            prezzoFinale = prezzo;
            prezzoFinale = Math.round(prezzoFinale * 100) / 100;
            risultato = "Il prezzo finale è: " + prezzo + " €";
        }
    }




    prezzoFinale = Math.round(prezzoFinale * 100) / 100;


    //console.log(risultato);




});




