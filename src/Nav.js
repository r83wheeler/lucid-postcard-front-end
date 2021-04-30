import React from 'react'
import "./Nav.css";

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
                    <a className="nav-link active" aria-current="page" href="#">Get the App</a>
                    <a className="nav-link" href="#">Sign Up</a>
                    <a className="nav-link" href="#">Sign In</a>
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                </div>
            </div>
        </div>
    </nav>
    )
}
