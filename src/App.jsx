import React from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
     
     <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
     </Router>
    </div>
  );
};

export default App;
