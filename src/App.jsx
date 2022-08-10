import React, { useEffect } from 'react'
import './App.css'
import BirthdayForm from './components/BirthdayForm.jsx'
import BirthdayList from './components/BirthdayList.jsx'

function App() {

  const [birthdaysList,setBirthdaysList] = React.useState([]);

  const updateBirthdaysList = (birthdays) => {
    setBirthdaysList([...birthdaysList,birthdays])
  }
  
  
  return (

    <div className="App">
      <BirthdayForm 
        updateBirthdaysList={updateBirthdaysList}
      />
      <BirthdayList 
        birthdayList={birthdaysList}
      />
    </div>

  )
}

export default App
