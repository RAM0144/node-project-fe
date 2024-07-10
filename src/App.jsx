
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Students from './pages/Students'
import Teachers from './pages/Teachers'

function App() {
 
  return (
    
       <BrowserRouter>
       <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/students" element={<Students/>} />
          <Route path="/teachers" element={<Teachers />} />
       </Routes>
      </BrowserRouter>
    
  )
}

export default App
