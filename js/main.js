const teenAge = 18;
const oldAge = 65;
const scontoTeen = 20;
const scontoOld = 40;
const priceKm = 0.21;
let scontoRealTeen = scontoTeen / 100;
let scontoRealOld = scontoOld / 100;
let userAge;
let userKm; 
let finalPrice;
let printPrice; 
let btnSubit;
let btnRest;

printPrice= document.getElementById('stampa');
btnSubit = document.getElementById('btn-submit73');
btnRest = document.getElementById('btn-rest73');
userAge = document.getElementById('specificSizeSelect');
userKm = document.getElementById('specificSizeInputGroupUsername');

btnSubit.addEventListener('click', function(){
let tempUserAge = parseInt(userAge.value);
let TempUserKm = parseInt(userKm.value);
let price;

if(!isNaN(tempUserAge) && !isNaN(TempUserKm)){
    price = TempUserKm * priceKm;
    if(tempUserAge === teenAge){
        scontoRealTeen = scontoRealTeen * price;
        finalPrice = price - scontoRealTeen;
    }
    else if(tempUserAge === oldAge){
        scontoRealOld = scontoRealOld * price;
        finalPrice = price - scontoRealOld;
    }
    else{
        finalPrice= price;
    }
    finalPrice.toFixed(2);
    printPrice.innerHTML = `il prezzo e ${finalPrice}`;
}
else{
    printPrice.innerHTML = `il prezzo non e valido perche hai inserito male i numeri`;
}
});