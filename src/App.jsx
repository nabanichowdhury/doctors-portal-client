
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Shared/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Appointment from './Pages/Appointment/Appointment'
import Reviews from './Pages/Reviews/Reviews'
import ContactUs from './Pages/ContactUs/ContactUs'
import Login from './Pages/Login/Login'

function App() {
 

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/appointment" element={<Appointment></Appointment>}/>
        <Route path="/reviews" element={<Reviews></Reviews>}/>
        <Route path="/contactus" element={<ContactUs></ContactUs>}/>
        <Route path="/login" element={<Login></Login>}/>
      </Routes>
    </div>
  )
}

export default App
