import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const[user] =useAuthState(auth)
    const handelSignOut =()=>{
        signOut(auth)
    }
    return (
        <div>
            <nav className="header">
                <img src={logo} alt="" />
                <div> 
                    <Link to="/">Home</Link>
                    <Link to="/shop" >Shop</Link>
                    <Link to ="/Orders">Orders</Link>
                    <Link to ="/inventory">Inventory</Link>
                    <Link to ="/about">About us</Link>
                    {
                        user ?
                        <button onClick={handelSignOut} >Sign Out</button>
                        :
                        <Link to='/login'>Login</Link> 
                    } 


                </div>
            </nav>
        </div>
    );
};

export default Header;