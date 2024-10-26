import React, { Fragment } from 'react'

const Saludo = (...props) => {
  console.log("props: ", props);

  return ( 
    <Fragment>
      <h2>Hola! {props[0].msj}</h2>
    </Fragment>
  );
}
 
export default Saludo;