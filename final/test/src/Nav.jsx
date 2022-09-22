import React from "react";
import logo from './Style/images/logo1.png';
import './Style/Navbar.css';

function Nav( {setPage} ) {
    
    function navTo(e,target) {
        // e.preventDefault();
        setPage(target);
    }

    return (
        <nav className = "navbar">
            <div className='navbar-container'>
            <img src={logo} alt='logo' className='navbar-logo' />
                <ul className='nav-menu'>
                    <li><a className='nav-item' href="#Home" onClick={ (e) => navTo(e,'Home')} >Home</a></li>
                    <li><a className='nav-item' href="#Protection" onClick={ (e) => navTo(e,'Protection')} >Protection</a></li>
                    <li><a className='nav-item' href="#About" onClick={ (e) => navTo(e,'About')} >About</a></li>
                    <li><a className='nav-item' href="#Privacy" onClick={ (e) => navTo(e,'Privacy')} >Privacy</a></li>
                    <li><a className='nav-item' href="#Sign Up" onClick={ (e) => navTo(e,'Sign Up')} >Sign Up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;