import React from 'react'
import { Container } from '../../styles/global'
import { FaFacebookF, FaInstagram, FaRedditAlien, FaTelegram, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const FooterMarketName = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #000000;
`

const FooterTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`

const FooterSubtitle = styled(NavLink)`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0,0,0,0.4);
  transition: all 200ms ease;
  text-decoration: none;
  text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
  margin-top: 10px;
  &:hover {
    color: #007bff;
  }
`

const FooterSubtitle2 = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`

const FooterSubtitle3 = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #0e8ce4;
  margin-top: 13px;
`

const FooterContact = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  font-weight: 400;
  color: #828282;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
`

const FooterSocial = styled.div`
  width: 30px;
  height: 30px;
  background: #fafafa;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #007bff;
  }
`

const Wrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  flex-wrap: wrap;
`

const ColumnWrapper = styled.div`
  margin: 10px;
`

const Footer = () => {

  return (
    <Container>
      <Wrapper>
        <Row>
          <ColumnWrapper>
            <FooterMarketName>Market</FooterMarketName>
            <FooterSubtitle2>Есть вопрос? Звоните нам 24/7</FooterSubtitle2>
            <FooterSubtitle3>+38 068 005 3570</FooterSubtitle3>
            <FooterContact>17 Princess Road, London</FooterContact>
            <FooterContact>Grester London NW18JR, UK</FooterContact>
            <Row>
              <FooterSocial>
                <FaInstagram  fontSize={15}/>
              </FooterSocial>
              <FooterSocial>
                <FaYoutube fontSize={15}/>
              </FooterSocial>
              <FooterSocial>
                <FaTelegram fontSize={15}/>
              </FooterSocial>
              <FooterSocial>
                <FaFacebookF fontSize={15}/>
              </FooterSocial>
              <FooterSocial>
                <FaRedditAlien fontSize={15}/>
              </FooterSocial>
            </Row>
          </ColumnWrapper>

          <ColumnWrapper>
            <FooterTitle>Интернет-магазин</FooterTitle>
            <FooterSubtitle to="#">Оплата</FooterSubtitle>
            <FooterSubtitle to="#">Доставка</FooterSubtitle>
            <FooterSubtitle to="#">Кредитование</FooterSubtitle>
            <FooterSubtitle to="#">Акции</FooterSubtitle>
            <FooterSubtitle to="#">Отзывы</FooterSubtitle>
            <FooterSubtitle to="#">Полезные рассылки</FooterSubtitle>
            <FooterSubtitle to="#">Подарочные сертификаты</FooterSubtitle>
            <FooterSubtitle to="#">Гарантийное обслуживание</FooterSubtitle>
            <FooterSubtitle to="#">Юридическим лицам</FooterSubtitle>
          </ColumnWrapper>

          <ColumnWrapper>
            <FooterTitle>Помощь</FooterTitle>
            <FooterSubtitle to="#">Как заказать</FooterSubtitle>
            <FooterSubtitle to="#">Бонусная система</FooterSubtitle>
            <FooterSubtitle to="#">Что такое Шопики</FooterSubtitle>
            <FooterSubtitle to="#">Статусы заказов</FooterSubtitle>
            <FooterSubtitle to="#">Вопросы и ответы</FooterSubtitle>
            <FooterSubtitle to="#">Форум</FooterSubtitle>
            <FooterSubtitle to="#">Конфигуратор компьютера</FooterSubtitle>
            <FooterSubtitle to="#">Помощь в выборе смартфона</FooterSubtitle>
            <FooterSubtitle to="#">Калькулятор блока питания</FooterSubtitle>
          </ColumnWrapper>
        </Row>
      </Wrapper>
    </Container>
  )
}

export default Footer
