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
 


 //export const  filterData = (data, condition) => {
   
 /*   return 'example';
 }; */
 
/* export const filterF = (data) => {
  return data.filter((athletes)=>athletes.gender.includes("F"));
};
export const filterM = (data) => {
  return data.filter((athletes)=>athletes.gender.includes("M"));
}; */

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