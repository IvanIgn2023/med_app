import React, { useState } from "react"; // Import useState from React
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, username, setIsLoggedIn, setUsername }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("email");
    localStorage.removeItem("doctorData");

    // Remove the reviewFormData from local storage
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    });

    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/find-doctor">Find Doctor</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className="link">
          <Link to="/instant-consultation">Instant Consultation</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="link">
              <span>Welcome, {username}</span>
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/Sign_Up">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/Login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

