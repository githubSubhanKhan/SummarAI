import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();

    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the username from localStorage
        localStorage.removeItem('username');
        
        // Redirect to the login page without refreshing the page
        navigate('/login');
    };

    const isLoggedIn = localStorage.getItem('username') !== null;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <div class="d-flex">
                        {isLoggedIn && (
                        <button 
                            className="btn btn-outline-primary" 
                            type="button" 
                            onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
