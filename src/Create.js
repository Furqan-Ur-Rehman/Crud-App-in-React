import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const Navigate = useNavigate();

    const InsertData = (e) => {
        e.preventDefault();
        Axios.post('https://68bb3c6584055bce63f17f86.mockapi.io/crud', {
            emp_name: name,
            emp_age: age,
            emp_email: email
        }).then(() => {
            Navigate('/');
        }).catch((error) => {
            alert('Data has not Added!' + error);
        })
    }
    return (
        <>
            <div className='row'>
                <div className="col-md-4 m-auto mt-5 bg-white">
                    <div className='mt-3 mb-2'>
                        <Link to='/'>
                            <button className='btn btn-dark'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-dark p-4 text-center text-white mb-4 createdata'>
                        <h1>CREATE DATA</h1>
                    </div>
                    <form onSubmit={InsertData}>
                        <div className='form-group'>
                            <label className='form-label font-weight-bold'>Enter Name:</label>
                            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} className='form-control mb-3' />
                        </div>
                        <div className='form-group'>
                            <label className='form-label font-weight-bold'>Enter Age:</label>
                            <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control mb-3' />
                        </div>
                        <div className='form-group'>
                            <label className='form-label font-weight-bold'>Enter Email:</label>
                            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value="Submit" className='btn btn-primary' />
                        </div>
                    </form>
                    {name}
                    <br />
                    {age}
                    <br />
                    {email}
                </div>
            </div>
        </>
    )
}

export default Create;
