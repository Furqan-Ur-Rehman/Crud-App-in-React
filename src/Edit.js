import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
        const [id, setId] = useState(0);
        const [name, setName] = useState('');
        const [age, setAge] = useState('');
        const [email, setEmail] = useState('');

        const Navigate = useNavigate();
        
        useEffect(() => {
            setId(localStorage.getItem('id'));
            setName(localStorage.getItem('name'));
            setAge(localStorage.getItem('age'));
            setEmail(localStorage.getItem('email'));
        }, []);

        
        const UpdateData = (e) => {
            e.preventDefault();
            Axios.put(`https://68bb3c6584055bce63f17f86.mockapi.io/crud/${id}`, {
                emp_name : name,
                emp_age : age,
                emp_email : email
            }).then(() => {
                Navigate('/');
                // alert('Data has been Updated Successfully!');
            }).catch((error) => {
                alert("Data Updation Failed Sorry!" + error);
            })
        } 

  return (
    <div>
       <>
            <div className='row'>
                <div className="col-md-4 m-auto mt-4 bg-white">
                    <div className='mt-3 mb-2'>
                        <Link to='/'>
                            <button className='btn btn-dark'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-dark p-4 text-center text-white mb-4 createdata'>
                        <h1>Update DATA</h1>
                    </div>
                    <form onSubmit={UpdateData}>
                        <div className='form-group'>
                            <label className='form-label font-weight-bold'>ID:</label>
                            <input type="number" value={id} disabled className='form-control mb-3' />
                        </div>
                        <div className='form-group'>
                            <label className='form-label font-weight-bold'>Enter Name:</label>
                            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-3' />
                        </div>
                        <div className='form-group'>
                            <label className='form-label font-weight-bold'>Enter Age:</label>
                            <input type="number" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} className='form-control mb-3' />
                        </div>
                        <div className='form-group'>
                            <label className='form-label font-weight-bold'>Enter Email:</label>
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid mb-2'>
                            <input type="submit" value="Update" className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    </div>
  )
}

export default Edit
