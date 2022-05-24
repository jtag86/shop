import React from 'react'
import { Box, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { useParams } from 'react-router-dom'
import Header from '../common/Header'
import Menu from '../common/Menu/Menu'
import Navigation from '../common/Navigation'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { CATALOG, MAIN } from '../../../utils/consts'
import { useAppSelector } from '../../../hooks/hook'
import { getProductSelector } from '../../../redux/selectors/productSelector'
import CheckIcon from '@mui/icons-material/Check'
import Heart from '../../UI/Heart'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const Product = () => {
  const {articul} = useParams()
  
  const arr = useAppSelector(state => getProductSelector(state, articul!))
  const product = arr![0]
  console.log(product)
  if(!product) return <Typography>Товар отсутстввует</Typography>

  return (
    <div>
      <Box>
        <Header />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box flexGrow={0} m={1}>
            <Menu alwaysVisible={false} />
          </Box>
          <Box flexGrow={2}>
            <Navigation />
          </Box>
        </Box>
        <Box m={1}>
          <Breadcrumbs>
            <Link underline='hover' href={MAIN}>
              Главная
            </Link>
            <Link underline='hover' href={CATALOG}>
              {product.title.value}
            </Link>
            <Typography>{product.brandArr.value + " " + product.modelArr.value}</Typography>
          </Breadcrumbs>
        </Box>
        <Box m={2}>
          <Typography variant='h4'>{product.brandArr.value} {product.modelArr.value}</Typography>
        </Box>

        <Grid container>
          <Grid item xs={4}>
            <Box m={3} sx={{}}>
              <Paper elevation={1} sx={{padding: 2}}>
                <img src={product.url} style={{width: '100%'}} />
              </Paper>
            </Box>
          </Grid>
          <Grid container item xs={4} m={2}>
              <Grid item xs={6}>
                <Box sx={{textDecoration: "line-through", color: "#888"}}>
                  <Typography variant='h4'>
                    {(product.cost.value - 10000).toLocaleString()}₸
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='h3'>
                    {(product.cost.value - 0).toLocaleString()}₸
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box m={1}>
                  <Button variant='contained' color="warning" fullWidth={true}>
                    Купить
                  </Button>
                </Box>
                <Box m={1}>
                  <Button variant='contained' fullWidth={true}>
                    Оформить кредит
                  </Button>
                </Box>
              </Grid>
              <Box sx={{overflow: 'hidden', height: '270px'}}>
                <List>
                  {
                    Object.keys(product).map(item => (
                        <Typography>
                          <ListItem sx={{margin: '0', padding: '0'}}>
                            <ListItemIcon>
                              <CheckIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary={product[item].name + ": " + product[item].value} />
                          </ListItem>
                        </Typography>
                    
                    ))
                  }
                </List>
              </Box>
              <Box>
                <Heart />
              </Box>
          </Grid>
          <Grid item xs={3}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DirectionsCarIcon fontSize="large" color="info" />
                  </ListItemIcon>
                  <Typography variant="h6">БЫСТРАЯ ДОСТАВКА</Typography>
                </ListItem>
                <Box ml={4}>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">доставка по всей стране</Typography>
                  </ListItem>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">проверка товара перед отправкой</Typography>
                  </ListItem>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">рассчитать стоимость доставки</Typography>
                  </ListItem>
                </Box>
                <ListItem >
                  <ListItemIcon>
                    <DirectionsCarIcon fontSize="large" color="info" />
                  </ListItemIcon>
                  <Typography variant="h6">ОПЛАТА</Typography>
                </ListItem>
                <Box ml={4}>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">при получении</Typography>
                  </ListItem>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">безналичный расчет</Typography>
                  </ListItem>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">банковской картой</Typography>
                  </ListItem>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">в рассрочку и кредит</Typography>
                  </ListItem>
                </Box>

                <ListItem >
                  <ListItemIcon>
                    <CheckCircleOutlineIcon fontSize="large" color="info" />
                  </ListItemIcon>
                  <Typography variant="h6">УСЛУГИ И ГАРАНТИЯ</Typography>
                </ListItem>
                <Box ml={4}>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">сертифицированный товар</Typography>
                  </ListItem>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">официальная гарантия 36 месяцев</Typography>
                  </ListItem>
                  <ListItem sx={{padding: 0}}>
                    <ListItemIcon>
                      <CheckCircleIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography variant="subtitle1">более 20 сервисных центров по стране</Typography>
                  </ListItem>
                </Box>
              </List>
          </Grid>
        </Grid>

        <Box ml={4}>
          <Typography variant="h4" color="#444">Технические характеристики</Typography>
        </Box>
        <TableContainer component={Paper}>
          <Box m={4}>

            <Table>
              <TableBody>
                {
                  Object.keys(product).map(item => (
                    <TableRow
                      key={product.articul.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left" sx={{width: "400px"}}>
                        <Typography variant="h6" color="#777">{product[item].name}</Typography>
                      </TableCell>
                      <TableCell align="left" sx={{width: "400px"}}>
                        <Typography variant="h6" color="#777">{product[item].value}</Typography>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </Box>
          
        </TableContainer>
      </Box>
    </div>
  )
}

export default Product