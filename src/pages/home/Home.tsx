import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
  return (
    <>
      <Grid container className='gridmaior'>
        <Grid item xs={6} className='grid1'>
          <Box className='box1'>
            <Box>
              <Typography className='texto' gutterBottom >Seja bem vindo a Blossom!</Typography>
              <Typography gutterBottom className='text2' >expresse seus pensamentos sobre animes oldschool e músicas nesta rede social!</Typography>
              <img src="https://i.imgur.com/BCkA1gx.png" width='90px' height='90px' alt="" />
            </Box>
          </Box>
          <Box className='butao'>
            <Button variant="outlined" >Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src="https://i.imgur.com/IYCSulH.gif" alt="" width="500px" height="500px" />
          <img src="https://i.imgur.com/IYCSulH.gif" alt="" />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;