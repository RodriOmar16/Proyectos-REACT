/* eslint-disable no-unused-expressions */

import React, {Fragment, useState} from 'react'
import { useForm } from 'react-hook-form';

const EjemploUno = () => {
  //definiciones
  const { register, formState: { errors } , handleSubmit } = useForm();
  const [entradas, setEntradas] = useState([]);

  // metodos
  const enviarForm = (data, e) => {
    console.log("data: ", data);
    setEntradas([ ...entradas, data ]);
    e.target.reset();
  }

  //html y java
  return ( 
    <Fragment>
      <h1>Ejemplo 1</h1>
      <form onSubmit={handleSubmit(enviarForm)}>
        <input 
          placeholder='Ingresar título'
          className='form-control my-2'
          {...register("titulo", { required: { value: true, message: 'Título obligatorio' } })}
        />
        {errors.titulo && <span className='text-danger text-small d-block mb-2'>{errors.titulo.message}</span>}
        <input 
          placeholder='Ingresar descripción'
          className='form-control my-2'
          {...register("descripcion", { required: { value: true, message: 'Descripción obligatoria' },
                                        maxLength: { value: 100, message: 'Se permite un máximo de 100 caracteres' }
                                      })}
        />
        {errors.descripcion && <span className='text-danger text-small d-block mb-2'>{errors.descripcion.message}</span>}
        <button className='btn btn-primary'>Enviar</button>
      </form>

      <ul>
        {
          entradas.map((e,index) => <li key={index}>{e.titulo} - {e.descripcion}</li>)
        }
      </ul>

    </Fragment>
  );
}
 
export default EjemploUno;