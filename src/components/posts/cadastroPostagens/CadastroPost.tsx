import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import './CadastroPost.css'
function CadastroPost() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado para completar a ação!")
    }
  }, [token])

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

  const [posts, setPosts] = useState<Postagem>({
    id: 0,
    titulo: "",
    data: '',
    texto: '',
    curtir: 0,
    tema: null
  })

  useEffect(() => {
    setPosts({
      ...posts,
      tema: tema
    })
  }, [tema])

  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findPostagensById(id: string) {
    await buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findPostagensById(id)
    }
  }, [id])

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPosts({
      ...posts,
      [e.target.name]: e.target.value,
      tema: tema
    })
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await put(`/postagens`, posts, setPosts, {
          headers: {
            'Authorization': token
          }
        })
        alert("Postagem atualizada com sucesso")
      } catch (error) {
        console.log(`Erro: ${error}`);
        alert("Ocorreu algum erro ao atualizar uma psotagem, verifique os campos e tente novamente!")
      }
    } else {
      try {
        await post(`/postagens`, posts, setPosts, {
          headers: {
            'Authorization': token
          }
        })
        alert("Postagem Criada com sucesso")
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Ocorreu algum erro ao criar uma postagem, verifique os campos e tente novamente!")
      }
    }
    back()
  }


  function back() {
    navigate('/posts')
  }


  return (
    <Container maxWidth="sm" className='containerStylePost'>
      <form className='formCadastroPost' onSubmit={onSubmit} >
        <Typography variant="h3" align="center" >Formulário de cadastro postagem</Typography>
        <TextField value={posts.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
        <TextField value={posts.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
              headers: {
                'Authorization': token
              }
            })}>
            {
              temas.map(item => (
                <MenuItem value={item.id}>{item.descricao}</MenuItem>
              ))
            }
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary" className='buttonCadastroPost'>
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}
export default CadastroPost;