import Axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [apidata, setAPIData] = useState([]);

    function getData() {
        Axios.get('https://68bb3c6584055bce63f17f86.mockapi.io/crud')
            .then((response) => {
                setAPIData(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    function DeleteData(id){
        Axios.delete(`https://68bb3c6584055bce63f17f86.mockapi.io/crud/${id}`)
        .then(() => {
            getData();
            alert('Data has been Deleted Successfully!');
        }).catch(() => {
            alert('Data Deletion Failed!');
        })
    }

    function setDatatoStorage(id, name, age, email){
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
    }

    useEffect(() => {
        getData();
    })

    return (
        <>
            <div className='row'>
                <div className='col-md-12 mt-5'>
                    <div className='mt-3 mb-2'>
                        <Link to='/create'>
                            <button className='btn btn-dark'>Create New Data</button>
                        </Link>
                    </div>
                    <table className='table table-bordered table-dark table-hover table-striped'>
                        <thead className='text-center'>
                            <tr>
                                <th className='text-white bg-dark'>ID</th>
                                <th className='text-white bg-dark'>Name</th>
                                <th className='text-white bg-dark'>Age</th>
                                <th className='text-white bg-dark'>Email</th>
                                <th className='text-white bg-dark'>Edit</th>
                                <th className='text-white bg-dark'>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                apidata.map(data => {
                                    return (
                                        <Fragment key={data.id}>
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.emp_name}</td>
                                                <td>{data.emp_age}</td>
                                                <td>{data.emp_email}</td>
                                                <td>
                                                    <Link to='/edit'>
                                                        <button className='btn btn-primary' onClick={() => setDatatoStorage(data.id, data.emp_name, data.emp_age, data.emp_email)}>Edit</button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => { if(window.confirm("Are you sure you want to Delete?")){DeleteData(data.id)} }}>Delete</button>
                                                </td>
                                            </tr>
                                        </Fragment>

                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Read
