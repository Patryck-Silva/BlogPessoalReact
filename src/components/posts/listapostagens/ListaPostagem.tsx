import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './ListaPostagem.css';

import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, put } from '../../../services/Service';

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


  async function curtidas(id: number) {
    await put(`/postagens/curtir/${id}`, posts, setPosts, {
      headers: {
        'Authorization': token
      }
    }
    );

    back()
  }
  function back() {
    navigate('/posts')
  }
  return (
    <>
      {
        posts.map(post => (
          <Box className='backBoxPosts' >
            <Card variant="outlined" className='cardBackHome'>
              <CardContent>
                <Typography className="subtitulo" gutterBottom>
                  Postagens
                </Typography>
                <Typography className='textosCard' variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography className='subtitulo' variant="body2" component="p">
                  Conteúdo:
                </Typography>
                <Typography className='textosCard' variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography className='subtitulo' variant="body2" component="p">
                  Tema:
                </Typography>
                <Typography className='textosCard' variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box className='botaoBox' mb={1.5}>
                  <Link to={`/formulariopostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button color="secondary" variant="contained" size='small' className='botaoPosts'  >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarpostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className='botaoPosts'>
                        deletar
                      </Button>
                    </Box>
                  </Link>
                  <Box mx={1}>
                    <Button onClick={() => { curtidas(post.id) }} ><ThumbUpIcon color='primary'></ThumbUpIcon><Typography style={{ color: 'black' }} align='center' variant="body2" component="p"> {post.curtir}</Typography></Button>
                  </Box>
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