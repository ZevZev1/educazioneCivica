var toggleBtn; //bottone
var container; //container animazione

function declare(){ //dichiarazione variabili
  toggleBtn = document.querySelector(".toggle-btn");
  container = document.querySelector(".container");
}

declare();
const main = document.querySelector("main");  //main

let dark = false; //darkmode attiva

function toggleAnimation() {  //attivazione animazione
  dark = !dark; //switch true false
  let clone = container.cloneNode(true);  //copia del container in modalità scura
  if (dark) {                             //se si vuole la modalità scura
    clone.classList.remove("light");
    clone.classList.add("dark");
  }else {                                 //se si vuole la modalità chiara
    clone.classList.remove("dark");
    clone.classList.add("light");
  }

  clone.classList.add("anim");  //attivazione animazione
  main.appendChild(clone);  //aggiunta della copia scura

  clone.addEventListener("animationend", () => { //quando finisce l'animazione

    container.remove();                 //eliminazione della modalità chiara
    clone.classList.remove("anim");     //eliminazione animazione
    // Reset variabili
    declare();
    events();
  });

}

function events() {
  toggleBtn.addEventListener("click", toggleAnimation);   //se si clicca il bottone
}

events();
