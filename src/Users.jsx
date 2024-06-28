import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SingleUser from './SingleUser';

const Users = () => {

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUser(data))
    },[])

  return (
    <>
        <h2>Users: {user.length}</h2>
        <div className='main-div'>
        {
            user.map(loop=> <SingleUser singleUser={loop}></SingleUser>)
        }
        </div>
    </>
    
  )
}

export default Users
