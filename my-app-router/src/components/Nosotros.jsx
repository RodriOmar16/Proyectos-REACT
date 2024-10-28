import React,{ Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Nosotros = () => {
  //data
  const [equipos, setEquipos] = useState([]);

  //esto se ejecuta cuando termina de cargarse toda la web
  useEffect(() => {
    obtenerDatos();
  },[]);
  
  //methods
  const obtenerDatos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    setEquipos(data);
  };
  //console.log("equipos:", equipos); // Esto mostrará los datos cuando se actualice el estado

  return (
    <Fragment>
      <h1>Nosotros</h1>
      {equipos ? (
        <ul>
          {equipos.map((equipo) => (
            <li key={equipo.id}>
              <Link to={`/nosotros/${equipo.id}`}>
                {equipo.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando...</p>
      )}
    </Fragment>
  );
}
 
export default Nosotros;
