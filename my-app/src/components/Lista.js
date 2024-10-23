import React, {useState, Fragment} from 'react'

const Lista = () => {
  const [array, setArray] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [nro, setNro]      = useState(array[array.length - 1] + 1);

  const agregarElemento = () => {
    setNro(nro + 1);
    setArray([...array,nro])
  }

  return ( 
    <Fragment>
      <h2>Lista: </h2>
      <button onClick={agregarElemento}>Agregar</button>
      {
        array.map( (e,index)=> {
          return <p key={index}> {index} - {e} </p>
        } )
      }
    </Fragment>
  );
}
 
export default Lista;