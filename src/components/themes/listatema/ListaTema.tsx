import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';

function ListaTema() {

  return (
    <>
      <Box className='backBox'>
        <Card className='cardback'>
          <CardContent>
            <Typography className='textos' gutterBottom>Tema</Typography>
            <Typography className='textos' variant="h5" component="h2">
              Minha descrição
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >
              <Link to="" className="text-decorator-none">
                <Box >
                  <Button variant="contained" className="botaoAtualizar" size='small'  >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
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
    </>
  );
}


export default ListaTema;