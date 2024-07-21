import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // Render the main App component
  return (
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Sign_Up" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


