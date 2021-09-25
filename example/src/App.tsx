import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import './App.css'
import avatar from './logo.svg'

function App() {
  return (
    <FloatingWhatsApp
      phoneNumber='123456789'
      accountName='awran5'
      allowClickAway
      // avatar={avatar}
      notification
      notificationSound
      notificationDelay={5000}
    />
  )
}

export default App
