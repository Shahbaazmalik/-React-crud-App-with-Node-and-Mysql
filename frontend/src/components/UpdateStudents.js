import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const UpdateStudents = () => {

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const {id}=useParams();
       const navigate = useNavigate();

    function handleSubmit(event){
         event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, { name, email})   // use Axios to pass the data 
        .then(res => {
           console.log(res);
             navigate('/');     //navigate to home
        }) .catch(err => console.log(err));
           
    }


  return (
  <div className='bg-slate-200 flex  justify-center items-center'>
     <div className=' '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-20'>
            <h2>Update Student </h2>
            <div >
               {/* <label htmlFor='form-control'>Name</label> */}
                <input type='text' placeholder='Enter Name' className='form-control'
                onChange={e => setName(e.target.value)}
                />

            </div>
            <div>
                {/* <label htmlFor='form-control2'>Email</label> */}
                <input type='text' placeholder='Enter Email' className='form-control2'
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <button className='bg-blue-500 text-white'>Update</button>
        </form>  
     </div>
  </div>
  )
}

export default UpdateStudents