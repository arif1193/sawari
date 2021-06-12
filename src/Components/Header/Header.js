import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1 style={{height:"10px"}}>Sawari</h1>
            </div>
            <div className="navigation">
                <nav>
                    <Link to="/home">Home</Link>

                    <Link to="/login">Login</Link>

                    <Link to="/booked">Booked</Link>
                </nav>
               
            </div>
        </div>
    );
};

export default Header;