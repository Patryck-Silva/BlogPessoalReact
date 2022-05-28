import React from 'react';
// importacao de componentes
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
// importacao de pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
// importacao do css
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (

    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
