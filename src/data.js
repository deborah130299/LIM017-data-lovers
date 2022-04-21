//import athletes from "./data/athletes/athletes";

// estas funciones son de ejemplo
export const filterSport =(athletes, str) => {
  const resultBySport=athletes.filter(x=>x.sport===str)
    return resultBySport;
   //return athletes.filter(athletes => athletes.sport == str)
 }
 
 export const filterPais =(athletes, str2) => {
  const resultByTeam=athletes.filter(x=>x.team===str2)
    return resultByTeam;
   //return athletes.filter(athletes => athletes.sport == str)
 }
  
export const filterMedals =(athletes, str3) => {
  const resultByMedals=athletes.filter(x=>x.medal===str3)
    return resultByMedals;
   //return athletes.filter(athletes => athletes.sport == str)
 }

 export const filterG =(athletes, str5) => {
  const resultByGender=athletes.filter(x=>x.gender===str5)
    return resultByGender;
   //return athletes.filter(athletes => athletes.sport == str)
 }



 export const sortData = (data, sortOrder) => {
   const ordenado=
     data.sort ((a,b)=> {
       if (a.name > b.name){
         return 1;
       }
      else if (a.name<b.name){
        return -1;
      }
      return 0;
    
    });
  if(sortOrder==="A-Z"){
    return ordenado;
  }
  else if(sortOrder==="Z-A"){
    return ordenado.reverse();
  }
};

  





 /* export const computeStats = (data) => {
   return 'OMG';
 };
  */

 /* let contadores = {}
for (let i=0 ; i<jugadores.length; i++){
  if(!contadores.hasOwnProperty(jugadores[i].gender)) {
    contadores[jugadores[i].gender] = 0;
  }
  contadores[jugadores[i].gender]++;
}
console.log(contadores);
/* let contadores:
  {M:3, F:1}; */
/* let femenino=contadores.F
let masculino=contadores.M
console.log(contadores.M)
console.log(contadores.F)
const cantidad=jugadores.length
console.log(cantidad)
 function calcularPorcentaje (x,y){
  return y/x * 100 +"%";
}
console.log(calcularPorcentaje(cantidad,masculino)); */ 



export const computeStats =(arrayFemale,arrayMale,arrayTotal)=>{
const countFemale=arrayFemale.length;
const countMale=arrayMale.length;
const countTotal=arrayTotal.length;
const percentFemale=Math.round((countFemale/countTotal)*100);
const percentMale=Math.round((countMale/countTotal)*100);

let array =[percentFemale, percentMale];
return array;
}



















/* // Funcion de filtrar medalla por genero
export const medalsByGender = (data, conditionGender, conditionMedal) => { 
  let medalsG = data.filter((athletes) => athletes.gender.includes(conditionGender));
  let genderM = medalsG.filter((medals) => medals.medal.includes(conditionMedal)).length;
  return genderM;
}; */



/*  export const computeStats = (data,medalsF) => {
   const contadorF=(data.filter(y=>y.gender===medalsF))
   const count=contadorF.length;
   const percent=Math.round((count/data.length)*100)
   return 'percent';
 };
  */


