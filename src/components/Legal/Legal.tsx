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

const StyledLi = styled.li`
  margin-bottom: 20px;
  margin-left: 20px;
`

const Legal = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Юридическим лицам</Heading>
        <Title>Мы предлагаем:</Title>
        <ul>
          <StyledLi>Для юридических лиц доступны товары, находящиеся не только на конкретных магазинах, но и складах, магазинах, находящихся в других городах, а также собранные грузы с нескольких подразделений компании</StyledLi>
          <StyledLi>ДНС является авторизованным партнером крупнейших производителей цифровой и бытовой техники. Что позволяет нам закупать товар без посредников, исключает случаи возникновения подделок и снижает стоимость.</StyledLi>
          <StyledLi>Мы сотрудничаем со всеми брендами, представленными в нашей сети, вы можете воспользоваться не только нашей сетью сервисных центров, но и авторизованными сервисными центрами производителей.</StyledLi>
          <StyledLi>Работаем с юридическими лицами и предпринимателями. Удобно, прозрачно и без лишней бюрократии.</StyledLi>
        </ul>
      </Wrapper>
    </Container>
  )
}

export default Legal