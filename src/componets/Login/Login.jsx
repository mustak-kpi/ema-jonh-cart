import React, { useContext, useState } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { AuthContaxt } from '../../Provider/AuthProvider';


const Login = () => {
  const [show , setshow] = useState(false)
  const { singeIn} = useContext(AuthContaxt)
  const Nevaget = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/'
console.log(location)
    const hendlerlogin = (event) =>{
      event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


    singeIn(email, password)
    .then(result =>{
      const loguser = result.user;
      console.log(loguser)
      form.reset();
      Nevaget(from, {replace: true}) 
    }) 
    .catch(error => { 
       console.log(error)
    })
    }
    return (
            <form onSubmit={hendlerlogin}>
        <div className='from-container'>
        <h4 className='from-title'>login</h4>
       <div className='from-info'>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" placeholder='please type your email' required/>
        </div>
        <div className='from-info'>
          <label htmlFor="passwrod">passwrod</label>
          <input type={show ? 'text' : 'password'} name="passwrod" id="password" placeholder='please type your password' required/>
          <p onClick={()=>{setshow(!show)}}><small>
              {
                show ? <span>Heid password</span> : <span>show password</span>
              }
              </small></p>
        </div>
       <input className='btn-submit' type="submit" value='login' />
       <p className='anather-option'><small>new to ema john? <Link to="/singUp">create a new account</Link></small></p>
      </div>
       </form>
      );
};

export default Login;