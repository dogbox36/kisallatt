let kedvencek=[
   
];
let osszeglista=[];

function ujkedvencElem(cim){
    let label = document.createElement('label');
    label.textContent = cim+': ';
    return label;
}

function listaaddpizza(){
    kedvencek.push("pizza (250 kalória)")
    osszeglista.push(250)
}
function listaaddhamburger(){
    kedvencek.push("hamburger (200 kalória)")
    osszeglista.push(200)
}
function listaaddcsirke(){
    kedvencek.push("Sült Csirke (150 kalória)")
    osszeglista.push(150)
}
setInterval(function osszeg(){
    let sum = 0;

    for (let i = 0; i < osszeglista.length; i++) {
    sum += osszeglista[i];
    }
    document.getElementById('osszeg').textContent="Összesen: "+sum+" kalória";

},100)


setInterval(function kedvencekBetoltese(){
    let szuloElem= document.getElementById('lista');
    szuloElem.textContent='';
    for(let k of kedvencek){
        let listaElem = document.createElement('li');
        listaElem.appendChild(ujkedvencElem(k));
        let torlesGomb=document.createElement('button');
        torlesGomb.textContent='X';
        function torlesKatt(){
            listaElem.remove();
    
        }
        torlesGomb.addEventListener('click',torlesKatt);
        listaElem.appendChild(torlesGomb);
        szuloElem.appendChild(listaElem);
        
    }
},100);


function init(){
    document.getElementById('pizza').addEventListener('click',listaaddpizza)
    document.getElementById('hamburger').addEventListener('click',listaaddhamburger)
    document.getElementById('csirke').addEventListener('click',listaaddcsirke)
}

document.addEventListener('DOMContentLoaded',init);