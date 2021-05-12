import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import address from "./images/address.jpg";
import postcard1 from "./images/beachFamily.jpg";
import postcard2 from "./images/skydive.jpg";
import postcard3 from "./images/seychelles.jpg"
import axios from 'axios';
import { Route } from 'react-router';
import { useHistory } from 'react-router-dom';
import "./Buildpage.css";

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
    ${'' /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4; */}
    padding: 1rem 2rem;
    order: ${(reverse) => (reverse ? '2' : '1')};

    img {
        width: 40%;
        height: 20%;
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



const Buildpage = (props) => {
    const history = useHistory()
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
    const apiURL = "https://lucid_postcard-r83wheeler94967.codeanyapp.com";
    const route = "/api/postcards/create";

    const modalHeight = { height: '100px' };
    const handlePostcardSubmit = () => {
        //handle the submit
        //make an axios call 
        let data = {
            message:message,
            postcardImage:image,
            address1:address1,
            address2:address2,
            city:city,
            state:state,
            zip:zip
        };
        let headers = {
            "Accept":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${props.token}`
        };
        let method = "post";

        axios({
            method,
            url:apiURL + route,
            data,
            headers
        })
        .then(response => function (response){
            alert("You created a Post Card");
            history.push("/home");
            
        })
        .catch(error =>  {return error});

    };
    return (
        <Section>
            <Container>

                <ColumnLeft>

                    <div className="imageContainer mb-2">
                        <label for="postcardImage" className="form-label">Select Image</label>
                        <br />
                        <input type="radio" id="postcard1" name="postcardImage" value="1" onChange={(e) => setPostcardImage(e.target.value)}></input>
                        <label for="postcard1">One</label>
                        <br />
                        <img src={postcard1}></img>
                        <br />
                        <input type="radio" id="postcard2" name="postcardImage" value="2" onChange={(e) => setPostcardImage(e.target.value)}></input>
                        <label for="postcard2">Two</label>
                        <br />
                        <img src={postcard2}></img>
                        <br />
                        <input type="radio" id="postcard3" name="postcardImage" value="3" onChange={(e) => setPostcardImage(e.target.value)}></input>
                        <label for="postcard3">Three</label>
                        <br />
                        <img src={postcard3}></img>

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
                                                    <option>Kentucky</option>
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
