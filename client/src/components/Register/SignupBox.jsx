import React, { useContext, useState } from 'react'
import Fields from '../../components/custom/Fields'

import { AuthContext } from '../../context/AuthContextProvider';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleSignUp } = useContext(AuthContext);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            name,
            email,
            password
        }
       handleSignUp(values);
    }
    return (

        <div className='flex'>
            {/* <div className='w-[50%]'>
                <img src={painterDenImage} className='max-h-screen h-full w-full' />
            </div> */}
            <div className='w-full h-screen flex-1 flex items-center justify-center'>
                <div className='w-[60vh] p-6 flex flex-col bg-gray-200 bg-opacity-80 border border-gray-300 rounded-lg shadow-lg'>
                    <p className='mainText flex justify-center items-center font-bold text-4xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... hover:bg-gradient-to-r hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500
                    border-b-2 border-blue-300 border-opacity-50 pb-5
                    '>PaintersDen</p>
                    
                    <p className='font-bold my-4 text-2xl flex justify-center'>Create New Account</p>
                    
                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                        <Fields>
                            <label className='text-sm font-semibold'>Name</label>
                            <input className='border border-gray-300 p-2 rounded-md' type="text" value={name} onChange={handleNameChange} />
                        </Fields>
                        <Fields>
                            <label className='text-sm font-semibold'>E-mail</label>
                            <input className='border border-gray-300 p-2 rounded-md' type="text" value={email} onChange={handleEmailChange} />
                        </Fields>
                        <Fields>
                            <label className='text-sm font-semibold'>Password</label>
                            <input className='border border-gray-300 p-2 rounded-md' type="password" value={password} onChange={handlePasswordChange} />
                        </Fields>
                        <button className='bg-blue-500 text-slate-100 font-medium w-full rounded-md mt-4 p-2' type='submit'>Submit</button>

                        <div className="w-full flex items-center justify-center">
                            <div className="w-[75%] flex justify-center items-center opacity-80">
                                <div className="border-t border-solid border-gray-500 my-3 w-full"></div>
                            </div>
                        </div>

                        <Link to='/log-in'>
                            <button className='bg-blue-600 text-slate-100 font-medium w-full rounded-md p-2 mb-3' type='submit'>Already an User? Log In</button>
                        </Link>
                    </form>
                    
                </div>
            </div>
        </div>

    )
}

export default SignUp