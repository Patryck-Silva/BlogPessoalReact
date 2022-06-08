import React, { ChangeEvent, useState, useEffect } from 'react'
import './Login.css'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify'
function Login() {

  //criando a variavel do tipo useNavigate para redirecionar
  let navigate = useNavigate()
  const dispatch = useDispatch()
  // o colchete é parte da sintaxe deve ser escrito assim, e o useLocalStorage serve para criar o token a partir do momento que nunca foi feito login.
  const [token, setToken] = useState('')
  // userLogin = estado do meu componente(primeiro valor para acessar a informação do state), setUserLogin = funcao para alterar a informção do state. useState<Tipo>({Parametros, propriedades inicializadas com vazio})
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
  //serve para atualizar a model com o valor que o usuário colocar no input
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    //função que altera a informação do state 
    setUserLogin({
      //spread op, espalhar os atributos do objeto
      ...userLogin,
      //a chave representa o nome do campo(ex: name= usuario/ name=senha) e depois pegando o valor que o usuário estiver digitando na caixa do input
      [e.target.name]: e.target.value

    })
  }
  //Nessa função ela olha o form como um todo, ao invés de só o input. 
  async function logar(e: ChangeEvent<HTMLFormElement>) {
    // prevenindo o comportamento padrão do botão de atualizar a página, para assim não ter o risco de perder os dados
    e.preventDefault()

    //
    try {
      // apenas trazendo o método login da service, com os 3 parametros (rota,dados, e a function setToken no qual o token é gravado no localStorage)
      await login(`/usuarios/logar`, userLogin, setToken)
      toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",

      });
    } catch (error) {

      toast.error('Seu usuário ou senha estão incorretos', {
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
  }
  //responsavel por fazer o controle do ciclo de vida de um componente,tem dois parametros: function que verifica se o token é !== de vazio, e o segundo parametro token. Se tem um token armazenado, ele cai dentro do if.
  useEffect(() => {
    // if que verifica se o token está vazio ou nao,
    if (token !== "") {
      //adiciona o token no dispatch
      dispatch(addToken(token))
      //fazendo redirecionamento, aciono a variavel que contém o useNavigate indicando a rota que ele tem q ir '/home'
      navigate('/home')
    }
  }, [token])//pra validar o token, tem q passar como segundo parametro com o

  return (

    <Grid container className='gridMaiorLogin'>
      {/* <Grid xs={4}>
        <img src="https://i.imgur.com/dyl7cE2.png" alt="" />
      </Grid> */}
      <Grid className='gridFormLogin' xs={6}>
        <Box className='BoxForm'>
          {/* invocando a function de logar, quando clicar no botao de logar ela será chamada */}
          <form onSubmit={logar}>
            <Typography className='textoLogin'>Entrar</Typography>
            {/* atributo value = atributo que permite capturar o valor digitado no campo, evento onChange = sempre que acontecer uma modificação no input aciona a function updatedmodel(e), que no caso o parametro (e) é o valor do evento*/}
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
      {/* <Grid xs={6}>
        <img src="https://i.imgur.com/NFzCsD0.png" width='500px' height='722px' alt="" />
      </Grid> */}
    </Grid>
  )
}

export default Login