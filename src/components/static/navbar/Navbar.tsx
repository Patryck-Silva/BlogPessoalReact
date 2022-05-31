import './Navbar.css'
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <AppBar position="static" className='back'>
        <Toolbar variant="dense">
          <Box className='textItem' >
            <img src="https://i.imgur.com/BCkA1gx.png" className='imagem' alt="Tomie" title='Tomie' />
          </Box>
          <Box className='positionItem' >
            <Box mx={1} className='textItem'>
              <Typography>
                <span className='span' title='Home'>Home</span>
              </Typography>
            </Box>
            <Box mx={1} className='textItem'>
              <Typography>
                <span className='span' title='Postagens'>Postagens</span>
              </Typography>
            </Box>
            <Box mx={1} className='textItem'>
              <Typography>
                <span className='span' title='Temas'>Temas</span>
              </Typography>
            </Box>
            <Box mx={1} className='textItem'>
              <Typography  >
                <span className='span' title='Cadastro Tema'>Cadastrar Tema</span>
              </Typography>
            </Box>
            <Link to='/login' className='textDecorationNone'>
              <Box mx={1} className='textItem' >
                <Typography >
                  <span className='span' title='Logout'>Logout</span>
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box className='textItem' >
            <Typography >

            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;