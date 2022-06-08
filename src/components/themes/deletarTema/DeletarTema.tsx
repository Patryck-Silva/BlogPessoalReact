import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';

import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'
function DeletarTema() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  const [tema, setTemas] = useState<Tema>()

  useEffect(() => {
    if (token === '') {
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

  async function findbyId(id: string) {
    await buscaId(`temas/${id}`, setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }
  useEffect(() => {
    if (id !== undefined) {
      findbyId(id)
    }
  }, [id])

  function sim() {
    navigate('/temas')
    deleteId(`/temas/${id}`, {
      headers: {
        'Authorization': token
      }
    })
    toast.success('Tema excluído com sucesso', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",

    });
  }
  function nao() {
    navigate('/temas')
  }


  return (
    <>
      <Grid xs={12} className='gridDeleteTema'>
        <Box >
          <Card className='cardbackDeleteTema'>
            <CardContent>
              <Box justifyContent='center'>
                <Typography className='textosDelete' gutterBottom>Deseja deletar o tema?</Typography>
                <Typography className='textosDelete'>{tema?.descricao}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                <Box mx={2}>
                  <Button variant='contained' className='botaoDeleteTema' size='large' color='primary' onClick={sim}>Sim</Button>
                </Box>
                <Box mx={2}>
                  <Button variant='contained' className='botaoDeleteTema' size='large' color='secondary' onClick={nao}>Não</Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </>
  )
}

export default DeletarTema