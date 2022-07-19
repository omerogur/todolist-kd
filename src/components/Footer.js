import React, { useContext } from 'react'
import Logout from './Logout'
import { useSettings } from '../context/SettingContext'
const Footer = () => {

  const { template } = useSettings()

  return (
    <div className='head' style={{
      background: template.bg,
      color: template.color,
      fontSize: template.size
    }}>
      <Logout />

    </div>
  )
}

export default Footer
