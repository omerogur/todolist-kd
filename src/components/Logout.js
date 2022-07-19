import React, { useContext } from 'react'
import Name from './Name'
import   {useAuth}    from '../context/AuthContext'
import { Link } from 'react-router-dom'
const Logout = () => {
    const {logout,user} = useAuth()
  return (
    <div>
        <span>
        <Name />
        <button className='cikis' onClick={logout}> Çıkış</button>
        </span>
      
    </div>
  )
}

export default Logout
