import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/posts/tabpostagens/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate()

  function botaoPosts() {
    navigate('/posts')
  }


  return (
    <>
      <Grid container className='gridmaior'>
        <Grid item xs={6} className='grid1'>
          <Box className='box1'>
            <Box>
              <Typography className='texto' gutterBottom >Seja bem vindo a Blossom!</Typography>
              <Typography gutterBottom className='text2' >expresse seus pensamentos sobre animes e músicas nesta rede social!</Typography>
              <img src="https://i.imgur.com/BCkA1gx.png" width='90px' height='90px' alt="" />
            </Box>
          </Box>
          <Link to='/posts' className='text-decorator-none'>
            <Box className='butao' onClick={botaoPosts}>
              <Button variant="outlined" >Ver Postagens</Button>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <img src="https://i.imgur.com/IYCSulH.gif" alt="" width="500px" height="500px" />
          <img src="https://i.imgur.com/IYCSulH.gif" alt="" />
        </Grid>

        <Grid container xs={12} >
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;