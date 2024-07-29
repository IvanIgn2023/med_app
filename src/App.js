import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const storedUsername = sessionStorage.getItem("username");

    if (storedEmail && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} username={username} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
        <Routes>
          <Route path="/Sign_Up" element={<SignUp setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/find-doctor" element={<FindDoctorSearch />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
