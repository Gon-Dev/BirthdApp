import Birthday from './Birthday.jsx';
import React from 'react';
const BirthdayList = ({birthdayList}) => {
  const birthdayToShow = birthdayList.map ( birthday => {
    return (
      <Birthday 
        nombre={birthday.nombre}
        fecha={birthday.fecha}
        key={birthday.nombre}
      />
    )
  })

  return (

    <ul>
      {birthdayToShow}
    </ul>
    
  )
}

export default BirthdayList;