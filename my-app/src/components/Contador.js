import React,{ useState, Fragment } from 'react';

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
  }

  return ( 
    <Fragment>
      <h3>Mi contador: { numero }</h3>
      <button onClick={aumentar}>Aumentar</button>
    </Fragment>

  );
}
 
export default Contador;