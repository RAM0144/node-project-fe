//* Chat gpt
// react Login component with a form to enter mobile or email & password using bootstrap CSS only.


import  { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from './apis';

const Login = () => {
  const navigate = useNavigate();
  const authStatus = localStorage.getItem("authStatus");
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

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
    console.log("form data", formData);

     // if(formData.identifier === "9944016322" && formData.password === "ram") {
    //     localStorage.setItem("authStatus", "authenticated");
    //     navigate("/")  // redirect to the path
    // } else {
    //    alert("Check Your Credentials") 
    // }

    try {
      const { userToken } = await loginUser(formData);
      localStorage.setItem("authStatus", "authenticated");
      localStorage.setItem("authToken", userToken);
      navigate("/");

    } catch (error) {
      console.log("Error:", error);
      alert(error.message);
    }
  };


  if (authStatus === "authenticated") {
    console.log("Already Authenticated")
    return <Navigate to={"/"} />
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="identifier">Email or Mobile</label>
          <input
            type="text"
            className="form-control"
            id="identifier"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
