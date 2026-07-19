import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './modules/Home'
import About from './modules/About'
import Skills from './modules/Skills'
import Projects from './modules/Projects'
import Contacts from './modules/Contacts'
import Navbar from './component/Navbar'
import Login from './modules/Login'
import Register from './modules/Register'
import Users from './modules/Users'

function App() {
  const isAuthenticated = localStorage.getItem("token");
  console.log("Is Authenticated:", isAuthenticated);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
