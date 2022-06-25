import React from 'react'
import { Card, Box, Typography, Button, Paper, Link } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import { NavLink } from 'react-router-dom';
import Stars from '../Stars/Stars';


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
    <div></div>
  )
}

export default ProductItem