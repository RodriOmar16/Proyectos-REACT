import React from 'react'
import {  BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='btn-group mt-2'>
          <NavLink to="/" className='btn btn-dark' activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className='btn btn-dark' activeClassName="active">
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className='btn btn-dark' activeClassName="active">
            Contacto
          </NavLink>
        </div>
        <hr/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
