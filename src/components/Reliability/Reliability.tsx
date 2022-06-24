import React from 'react'
import { Typography } from '@mui/material'
import { Box, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import shopiknal from '../../assets/img/shopiknal500.jpg'
import Header from '../Header/Header';
import { MAIN } from '../../utils/consts';

const Reliability = () => {
  return (
    <Box>
      <Header />
      <NavLink style={{ textDecoration: 'none' }} to={MAIN}>
        <Box ml={10} sx={{fontSize: '24px'}}>
          <Button>На главную</Button>
        </Box>
      </NavLink>
      <Box  p={3}>
        <Typography variant="h4">Гарантия надёжности</Typography>
        <Divider />
        <Box m={2}>
          <Typography variant="body1">Интернет-магазин работает на онлайн-рынке уже 10 лет. За это время мы доставил более 1 100 000 заказов, наш ассортимент насчитывает более 10 0000 наименований современной цифровой электроники, гаджетов и бытовой техники.</Typography>
        </Box>
        <Box m={2}>
          <Typography variant="body1"><strong>Пять основных показателей нашей надежности:</strong></Typography>
        </Box>
        <Box m={2}>
          <Typography variant="body1"><strong>1. Никаких рисков при оплате</strong></Typography>
        </Box>
        <Typography variant="body1">Вы можете оплатить заказ непосредственно при его получении: в офисе самовывоза, при доставке курьером или наложенным платежом.</Typography>
        <Box m={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={shopiknal} />
        </Box>
        <Box m={2}>
          <Typography variant="body1"><strong>3. Широкая сеть магазинов</strong></Typography>
        </Box>

        <Divider />

     
      </Box>
    </Box>
  )
}

export default Reliability  