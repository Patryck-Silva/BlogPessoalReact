import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "#220926", height: "120px" }}>
            <Box paddingTop={1} paddingLeft={10} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h5" align="center" gutterBottom style={{ color: "white", marginRight: "90px" }}>Siga-me nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
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