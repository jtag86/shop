import React from 'react'
import { Link, Typography } from '@mui/material'
import Search  from '../../UI/Search'
import Box from '@mui/material/Box'

const Navigation = () => {
  return (
    <Typography
      variant= "h6"
      sx={{
        paddingLeft: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
      }}
    >
      <Link underline="none">
        Доставка
      </Link>
      <Link underline="none">
        Оплата
      </Link>
      <Link underline="none">
        Гарантия надежности
      </Link>
      <Link underline="none" sx={{color: '#e45757'}}>
        Купить дешевле
      </Link>
      <div>
        <Search />
      </div>
    </Typography>
  )
}

export default Navigation

