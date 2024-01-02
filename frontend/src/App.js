
import Student from './components/Students';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateStudents from './components/CreateStudents';
import UpdateStudents from './components/UpdateStudents';


function App() {
  return (
   <div>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Student/>}></Route> 
            <Route path='/create' element={<CreateStudents/>}></Route> 
            <Route path='/update/:id' element={<UpdateStudents/>}></Route> 
         </Routes>
      </BrowserRouter>  
   </div>
   
  );
}

export default App;
