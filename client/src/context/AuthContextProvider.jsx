import React, { createContext, useState } from 'react'
import { logIn, signUp } from '../api/auth'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../utils/paths';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSignUp = async (values) => {
    try {
      const { data } = await signUp(values);
      console.log(data);
      
      navigate(PATHS.LOGIN);

    } catch (error) {
      console.log(error.message);
    }
  }

  const handleLogin = async (values) => {
    try {
      const { data } = await logIn(values);
      setUser(data.userWithoutPassword);
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.log(error.message)
    }
  }

  const values = {
    handleSignUp,
    handleLogin
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider