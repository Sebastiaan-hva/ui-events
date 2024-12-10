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

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...


// doubleclick button
let dblClick = document.querySelector('a:nth-of-type(1)')
dblClick.addEventListener('dblclick', (e) => { 
  dblClick.classList.toggle('dblclick');
});


// button die rotate met input
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



// multiple flickers op click
let flickerButton = document.querySelector('a:nth-of-type(5)');

if (flickerButton) {
  // Add event listener for clicks
  flickerButton.addEventListener('click', () => {
    flickerButton.classList.add('flicker'); // Only add class, no toggle
  });

  // Add event listener for animation end
  flickerButton.addEventListener('animationend', () => {
    flickerButton.classList.remove('flicker'); // Remove class when animation ends
  });
} else {
  console.error("Element 'a:nth-of-type(5)' not found.");
}

let expandButton = document.querySelector('a:nth-of-type(7)')

expandButton.addEventListener('click', expandHandler)

function expandHandler () {
  expandButton.classList.toggle('expand');
}
expandButton.addEventListener('animationend', expandHandler)


// mouseenter glow
document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.querySelector('a:nth-of-type(9)');
  
  if (targetElement) {
    targetElement.addEventListener('mouseenter', (event) => {
      event.preventDefault();
      targetElement.classList.add('bounce-glow');

      setTimeout(() => {
        targetElement.classList.remove('bounce-glow');
      }, 2000);
    });
  }
});

// Focus op element
document.addEventListener('DOMContentLoaded', () => {
 
  const targetElement = document.querySelector('a:nth-of-type(11)'); 
  
  if (targetElement) {
    targetElement.addEventListener('focus', () => {
      targetElement.classList.add('focused');
    });

    targetElement.addEventListener('blur', () => {
      targetElement.classList.remove('focused');
    });
  }
});

// voorbeeldknop
let interaction = document.querySelector('a:nth-of-type(12)') 
  interaction.addEventListener('click', jumpHandler)  

function jumpHandler() {  
  interaction.classList.toggle('jump');
}

interaction.addEventListener('animationend', jumpHandler)

// mouseY, mouseX
document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.querySelector('a:nth-of-type(13)')
  
  if (targetElement) {
    targetElement.addEventListener('mousemove', (event) => {
      const rect = targetElement.getBoundingClientRect();
      const mouseX = event.clientX - rect.left; // Mouse relatief de linker kant van het element
      const mouseY = event.clientY - rect.top;  // Mouse relatief van de bovenkant vna het element
      
      // Bereketn de tilt
      const tiltX = (mouseY / rect.height - 0.5) * 80; //de laatste waarde veranderen om de severity van de tilt aan te passen.
      const tiltY = (mouseX / rect.width - 0.5) * -80; 

      targetElement.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      targetElement.style.transition = 'transform 0.1s ease-out'; // transition smoother maken
    });

    // Reset the tilt effect when mouse leaves the element
    targetElement.addEventListener('mouseleave', () => {
      targetElement.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Reset
      targetElement.style.transition = 'transform 0.2s ease'; // Reset smoothness
    });
  }
});