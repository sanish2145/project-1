import React from 'react'
import RegistrationForm from './Components/Registrationform'
import Navbar from './Components/Navbar'
import Create from './Components/Login'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Create/>
      <RegistrationForm/>
      
    </div>
  )
}

export default App
