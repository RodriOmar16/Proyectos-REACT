import React, { Fragment } from 'react'

const FormHook = () => {
  return ( 
  <Fragment>
    <h1>Formulario</h1>
    <form>
      <input name="titulo" className='form-control my-2'/>
      <button className='btn btn-primary'>Enviar</button>
    </form>
  </Fragment>
);
}
 
export default FormHook;