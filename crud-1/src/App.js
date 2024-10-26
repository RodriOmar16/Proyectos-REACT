import React from 'react'
import index from './index.css'
import TableUser from './components/Table';

function App() {
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <TableUser/>
        </div>
      </div>
    </div>
  );
}

export default App;
