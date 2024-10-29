import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion,siguientePokemonAccion } from '../Redux/pokeDucks';

const Pokemones = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector(store => store.pokemones.array)

  console.log(pokemones)

  return (
    <div>
      Lista de pokemones
      <button onClick={() => dispatch(obtenerPokemonesAccion())}>
        Get Pokemones
      </button>
      <button onClick={() => dispatch(siguientePokemonAccion(20))}>
        Siguiente
      </button>
      <ul>
        {
          pokemones.map((e,index) => (
            <li key={index}>{e.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pokemones
