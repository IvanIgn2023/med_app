import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter, Routes } from "react-router-dom";

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
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


