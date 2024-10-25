import React from 'react';
import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';

function App() {
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
      
    </div>
  );
}

export default App;
