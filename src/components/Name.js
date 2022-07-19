import React, { useContext } from 'react'
import { useAuth } from '../context/AuthContext'
const Name = () => {
  const { user } = useAuth()
  return (

    <strong>{user}</strong>

  )
}

export default Name
