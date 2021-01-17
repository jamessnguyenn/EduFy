import { useEffect, useState } from "react";
import "./signUp.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  );
 const[firstName, setFirstName] = useState('');
 const[lastName, setLastName] = useState('');
 const[email, setEmail] = useState('');
 const[location, setLocation] = useState('');
 const[password, setPassword] = useState('');

const[disabled, setDisabled] = useState(true);
const[passwordError, setPasswordError] = useState(false);
const[emailError, setEmailError] = useState(false);
const history = useHistory();

const changeFirstName = (e)=> {
  setFirstName(e.target.value);
  enableButton();
}
const changeLastName = (e)=> {
  setLastName(e.target.value);
  enableButton();
}

const changeEmail = (e)=> {
  setEmail(e.target.value);
  enableButton();
  setEmailError(!validEmailRegex.test(e.target.value));
}

const changePassword = (e)=> {
  setPassword(e.target.value);
  setPasswordError(e.target.value.length<8);
  enableButton();
  
}

const changeLocation = (e)=> {
  setLocation(e.target.value);
  
}

const submit = (e)=>{
  e.preventDefault();

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    location: location,
    password: password
  }
  axios.post('https://edufy-api.herokuapp.com/users', user)
  .then((res)=>{
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user_id', res.data.user_id);
   history.push('/profile')
  })
  .catch(err => console.log(err));

}

useEffect(()=>{
  enableButton();

}, [firstName, lastName, password, location])

const enableButton = ()=>{
  if(!firstName.trim() ||!lastName.trim() || !email.trim() || password.length<8 || !password.trim() || !location.trim() || !validEmailRegex.test(email) ){
    setDisabled(true);
  }else{
  setDisabled(false);
  }
}


  return (
    <div className="signUp">
        
      <div className="signUp-container">
        <form action="" className="signUp-form" onSubmit ={submit}>
          <h1 className="signUp-title">Welcome to Edufy!</h1>
          <div className="signUp-form-fields">
            <div className="signUp-nameFields">
              <div className="firstName-field">
                <label className="form-label">First Name</label>
                <input type="text" placeholder="Sean" className="field" name="firstName" onChange={changeFirstName}/>
              </div>
              <div className="lastName-field">
                <label className="form-label">Last Name</label>
                <input type="text" placeholder="Howell" className="field" onChange={changeLastName}/>
              </div>
            </div>

            <div className="email-field">
              <label className="form-label">Email</label>
              <input type="email" placeholder="simon.cowell@gmail.com"  className={emailError? "field-Error": "field"} name="email" onChange={changeEmail}/>
              
            </div>

            <div className="password-field">
              <label className="form-label">Password</label>
              <input type="password" className={passwordError? "field-Error": "field"} min="8" placeholder="8 Character Minimum" name="password" onChange={changePassword}
              />
            </div>
            <div className="location-field">
              <label className="form-label">Location</label>
              <input type="location" placeholder="San Jose, CA"className="field" name="location" onChange={changeLocation}
              />
            </div>
            <div className="submit-btn-container">
              <input type="submit" value="Join Now" className="register-button" disabled={disabled}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}
export default SignUp;