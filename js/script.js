
const form = document.querySelector("form");
const nomeInput = document.getElementById("nome");
const numKmInput = document.getElementById("numKm");
const etaInput = document.getElementById("eta");
const testoOutput = document.getElementById("testo");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const numKm = parseInt(numKmInput.value.trim());
    const eta = parseInt(etaInput.value.trim());
    const nome = nomeInput.value.trim();


    let prezzoFinale;
    let risultato = "";

    let prezzo = numKm * 0.21;
    let scontoMinorenni = (prezzo * 20) / 100;
    let scontoOver65 = (prezzo * 40) / 100;
    let biglietto = "";

    if (eta < 0 || numKm <= 0) {
        testoOutput.innerText = "Dati inseriti non sono validi";
        //console.log("Dati inseriti non sono validi");
    } else if (Number.isNaN(eta) || Number.isNaN(numKm)) {
        testoOutput.innerText = "Errore: inserisci solo numeri validi";
        //console.log("Errore: inserisci solo numeri validi");

    } else {
        if (eta <= 18) {
            prezzoFinale = (prezzo - scontoMinorenni);
            biglietto = "Biglietto scontato";

        } else if (eta >= 65) {
            prezzoFinale = (prezzo - scontoOver65);
            biglietto = "Biglietto scontato";

        } else {
            prezzoFinale = prezzo;
            biglietto = "Biglietto Standard";


        }
    }
    randomNum = Math.floor(Math.random() * 20) + 1;
    const codice = Math.floor(1000 + Math.random() * 9000);



    prezzoFinaleDecimale = prezzoFinale.toFixed(2);
    risultato = `Il prezzo finale è: ${prezzoFinaleDecimale} €`;

    //console.log(risultato);
    testo.innerHTML = `
   <div class="card">
    <div class="card-header mt-3">
        <h5>DETTAGLIO PASSEGERI</h5>
    </div>

    
    <div class="row text-center fw-bold border-bottom py-2">
        <div class="col">NOME PASSEGERO</div>
        <div class="col">Offerta</div>
        <div class="col">Carrozza</div>
        <div class="col">Codice CP</div>
        <div class="col">Costo biglietto</div>
    </div>

   
    <div class="row text-center py-2 mt-3">
        <div class="col">${nome}</div>
        <div class="col">${biglietto}</div>
        <div class="col">${randomNum}</div>
        <div class="col">${codice}</div>
        <div class="col">${risultato}</div>
    </div>
</div>

    `



});




