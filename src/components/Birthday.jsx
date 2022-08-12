import React from 'react';
import {formatDistanceStrict,isPast,setYear,getYear,isToday} from 'date-fns'

const Birthday = ( {fecha,nombre} ) => {
  const today = new Date();
  console.log(today);
  const actualYear = getYear(today);
  const friendBirthday = new Date(`${fecha}T00:00:00`);
  const birthdayThisYear = setYear(friendBirthday,actualYear);
  const updatedbirthdayDate = isPast(birthdayThisYear) ? setYear(birthdayThisYear,actualYear + 1) : birthdayThisYear; // ESTO NO FUNCIONA, VERIFICAR
  console.log(updatedbirthdayDate);
  const remainingDays = formatDistanceStrict(today,updatedbirthdayDate,{unit:"day"}).split(" ")[0];
  const daysToDisplay = parseInt(remainingDays) === 0 ? "hoy!" : `en ${remainingDays} días`;

  // SI LA FECHA CAE HOY SALTA AL AÑO QUE VIENE, SOLUCIONAR LINEA 10 !!!!!!!!!!!!!!
  
  return (

    <li>
      <h2>Amigx {nombre} cumple {daysToDisplay} </h2>
    </li>
    
  )
}
export default Birthday;