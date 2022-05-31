import { Grid, Button, Typography, TextField, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import React from 'react'
import './CadastroUsuario.css'
function CadastroUsuario() {
  return (
    <Grid container className='gridMaiorCadastro'>
      <Grid item xs={6} className='grid1Cadastro'>
        <Box className='BoxFormCadastro'>
          <form>
            <Typography className='textoEntrar'
            >Cadastrar</Typography>
            <TextField id='nome' label='Nome' placeholder='Insira seu nome completo' variant='outlined' name='nome' margin='normal' fullWidth />
            <TextField id='usuario' label='Email' placeholder='Insira seu email' variant='outlined' name='usuario' margin='normal' type='email' fullWidth />
            <TextField id='senha' label='Senha' placeholder='Insira sua senha' variant='outlined' name='senha' type='password' margin='normal' fullWidth />
            <TextField id='confirmarSenha' label='ConfirmarSenha' placeholder='Confirme sua senha' variant='outlined' name='confirmarSenha' margin='normal' fullWidth />
            <TextField id='foto' label='Foto' placeholder='Insira o URL da foto' variant='outlined' name='foto' margin='normal' fullWidth />
            {/* box do botao */}
            <Box textAlign='center' >
              <Link to='/login' className='text-decorator-none'><Button className='botaoCancelar' type='submit' variant='contained'>Cancelar</Button></Link>
              <Link to='/home' className='text-decorator-none'><Button className='botaoCadastrar' type='submit' variant='contained'>Cadastrar</Button></Link>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid item xs={6} className='grid2Cadastro'>
        <img src="https://cdn.discordapp.com/attachments/974010263726604389/981237270206119976/SPOILER_b0s6pP4.jpg" height='722px' alt="" />
      </Grid>
    </Grid>
  )
}

export default CadastroUsuario