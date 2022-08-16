import React from 'react';
import {formatDistanceStrict,isPast,setYear,getYear,isToday,isTomorrow} from 'date-fns'

const Birthday = ( {nombre,fecha,setBirthdayList} ) => {
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
  function deleteBirthday(event) {
    const clickedFriendName = event.target.previousSibling.wholeText.split(" ")[1];
    setBirthdayList( prevList => prevList.filter( friend => friend.nombre !== clickedFriendName))
  }
  return (
    <li>
        Amigx {nombre} cumple {daysToDisplay} 
        <button onClick={deleteBirthday}>X</button>
    </li>
  )
}
export default Birthday;