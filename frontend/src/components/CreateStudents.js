import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const CreateStudents = () => {

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
       const navigate = useNavigate();

    function handleSubmit(event){
         event.preventDefault();
        axios.post('http://localhost:8081/create/',{name, email})   // use Axios to pass the data 
        .then(res => {
           console.log(res);
             navigate('/');     //navigate to home
        }) .catch(err => console.log(err));
           
    }


  return (
  <div className=' '>
     <div className=' bg-slate-200 rounded p-20 flex  justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <h2>Add Student </h2>
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
            <button className='bg-blue-500 text-white'>Submit</button>
        </form>  
     </div>
  </div>
  )
}

export default CreateStudents