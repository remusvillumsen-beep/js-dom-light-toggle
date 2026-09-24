// Husk fra dag 1: skriv "use strict" herunder


// Eksempel: vi henter "on"-knappen ved hjælp af dens id-attribut (husk fra HTML/CSS: id identificerer ét bestemt element)
const lightOn = document.getElementById("onBtn");

// Skriv selv: hent "off"-knappen på samme måde, ved hjælp af dens id. Variablen skal hedde lightOff


// Skriv selv: hent billedet på samme måde, ved hjælp af dets id. Variablen skal hedde bulb


// Eksempel: denne funktion tænder lyset ved at ændre billedets kilde (src)
function onBulb() {
  bulb.src = "img/on.jpg";
}

// Skriv selv en funktion, der hedder offBulb, og som slukker lyset ved at ændre billedets kilde (src) til "img/off.jpg"


// Eksempel: vi lytter efter klik på "on"-knappen og kører onBulb, når der klikkes
lightOn.addEventListener("click", onBulb);

// Skriv selv koden, der lytter efter klik på "off"-knappen (lightOff) og kører din offBulb-funktion, når der klikkes
