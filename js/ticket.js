let numeroKilometri = document.getElementById('distance');
let eta = document.getElementById('age');
let prezzoBiglietto;
const scontoMinorenni=20;
const scontoPenzionati=40;
const prezzoKilometri=0.21;
let btn= document.getElementById('generete');
const nomeCognome= document.getElementById('inputGeneric')


function genereteTiket(event)
{
    prezzoBiglietto=numeroKilometri.innerHTML*prezzoKilometri;
    if(eta.innerHTML=='maggiorenne')
        {
        alert(prezzoBiglietto.toFixed(2))
        }
    else if(eta.innerHTML=='penzionato')
        {
        prezzoBiglietto=(prezzoBiglietto*scontoPenzionati)/100;
        alert("pensionati" + prezzoBiglietto.toFixed(2))
        }
    else
        {
        prezzoBiglietto=(prezzoBiglietto*scontoMinorenni)/100,2;
        alert("minorenni " + prezzoBiglietto.toFixed(2))
        }
}
btn.addEventListener('click', genereteTiket);