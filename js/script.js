
const form = document.querySelector("form");
const numKmInput = document.getElementById("numKm");
const etaInput = document.getElementById("eta");
const testoOutput = document.getElementById("testo");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const numKm = parseInt(numKmInput.value.trim());
    const eta = parseInt(etaInput.value.trim());


    let prezzoFinale;
    let risultato = "";

    let prezzo = numKm * 0.21;
    let scontoMinorenni = (prezzo * 20) / 100;
    let scontoOver65 = (prezzo * 40) / 100;


    if (eta < 0 || numKm <= 0) {
        testoOutput.innerText = "Dati inseriti non sono validi";
        //console.log("Dati inseriti non sono validi");
    } else if (Number.isNaN(eta) || Number.isNaN(numKm)) {
        testoOutput.innerText = "Errore: inserisci solo numeri validi";
        //console.log("Errore: inserisci solo numeri validi");

    } else {
        if (eta <= 18) {
            prezzoFinale = (prezzo - scontoMinorenni);


        } else if (eta >= 65) {
            prezzoFinale = (prezzo - scontoOver65);


        } else {
            prezzoFinale = prezzo;


        }
    }




    prezzoFinaleDecimale = prezzoFinale.toFixed(2);
    risultato = `Il prezzo finale è: ${prezzoFinaleDecimale} €`;

    //console.log(risultato);
    testo.innerHTML = `<div class=d-flex-justify-content-between>
    <ul>
    <li>${numKm}</li>
    <li>${eta}</li>
    <li>${risultato}</li>
    </ul>
    </div>`



});




