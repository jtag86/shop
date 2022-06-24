import React from 'react'
import styled from 'styled-components/macro'
import DeliveryImage from '../../assets/img/icons/benefits-delivery.png'
import benefitsPayment from '../../assets/img/icons/benefits-payment.png'
import BenefitsSupport from '../../assets/img/icons/benefits-support.png'
import BenefitsBonus from '../../assets/img/icons/benefits-bonus.png'
import benefitsWarranty from '../../assets/img/icons/benefits-warranty.png'
import Item from './Item'
import { Container, Row } from '../../styles/global'
import { device } from '../../styles/device'

const Wrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
`

const StyleRow = styled(Row)`
  flex-wrap: wrap;
  @media ${device.mobileL} {
    justify-content: center;
  }
`

const Characters = () => {
  return (
    <Container>
      <Wrapper>
        <StyleRow justifyContent='space-around'>
          <Item image={DeliveryImage} text="Доставка по всей стране"/>
          <Item image={BenefitsSupport} text="Поддержка 7 дней в неделю"/>
          <Item image={benefitsPayment} text="Оплата наличными при получении"/>
          <Item image={BenefitsBonus} text="Накопительная бонусная система"/>
          <Item image={benefitsWarranty} text="Гарантия качества"/>
        </StyleRow>
      </Wrapper>
    </Container>

  )
}

export default Characters