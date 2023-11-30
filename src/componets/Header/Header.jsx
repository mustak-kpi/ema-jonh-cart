import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContaxt } from '../../Provider/AuthProvider';

const Header = () => {
  const {user,logeout} = useContext(AuthContaxt)
  const heandler =()=>{
    logeout()
    .then(result =>{

    })
    .catch(error =>{
      console.log(error)
    })
  }
    return (
        <nav className="headerContainers">
          <img src={logo} alt="" />
          <div>
            <Link to="/">order</Link>
            <Link to="/order">Order Review</Link>
            <Link to ="/inventory"> Manage inventory</Link>
            <Link to="/login">login</Link>
            <Link to="/singUp">SingUp</Link>
           {
             
             user && <span className='text-white'>  wellcome{user.email}<button onClick={heandler}>login out</button></span>
           }
          </div>
        </nav>
    );
};

export default Header;