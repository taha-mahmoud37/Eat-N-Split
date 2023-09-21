import React from 'react'

const Button = ({children, handelShowAddFriend}) => {
  return (
    <button className='button' onClick={handelShowAddFriend}>
      {children}
    </button>
  )
}

export default Button
