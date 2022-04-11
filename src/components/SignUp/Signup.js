import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState,useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Signup = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
   
    const navigate =useNavigate();
    const getEmail = event => {
        setEmail(event.target.value);
        
    }
    const getPass = event => {
        setPass(event.target.value);
    }
    const getConfirmPass = event => {
        setConfirmPass(event.target.value);
        
    }

    
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    
    if(user){
        navigate('/shop')
    }
    const handleSignUp = event => {
        // console.log('submitted');
        event.preventDefault();
        if(pass !== confirmPass){
            setError('Password not mached')
            return;
        }
        createUserWithEmailAndPassword(email,pass);
    }
    return (
        <div>
            
            <div className="w-[420px] mx-auto shadow-lg">
                <form onSubmit={handleSignUp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input onBlur={getEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input onBlur={getPass} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm
                        </label>
                        <input onBlur={getConfirmPass} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Confirm" type="password" placeholder="******************" />
                        <p className='text-red-600'>{error.length !== 0 && error}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                    </div>
                    <h2 className='mt-2'>Have an Account?</h2>
                    <div className="flex items-center justify-between my-3">
                        <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  to='/login'> Log in</Link>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Signup;