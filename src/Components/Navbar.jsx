import React from 'react';
import MyContainer from './MyContainer';
import logo from "../assets/firebase-logo.png"
import MyMenu from './MyMenu';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-slate-100f py-2 border-b border-b-slate-300'>
            <MyContainer className="flex justify-between items-center">
                <figure>
                    <img src={logo} className='w-[55px]'/>
                </figure>
                <ul className='flex items-center gap-3'>
                    <li><MyMenu to="/">Home</MyMenu></li>
                    <li><MyMenu to="/aboutus">About Us</MyMenu></li>
                    <li><MyMenu to="/profile">Profile</MyMenu></li>
                </ul>

                <button className='bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer'><Link to="/signin">Sign In</Link></button>
            </MyContainer>
            
        </div>
    );
};

export default Navbar;