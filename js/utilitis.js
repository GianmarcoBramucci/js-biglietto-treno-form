// funzione che genera un numero random tra due numeri
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } 