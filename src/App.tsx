import React from 'react';
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import './App.css';
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
