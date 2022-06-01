import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Search  from '../../UI/Search'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useAppSelector } from '../../../hooks/hook'
import { BASKET } from '../../../utils/consts'


const Navigation = () => {
  const [basketSize, setBasketSize] = useState<number>()
  const basket = useAppSelector(state => state.basket.products)
  useEffect(() => {
    setBasketSize(basket.length)
  }, [basket.length])
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: '22px',
        fontWeight: 'bold',
        mt: 1
      }}
    >
       <NavLink style={{ textDecoration: 'none'}} to={BASKET} >
        Доставка
      </NavLink>
      <NavLink style={{ textDecoration: 'none'}} to={BASKET} >
        Оплата
      </NavLink>
      <NavLink style={{ textDecoration: 'none'}} to={BASKET} >
        Гарантия надежности
      </NavLink>
      <NavLink style={{ textDecoration: 'none'}} to={BASKET} >
        Купить дешевле
      </NavLink>
      <Box>
        <NavLink style={{ textDecoration: 'none'}} to={BASKET} >
          <IconButton aria-label="cart">
            <Badge badgeContent={basketSize} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </NavLink>
      </Box>
    </Box>
  )
}

export default Navigation

