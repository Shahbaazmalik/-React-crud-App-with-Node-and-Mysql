import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Students = () => {

    const [student, setStudent]=useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081')                // give/fetch data from api
          .then(res => setStudent(res.data))  
          .catch(err => console.log(err));
      }, [])

      const handleDelete = async (id) => {
        try{
            await axios.delete('http://localhost:8081/student'+id)
            window.location.reload()
        }
        catch(err){
            console.log(err);
        }
      }

  return (
    <div className='p-20  text-center  bg-blue-200    '>
        <div className='p-10 flex flex-col justify-center items-center  gap-2'>
        
            <table className='bg-slate-100  w-[40%] '>
                <thead className=''>
                    <tr className='bg-slate-300'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                   
                </thead>
                
                <tbody className=''>
                   
                   { 
                       student.map((data, i) => {
                       return(
                        <tr key={i}>
                        <td>{data.Name}</td> 
                        <td>{data.Email}</td> 
                        <td className='flex gap-1'>
                            <Link to={`update/${data.ID}`} className='bg-green-400 text-white rounded  '>Update</Link>
                            <button className='bg-red-400 text-white rounded '
                             onClick={e => handleDelete(data.ID)}>Delete
                            </button>
                        </td>
                     </tr>  
                       )
                        })
                    }
                </tbody>
            </table>
            <Link to="/create" className='btn btn-success bg-blue-400 text-white rounded p-1 w-[40%]'>Add</Link>
        </div>
    </div>
  )
}

export default Students