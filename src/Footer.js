
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (

        <footer className="footer mt-auto py-3 bg-light lead">
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-4">
                        <Link to="/aboutUs" className="btn btn-secondary btn-lg" >About Us</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/" className="btn btn-secondary btn-lg" >Home</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/tutorial" className="btn btn-secondary btn-lg" >Tutorial</Link>
                    </div>
                </div>
            </div>
            {/* <div class="card text-center">
    <div class="card-header">
        Featured
    </div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
        2 days ago
    </div>
</div> */}
        </footer>


    )
}



