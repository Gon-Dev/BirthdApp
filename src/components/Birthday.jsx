import React from 'react';
import {formatDistanceStrict,isPast,setYear,getYear,isToday,isTomorrow} from 'date-fns'

const Birthday = ( {fecha,nombre} ) => {

  const today = new Date();
  const actualYear = getYear(today); // año actual
  const birthdayInputDate = new Date(`${fecha}T00:00:00`); //dato ingresado por user, incluye año de nacimiento
  const birthdayThisYear = setYear(birthdayInputDate,actualYear); // cumpleaños este año
  const nextBirthday = isPast(birthdayThisYear) ? setYear(birthdayThisYear,actualYear + 1) : birthdayThisYear; // sets the next birthday, wether's in this or the next year
  
  function showRemainingDays (nextBirthday) { 
    const daysToNextBirthday = parseInt(formatDistanceStrict(today,nextBirthday,{unit:"day"}).split(" ")[0]); // retorna cantidad de dias "in x days", se extrae x
    return isTomorrow(nextBirthday) ? `mañana!` : `en ${daysToNextBirthday} día${ daysToNextBirthday > 1 ? "s" : ""}.`; // devuelve string segun corresponda
  }
  const daysToDisplay = isToday(birthdayThisYear) ? "hoy!" : showRemainingDays(nextBirthday);
  
  
  return (

    <li>
      <h2>Amigx {nombre} cumple {daysToDisplay} </h2>
    </li>
    
  )
}
export default Birthday;