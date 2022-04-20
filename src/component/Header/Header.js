import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../Images/hotel.png'

const Header = () => {
    return (
        <nav className='navbar'>
         <img src={logo} alt="" />
         <div className='navLink'>
         <Link to='/home'>Home</Link>
         <Link to='/review' >Reviews</Link>
         <Link to='/login'>Log in</Link>
         <Link to='/Signup'><button className='btn'>Sign up</button></Link>
         <Link to='/checkout'></Link>
         </div>
        </nav>
    );
};

export default Header;