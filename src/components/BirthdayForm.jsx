import React, {useState} from "react";
import Birthday from './Birthday.jsx'
const BirthdayList = () => {
  const [birthdayData, setbirthdayData] = React.useState({nombre:"", fecha:""});
  console.log(birthdayData);
  const handleChange = (event) => {
    setbirthdayData( prevbirthdayData => {
      return {
        ...prevbirthdayData,
        [event.target.name]: event.target.value
      }
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitteado");
  }
  return (
    <form className="birthday-form">
      <input 
        type="text"
        placeholder="Nombre"
        onChange={handleChange}
        name="nombre"
        value={birthdayData.nombre}
      />
      <input 
        type="date"
        name="fecha"
        onChange={handleChange}
        value={birthdayData.fecha}
      />
      <input 
        type="submit"
        onClick={handleSubmit} />
    </form>
  )
}

export default BirthdayList;