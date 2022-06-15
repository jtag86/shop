import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../common/Header/Header'
import Menu from '../common/Menu/Menu'
import Navigation from '../common/Navigation'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { comments } from '../../../assets/data/comments'
import { v4 } from 'uuid'

const Comments = () => {
  return (
    <Box>
        <Header />
        <Grid container>
          <Grid item xs={3}>
            <Menu alwaysVisible={false}/>
          </Grid>
          <Grid item xs={8}>
            <Navigation />
          </Grid>
        </Grid>
        <Box m={2} sx={{textAlign: 'center'}}>
          <Typography variant="h4">Отзывы покупателей</Typography>
        </Box>
        <Box mx={10}>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {
                comments.map(row => (
                  <TableRow
                    key={v4()}
                  >
                    <TableCell>
                      <Box sx={{width: '50px', backgroundColor: "#639114", height: '50px', borderRadius: '50%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}} mx="auto">
                        <Typography variant = 'h4'>5</Typography>
                      </Box> 
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{row.name}</Typography>
                      <Box sx={{overflow: 'auto', height: '60px'}}>
                        <Typography variant="body2">{row.text}</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        </Box>

    </Box>
  )
}

export default Comments