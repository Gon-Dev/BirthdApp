import Birthday from './Birthday.jsx';
import React from 'react';
const BirthdayList = ( {birthdayList} ) => {
  const storageKeys = Object.keys({...localStorage});
  const birthdaysInStorage = storageKeys.map( key => {
    return JSON.parse(localStorage.getItem(key))
  });
  const allBirthdays = [...birthdayList,...birthdaysInStorage]
  const birthdayToShow = allBirthdays.map ( birthday => {
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