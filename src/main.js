
import  { filterSport, filterPais,filterMedals, sortData, filterG , computeStats }  from './data.js';

import gameData from './data/athletes/athletes.js';
const btnStart = document.getElementById("menuStart");
const btnMedals = document.getElementById("medalsMenu");
const btnresume = document.getElementById("menuSummary");
// Eventos de la HomePage
btnStart.addEventListener("click", showStart);
btnMedals.addEventListener("click", showSports);
btnresume.addEventListener("click", showstadistics);


function showinicio() {
    document.getElementById('bienvenida').style.display = 'block';
    document.getElementById('videorio2016').style.display = 'block';
    document.getElementById('datos').style.display = 'none';
    document.getElementById('Resumen').style.display = 'none';

=======
function showStart() {
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('videoRio2016').style.display = 'block';
    document.getElementById('data').style.display = 'none';
    document.getElementById('summary').style.display = 'none';
>>>>>>> upstream/main
}

function showSports() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('data').style.display = 'block';
    document.getElementById('summary').style.display = 'none';
}

function showstadistics() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('data').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
    document.getElementById('carrusel').style.display = 'block'; 
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
const btninicio = document.getElementById("menuinicio");
const btnmedallas = document.getElementById("menumedallas");
const btnresume = document.getElementById("menuresumen");
// Eventos de la HomePage
btninicio.addEventListener("click", showinicio);
btnmedallas.addEventListener("click", showSports);
btnresume.addEventListener("click", showstadistics);

function showinicio() {
    document.getElementById('bienvenida').style.display = 'block';
    document.getElementById('videorio2016').style.display = 'block';
    document.getElementById('datos').style.display = 'none';
    document.getElementById('Resumen').style.display = 'none';
<<<<<<< HEAD

}

function showSports() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('datos').style.display = 'block';
    document.getElementById('Resumen').style.display = 'none';
   
    
}

=======

}
=======
//export const init = () => {
const athletes = gameData.athletes;

/*const enterBtn=document.getElementById('inicio') 
enterBtn.addEventListener('click',nombreFn)
function nombreFn () {
    document.getElementById('bienvenida').style.display='none';
    document.getElementById('datos').style.display='block';  
}*/
>>>>>>> upstream/main

function showSports() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('datos').style.display = 'block';
    document.getElementById('Resumen').style.display = 'none';
   
    
}

>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
function showstadistics() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('datos').style.display = 'none';
    document.getElementById('Resumen').style.display = 'block';
    document.getElementById('carrusel').style.display = 'block';
    
}
//export const init = () => {

const athletes = gameData.athletes;

//const enterBtn = document.getElementById('inicio')
//enterBtn.addEventListener('click', nombreFn)
//function nombreFn() {
   // document.getElementById('bienvenida').style.display = 'none';
   // document.getElementById('datos').style.display = 'block';
   // document.getElementById('carrusel').style.display = 'none';
  //  document.getElementById('videorio2016').style.display = 'block';

//}


//const enterResumen=document.getElementById('resumen') 
//enterResumen.addEventListener('click',resumenTotal)
//function resumenTotal () {
//  document.getElementById('bienvenida').style.display='none';
//document.getElementById('datos').style.display='none';
//document.getElementById('resumen').style.display='block';
//}





=======
//export const init = () => {
const athletes = gameData.athletes;

>>>>>>> upstream/main

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
    mostrar.forEach ((z)=>{
        tableBody.innerHTML += allAthletes(z);
    })
}
printScreen (athletes);

/* ORDER BY DISCIPLINES */
const str=document.getElementById('disciplines');
str.addEventListener('change',(x)=>{
    const selectSport=filterSport(athletes,x.target.value);
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
/* const str6 = document.getElementById('participantesF');
str6.addEventListener('change', (x) => {
    const selectG = filterG(athletes, x.target.value);
    printScreen(selectG)
}) */
<<<<<<< HEAD
=======
=======


         /* COMPUTE STATES */
=======
/*STATISTICS TABLE */ 
>>>>>>> upstream/main
const arrayFemale=filterG(athletes,"F");
const arrayMale=filterG(athletes,"M");

const arrayPercentByGender=computeStats(arrayFemale,arrayMale,athletes);
/* console.log(arrayPercentByGender);*/
let stadistic =document.getElementById("stadistic");
const estadisticsTable=`
<table>
<tr><th> GENERO</th> <th>PORCENTAJE </th></tr>
<tr><td>Femenino</td><td> ${arrayPercentByGender[0]+"%"}</td>
<tr><td>Masculino</td><td> ${arrayPercentByGender[1]+"%"}</td>
</table>
`
stadistic.innerHTML+=estadisticsTable;

<<<<<<< HEAD





>>>>>>> upstream/main
>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e


//Efectos boton
var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("inicio");
for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
//}


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
export const sum = (num1, num2) => num1 + num2;


//carrusel
<<<<<<< HEAD
=======
=======
  export const sum = (num1, num2) => num1 + num2;

  //carrusel
>>>>>>> upstream/main
>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
=======
  //carrusel
>>>>>>> upstream/main
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
<<<<<<< HEAD
<<<<<<< HEAD
var video = document.getElementById("myVideo");
=======
<<<<<<< HEAD
var video = document.getElementById("myVideo");
=======
/* var video = document.getElementById("myVideo");
>>>>>>> upstream/main
>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
myFunction();
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
}






<<<<<<< HEAD


=======
showDom("participantesF", athletes)


function showDom(element,arr){
    document.getElementById(element).innerHTML="";
    for (let i=0;i<arr.length;i++){
        document.getElementById(element).innerHTML+=
        `<div> ${arr[i]}</div>`
    }
}
=======
} */
>>>>>>> upstream/main

>>>>>>> d3eaf542acfce46e57499375e195db57588eb35e
=======
>>>>>>> upstream/main

