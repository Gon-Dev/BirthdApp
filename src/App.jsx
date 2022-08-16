import React from 'react'
import './App.css'
import BirthdayList from './components/BirthdayList.jsx'

function App() {
  const [birthdaysList,setBirthdaysList] = React.useState([]);
  const [birthdayFormData, setBirthdayFormData] = React.useState({nombre:"", fecha:""});

  const storageKeys = Object.keys({...localStorage});
  const birthdaysInStorage = storageKeys.map( key => {
    return JSON.parse(localStorage.getItem(key))
  });
  function handleChange(event) {
    setBirthdayFormData( prevBirthdayFormData => {
      return {
        ...prevBirthdayFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    const isAlreadyFriend = birthdaysInStorage.some(birthday => birthday.nombre === birthdayFormData.nombre);
    if(birthdayFormData.nombre && birthdayFormData.fecha && !isAlreadyFriend){
      setBirthdaysList([...birthdaysList,birthdayFormData]);
      localStorage.setItem(birthdayFormData.nombre,JSON.stringify(birthdayFormData))
    } else {
      console.log("ingresaste mal los datos maquina, revisa");
    }
  }

  return (
    <div className="App">
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
          onClick={handleSubmit} 
        />
      </form>
      <BirthdayList
        birthdayList={birthdaysList}
      />
    </div>
  )
}

export default App
