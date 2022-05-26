import React from 'react';
import { Typography, Box, Grid, Button, Paper } from '@material-ui/core';
import './Home.css';

function Home() {
  return (
    <>
      <Grid className='gridmaior' >
        <Grid item xs={12} className='grid2'>
          <Box>
            <Typography className='texto1' variant="h3" component="h3">Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>

          </Box>

        </Grid>
        <Grid>
          <Box>

          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;