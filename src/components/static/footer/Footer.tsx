import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'
function Footer() {
  return (
    <>
      <Grid container className='gridMaior'>
        <Grid className='gridFooter' item xs={12}>
          <Box className='boxTexto'>
            <Box className='positionText' >
              <Typography className='text' gutterBottom >Siga-me nas redes sociais </Typography>
            </Box>
            <Box className='positionIcon'>
              <a href="https://github.com/Patryck-Silva" target="_blank" style={{ marginRight: "10px" }} rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/214/214513.png" alt="github" width="50px" />
              </a>
              <a href="https://www.instagram.com/tyckupnext/" target="_blank" style={{ marginRight: "10px" }} rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" width="50px" height="50px" />
              </a>
              <a href="https://www.linkedin.com/in/patryck-silva/" target="_blank" rel="noreferrer" >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="50px" height="50px" alt='linkedin' />
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;