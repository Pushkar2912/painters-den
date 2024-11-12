import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const Home = () => {

  const { handleLogout } = useContext(AuthContext);
  return (
    <div>
      Home
      <button onClick={handleLogout} className='p-2 bg-blue-400 text-slate-100 rounded-md font-medium'>Logout</button>
    </div>
  )
}

export default Home