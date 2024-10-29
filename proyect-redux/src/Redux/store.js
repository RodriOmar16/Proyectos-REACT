import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import pokeReducer from './pokeDucks'

const rootReducer = combineReducers({
  pokemones: pokeReducer
});

export default function generarStore(){
  const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) )
  return store;
}
