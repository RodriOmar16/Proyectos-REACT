import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UnUsuario = () => {
  const {id} = useParams();

   //data
   const [user, setUser] = useState({});

   //esto se ejecuta cuando termina de cargarse toda la web
   useEffect(() => {
     obtenerDatos();
   },[]);
   
   // methods
  const obtenerDatos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();
    setUser(data);
  };

  return (  
    <Fragment>
      <div className='container'>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{user.name}</h6>
            <p className="card-text">
              Address: {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
            </p>
            <a href="#" className="card-link">{user.phone}</a>
            <a href="#" className="card-link">{user.email}</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default UnUsuario;
