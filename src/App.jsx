
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import PropTypes from "prop-types";
import Home from './pages/Home'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Register from './pages/Register'
import Login from './pages/Login'

// custom routecomponent which load the routes only when the authStatus 
//is authenticated else it will navigated back to login page.

const ProtectedRoute = ({ routeElement }) => {

  const authStatus = localStorage.getItem("authStatus");

  if (authStatus === "authenticated") {
    return routeElement;
  }
  console.log("Not authenticated, so redirecting to login page");

  // to the login page, since the user is not authenticated
  return <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  routeElement: PropTypes.element,
};

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute routeElement={<Home />} />} />
          <Route path="/students" element={<ProtectedRoute routeElement={<Students />} />} />
          <Route path="/teachers" element={<ProtectedRoute routeElement={<Teachers />} />} />
          <Route path="/register" element={< Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
