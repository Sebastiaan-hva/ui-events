/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele


// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt


// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen


  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)


// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...
let dblClick = document.querySelector('a:nth-of-type(1)')
// Stap 2: addEventListener
// bibberLink.addEventListener...
dblClick.addEventListener('dblclick', (e) => { 
  dblClick.classList.toggle('dblclick');
});
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...



// Stap 2: addEventListener
// bibberLink.addEventListener...

let spinToWin = document.querySelector('a:nth-of-type(3)')
spinToWin.addEventListener('keydown', onkeydown);
onkeydown = (event) => {
  const { key } = event; //event.key

  if (key === 'a') {
    spinToWin.classList.toggle('spin')
  } else if (key === 'd') {
    spinToWin.classList.toggle('spin2')
  }
};


let flickerButton = document.querySelector('a:nth-of-type(5)')

flickerButton.addEventListener('click', flickerHandler)

function flickerHandler () {
  flickerButton.classList.toggle('flicker');
}
flickerButton.addEventListener('animationend', flickerHandler)



// let expandButton = document.querySelector('a:nth-of-type(7)')

// expandButton.addEventListener('click', expandHandler)

// function expandHandler () {
//   expandButton.classList.toggle('expand');
// }
// expandButton.addEventListener('animationend', expandHandler)

let interaction = document.querySelector('a:nth-of-type(12)') 
  interaction.addEventListener('click', jumpHandler)  

function jumpHandler() {  
  interaction.classList.toggle('jump');
}

interaction.addEventListener('animationend', jumpHandler)