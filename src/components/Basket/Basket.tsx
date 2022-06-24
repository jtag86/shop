import { Box, Paper, Typography, ButtonGroup, Button, Grid, IconButton } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { removeProductFromBasket } from '../../redux/actionCreators/addProductsToBasket'
import { useAppSelector } from '../../hooks/hook'
import { MAIN } from '../../utils/consts'


const Basket = () => {
  const products = useAppSelector(state => state.basket.products)
  console.log(products)

  const dispatch = useDispatch()
  const handleClick = (articul: string) => {
    dispatch(removeProductFromBasket(articul))
  }

  const totalCost = products?.reduce((prev, cur) => {
    return prev + parseInt(cur.cost.value)
  }, 0)




  return <Box>
    <NavLink style={{ textDecoration: 'none' }} to={MAIN}>
      <Box ml={10} sx={{fontSize: '24px'}}>
        <Button>На главную</Button>
      </Box>
    </NavLink>
    {
      products.map(product => (
        <Box p={2} mx={20}>
          <Paper>
            <Grid container>
              <Grid item xs={1}>
                <Box
                  onClick={() => handleClick(product.articul)}
                  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}
                >
                  <IconButton>
                    <DeleteIcon color="warning" fontSize='large'/>
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box mx="auto" my={3} sx={{width: '100px', height: '100px'}}>
                  <img style={{maxWidth: '100%', maxHeight: '100%'}} src={product.url} />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box p={2} sx={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
                  <NavLink style={{ textDecoration: 'none' }} to={`/products/${product.articul}`}>
                    <Box m={1} sx={{fontSize: '24px'}}>
                      {`${product.brandArr.value} ${product.modelArr.value} `}
                    </Box>
                  </NavLink>
                  <Typography sx={{color: "#666"}}> Артикул: {product.articul}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box m={5}>
                  <Typography variant="h5">{product.cost.value.toLocaleString()} ₸</Typography>
                </Box>
              </Grid>

            </Grid>
          </Paper>
        </Box>
      ))
    }

    <Box p={2} mx={20} >
      <Paper sx={{display: 'flex', justifyContent: 'flex-end', padding: "20px"}}>
        <Typography variant="h4">Общая стоимость:{totalCost} ₸</Typography>
      </Paper>
    </Box>

  </Box>
    
}

export default Basket

function products(products: any) {
  throw new Error('Function not implemented.')
}
