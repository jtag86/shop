import { Box, Paper } from '@mui/material'
import React from 'react'
import logo from '../../../assets/img/logo.jpg'
import Search from '../../UI/Search'

const Header = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-around", padding: 1}}>
      <Paper sx={{width: "150px"}}>
        <img src={logo} style={{width: "100%"}}/>
      </Paper>
     
      <Box>
        <Search />
      </Box>
    </Box>
  )
}

export default Header