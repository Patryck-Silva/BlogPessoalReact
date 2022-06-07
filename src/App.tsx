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
import DeletarTema from './components/themes/deletarTema/DeletarTema';
import DeletarPostagens from './components/posts/deletarPostagens/DeletarPostagens'
function App() {
  return (

    <Router>
      <Navbar />
      <div /*style={{ minHeight: '100vh' }}*/>
        <Routes>
          {/* Login: height: calc(100vh - 105px - 55px); */}
          {/* home: height: calc(100vh - 110px); */}
          {/* cadastrousuario  height: calc(100vh - 105px - 55px); */}
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
          <Route path='/deletartema/:id' element={<DeletarTema />} />
          <Route path='/deletarpostagem/:id' element={<DeletarPostagens />} />
        </Routes>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
