import React, { useState } from 'react'
import index from './index.css'
import TableUser from './components/Table';
import { v4 as uuidv4 } from 'uuid';
import AgregarEditarUsuario from './components/AgregarEditarUsuario';

function App() {
  //datos
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben',   username: 'benisphere' },
  ];

  //data()
  const [users, setUsers] = useState(usersData);
  let [nuevo, setNuevo]   = useState(true);
  let [userEdit, setUserEdit] = useState({ id: null, name: '',   username: '' });

  //methods
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users,user])
  };
  const borrarUser = (id) => {
    setUsers(users.filter(e => e.id != id))
  };
  const editarUser = (userViejo) => {
    setUserEdit({ id: userViejo.id, name: userViejo.name, username: userViejo.username});
    setNuevo(false);
  };
  const saveUser = (id, nvaData) => {
    setUsers(users.map(e => (e.id === id ? nvaData : e)));
    setNuevo(true);
    setUserEdit({ id: null, name: '',   username: '' })
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <AgregarEditarUsuario accionUser={nuevo? addUser : saveUser} userEdit={userEdit}  nuevo={nuevo} />
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <TableUser users={users} borrarUser={borrarUser} editarUser={editarUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
