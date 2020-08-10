import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from './Firebase'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event =>{
        event.preventDefault(); // stops the refresh
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {

            history.push('/');
        })
        .catch( e => alert(e.message));
    }

    const register = event => {
        event.preventDefault(); // stops the refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push('/');
        })
        .catch( e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                    src="//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/120px-Amazon.com-Logo.svg.png"
                />
                
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signIn">Sign In</button>
                    <p>En continuant, vous acceptez les conditions 
                    d'utilisation et la notice Protection de vos 
                    informations personnelles d'Amazon.</p>
                    <button onClick={register} className="login_create">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
