import React from 'react'
import './App.css'
import BirthdayList from './components/BirthdayList.jsx'

function App() {
  const [birthdayList,setBirthdayList] = React.useState([]);
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
    event.preventDefault();
    if(birthdayFormData.nombre && birthdayFormData.fecha){
      setBirthdayList([...birthdayList,birthdayFormData]);
      localStorage.setItem(birthdayFormData.nombre,JSON.stringify(birthdayFormData))
    } else {
      alert("ingresaste mal los datos maquina, revisa");
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
        birthdayList={birthdayList}
        setBirthdayList={setBirthdayList}
      />
    </div>
  )
}

export default App
