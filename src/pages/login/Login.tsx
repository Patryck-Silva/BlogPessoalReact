import React, { ChangeEvent, useState, useEffect } from 'react'
import './Login.css'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
function Login() {

  // ele pega o lugar de onde está esse código e redireciona
  let history = useNavigate()


  const [token, setToken] = useLocalStorage('token')

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: ''
    }
  )
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value

    })
  }

  useEffect(() => {
    if (token !== "") {
      history('/home')
    }
  }, [token])

  async function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      await login(`/usuarios/logar`, userLogin, setToken)
      alert('Usuário logado com sucesso!')
    } catch (error) {
      alert('Dados inconsistentes. Erro ao logar!')
    }


  }

  return (
    // grid da imagem da esquerda
    <Grid container className='gridMaiorLogin'>
      <Grid className='grid1Login' xs={12}>
        <Box className='BoxForm'>
          <form onSubmit={logar}>
            <Typography className='textoLogin'>Entrar</Typography>
            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            {/* box do botao */}
            <Box textAlign='center' >
              <Button className='botaoLogar' type='submit' variant='contained'>Entrar</Button>
            </Box>
          </form>
          <Box marginTop={2} >
            <Typography className='textoSemConta'>Não tem uma conta?</Typography>
          </Box>
          <Link to='/cadastro' className='text-decorator-none'>
            <Typography align='center' className='textoCadastro' >Cadastre-se</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login