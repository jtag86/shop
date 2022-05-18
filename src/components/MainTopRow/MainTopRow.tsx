import React from 'react'
import { Typography } from '@mui/material'
import Search  from '../Search/Search'
import Box from '@mui/material/Box'

const MainTopRow = () => {
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
      <span style={{color: '#337ab7'}}>
        Доставка
      </span>
      <span style={{color: '#337ab7'}}>
        Оплата
      </span>
      <span style={{color: '#337ab7'}}>
        Гарантия надежности
      </span>
      <span style={{color: '#e45757'}}>
        Купить дешевле
      </span>
      <div>
        <Search />
      </div>
    </Typography>
  )
}

export default MainTopRow

