import React from 'react'
import "./Nav.css";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Lucid Postcard</a>
            <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">                  
                <div className="col-6">
                        <Link to="/register" className="btn btn-secondary btn-sm mx-2" >Sign Up</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/signin" className="btn btn-secondary btn-sm mx-2" >Sign In</Link>
                    </div>
                    
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                </div>
            </div>
        </div>
    </nav>
    );
};
