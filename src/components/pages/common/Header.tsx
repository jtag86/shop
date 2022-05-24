import { Box } from '@mui/material'
import React from 'react'
import logo from '../../../assets/img/logo.png'
const Header = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", padding: 1}}>
      <Box sx={{width: "150px"}}>
        <img src={logo} style={{width: "100%"}}/>
      </Box>
      <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center', fontSize: '20px'}}>
        <div>+7 <span style={{color: 'red'}}>(1111)</span> 11-11-11</div>
        <div>+7 (2222) 22-22-22</div>
        Ваш город: Алматы <br/>
        Адреса и телефоны
      </Box>
      <div>
        <div>Вход в личный кабинет</div>
        <div>Регистрация</div>
        
      </div>
    </Box>
  )
}

export default Header