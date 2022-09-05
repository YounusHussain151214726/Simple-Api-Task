import './App.css';
import Student from './Tasks/Student';
import Studentdetail from './Tasks/Studentdetail';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>

    <Routes>
      <Route path='/student' element={<Student/>}/>
      <Route path='/Detail' element={<Studentdetail/>}/>

    </Routes>
</>
  );
}

export default App;
