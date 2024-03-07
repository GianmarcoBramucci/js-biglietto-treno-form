const teenAge = 18;
const oldAge = 65;
const scontoTeen = 20;
const scontoOld = 40;
const priceKm = 0.21; 
let userAge;
let userKm;
let userName; 
let finalPrice;
let printPrice; 
let printName;
let printPlane;
let printId;
let printSit;
let btnSubit;
let btnRest;


printName = document.getElementById('user-name');
printPlane = document.getElementById('user-plane');
printId = document.getElementById('ticket-id');
printSit = document.getElementById('user-sit'); 
printPrice = document.getElementById('user-price');
btnSubit = document.getElementById('btn-submit73');
btnRest = document.getElementById('btn-rest73');
userAge = document.getElementById('specificSizeSelect');
userKm = document.getElementById('specificSizeInputGroupUsername');
userName = document.getElementById('specificSizeInputName');
ticktetTable = document.getElementById('table-ticket');
containerTable = document.getElementById('container-table');


btnSubit.addEventListener('click', function(){
let tempUserAge = 0; 
let TempUserKm = 0; 
let price = 0;
let min = 0;
let max = 0;
let scontoRealOld;
let scontoRealTeen;
let message;
tempUserName = userName.value; 
TempUserKm = parseInt(userKm.value);
tempUserAge = parseInt(userAge.value);
scontoRealTeen = scontoTeen / 100;
scontoRealOld = scontoOld / 100;

if(!isNaN(tempUserAge) && !isNaN(TempUserKm) && isNaN(tempUserName)){
    price = TempUserKm * priceKm;
    if(tempUserAge === teenAge){
        scontoRealTeen = scontoRealTeen * price;
        finalPrice = price - scontoRealTeen;
        message = 'Teen Plane';
    }
    else if(tempUserAge === oldAge){
        scontoRealOld = scontoRealOld * price;
        finalPrice = price - scontoRealOld;
        message = 'Senior Plane';
    }
    else{
        finalPrice= price;
        message = 'Normal Plane';
    }

    finalPrice.toFixed(2);
    ticktetTable.classList.remove('d-none');
    containerTable.classList.add('d-none');
    min = 1;
    max = 37;
    printSit.innerHTML = getRndInteger(min, max);
    min= 1000;
    max= 9999;
    printId.innerHTML = getRndInteger(min, max);
    printPrice.innerHTML = `${finalPrice} &#8364; `;
    printName.innerHTML = tempUserName;
    printPlane.innerHTML = message;
}
else{
    containerTable.innerHTML = `dati non validi`;
    containerTable.classList.remove('d-none');
    ticktetTable.classList.add('d-none');
}
});

btnRest.addEventListener('click', function(){
    userName.value = '';
    userKm.value = '';
    userAge.value = '';

    ticktetTable.classList.add('d-none');
    containerTable.classList.add('d-none');

});