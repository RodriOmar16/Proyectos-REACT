import React, {Fragment} from 'react'

const TableUser = (props) => {
  //console.log(props)

  //methods

  //Estructura
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
        { props.users.length > 0 ?
          props.users.map((e)=>( 
            <tr key={e.id}>
              <th>{e.name}</th>
              <th>{e.username}</th>
              <th>
                <button className='button muted-button me-2' onClick={() => props.editarUser(e)}>Edit</button>
                <button className='button muted-button' onClick={() => {props.borrarUser(e.id)}} >Delete</button>
              </th>
            </tr>  //<p key={index}> {index} - {e} </p>
          ))
          : <tr>
              <th colSpan={3}>No hay datos</th>
            </tr>
        }
        </tbody>
      </table>
    </Fragment>
  );
}
 
export default TableUser;