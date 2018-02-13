
function berekenSubTotaal(totaal, aantal_geselecteerd, prijs_geselecteerd) //<= alles in 1 keer
{
    // het element ophalen  met id
    var prijs = document.getElementById(prijs_geselecteerd).textContent;

    //het getal heeft een komma dus die veranderen ik naar een . zodat er mee gerekent kan worden
    var prijs_zonderkomma = prijs.replace(',', ".");

    // het is nu nog een string dus veranderen ik het naar een float
    var prijs_zonderkomma_float = parseFloat(prijs_zonderkomma);

    //aantal maak ik een int omdat het geslecteerde aantal geen komma getal kan zijn
    var aantal = parseInt(document.getElementById(aantal_geselecteerd).value);

    //de prijs afronden op twee getallen
    var totaalprijs_afronden = parseFloat(Math.round(prijs_zonderkomma_float * aantal * 100) / 100).toFixed(2);

    //de komma terug zetten
    document.getElementById(totaal).textContent = totaalprijs_afronden.replace('.', ",");

}

document.getElementById("totaalknop").addEventListener("click", function () {

    //de totaal prijs berekenen
    var totaalprijssmarties = document.getElementById("smarties_totaal").textContent;
    var totaalprijszureslungels = document.getElementById("zureslungels_totaal").textContent;
    var totaalprijspartijtje = document.getElementById("partijtje_totaal").textContent;

    //alles bij elkaar optellen en de punt weer te verplaatsen met een komma
    var totaalprijs_totaal = parseFloat(totaalprijssmarties.replace(',', "."))
        + parseFloat(totaalprijszureslungels.replace(',', "."))
        + parseFloat(totaalprijspartijtje.replace(',', "."));

    //detotaal prijs afronden op 2getallen en plaatsen naast totaal
    var tb = document.getElementById('totaalprijs')
   tb.textContent = 'Totaal: ' + parseFloat(Math.round(totaalprijs_totaal * 100) / 100).toFixed(2);
});

