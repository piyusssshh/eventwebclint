import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style/global.scss"
import HomePage from './pages/home';
import Events from './pages/events'; 
import Contact from './pages/contact'; 
import About from './pages/about'; 
import Services from './pages/services'; 
import Gallery from './pages/gallery'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/gellery" element={<Gallery/>} />
        
      </Routes>

    </Router>
  );
}
export default App;