import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/posts/tabpostagens/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
// import ModalPost from '../../components/posts/modalPostagens/ModalPost';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

import { toast } from 'react-toastify'
function Home() {
  const navigate = useNavigate()

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado para completar a ação', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      navigate('/login')
    }
  }, [token])

  return (
    <>
      <Grid container className='gridmaior'>
        <Grid item xs={6} className='grid1'>
          <Box className='box1'>
            <Box>
              <Typography className='texto' gutterBottom >Seja bem vindo a Blossom!</Typography>
              <Typography gutterBottom className='text2' >expresse seus pensamentos sobre animes e músicas nesta rede social!</Typography>
              <img src="https://i.imgur.com/N6srZXj.png" width='90px' height='90px' alt="" />
            </Box>
          </Box>
          <Box >
            {/* <ModalPost /> */}
            <Link to='/formulariopostagem' className='text-decorator-none'><Button className='butao'>Criar nova postagem</Button></Link>
          </Box> <Box >
            {/* <ModalPost /> */}
            <Link to='/posts' className='text-decorator-none'><Button className='butao'>Ver Postagens</Button></Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img className='imagemGrid' src="https://i.imgur.com/NFzCsD0.png" alt="" width="700px" height="700px" />
        </Grid>
        <Grid container xs={12} >
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;