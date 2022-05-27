import './Navbar.css'
import React from 'react';
import { AppBar, Toolbar, Typography, Box, TextField } from '@material-ui/core';
function Navbar() {
  return (
    <>
      <AppBar position="static" className='back'>
        <Toolbar variant="dense">
          <Box className='textItem' >
            <Typography>
              <img src="https://64.media.tumblr.com/4395d5980183efa3e0ca6463454acd26/8c41c4fc89a79718-27/s540x810/6474cd51a4596b408a8c37f285f9ff0c417a670b.pnj" className='imagem' alt="Tomie" title='Tomie' />
            </Typography>
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
            <Box mx={1} className='textItem'>
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