import React from 'react'

const User = ({avatar, name, email}) => {
  return (
    <div>
      <img src={avatar} alt="" />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default User
