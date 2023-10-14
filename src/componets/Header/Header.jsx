import React from 'react';
import ('./Header.css')
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="headerContainers">
          <img src={logo} alt="" />
          <div>
            <Link to="/">order</Link>
            <Link to="order">Order Review</Link>
            <Link to ="inventory"> Manage inventory</Link>
            <Link to="login">login</Link>
          </div>
        </nav>
    );
};

export default Header;