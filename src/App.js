import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import Notification from './Components/Notification/Notification';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(''); // State to manage notification message
  const [showNotification, setShowNotification] = useState(false); // State to manage notification visibility

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const storedUsername = sessionStorage.getItem("username");

    if (storedEmail && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleBooking = () => {
    // Example logic for handling booking
    setNotificationMessage('Your appointment has been booked successfully!');
    setShowNotification(true);
  };

  const handleCancelBooking = () => {
    // Example logic for handling booking cancellation
    setNotificationMessage('Your appointment has been canceled.');
    setShowNotification(true);
  };

  // Sample array of doctors
  const doctors = [
    { name: 'Dr. James Brown', speciality: 'Cardiologist', experience: 10, ratings: 4.5, profilePic: null },
    { name: 'Dr. Jameson Daniels', speciality: 'Neurologist', experience: 8, ratings: 4.7, profilePic: null },
    { name: 'Dr. Sam Brown', speciality: 'Pediatrician', experience: 15, ratings: 4.8, profilePic: null },
  ];

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} username={username} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />

        {/* Pass notification props to Notification component */}
        <Notification 
          message={notificationMessage} 
          visible={showNotification} 
          onClose={() => setShowNotification(false)} 
        />

        <Routes>
          <Route path="/Sign_Up" element={<SignUp setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
          <Route path="/find-doctor" element={<FindDoctorSearch />} />
          <Route path="/instant-consultation" element={<InstantConsultation onBooking={handleBooking} onCancel={handleCancelBooking} />} />
          {/* Add other routes as needed */}
        </Routes>

        <div className="doctor-cards-container">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              speciality={doctor.speciality}
              experience={doctor.experience}
              ratings={doctor.ratings}
              profilePic={doctor.profilePic}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
