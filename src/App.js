import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './component/Header';
import Home from "./pages/Home";
import About from './pages/About';
import VisiMisi from './pages/VisiMisi';
import Profilguru from './pages/Profilguru';
import Lokasi from './pages/Lokasi';
import Register from './pages/Register';
import '../src/App.css'
import { useEffect } from 'react';

  

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#f0f0f0';

    // Cleanup function to reset style (opsional)
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);


  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visimisi" element={<VisiMisi />} />
          <Route path="/profilguru" element={<Profilguru />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;

