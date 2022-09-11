import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InitialContainer from './InitialContainer'
import SignUpForm from './SignUpForm'
import UploadAvatar from './UploadAvatar'


const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<InitialContainer />}/>
        <Route path='/crearCuenta' element={<SignUpForm />}/>
        <Route path='/setAvatar' element={<UploadAvatar />}/>
        {/*<Route path='' element={}/>
        <Route path='' element={}/> */}
    </Routes>    
  )
}

export default Main