import React, { useState } from 'react';
import './Sign_Up.css';



const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
    
  const validateForm = () => {
    let formErrors = {};

    if (!name) {
      formErrors.name = 'Name is required';
    }

    if (!phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = 'Phone number is invalid';
    }

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform sign-up action here
      console.log('Form submitted');
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member? <span><a href="../Login/Login.html" style={{ color: '#2190FF' }}>Login</a></span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <small className="error">{errors.name}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <small className="error">{errors.phone}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <small className="error">{errors.password}</small>}
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => { setName(''); setPhone(''); setEmail(''); setPassword(''); setErrors({}); }}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
