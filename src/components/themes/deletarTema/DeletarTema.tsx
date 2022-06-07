import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
function DeletarTema() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  const [tema, setTemas] = useState<Tema>()

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar Logado')
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
    alert('Tema excluído com sucesso')
  }
  function nao() {
    navigate('/temas')
  }


  return (
    <>
      <Box m={2}>
        <Card variant='outlined'>
          <CardContent>
            <Box justifyContent='center'>
              <Typography color='textSecondary' gutterBottom>Deseja deletar o tema?</Typography>
              <Typography color='textSecondary'>{tema?.descricao}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
              <Box mx={2}>
                <Button variant='contained' className='' size='large' color='primary' onClick={sim}>Sim</Button>
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

export default DeletarTema