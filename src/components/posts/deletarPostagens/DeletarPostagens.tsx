import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent, Grid } from "@material-ui/core"
import './DeletarPostagens.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'
function DeletarPostagens() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  const [posts, setPosts] = useState<Postagem>()

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
      navigate("/login")
    }
  })

  async function findbyId(id: string) {
    await buscaId(`/postagens/${id}`, setPosts, {
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
    navigate('/posts')
    deleteId(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    })
    toast.success('Postagem excluída com sucesso', {
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
    navigate('/posts')
  }
  return (
    <>
      <Grid xs={12} className='Gridzao'>
        <Box >
          <Card className='cardbackDelete'>
            <CardContent>
              <Box justifyContent='center'>
                <Typography className='textosDelete' gutterBottom>Deseja deletar a postagem?</Typography>
                <Typography className='textosDelete' >{posts?.titulo}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Box display='flex' justifyContent="start" ml={1.0} mb={2}>
                <Box mx={2} >
                  <Button className="botaoDelete" variant='contained' size='large' color='primary' onClick={sim} >Sim</Button>
                </Box>
                <Box mx={2} className="botaoSimDelete">
                  <Button className="botaoDelete" variant='contained' size='large' color='secondary' onClick={nao}>Não</Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </>

  )
}

export default DeletarPostagens;