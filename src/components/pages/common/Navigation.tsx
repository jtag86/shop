import React from 'react'
import { Link, Typography } from '@mui/material'
import Search  from '../../UI/Search'
import Box from '@mui/material/Box'

const Navigation = () => {
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
    </Box>
  )
}

export default Navigation

