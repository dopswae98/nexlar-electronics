import React from 'react'

const Users = () => {
    const data = [
        {id:1, name:'John Doe'},
        {id:2, name:'John Does'},
        {id:3, name:'Johny Doe'},
    ];
  return (
    <div className='users'>
        {data.map((user,i)=>(<div key={i}>
            <p>{user.name}</p>
            </div>))}
    </div>
  )
}

export default Users;