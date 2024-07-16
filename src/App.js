import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;



