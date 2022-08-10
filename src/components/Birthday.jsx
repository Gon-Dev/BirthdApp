const Birthday = (props) => {
    // cumple ya pasó este año?
    //  SI (true) => calcular cuanto falta para el año que viene
    //  NO (false) => calcular cuanto falta para este año
    const today = new Date();
    const birthdayDate = new Date(props.fecha +'T00:00:00');
    console.log(birthdayDate.toLocaleDateString());
    console.log(`la fecha ingresada ${birthdayDate} // la fecha actual ${today}`);

  return (

    <li>
      <h2>Amigx {props.nombre}</h2>
      <h3>Cumple el {props.fecha}</h3>
    </li>
    
  )
}
export default Birthday;