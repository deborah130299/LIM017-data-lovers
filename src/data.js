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
 


 export const  filterData = (data, condition) => {
   
   return 'example';
 };
 
 export const sortData = (data, sortBy, sortOrder) => {
   return 'OMG';
 };
 
 export const computeStats = (data) => {
   return 'OMG';
 };
 