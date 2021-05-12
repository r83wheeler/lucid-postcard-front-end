import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function SignIn(props) {
    const [formData, setFormData] = useState({
        'password': '',
        'username': ''
    })
    
    const [token, setToken] = useState("");
    const history = useHistory()

    const handleChange = (e) => {
        setFormData(previousState => (
            {
                ...previousState,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password.length < 8) {
            console.log('not good enough, bud')
        } else {
            formData.client_id = 2;
            formData.client_secret='EP9jhyKm3FGFCaveKzpsBnF9n1C1Yz0lYa256prl';
            formData.grant_type='password';
            formData.scope='';
            const apiURL = 'https://lucid_postcard-r83wheeler94967.codeanyapp.com/oauth/token'
            axios.post(apiURL, formData)
                .then(response => {
                    setToken(response.data.access_token)
                    props.setTkn(response.data.access_token);
                    console.log(response)
                    history.push('/buildpage')
                    //save token
                    //user:story push to Dashboard
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }



    return (

        <div className="container">
            <form className="row g-3 mx-4 mt-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label 
                    for="inputEmail" 
                    className="form-label">Email
                    </label>

                    <input 
                    name='username'
                    onChange={handleChange}
                    type="email" 
                    className="form-control" 
                    id="inputEmail4">
                    </input>
                </div>

                <div className="col-md-6">
                    <label 
                    for="inputPassword4" 
                    className="form-label">Password
                    </label>

                    <input 
                    name='password'
                    onChange={handleChange}
                    type="password" 
                    className="form-control" 
                    id="inputPassword4">
                    </input>

                </div>

                <div className="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}
