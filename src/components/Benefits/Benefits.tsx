import React from 'react'
import Container  from './Container'
import { Box } from '@mui/material'
import delivery from '../../../../assets/img/icons/benefits-delivery.png'
import bonus from '../../../../assets/img/icons/benefits-bonus.png'
import payment from '../../../../assets/img/icons/benefits-payment.png'
import support from '../../../../assets/img/icons/benefits-support.png'
import warranty from '../../../../assets/img/icons/benefits-warranty.png'

const MainBottomRow = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: 3}}>
      <Container image={delivery} text={"Доставка по всей стране"} />
      <Container image={support} text={"Поддержка 7 дней"} />
      <Container image={bonus} text={"Накопительная бонусная система"} />
      <Container image={payment} text={"Оплата наличными при получении"} />
      <Container image={warranty} text={"Гарантия качества"} />
    </Box>
  )
}

export default MainBottomRow