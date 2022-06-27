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
  const items = useAppSelector(state => state.basket.items)
  console.log(items)

  const dispatch = useDispatch()
  const handleClick = (articul: string) => {
    dispatch(removeProductFromBasket(articul))
  }

  /*const totalCost = products?.reduce((prev, cur) => {
    return prev + parseInt(cur.cost.value)
  }, 0)*/




  return <div></div>
   
    
}

export default Basket

function products(products: any) {
  throw new Error('Function not implemented.')
}
