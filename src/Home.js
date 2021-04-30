import React from 'react';

export default function Home() {
    return (


        <div className="row g-0">
            <div className="card mx-4 my-4 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col-md-4 d-flex">
                    <img src='../images/Detroit338x253.jpg' alt="JoeLouis" />
                    <img src='../images/backOfPostcard.jpg' alt="back" />
                </div>
                <div className="col-md-8">
                    <div className="card-body float-end">
                        <h5 className="card-title">Create your own custom postcards</h5>
                        <p className="card-text">You have the ability to send your own photos as postcards to whomever you choose. </p>
                        <p className="card-text"><small class="text-muted">Quick and easy to do!</small></p>
                        <button type="button" class="btn btn-secondary btn-lg">Build a Postcard</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

