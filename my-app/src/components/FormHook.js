import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const FormHook = () => {

  const { register, formState: { errors } , handleSubmit } = useForm();

  const onSubmit2 = (data, e) => {
    e.target.reset();
    console.log(data)
  }

  return ( 
    <Fragment>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit2)}>
        <input 
          name="titulo" 
          className='form-control my-2'
          {...register("titulo", { required: { value: true, message: 'Título obligatorio' } })}
        />
        {errors.titulo && <span className='text-danger text-small d-block mb-2'>{errors.titulo.message}</span>}
        <button className='btn btn-primary'>Enviar</button>
      </form>
    </Fragment>
  );
}
 
export default FormHook;