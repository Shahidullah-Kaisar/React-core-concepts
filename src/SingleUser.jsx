import React from 'react'

const SingleUser = ({singleUser}) => {
    
  return (
    <div className='box'>
      <h2>Name: {singleUser.name}</h2>
      <h2>Email: {singleUser.email}</h2>
    </div>
  )
}

export default SingleUser
