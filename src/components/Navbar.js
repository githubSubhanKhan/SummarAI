import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    let location = useLocation();

    const navigate = useNavigate();

    const handleLogout = () => {
        if (isLoggedIn) {
            // Remove the username from localStorage
            localStorage.removeItem('username');

            setTimeout(() => {
                // Redirect to the login page without refreshing the page
                navigate('/login');
                props.showAlert("Logout successful!", "success")
            }, 2000);
        } else if (onAdminPage) {
            setTimeout(() => {
                navigate('/admin');
                props.showAlert("Logout successful!", "success")
            }, 2000);
        }

    };

    const handleAdminClick = () => {
        navigate('/admin');
    }

    const handleSignupClick = () => {
        navigate('/signup')
    }

    const handleLoginClick = () => {
        navigate('/login')
    }

    const isLoggedIn = location.pathname === '/home'
    const onLoginPage = location.pathname === '/login'
    const onSignupPage = location.pathname === '/signup'
    const onAdminPage = location.pathname === '/adminhome'
    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about';
    const isAdminLoginPage = location.pathname === '/admin';

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">SummarAI</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {(isHomePage || isAboutPage || isAdminLoginPage) &&
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                </li>
                            </ul>
                        }
                        <div className="d-flex ms-auto">
                            {(isLoggedIn || onAdminPage) && 
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={handleLogout}>
                                    Logout
                                </button>
                            }
                            {isHomePage && (
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={handleAdminClick}>
                                    Admin
                                </button>
                            )}
                            {onLoginPage && (
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={handleSignupClick}>
                                    Signup
                                </button>
                            )}
                            {onSignupPage && (
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    onClick={handleLoginClick}>
                                    Login
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
