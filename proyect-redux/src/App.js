import { createStore, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk'; // Asegúrate de importar thunk sin usar "default"
import rootReducer from './Redux/store'; // Importa tu rootReducer (ajusta la ruta si es necesario)

// Configuración para Redux DevTools y composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generarStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default generarStore;
