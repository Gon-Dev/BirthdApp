import React, {useState} from "react";

const BirthdayForm = ({updateBirthdaysList}) => {

  const [birthdayFormData, setBirthdayFormData] = React.useState({nombre:"", fecha:""});
  const handleChange = (event) => {
    setBirthdayFormData( prevBirthdayFormData => {
      return {
        ...prevBirthdayFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  const handleSubmit = (event) => {
    //localStorage.setItem(birthdayFormData.nombre,JSON.stringify(birthdayFormData))
    event.preventDefault();
    updateBirthdaysList(birthdayFormData);    
  }
  return (
    <form className="birthday-form">
      <input 
        type="text"
        placeholder="Nombre"
        onChange={handleChange}
        name="nombre"
        value={birthdayFormData.nombre}
      />
      <input 
        type="date"
        name="fecha"
        onChange={handleChange}
        value={birthdayFormData.fecha}
      />
      <input 
        type="submit"
        onClick={handleSubmit} />
    </form>
  )
}

export default BirthdayForm;