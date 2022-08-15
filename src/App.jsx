import React, { useEffect } from 'react'
import './App.css'
import BirthdayForm from './components/BirthdayForm.jsx'
import BirthdayList from './components/BirthdayList.jsx'

function App() {
  const storage = {...localStorage};
  const keysInStorage = Object.keys(storage);
  const birthdaysInStorage = keysInStorage.map( key => JSON.parse(localStorage.getItem(key)));
  const [birthdaysList,setBirthdaysList] = React.useState(birthdaysInStorage);
  const updateBirthdaysList = birthdays => setBirthdaysList([...birthdaysList,birthdays])
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
