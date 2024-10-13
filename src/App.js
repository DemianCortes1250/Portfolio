import { Routes, Route } from 'react-router-dom';
import './App.css';
import Proyects from './components/Proyects/Proyects';
import Landing from './components/Landing/Landing';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import React, { useEffect } from 'react';

function App() {

    useEffect(() => {
      document.title = "Demian A.Cortes";
    }, []);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Proyects" element={<Proyects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
