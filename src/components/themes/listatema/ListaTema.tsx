import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';

function ListaTema() {
  let navigate = useNavigate()

  //useState de temas
  const [temas, setTemas] = useState<Tema[]>([])

  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    if (token === "") {
      alert("Você precisar estar logado")
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
              <CardMedia component="img" height="194" image="https://i.imgur.com/cZ77Y44.png" alt="Paella dish" />
              <CardContent>
                <Typography className='textos' gutterBottom>Tema</Typography>
                <Typography className='textos' variant="h5" component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
                  <Link to={`/formulariotema/${tema.id}`} className="text-decorator-none">
                    <Box >
                      <Button variant="contained" className="botaoAtualizar" size='small'  >
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