import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagens.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function DeletarPostagens() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [token, setToken] = useLocalStorage('token')
  const [posts, setPosts] = useState<Postagem>()

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado para completar a ação')
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
    alert('Postagem excluída com sucesso')
  }
  function nao() {
    navigate('/posts')
  }
  return (
    <>
      <Box m={2}>
        <Card variant='outlined'>
          <CardContent>
            <Box justifyContent='center'>
              <Typography color='textSecondary' gutterBottom>Deseja deletar a postagem?</Typography>
              <Typography color='textSecondary'>{posts?.titulo}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display='flex' justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button variant='contained' className='' size='large' color='primary' onClick={sim} >Sim</Button>
              </Box>
              <Box mx={2}>
                <Button variant='contained' className='' size='large' color='secondary' onClick={nao}>Não</Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>

  )
}

export default DeletarPostagens;