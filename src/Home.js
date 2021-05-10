import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import front from './images/Detroit338x253.jpg';
import back from './images/backOfPostcard.jpg';

export default function Home() {
    const [postcards, setPostcards] = useState([]);
    useEffect(() => {
        const apiURL = 'https://lucid_postcard-r83wheeler94967.codeanyapp.com/api/postcards/all'
        axios.get(apiURL)
            .then(response => {
                console.log(response)
                setPostcards(response.data)
                //save token
                //user:story push to Dashboard
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const mappedPostcards = postcards.map((postcard, index) => {
        return (
            <div key={index}>
                {postcard.label}

            </div>
        )
    })
    console.log(postcards);

    return (


        <div className="row g-0 justify-content-center">
            <div className="col-md-10">
                <div className="card  my-4 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="col-md-4 d-flex">
                        <img src={front} alt="JoeLouis" />
                        <img src={back} alt="back" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body float-end">
                            <h5 className="card-title">Create your own custom postcards</h5>
                            <p className="card-text">You have the ability to send your own photos as postcards to whomever you choose. </p>
                            <p className="card-text"><small class="text-muted">Quick and easy to do!</small></p>
                            <Link to="/create" className="btn btn-secondary btn-lg">Build a Postcard</Link>
                        </div>
                    </div>
                </div>
                <div className="postcards">
                    {mappedPostcards}
                </div>
            </div>
        </div>
    );
};

