import React, { useContext, useState } from 'react';
import './SingeUp.css'
import { Link } from 'react-router-dom';
import { AuthContaxt } from '../../Provider/AuthProvider';

const SingeUp = () => {


  const [error, setError] = useState('')
  const {cerateUser} = useContext(AuthContaxt)
  
  const hendlerlogin =(event) =>{
    // console.log(error)
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confrom = form.confrom.value;
    console.log(email,password,confrom)


    setError(' ')
    if(password !== confrom){
      setError('password not seam your password')
      return
    }

    else if(password.length < 6){
      setError('please set password minimam 6 crecter now')
      return
    }
    
    cerateUser(email, password)

    .then(userCredential =>{
      const createuses = userCredential.user;
      console.log(createuses)
    })

    .catch(error => {
      setError(error.message)
    })

  }
    return (
      <form onSubmit={hendlerlogin}>
      <div className='from-container'>
      <h4 className='from-title'>SingeUp</h4>
     <div className='from-info'>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" placeholder='please type your email' required/>
      </div>
      <div className='from-info'>
        <label htmlFor="password">passwrod</label>
        <input type="password" name="password" id="password" placeholder='please type your password' required/>
      </div>
      <div className='from-info'>
        <label htmlFor="confrom">confrom passwrod</label>
        <input type="passwrod" name="confrom" id="confrom" placeholder='please type your password' required/>
      <p>{error}</p>
      </div>
     <input className='btn-submit' type="submit" value='singe up' />
     <p className='anather-option'><small>alrady have an accounts? <Link to="/login">login</Link></small></p>
    </div>
     </form>
    );
};

export default SingeUp;