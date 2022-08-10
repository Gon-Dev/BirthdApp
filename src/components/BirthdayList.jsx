import Birthday from './Birthday.jsx'

const BirthdayList = ({birthdayList}) => {

  const birthdayToShow = birthdayList.map ( birthday => {

    return (

      <Birthday 
        nombre={birthday.nombre}
        fecha={birthday.fecha}
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