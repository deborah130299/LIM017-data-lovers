import  { filterSport, sortData , computeStats }  from './data.js';
import gameData from './data/athletes/athletes.js';

const athletes = gameData.athletes;

const enterBtn=document.getElementById('inicio') 
enterBtn.addEventListener('click',nombreFn)
function nombreFn () {
    document.getElementById('bienvenida').style.display='none';
    document.getElementById('datos').style.display='block';  
};

const tableBody = document.querySelector('tbody')
const allAthletes = (index)=>{
    return `
    <tr>
    <td>${index.name}</td>
    <td>${index.team}</td>
    <td>${index.sport}</td>
    <td>${index.medal}</td>
    </tr>
    `;
}
const printScreen = (mostrar) => {
    tableBody.innerHTML = '';
    mostrar.forEach ((z)=>{
        tableBody.innerHTML += allAthletes(z);
    })
}
printScreen (athletes);

const str=document.getElementById('disciplinas');
str.addEventListener('change',(x)=>{
    const selectSport=filterSport(athletes,x.target.value);
    printScreen(selectSport)
})

//console.log(data);
console.log(filterSport(athletes,"Archery"));








var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  


  var bubblyButtons = document.getElementsByClassName("inicio");
    for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

