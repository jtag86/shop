import React, { useState } from 'react'
import { Button, Card, CardContent, CardMedia, Typography, Box, Paper } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const hoverStyle = {
  border: "1px solid #ccc"
}

interface Props {
  image: string,
  cost: number,
  text: string
}

const CarouselCard: React.FC<Props> = ({image, cost, text}) => {

  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <Paper 
      elevation={0} 
      sx={ hover ? { width: "90%" , margin: "0 auto", border: "1px solid #ccc"} : { width: "90%" , margin: "0 auto"}} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={image}/>
      </Box>
      <CardContent>
          <Typography sx={{textDecoration:  "line-through", color: "#999"}} gutterBottom variant="h6" component="div" align="center">
          {cost-10000} ₸
        </Typography>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {cost} ₸
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center">
          {text}
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
    </Paper>
  )
}

export default CarouselCard