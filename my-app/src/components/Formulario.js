import React, { useState, Fragment } from 'react'

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    dni:    ''
  });

  const controlarDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(datos.nombre + ' & ' +datos.dni)
  } 

  return ( 
    <Fragment>
      <h1>Formulario</h1>
      <form className='row' onSubmit={enviarDatos}>
        <div className='col-md-3'>
          <input 
            className='form-control'  
            placeholder='Ingresar Nombre y Apellido' 
            type='text' name="nombre"
            onChange={controlarDatos}
            />
        </div>
        <div className='col-md-3'>
          <input 
            className='form-control' 
            placeholder='Ingresar dni' 
            type='number' name="dni"
            onChange={controlarDatos}
            />
        </div>
        <div className='col-md-3'>
          <button className='btn btn-primary' type='submit'>Enviar</button>
        </div>

      </form>
    </Fragment>
  );
}
 
export default Formulario;