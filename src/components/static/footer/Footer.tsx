import React from 'react';
import { Box, Grid } from '@material-ui/core';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  var footerComponent

  if (token !== '') {
    footerComponent = <Grid container >
      <Grid className='gridFooter' item xs={12}>
        <Box paddingLeft={1}>
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
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer;