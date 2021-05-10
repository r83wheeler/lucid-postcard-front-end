import React from 'react';
import skydive from './images/skydive.jpg';
import beachFamily from './images/beachFamily.jpg';
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="container justify-content-center">
            <div className="row mx-4 mt-4">
                <div className="col">
                    <h1>We want to help you connect with your family and friends!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 md-6">
                    <img src={skydive} className="rounded float-start w-50 h-100 " alt="skydive" />
                </div>
                <div className="col-sm-6 md-6">
                    <img src={beachFamily} className="rounded float-end w-50 h-100" alt="beachFamily" />
                </div>
                <div className="row mx-4">
                    <h1>Sending postcards has never been easier!</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
