import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import './CadastroTema.css'
import Tema from '../../../models/Tema'
import { buscaId, post, put } from '../../../services/Service'

function CadastroTema() {
  let history = useNavigate()

  const { id } = useParams<{ id: string }>()

  const [token, setToken] = useLocalStorage('token')

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

  //Hook para verificar se o usuário está logado
  useEffect(() => {
    if (token === "") {
      alert("voce tem q estar logado")
      history("/login")
    }
  }, [token])

  //Criando função assícrona para buscar o id
  async function findById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  //Hook para verificar se o id é undefined
  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  //Criando função de atualizar a tabela por meio do ChangeEvent
  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })
  }

  //Criando a funçãoque fara toda a verificação se o id é diferente de indefinido e também atualizar o tema ou criar um novo tema caso o id seja indefinido
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    // se o id for diferente de undefined tente atualizar
    if (id !== undefined) {
      // TRY: Tenta executar a atualização
      try {
        await put(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })
        alert("Tema atualizado com sucesso")
      } catch (error) {// CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
        console.log(`Error:${error}`);

        alert("Erro na atualização de postagem, verifique os campos e tente novamente.")
      }
    } else { // Se o ID for indefinido, tente Cadastrar
      // TRY: Tenta executar o cadastro
      try {
        await post(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })
        alert('Tema criado com sucesso')
      } catch (error) {// CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
        console.log(`Error: ${error}`)
        alert("Erro na criação de postagem, verifique os campos e tente novamente.")
      }
    }
    back()
  }

  //Criando função de voltar para a pagina /temas independente se atualiza ou cria um tema novo
  function back() {
    history('/temas')
  }

  return (

    <Container maxWidth="sm" className='containerStyleTema' >
      <form onSubmit={onSubmit} className='formCadastroTema'>
        <Typography variant="h3" align="center" >Formulário de cadastro tema</Typography>
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
          id="descricao"
          label="descrição"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" className='buttonCadastroTema'>
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroTema