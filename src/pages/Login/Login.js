import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
   const [name, setName] = useState('');
         const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');
         const [error, setError] = useState('');
         const [isLogin, setIsLogin] = useState(false);
         const { signInUsingGoogle,registerWithEmailPassword,loginWithEmailPassword } = useAuth();


         const handleNameChange = e => {
         setName(e.target.value);
         }
         const handleEmailChange = e => {
         setEmail(e.target.value);
         }
         const handlePasswordChange = e => {
         setPassword(e.target.value);
         }
         const handleRegistration = e => {
         e.preventDefault();
         if (password.length < 6) {
         setError('password must be 6 characters');
         return;
         }
         isLogin ? registerWithEmailPassword(name, email, password) : loginWithEmailPassword(email, password);
         }
         const toggoleLogin = e => {
         setIsLogin(e.target.checked);
         }
   
   return (
      <div className="mt-5 pt-5 login-container"> 
         <h2>Please {!isLogin ? 'Login' : 'Register'}</h2>
         <form onSubmit={handleRegistration} className="login-container">
         {isLogin && <div><input type="text" name="name" placeholder="Enter Your Name" onBlur={handleNameChange} required /><br /></div>}
         <input type="email" name="email" placeholder="Enter Your Email" onBlur={handleEmailChange} required /><br />
         <input type="password" name="password" placeholder="Enter Your Password" onBlur={handlePasswordChange} required /><br />
         {error}<br />
         <button type="submit" >{!isLogin ? 'Login' : 'Register'}</button><br /></form>
         <p>Create a new account <input type="checkbox" onChange={toggoleLogin} /></p>
         <button onClick={signInUsingGoogle}>Google Login</button>
      </div>
   );
};

export default Login;