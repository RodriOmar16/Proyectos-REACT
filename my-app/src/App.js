import React from 'react';
import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  const objEjemplo = [
    {
      id: 1,
      nombre: 'r',
    },
    {
      id: 2,
      nombre: 'ro',
    },
    {
      id: 3,
      nombre: 'rod',
    }
  ];

  const persona = {
    nombre: 'Juanito',
    urlImg: 'https://via.assets.so/img.jpg?w=64&h=64&tc=&bg=grey&t=400',
    msj:     'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' 
  }
  
  return (
    <div className='container mt-5'>
      <h1>
        Hola mundo REACT
      </h1>
      <Contador/>
      <hr/>
      <Jsx/>
      <hr/>
      <Lista/>
      <hr/>
      <Formulario/>
      <hr/>
      <FormHook/>
      <hr/>
      <EjemploUno/>
      <hr/>
      <Saludo
        persona={objEjemplo} msj='mundo'
      />
      <Comentario
        persona={persona}
      />
      
    </div>
  );
}

export default App;
