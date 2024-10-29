import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import pokeReducer from './pokeDucks'

const rootReducer = combineReducers({
  pokemones: pokeReducer
});

// Configuración para Redux DevTools y composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generarStore(){
  const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) )
  return store;
}
