import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Auth(props) {
    const [formData, setFormData] = useState({})
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
            const apiURL = 'https://lucid_postcard-r83wheeler94967.codeanyapp.com/api/register'
            axios.post(apiURL, formData)
                .then(response => {
                    console.log(response)
                    history.push('/home')
                    //save token
                    //user:story push to Dashboard
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    console.log(formData)
    //set up form validation
    //set up error handling from API
    return (

        <div className="container">
            <div className="row mx-4  max width: 100px mt-4">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label for="exampleInputUsername" className="form-label">Username</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="exampleInputUsername"
                            onChange={handleChange}
                            value={formData.name || ''}
                        />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={formData.email || ''}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={handleChange}
                            value={formData.password || ''}

                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        </div>
    )
}



