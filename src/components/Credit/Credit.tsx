import React from 'react'
import styled from 'styled-components/macro'
import Divider from '@mui/material/Divider';
import { Container, Heading, Text, Title } from '../../styles/global';

const Wrapper = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`

const StyledLi = styled.li`
  margin-bottom: 20px;
  margin-left: 20px;
`

const Credit = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>ПАРТНЁРСКАЯ ПРОГРАММА КРЕДИТОВАНИЯ ВАШИХ ПОКУПАТЕЛЕЙ</Heading>
        <Divider />
        <Text>
          Развитие Вашего бизнеса зависит от покупательской способности ваших клиентов. Статусбанк предлагает подключиться к программе кредитования ваших покупателей и увеличить объем продаж. Партнерская программа кредитования ваших покупателей - это удобно Вам и Вашим клиентам: без посещения банка, без лишних документов, мгновенное перечисление денежных средств на счет клиента.
        </Text>
        <Divider />
        <Title>Почему кредитование с нами выгодно?</Title>
        <Title>Оплата при получении</Title>
        <ul>
          <StyledLi>
            Никаких затрат и легкое внедрение в рабочий процесс
          </StyledLi>
          <StyledLi>
            Рост продаж от 10% и увеличение среднего чека
          </StyledLi>
          <StyledLi>
            Экономия на комиссии за эквайринг и инкассацию
          </StyledLi>
          <StyledLi>
            Минимальный документооборот либо полное его отсутствие
          </StyledLi>
        </ul>
        <Divider />
        <Title>Клиенты будут довольны!</Title>
        <ul>
          <StyledLi>
            Оформление кредита без посещения банка
          </StyledLi>
          <StyledLi>
            Принятие решений от 1 минуты
          </StyledLi>
          <StyledLi>
            Мгновенное перечисление денежных средств
          </StyledLi>
        </ul>
      </Wrapper>
    </Container>
  )
}

export default Credit