import React from 'react'
import Fields from '../components/custom/Fields'
import painterDenImage from '../assets/painterDenSignUpImage.jpg'


const SignUp = () => {
    return (

        <div className='flex'>
            <div className='w-[50%]'>
                <img src={painterDenImage} className='max-h-screen h-full w-full' />
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <form className='w-full p-4 flex flex-col gap-8'>
                    <p className='mainText flex justify-center items-center font-bold text-4xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>PaintersDen</p>
                    <div className='flex flex-col gap-3'>
                        <Fields>
                            <label className='text-sm'>Name</label>
                            <input className='border border-gray-300 p-2 rounded-md' type="text" />
                        </Fields>
                        <Fields>
                            <label className='text-sm'>E-mail</label>
                            <input className='border border-gray-300 p-2 rounded-md' type="text" />
                        </Fields>
                        <Fields>
                            <label className='text-sm'>Password</label>
                            <input className='border border-gray-300 p-2 rounded-md' type="password" />
                        </Fields>
                    </div>
                    <button className='bg-blue-500 text-slate-100 font-medium w-full rounded-md p-2' type='submit'>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default SignUp