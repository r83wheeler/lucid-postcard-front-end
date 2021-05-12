import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import picture from "./images/insertImage.jpg";
import address from "./images/address.jpg";
import axios from 'axios';
import { Route } from 'react-router';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vh - 1300px) /2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${(reverse) => (reverse ? '2' : '1')};

    img {
        width: 60%;
        height: 50%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 30%;
            height: 30%;
        }
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${(reverse) => (reverse ? '2' : '1')};

    img {
        width: 60%;
        height: 50%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 30%;
            height: 30%;
        }
    }
`;



const Buildpage = () => {
    // save the essage
    // save the address
    // upload the image
    // submit the message, address, and image to the route "postcards/create"
    const [image, setPostcardImage] = useState({});
    const [message, setPostcardMessage] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const token = "";
    const apiURL = "https://lucid_postcard-r83wheeler94967.codeanyapp.com";
    const route = "/api/postcards/create";

    const modalHeight = { height: '100px' };
    const handlePostcardSubmit = () => {
        //handle the submit
        //make an axios call 
        axios({
            method:"post",
            url:apiURL + route,
            data:{
                message:message,
                postcardImage:image,
                address1:address1,
                address2:address2,
                city:city,
                state:state,
                zip:zip
            },
            headers:{
                "Accept":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }
        })
        .then(response => function (response){
            alert("You created a Post Card");
        })
        .catch(error =>  {return error});
    };
    return (
        <Section>
            <Container>

                <ColumnLeft>

                    <img src={picture} alt="insertImage" />
                    <div class="mb-3">
                        <label for="postcardImage" class="form-label">Choose Image</label>
                        <input class="form-control" type="file" id="postcardImage" name="postcardImage" onChange={(e) => setPostcardImage(e.target.value)}/>
                    </div>

                </ColumnLeft>
                    <ColumnRight>

                        {/*-- Button trigger modal -*/}
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#messageModal">
                            Enter Message
                        </button>

                        {/*-- Modal */}
                        <div className="modal fade" id="messageModal" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="messageModalLabel">Enter message</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={modalHeight} onChange={(e) => setPostcardMessage(e.target.value)}></textarea>
                                            <label for="floatingTextarea2">Message</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={address} alt="address" />
                        {/*-- Button trigger modal -*/}
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addressModal">
                            Enter Address
                        </button>

                        {/*-- Modal */}
                        <div className="modal fade" id="addressModal" tabindex="-1" aria-labelledby="addressModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addressModalLabel">Enter address</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">

                                        <form className="row g-3">
                                            <div className="col-md-6">
                                                <label for="inputName4" className="form-label">Name</label>
                                                <input type="name" className="form-control" id="inputName4" />
                                            </div>
                                            <div className="col-12">
                                                <label for="inputAddress" className="form-label">Address</label>
                                                <input type="text" className="form-control" id="inputAddress" onChange={(e) => setAddress1(e.target.value)} placeholder="1234 Main St" />
                                            </div>
                                            <div className="col-12">
                                                <label for="inputAddress2" className="form-label">Address 2</label>
                                                <input type="text" className="form-control" id="inputAddress2" onChange={(e) => setAddress2(e.target.value)} placeholder="Apartment, studio, or floor" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="inputCity" className="form-label">City</label>
                                                <input type="text" className="form-control" id="inputCity" onChange={(e) => setCity(e.target.value)} />
                                            </div>
                                            <div className="col-md-4">
                                                <label for="inputState" className="form-label">State</label>
                                                <select id="inputState" className="form-select" onChange={(e) => setState(e.target.value)}>
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label for="inputZip" className="form-label">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" onChange={(e) => setZip(e.target.value)} />
                                            </div>


                                            <div className="col-12">
                                                <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal">Enter</button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <button onClick={(e) => handlePostcardSubmit()} type="button" className="btn btn-primary">Create Postcard</button>
                    </ColumnRight>
            </Container>
        </Section>
    )
}

export default Buildpage;
