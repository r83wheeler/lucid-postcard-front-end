import React from 'react';
import picture from "./images/insertImage.jpg";
import address from "./images/address.jpg";

const Buildpage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="clearfix">
                    <img src={picture} class="col-md-4 float-md-start mt-5 mb-3 ms-md-3" alt="insertImage"/>
                    <img src={address} class="col-md-4 float-md-end mt-5 mb-3 ms-md-3" alt="address"/>
                </div>
            </div>
            
        </div>
    )
}

export default Buildpage;
