import React, { createContext, useEffect, useState } from 'react'
import { getMe, logIn, signUp } from '../api/auth'
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
      window.location.reload();
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleLogout = async() => {
    try {
      localStorage.removeItem('token');
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }
   
  useEffect(() => {
    getMe().then(({data}) => {
      setUser(data.user);
      console.log("data from useEffect", data)
      navigate(PATHS.HOME);
    }).catch((error) =>{
      console.log(error.message)
      navigate(PATHS.LOGIN)
    })
  },[])

  const values = {
    user,
    handleSignUp,
    handleLogin,
    handleLogout
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider