import React from 'react'
import './User.css'
const User = (props) => {

  return (
    <div>
      <h1 >Welcome {props.name} ,logged in as as {props.type} as {props.university} In {props.branch}</h1>
    </div>
  )
}

export default User
