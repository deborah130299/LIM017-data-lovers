import { filterSport, filterPais, filterMedals, sortData, filterG } from './data.js';
import gameData from './data/athletes/athletes.js';
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

}

function showSports() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('datos').style.display = 'block';
    document.getElementById('Resumen').style.display = 'none';
   
    
}

function showstadistics() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('datos').style.display = 'none';
    document.getElementById('Resumen').style.display = 'block';
    document.getElementById('carrusel').style.display = 'block';
    
}

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

}

function showSports() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('datos').style.display = 'block';
    document.getElementById('Resumen').style.display = 'none';
   
    
}

function showstadistics() {
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('datos').style.display = 'none';
    document.getElementById('Resumen').style.display = 'block';
    document.getElementById('carrusel').style.display = 'block';
    
}
//export const init = () => {

const athletes = gameData.athletes;

const tableBody = document.querySelector('tbody')
const allAthletes = (index) => {
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

const printScreen = (mostrar) => {
    tableBody.innerHTML = '';
    mostrar.forEach((z) => {
        tableBody.innerHTML += allAthletes(z);
    })
}
printScreen(athletes);

const str = document.getElementById('disciplinas');
str.addEventListener('change', (x) => {
    const selectSport = filterSport(athletes, x.target.value);
    printScreen(selectSport)
})

const str2 = document.getElementById('paises');
str2.addEventListener('change', (x) => {
    const selectPais = filterPais(athletes, x.target.value);
    printScreen(selectPais)
})

const str3 = document.getElementById('medals');
str3.addEventListener('change', (x) => {
    const selectMedals = filterMedals(athletes, x.target.value);
    printScreen(selectMedals)
})

const str4 = document.getElementById('Ordenador');
str4.addEventListener('change', (x) => {
    const selectName = sortData(athletes, x.target.value);
    printScreen(selectName)
})

const str5 = document.getElementById('Gender');
str5.addEventListener('change', (x) => {
    const selectG = filterG(athletes, x.target.value);
    printScreen(selectG)
})


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


export const sum = (num1, num2) => num1 + num2;


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
var video = document.getElementById("myVideo");
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
}


showDom("participantesF", athletes)


function showDom(element,arr){
    document.getElementById(element).innerHTML="";
    for (let i=0;i<arr.length;i++){
        document.getElementById(element).innerHTML+=
        `<div> ${arr[i]}</div>`
    }
}


