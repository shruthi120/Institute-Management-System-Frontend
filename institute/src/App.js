import './App.css';
import Sidebar from './Components/Dashboard/SideMenu';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Switch,BrowserRouter,Route, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Attendance from './Components/Attendance/Attendance';
import Login from './Components/Login/Login';

function App() {
  return (
   
      <div className="App">
        <BrowserRouter>
        {/* <Attendance/> */}
        <Routes>
          <Route exact path="/attendance" element={<Attendance/>}/>
          <Route exact path="/" element={<Login/>}/>
        
       </Routes>
         
      </BrowserRouter>
      </div>
   
  );
}

export default App;