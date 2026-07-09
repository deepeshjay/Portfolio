import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './modules/Home'
import About from './modules/About'
import Skills from './modules/Skills'
import Projects from './modules/Projects'
import Contacts from './modules/Contacts'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
