import './Navbar.css'
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
  let navigate = useNavigate()

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let dispatch = useDispatch()

  function deslogar() {
    dispatch(addToken(''))
    alert("Usuário deslogado")
    navigate("/login")
  }

  var navbarComponent

  if (token !== "") {
    navbarComponent = <AppBar position="static" className='back'>
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
  }
  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;


