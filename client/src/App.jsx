import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATHS } from './utils/paths'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
       <Route path={PATHS.HOME} element={<Home />} />
       <Route path={PATHS.SIGNUP} element={<SignUp />} />
       <Route path={PATHS.LOGIN} element={<Login />} />
    </Routes>
  )
}

export default App