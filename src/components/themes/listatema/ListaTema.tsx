import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify'

function ListaTema() {
  let navigate = useNavigate()

  //useState de temas
  const [temas, setTemas] = useState<Tema[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado para completar a ação', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",

      });
      navigate('/login')
    }
  }, [token])

  async function getTema() {
    await busca('/temas', setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {
        //map percorre o array temas,e dps cria um objeto tema no qual pega a descricao dele
        temas.map(tema => (
          <Box className='backBox'>
            <Card className='cardback'>
              <CardMedia component="img" height="194" image="https://i.imgur.com/DmMY4ho.png" alt="Paella dish" />
              <CardContent>
                <Typography className='textos' >Tema</Typography>
                <Typography className='textos' variant="h5" component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
                  <Link to={`/formulariotema/${tema.id}`} className="text-decorator-none">
                    <Box >
                      <Button variant="contained" className="botaoAtualizarTema" size='small'  >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletartema/${tema.id}`} className="text-decorator-none">
                    <Box >
                      <Button variant="contained" size='small' className='botaoDeletar'>
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
  );
}


export default ListaTema;