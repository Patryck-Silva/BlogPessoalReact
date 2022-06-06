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
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/themes/listatema/ListaTema';
import ListaPostagem from './components/posts/listapostagens/ListaPostagem';
import CadastroTema from './components/themes/cadastroTema/CadastroTema';
import CadastroPost from './components/posts/cadastroPostagens/CadastroPost';
function App() {
  return (

    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/cadastro' element={<CadastroUsuario />} />
          <Route path='/posts' element={<ListaPostagem />} />
          <Route path='/temas' element={<ListaTema />} />
          <Route path='/formulariopostagem' element={<CadastroPost />} />
          <Route path='/formulariopostagem/:id' element={<CadastroPost />} />
          <Route path='/formulariotema' element={<CadastroTema />} />
          <Route path='/formulariotema/:id' element={<CadastroTema />} />
        </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
