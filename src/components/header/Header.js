import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inverntory</Link>
                <Link to="/about">About</Link>
                {
                    user?<Link to="/login">Log Out</Link> :<Link to="/login">Log in</Link>
                }
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;