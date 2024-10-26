import React, {Fragment} from 'react'

const TableUser = () => {


  return (  
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name data</th>
            <th>UserName data</th>
            <th>
              <button className='button muted-button'>Edit</button>
              <button className='button muted-button'>Delete</button>
            </th>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
 
export default TableUser;