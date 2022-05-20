import React from 'react'
// import Icon from '../Icon/Icon'
import { Box } from '@mui/material'
import delivery from '../../assets/img/icons/benefits-delivery.png'
import bonus from '../../assets/img/icons/benefits-bonus.png'
import payment from '../../assets/img/icons/benefits-payment.png'
import support from '../../assets/img/icons/benefits-support.png'
import warranty from '../../assets/img/icons/benefits-warranty.png'

const MainBottomRow = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "50px"}}>
      {/* <Icon image={delivery} text={"Доставка по всей стране"} />
      <Icon image={support} text={"Поддержка 7 дней"} />
      <Icon image={bonus} text={"Накопительная бонусная система"} />
      <Icon image={payment} text={"Оплата наличными при получении"} />
      <Icon image={warranty} text={"Гарантия качества"} /> */}
    </Box>
  )
}

export default MainBottomRow