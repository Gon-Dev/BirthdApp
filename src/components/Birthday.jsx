import React from 'react';
import {intlFormatDistance,setYear,getYear} from 'date-fns'
const Birthday = (props) => {

  const today = new Date();
  const friendBirthday = new Date(props.fecha);
  const actualYear = getYear(today);
  const updatedBirthday = setYear(friendBirthday,actualYear);
  const remainingDays = intlFormatDistance(updatedBirthday,today,{unit:"day"}).split(" ")[1];
  
  
  
  return (

    <li>
      <h2>Amigx {props.nombre} cumple en {remainingDays} días </h2>
    </li>
    
  )
}
export default Birthday;