import './Navbar.css'
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
function Navbar() {
  let navigate = useNavigate()

  const [token, setToken] = useLocalStorage('token')

  function deslogar() {
    setToken('')
    alert("Usuário deslogado")
    navigate("/login")
  }
  return (
    <>
      <AppBar position="static" className='back'>
        <Toolbar variant="dense">
          <Box className='textItem' onClick={deslogar} >
            <img src="https://i.imgur.com/uOqE6Lc.jpg" className='imagem' alt="Tomie" title='Tomie' />
          </Box>
          <Box className='positionItem' >
            <Link to='/home' className='textDecorationNone'>
              <Box mx={1} className='textItem'>
                <Typography>
                  <span className='span' title='Home'>Home</span>
                </Typography>
              </Box>
            </Link>
            <Link to='/posts' className='textDecorationNone'>
              <Box mx={1} className='textItem'>
                <Typography>
                  <span className='span' title='Postagens'>Postagens</span>
                </Typography>
              </Box>
            </Link>
            <Link to='/temas' className='textDecorationNone'>
              <Box mx={1} className='textItem'>
                <Typography>
                  <span className='span' title='Temas'>Temas</span>
                </Typography>
              </Box>
            </Link>
            <Link to='/formulariopostagem' className='textDecorationNone'>
              <Box mx={1} className='textItem'>
                <Typography  >
                  <span className='span' title='Cadastro Tema'>Criar Postagens</span>
                </Typography>
              </Box>
            </Link>
            <Link to='/formularioTema' className='textDecorationNone'>
              <Box mx={1} className='textItem'>
                <Typography  >
                  <span className='span' title='Cadastro Tema'>Criar Tema</span>
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className='textItem' onClick={deslogar}>
              <Typography >
                <span className='span' title='Logout'>Logout</span>
              </Typography>
            </Box>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;


