import React from 'react';
import { Box, Grid } from '@material-ui/core';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'
function Footer() {
  return (
    <>
      <Grid container >
        <Grid className='gridFooter' item xs={12}>
          <Box paddingRight={4}>
            <a href="https://github.com/Patryck-Silva" target="_blank" style={{ marginRight: "10px" }} rel="noreferrer">
              <GitHubIcon className='igIcon' fontSize='large'></GitHubIcon>
            </a>
            <a href="https://www.instagram.com/tyckupnext/" target="_blank" style={{ marginRight: "10px" }} rel="noreferrer">
              <InstagramIcon className='igIcon' fontSize='large'></InstagramIcon>
            </a>
            <a href="https://www.linkedin.com/in/patryck-silva/" target="_blank" rel="noreferrer" >
              <LinkedInIcon className='igIcon' fontSize='large'></LinkedInIcon>
            </a>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;