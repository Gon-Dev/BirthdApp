import React from 'react'
import './styles/App.css'
import BirthdayList from './components/BirthdayList.jsx'
import Navbar from './components/Navbar.jsx'
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
    birthdayFormData.nombre && birthdayFormData.fecha ? setBirthdayList([...birthdayList,birthdayFormData]) : console.log("ingresaste mal los datos maquina, revisa");
  }

  return (
    <div className="App">
      <Navbar />
      <h2 className="app-title">¿Cuánto falta para el cumple de tu amigx?</h2>
      <h3 className="app-subtitle">Ingresá sus datos y veamos</h3>
      <form className="birthday-form">
        <label htmlFor="nombre">
          ¿Como se llama tu amigx?
          <input 
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="nombre"
            maxLength={20}
            value={birthdayFormData.nombre}
          />
        </label>
        <label htmlFor="fecha">
          ¿Cuando nació?
          <input 
            type="date"
            name="fecha"
            onChange={handleChange}
            value={birthdayFormData.fecha}
          />
        </label>
        <button 
          className="form-submit"
          type="submit" 
          onClick={handleSubmit} 
        >CALCULAR</button>
      </form>
      <BirthdayList
        birthdayList={birthdayList}
        setBirthdayList={setBirthdayList}
      />
    </div>
  )
}

export default App
