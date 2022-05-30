import React, { useState } from 'react'
import { Button, Card, CardContent, CardMedia, Typography, Box, Paper } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IProducts } from '../../../redux/reducers/productsReducer'
import { NavLink } from 'react-router-dom';

interface Props {
  product: IProducts
}

const CarouselCard: React.FC<Props> = ({product}) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <Paper sx={{margin: 1}} elevation={2}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{display: "flex", justifyContent: 'space-between'}}>
          <Box           
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100px', 
              height: '100px',
              margin: 1
            }}
          >
            <img style={{maxWidth: '100%', maxHeight: '100%'}} src={product.url} />
          </Box>
          <NavLink to={`/products/${product.articul}`} style={{ textDecoration: 'none' }} >
            <Box sx={{display: 'flex', jusctifyContent: 'center', alignItems: 'center', }} m={2}>
            {product.brandArr.value}<br/> {product.modelArr.value} <br/> {product.articul}
            </Box>
          </NavLink>
        </Box>
        
        <CardContent>
            <Typography sx={{textDecoration:  "line-through", color: "#999"}} gutterBottom variant="h6" component="div" align="center">
            {product.cost.value-10000} ₸
          </Typography>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {product.cost.value} ₸
          </Typography>
          <Box
            sx={{display: "flex", justifyContent: "space-around", marginTop: "10px"}}
          >
            <Button variant='contained' color="warning">
              В КОРЗИНУ
            </Button>
            <FavoriteBorderIcon fontSize="large" color="warning" sx={{display: "flex", justifyContent: "center", alignItems: "center", }}/>
          </Box>
        </CardContent>
      </Box>
    </Paper>
  )
}

export default CarouselCard