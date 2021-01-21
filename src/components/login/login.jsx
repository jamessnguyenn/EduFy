import { useEffect } from 'react';
import { useState } from 'react';
import './login.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(false);
    const history = useHistory();

    const [redirect, setRedirect] = useState(false);
    useEffect(() =>{
        if(localStorage.getItem('user_id') && localStorage.getItem('token')){
           setRedirect(true);
        }
    },[])
    
    if(redirect){
        history.push('/profile');
    }

    useEffect(()=>{
        checked();
    }, [email, password])


    const checked = ()=>{
        if(!email.trim() || !password.trim()){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
    }
    function emailChange(e) {
        setError(false);
        setEmail(e.target.value);
    }

    function passChange(e) {
        setError(false);
        setPassword(e.target.value);
    }
    function handleLogin(e) {
        e.preventDefault();
        const user= { email: email, password: password }
        axios.post("https://edufy-api.herokuapp.com/users/auth",user)
        .then(res=>{
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user_id', res.data.user_id);
            history.push('/profile')
        })
        .catch(err =>{ setError(true);  setDisabled(true);})
       
    }

    return(
        <div className = "logIn">
        <div className = "login-container">
            <form className = "login-form" onSubmit={handleLogin}>
                <h1 className = "login-title">Welcome Back</h1>
                <div className = "login-email-field">
                <label className = "form-label">Email</label>
                <input className={error? "login-field-Error": "login-input-field"} type ="text" onChange={emailChange} value={email}/>
                </div>
                <div className = "login-password-field">
                <label className = "form-label">Password</label>
                <input  className={error? "login-field-Error": "login-input-field"} type ="password" onChange={passChange} value={password}/>
                </div>
                <div className = "error-label-container">
               {error && <label className="error-message">Invalid Password or Email</label> }
                </div>
                <div className ="signIn-button-container">
                    
                    <input type ="submit" className = "signin-btn"  disabled={disabled} value="Sign In"/>
                </div>
            <div className = "signUp-label-container">
                <label className="community-label">Don't have an account?</label>
               <a href="/signup"> <label className = "login-signup-label"> Sign Up Now </label> </a>
            </div>
            </form>
        </div>
       
    </div>



    );
}
export default Login;