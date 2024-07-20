//* Chat gpt
// react Register component with form to enter name, mobile, email, password, dob using bootstrap css only

import  { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { registerUser } from './apis.js';

const intialState = {
  
    name: '',
    mobile: '',
    email: '',
    password: '',
    dob: '',
    role: "student",
  
}

const Register = () => {
  const authStatus = localStorage.getItem("authStatus")
  const [formData, setFormData] = useState(intialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    await registerUser(formData);
   
    // Reset form fields
    setFormData(intialState);
    navigate("/login")
  };

  if (authStatus === "authenticated") {
    console.log("Already Authenticated");
    return <Navigate to={"/"} />
  }

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            className="form-control"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-4" 
        style={{float: "left"}}> Register </button>

        <Link to="/login" 
        style={{float: "right"}} className="mt-4">Go to Login</Link>

      </form>
    </div>
  );
};

export default Register;
