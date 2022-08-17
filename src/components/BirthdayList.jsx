import Birthday from './Birthday.jsx';
import React from 'react';
import '../styles/Birthdaylist.css'
const BirthdayList = ( {birthdayList,setBirthdayList} ) => {
  const birthdayToShow = birthdayList.map ( birthday => {
    return (
      <Birthday 
        nombre={birthday.nombre}
        fecha={birthday.fecha}
        key={birthday.nombre}
        setBirthdayList={setBirthdayList}
      />
    )
  })
  return (
    <ul className="birthday-list">
      {birthdayToShow}
    </ul>
  )
}

export default BirthdayList;