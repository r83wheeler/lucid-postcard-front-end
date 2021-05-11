import React from 'react';
import styled from 'styled-components';
import picture from "./images/insertImage.jpg";
import address from "./images/address.jpg";

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

    const modalHeight={height: '100px'};
    return (
        <Section>
            <Container>

                <ColumnLeft>

                    <img src={picture} alt="insertImage" />

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
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={modalHeight}></textarea>
                                        <label for="floatingTextarea2">Message</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save message</button>
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
                                        <div class="col-md-6">
                                            <label for="inputName4" class="form-label">Name</label>
                                            <input type="name" class="form-control" id="inputName4" />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputAddress" class="form-label">Address</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                        </div>
                                        <div class="col-12">
                                            <label for="inputAddress2" class="form-label">Address 2</label>
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputCity" class="form-label">City</label>
                                            <input type="text" class="form-control" id="inputCity" />
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputState" class="form-label">State</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <label for="inputZip" class="form-label">Zip</label>
                                            <input type="text" class="form-control" id="inputZip" />
                                        </div>


                                        <div class="col-12">
                                            <button type="submit" class="btn btn-secondary">Enter</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save address</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Buildpage;
