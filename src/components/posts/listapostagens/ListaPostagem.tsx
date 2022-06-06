import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])
  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined" className='cardBackHome'>
              <CardContent>
                <Typography className="textosCard" gutterBottom>
                  Postagens
                </Typography>
                <Typography className='textosCard' variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography className='textosCard' variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography className='textosCard' variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box className='botaoBox' mb={1.5}>
                  <Link to="" className="text-decorator-none" >
                    <Box mx={1}>
                      <Button color="secondary" variant="contained" size='small' className='botaoPosts'  >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to="" className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className='botaoPosts'>
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;