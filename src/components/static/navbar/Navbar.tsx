import './Navbar.css'
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
function Navbar() {
  return (
    <>
      <AppBar position="static" className='back'>
        <Toolbar variant="dense">
          <Box style={{ cursor: "pointer" }} >
            <Typography variant="h5" color="inherit">
              <img src="https://i.imgur.com/eEtlVtY.png" width="100rem" height="100rem" alt="" />
            </Typography>
          </Box>
          <Box className='positionItem' >
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;