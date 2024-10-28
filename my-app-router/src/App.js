import React from 'react'
import {  BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import UnUsuario from './components/UnUsuario';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='btn-group mt-2'>
          <NavLink to="/" className= {({ isActive }) => `btn btn-dark ${isActive ? 'active' : ''}`} >
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => `btn btn-dark ${isActive ? 'active' : ''}`}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => `btn btn-dark ${isActive ? 'active' : ''}`}>
            Contacto
          </NavLink>
        </div>
        <hr/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path='/nosotros/:id' element={<UnUsuario/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
