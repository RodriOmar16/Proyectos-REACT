import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

const AgregarEditarUsuario = (props) => {

  //console.log("props: ", props);
  //console.log("props.userEdit: ", props.userEdit);

  //definiciones
  const { register, formState: { errors } , handleSubmit, setValue } = useForm({
    defaultValues: props.userEdit
  });

  setValue('name', props.userEdit.name);
  setValue('username', props.userEdit.username);

  //methods
  const onSubmit2 = (data, e) => {
    if(props.nuevo){
      props.accionUser(data);
    } 
    else {
      data.id = props.userEdit.id;
      props.accionUser(data.id,data);
    }
    e.target.reset();
  }

  return (  
    <Fragment>
      <h2>{props.nuevo? 'Add user' : 'Edit user'}</h2>
      <form onSubmit={handleSubmit(onSubmit2)} className=''>
        <div className=''>
          <label>Name</label>
          <input type="text" className='form-control' 
            {...register("name", { required: { value: true, message: 'Nombre obligatorio' } })}
          />
          {errors.name && <span className='text-danger text-small d-block mb-2'>{errors.name.message}</span>}
        </div>
        <div>
          <label>Username</label>
          <input type="text" className='form-control'
           {...register("username", { required: { value: true, message: 'Username obligatorio' } })}
          />
          {errors.username && <span className='text-danger text-small d-block mb-2'>{errors.username.message}</span>}
        </div>
        
        <button className='btn btn-primary d-block'>{props.nuevo? 'Agregar' : 'Guardar cambios'}</button>
      </form>
    </Fragment>
  );
}
 
export default AgregarEditarUsuario;
