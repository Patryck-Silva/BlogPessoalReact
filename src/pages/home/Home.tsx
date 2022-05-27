import React from 'react';
import { Typography, Box, Grid, Button, Paper } from '@material-ui/core';
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
            </Box>
          </Box>
          <Box className='butao'>
            <Button variant="outlined" >Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/946db522-0d70-44fc-bcd3-b9f6b8ac828e/deyj91k-6d567063-2d77-4005-a3c8-49d0d26a62e4.png/v1/fill/w_1280,h_1280,strp/tomie_by_chvrchyrd_deyj91k-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzk0NmRiNTIyLTBkNzAtNDRmYy1iY2QzLWI5ZjZiOGFjODI4ZVwvZGV5ajkxay02ZDU2NzA2My0yZDc3LTQwMDUtYTNjOC00OWQwZDI2YTYyZTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.S4yFSkY-4K46AczBiWuGmg--aCyRIFNpvi1A6TdqBaE" alt="" width="700px" height="500px" />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;