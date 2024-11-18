import React, { useContext, useState } from 'react'
import Fields from '../../components/custom/Fields'
import painterDenImage from '../../assets/painterDenSignUpImage.jpg'
import { AuthContext } from '../../context/AuthContextProvider';
import { Link } from 'react-router-dom';

const LoginBox = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { handleLogin } = useContext(AuthContext);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            email,
            password
        }
        handleLogin(values);
    }
    return (
        <div className='flex'>
            {/* <div className='w-[50%]'>
                <img src={painterDenImage} className='max-h-screen h-full w-full' />
            </div> */}
            <div className='w-full h-screen flex-1 flex items-center justify-center'>
                <div className='w-[55vh] p-6 flex flex-col bg-gray-200 bg-opacity-80 border border-gray-300 rounded-lg shadow-lg '>
                    <p 
                    className='mainText flex justify-center mb-5 items-center font-bold text-[2.7rem] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...
                    hover:bg-gradient-to-r hover:from-emerald-500 hover:via-sky-500 hover:to-indigo-500'>
                        PaintersDen
                    </p>
                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                        <Fields>
                            <input 
                            placeholder='xyz@gmail.com' 
                            className='border border-gray-300 p-2 rounded-md mb-3' 
                            type="text" 
                            value={email} 
                            onChange={handleEmailChange} 
                            />
                        </Fields>
                        <Fields>
                            
                            <input 
                            placeholder='Enter Password' 
                            className='border border-gray-300 p-2 rounded-md mb-3' 
                            type="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            />
                        </Fields>
                        <button className='bg-blue-500 text-slate-100 font-medium w-full rounded-md p-2 mb-3' type='submit'>Submit</button>
                        
                        <div className="w-full flex items-center justify-center">
                            <div className="w-[75%] flex justify-center items-center opacity-80">
                                <div className="border-t border-solid border-gray-500 mb-3 w-full"></div>
                            </div>
                        </div>

                        <Link to='/sign-up'>
                            <button className='bg-blue-600 text-slate-100 font-medium w-full rounded-md p-2 mb-3' type='submit'>New User? Sign Up</button>
                        </Link>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginBox