import React from "react";

const BirthdayForm = ({updateBirthdaysList}) => {
  const [birthdayFormData, setBirthdayFormData] = React.useState({nombre:"", fecha:""});

  function handleChange(event) {
    setBirthdayFormData( prevBirthdayFormData => {
      return {
        ...prevBirthdayFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  function handleSubmit(event) {
    if(birthdayFormData.nombre && birthdayFormData.fecha){
      event.preventDefault();
      updateBirthdaysList(birthdayFormData);
      localStorage.setItem(birthdayFormData.nombre,JSON.stringify(birthdayFormData));
    } else {
      console.error(error);
    }
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