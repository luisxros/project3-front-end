import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header(props) {
    return(
        
        <header className="Header">
            <Link to="/"><h1>Find It</h1></Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                    <>
                    <li> <Link to="/dashboard">Dashboard</Link></li>
                     <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
                    <li> <Link to="" onClick={props.handleLogout}>Logout</Link></li>
                    </>
                    :
                    <>
                    <li> <Link to="/signup">Signup</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                    </>
                    }

                </ul>
            </nav>
        </header>
        
    );
}

export default Header;