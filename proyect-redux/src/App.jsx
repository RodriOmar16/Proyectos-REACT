import React from 'react'
import Pokemones from './components/Pokemones';
import {Provider} from 'react-redux'
import generarStore from './Redux/store';

function App(){

  const store = generarStore();

  return(
    <Provider store={store}>
      <Pokemones/>
    </Provider>
  );
}

export default App;