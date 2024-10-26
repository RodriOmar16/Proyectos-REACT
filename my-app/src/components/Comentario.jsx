import React, { Fragment } from 'react'

const Comentario = ({persona}) => {
  console.log("persona: ", persona);
  return (  
    <Fragment>
      <h1>Comentario</h1>
      <hr />
      <div className="media d-flex">

        <img src={persona.urlImg} className="me-3" alt="prueba" />
        <div className="media-body">
          <h5 className="mt-0">{persona.nombre}</h5>
          {persona.msj}
        </div>

      </div>
    </Fragment>
  );
}
 
export default Comentario;
