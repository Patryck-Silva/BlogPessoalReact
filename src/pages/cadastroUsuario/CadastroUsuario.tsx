import { Grid, Button, Typography, TextField, Box } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroUsuario.css'
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
function CadastroUsuario() {

  //criando a variavel do tipo useNavigate para redirecionar
  let history = useNavigate()

  //servirá para confirmar se o campo confirmar senha é igual ao do senha, [variavel,function que modifica a variavel] = variavel do tipo useState<String>
  const [confirmarSenha, setConfirmarSenha] = useState<String>('')

  // User = estado do meu componente(primeiro valor para acessar a informação do state), setUser = funcao para alterar a informção do state. useState<Tipo>({Parametros = propriedades inicializadas com vazio})
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  //dados cadastrados e devolvidos pela api sao armazenado no userResult
  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: "",
    foto: ''
  })

  // acionado após envios de informações, verifica se o userResult tem id !== 0, se for diferente significa q o cadastro foi efetivado com sucesso
  useEffect(() => {
    if (userResult.id !== 0) {
      history('/login')
    }
  }, [userResult])


  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  //pega o valor digitado no campo de confirmar senha e armazenando no state de confirmar senha
  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }


  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario('/usuarios/cadastrar', user, setUserResult)
        alert('Usuario cadastrado com sucesso')
      } catch (error) {
        console.log(`erro: ${error}`);

        alert('usuario já existente')
      }
    } else {
      alert('Insira uma senha com no mínimo 8 digitos')
      setUser({ ...user, senha: "" })
      setConfirmarSenha("")
    }

  }

  return (
    <Grid container className='gridMaiorCadastro'>
      <Grid item xs={6} className='grid1Cadastro'>
        <Box className='BoxFormCadastro'>
          <form onSubmit={cadastrar}>
            <Typography className='textoEntrar'
            >Cadastrar</Typography>
            {/* textfield nome */}
            <TextField id='nome' value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Nome' placeholder='Insira seu nome completo' variant='outlined' name='nome' margin='normal' fullWidth />
            {/* textfield email */}
            <TextField id='usuario' value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Email' placeholder='Insira seu email' variant='outlined' name='usuario' margin='normal' type='email' fullWidth />
            {/* textfield senha */}
            <TextField id='senha' value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Senha' placeholder='Insira sua senha' variant='outlined' name='senha' type='password' margin='normal' fullWidth />
            {/* textfield confirmar senha */}
            <TextField id='confirmarSenha' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} label='Confirmar Senha' placeholder='Confirme sua senha' variant='outlined' name='confirmarSenha' margin='normal' fullWidth />
            {/* textfield foto */}
            <TextField id='foto' value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Foto' placeholder='Insira o URL da foto' variant='outlined' name='foto' margin='normal' fullWidth />
            {/* box do botao */}
            <Box textAlign='center' >
              <Link to='/login' className='text-decorator-none'><Button className='botaoCancelar' type='submit' variant='contained'>Cancelar</Button></Link>
              <Button type='submit' className='botaoCadastrar'>Cadastrar</Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid item xs={6} className='grid2Cadastro'>
        <img src="https://i.imgur.com/pPNQd0e.jpg" width='1000px' height='722px' alt="" />
      </Grid>
    </Grid>
  )
}

export default CadastroUsuario