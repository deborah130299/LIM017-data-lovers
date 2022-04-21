//Importando funciones de data.js
import  { filterSport, filterPais,filterMedals, sortData, filterG , computeStats }  from './data.js';
import gameData from './data/athletes/athletes.js';
const athletes = gameData.athletes; 
//Trayendo ID del documento HTML
const btnStart = document.getElementById("menuStart");
const btnMedals = document.getElementById("medalsMenu");
const btnresume = document.getElementById("menuSummary");

// Eventos de la HomePage
btnStart.addEventListener("click", showStart);
btnMedals.addEventListener("click", showSports);
btnresume.addEventListener("click", showstadistics);
//Mostrar y ocultar pantallas
function showStart() {  //Mostrar pantallas de inicio
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('data').style.display = 'none';
    document.getElementById('summary').style.display = 'none';
}
function showSports() {   //Mostrar Pantallas de dAtos con filtros
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('data').style.display = 'block';
    document.getElementById('summary').style.display = 'none';
}
function showstadistics() {  //Mostrar Pantallas de resumen (estadísticas)
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('data').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
}
//export const init = () => {
 
const tableBody = document.querySelector('tbody')
const allAthletes = (index)=>{
    return `
    <tr>
    <td>${index.name}</td>
    <td>${index.team}</td>
    <td>${index.sport}</td>
    <td>${index.medal}</td>
    <td>${index.gender}</td>
    </tr>
`;
}
//MOSTRAR EN PANTALLA 
const printScreen = (mostrar) => {
    tableBody.innerHTML = '';
    let str='';
    mostrar.forEach ((z)=>{
        /* tableBody.innerHTML += allAthletes(z); */
        str+=allAthletes(z)
    })
    tableBody.innerHTML=str;
}
printScreen (athletes);
/* ORDER BY DISCIPLINES */
const str=document.getElementById('disciplines');
str.addEventListener('change',(e)=>{
    const selectSport=filterSport(athletes,e.target.value);
    printScreen(selectSport)
})
/* ORDER BY COUNTRIES */
const str2=document.getElementById('countries');
str2.addEventListener('change',(x)=>{
    const selectPais=filterPais(athletes,x.target.value);
    printScreen(selectPais)
})
/* ORDER BY MEDALS */
const str3=document.getElementById('medals');
str3.addEventListener('change',(x)=>{
    const selectMedals=filterMedals(athletes,x.target.value);
    printScreen(selectMedals)
})
  /* ORDER ALPHABETICALLY */
const str4=document.getElementById('order');
str4.addEventListener('change',(x)=>{
    const selectName=sortData(athletes,x.target.value);
    printScreen(selectName)
})
/* FILTER FOR GENDER */ 
const str5=document.getElementById('gender');
str5.addEventListener('change',(x)=>{
    const selectG=filterG(athletes,x.target.value);
    printScreen(selectG)
})

/*STATISTICS TABLE */ 
const arrayFemale=filterG(athletes,"F");
const arrayMale=filterG(athletes,"M");

const arrayPercentByGender=computeStats(arrayFemale,arrayMale,athletes);
//console.log(arrayPercentByGender);

let stadistic =document.getElementById("stadistic");
const estadisticsTable=`
<table>
<tr><th> GENERO</th> <th>PORCENTAJE </th></tr>
<tr><td>Femenino</td><td> ${arrayPercentByGender[0]+"%"}</td>
<tr><td>Masculino</td><td> ${arrayPercentByGender[1]+"%"}</td>
</table>
`
stadistic.innerHTML+=estadisticsTable;
  //carrusel
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

