import React from 'react'
import Divider from '@mui/material/Divider';
import { Container, Heading } from '../../styles/global';
import styled from 'styled-components/macro';

const Title = styled.h4`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
`

const Wrapper = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`

const Payment = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Способы оплаты</Heading>
        <Divider />
        <Title>Оплата онлайн</Title>
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

        <Title>Оплата при получении</Title>
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

        <Title>Безналичный расчет для юридических лиц</Title>
        <ul>
          <li style={{padding: '10px'}}>
            Безналичный расчет
          </li>
        </ul>
        <Title>Оплата подарочной картой</Title>
        <ul>
          <li style={{padding: '10px'}}>
            Оплата подарочной картой
          </li>
        </ul>
      </Wrapper>
    </Container>
  )
}

export default Payment  