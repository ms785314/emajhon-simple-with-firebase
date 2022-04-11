import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const location = useLocation;
    const from = location.state?.from?.pathname || '/';
    
    // let from = location.state?.from?.pathname || "/";

    console.log('from',from);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [email, setEmail] = useState('')
      const [pass, setPass] = useState('')



      const navigate = useNavigate();
      const getEmail = event => {
          setEmail(event.target.value);
      }
      if(user){
          console.log(user);
          navigate(from);
      }
      if(error){
          console.log(error);
      }
      const getPass = event => {
          setPass(event.target.value);
      }

      const handleSignIn = (event) => {
        event.preventDefault();
        console.log('signing in');
        signInWithEmailAndPassword(email,pass)
      }
    return (
        <div>
            
            <div className="w-[420px] mx-auto shadow-lg">
                <form onSubmit={handleSignIn} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input onBlur={getEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" required placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input onBlur={getPass} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        {
                            loading && <p>Loading...</p>
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                    </div>
                    <h2 className='mt-2'>Or</h2>
                    <div className="flex items-center justify-between my-3">
                        <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  to='/signup'> Create Account</Link>
                    </div>
                    
                </form>
                
            </div>
        </div>
    );
};

export default Login;