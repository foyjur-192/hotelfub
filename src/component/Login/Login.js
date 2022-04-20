import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword (auth);
      const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail (event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
  
     if (user) {
         navigate('/home')
     }
 
   
    const handleUserSignIn = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    return (

       

        <div className='form-container'>
             <Helmet>
             <title>Logo</title>
           </Helmet>
        <div>
        <h2 className='form-title' >Login</h2>
        <form onSubmit={handleUserSignIn} >
        <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>

            <div className="input-group">
                <label htmlFor='Password'>Password</label>
                <input onBlur={handlePasswordBlur}  type="password" name="password" id="" required/>
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            {
                loading && <p>Loading</p>
            }
            <input className='form-submit' type="submit" value="Log in" />
        </form>
       <p>
           HotelFUB <Link className='form-link' to="/signup">Create an Account</Link>
           
       </p>

      <div className='line-container'>
    <div className='line-one'></div>
    <div className='line-two'></div>
      </div>


        </div>
          
        </div>
    );
};

export default Login;