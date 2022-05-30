import React from 'react'
import { Card, Box, Typography, Button, Paper, Link } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import Stars from '../../UI/Stars';
import { NavLink } from 'react-router-dom';


interface IItem {
  [key: string]: any
}

interface Props {
  item: IItem
}

const ProductItem: React.FC<Props> = ({item}) => {
  let text = ''

  for(let prop in item) {
    if(item[prop].name==='title') continue
    if(item[prop].name==='Цена') continue
    if(item[prop].name==='Брэнд') continue
    if(item[prop].name==='Модель') continue
    text+=item[prop].name
    text+=": "
    text+=item[prop].value
    text+=" / "
  }
  return (
    <Card sx={{margin: 3}}>
      <Box sx={{display: 'flex', justifyContent: "space-between"}}>
        <Paper 
          elevation={3} 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '200px', 
            height: '200px',
            padding: 1,
            margin: 2
          }}>
          <img style={{maxWidth: '100%', maxHeight: '100%'}} src={item.url} loading="lazy"/>
        </Paper>

        <Box sx={{flexBasis: '600px', height: "200px", overflow: 'hidden', margin: 1,}}>
          <NavLink style={{ textDecoration: 'none'}} to={`/products/${item.articul}`} >
            <Box m={1} sx={{fontSize: '24px'}}>
              {`${item.brandArr.value} ${item.modelArr.value} `}
            </Box>
          </NavLink>
          <Box sx={{color: '#515151', fontSize: '14px', fontWeight: "bold"}}>
            <Typography variant='subtitle1'>
              Артикул: {item.articul}
            </Typography>
          </Box>
          <Box sx={{color: '#616161cf', fontSize: '13px'}}>
            <Typography>
              {text}
            </Typography>
          </Box>
        </Box>

        <Box sx={{flexBasis: '200px', overflow: 'hidden', margin: 1, }}>
          <Box 
            sx={{
              display: 'flex', 
              justifyContent: 'center', 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: '#aaa', 
              textDecoration: 'line-through',
              marginTop: 2
            }}
          >
            {item.cost.value - 10000} ₸
          </Box>
          <Box 
            sx={{
              display: 'flex', 
              justifyContent: 'center', 
              fontSize: '26px', 
              fontWeight: 'bold', 
              color: '#444'
            }}
          >
            {item.cost.value} ₸
          </Box>
          <Box m={2}>
            <Button fullWidth={true} variant="contained" color='warning'>Купить</Button>
          </Box>
          <Box m={2}>
            <Button sx={{fontSize: '12px'}} fullWidth={true} variant="contained" >Оформить кредит</Button>
          </Box>
          <Box ml={3} mr={3} sx={{display: 'flex',  alignItems: 'center', justifyContent: 'space-around'}}>
            <FavoriteBorderIcon color="warning" fontSize='large'/>
            <ScaleRoundedIcon />
          </Box>
        </Box>
      </Box>
      <Box m={1}  sx={{display: 'flex'}}>
        <Box sx={{display: 'flex'}}>
          <Stars />
        </Box>
        <Typography>
          <Box component="span" sx={{color: '#337ab7'}}>
            Отзывы [1]
          </Box>
          Рекомендовано 1 раз
        </Typography>
      </Box>
    </Card>
  )
}

export default ProductItem