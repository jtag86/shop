import React from 'react'
import { Container } from '../../styles/global'
import { FaFacebookF, FaInstagram, FaRedditAlien, FaTelegram, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { BONUS, COMMENTS, CREDIT, DELIVERY, LEGAL, PAYMENT, PERSONALDATE, WARRANTY } from '../../utils/consts'

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

const FooterSocial = styled.a`
  margin-left: 20px;
  margin-right: 20px;
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

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
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

          </ColumnWrapper>

          <ColumnWrapper>
            <FooterTitle>Интернет-магазин</FooterTitle>
            <FooterSubtitle to={DELIVERY}>Доставка</FooterSubtitle>
            <FooterSubtitle to={PAYMENT}>Оплата</FooterSubtitle>
            <FooterSubtitle to={WARRANTY}>Гарантийное обслуживание</FooterSubtitle>
            <FooterSubtitle to={CREDIT}>Кредитование</FooterSubtitle>
          </ColumnWrapper>

          <ColumnWrapper>
            <FooterTitle>Помощь</FooterTitle>
            <FooterSubtitle to={BONUS}>Бонусная система</FooterSubtitle>
            <FooterSubtitle to={PERSONALDATE}>Персональные данные</FooterSubtitle>
            <FooterSubtitle to={LEGAL}>Юридическим лицам</FooterSubtitle>
            <FooterSubtitle to={COMMENTS}>Отзывы</FooterSubtitle>
          </ColumnWrapper>
        </Row>
        <SocialRow>
          <FooterSocial  target="_blank" href="https://www.instagram.com/">
            <FaInstagram  fontSize={15}/>
          </FooterSocial>
          <FooterSocial target="_blank" href="https://www.youtube.com/">
            <FaYoutube fontSize={15}/>
          </FooterSocial>
          <FooterSocial target="_blank" href="https://web.telegram.org/">
            <FaTelegram fontSize={15}/>
          </FooterSocial>
          <FooterSocial target="_blank" href="https://www.facebook.com/">
            <FaFacebookF fontSize={15}/>
          </FooterSocial>
          <FooterSocial target="_blank" href="https://www.reddit.com/">
            <FaRedditAlien fontSize={15}/>
          </FooterSocial>
        </SocialRow>
      </Wrapper>
    </Container>
  )
}

export default Footer
