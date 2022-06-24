import { Typography } from '@mui/material'
import { Box, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import Header from '../Header/Header';
import { MAIN } from '../../utils/consts';

const Payment = () => {
  return (
    <Box>
      <Header />
      <NavLink style={{ textDecoration: 'none' }} to={MAIN}>
        <Box ml={10} sx={{fontSize: '24px'}}>
          <Button>На главную</Button>
        </Box>
      </NavLink>
      <Box  p={3}>
        <Typography variant="h4">Способы оплаты</Typography>
        <Divider />
        <Typography variant="h5">Оплата онлайн</Typography>
        <ul>
          <li style={{padding: '10px'}}>
            Оплата банковской картой онлайн
          </li>
          <li style={{padding: '10px'}}>
            Оплата через Kaspi QR
          </li>
          <li style={{padding: '10px'}}>
            Оплата через QIWI
          </li>
        </ul>

        <Divider />

        <Typography variant="h5">Оплата при получении</Typography>
        <ul>
          <li style={{padding: '10px'}}>
            Оплата банковской картой или QR в пунктах самовывоза
          </li>
          <li style={{padding: '10px'}}>
            Оплата банковской картой курьеру
          </li>
          <li style={{padding: '10px'}}>
            Оплата наличными в пунктах самовывоза
          </li>
          <li style={{padding: '10px'}}>
            Оплата наличными курьеру
          </li>
          <li style={{padding: '10px'}}>
            Наложенный платеж EMS
          </li>
          <li style={{padding: '10px'}}>
            Наложенный платеж АО «Казпочта»
          </li>
        </ul>
        <Divider />

        <Typography variant="h5">Безналичный расчет для юридических лиц</Typography>
        <ul>
          <li style={{padding: '10px'}}>
            Безналичный расчет
          </li>
        </ul>
        <Typography variant="h5">Оплата подарочной картой</Typography>
        <ul>
          <li style={{padding: '10px'}}>
            Оплата подарочной картой
          </li>
        </ul>

      </Box>
    </Box>
  )
}

export default Payment  