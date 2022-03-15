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

/*for (let index = 0; index < athletes.length; index++) {
  
    tableBody.innerHTML += `
    <tr>
    <td>${athletes[index].team}</td>
    <td>${athletes[index].sport}</td>              
    <td>${athletes[index].medal}</td>
    </tr>
    `;
}*/

const str=document.getElementById('disciplinas');
str.addEventListener('change',(x)=>{
    const selectSport=filterSport(athletes,x.target.value);
    printScreen(selectSport)
})

/*const btnSearch = document.getElementsByClassName('search1');
btnSearch.addEventListener('click',() => {
    document.getElementById('bienvenida').style.display='none';
    document.getElementById('datos').style.display='block';
} */



//console.log(data);
console.log(filterSport(athletes,"Archery"));

