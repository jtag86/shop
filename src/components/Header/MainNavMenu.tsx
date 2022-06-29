import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../styles/device'
import { BONUS, CREDIT, DELIVERY, PAYMENT, WARRANTY } from '../../utils/consts'

const MainNavUl = styled.ul`
  list-style: none;
  margin: auto;
  @media ${device.tablet} {
    display: none;
  }
`
const MainNavLi = styled.li`
  display: inline-block;
  position: relative;
  height: 56px;
  margin-right: 17px;
  margin-left: 17px;
`
const MainNavLink = styled(NavLink)`
  font-size: clamp(0.4rem, 1.5vw, 1rem);
  font-weight: 400;
  color: #a19a9a;
  line-height: 60px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const MainNavMenu = () => {
  return (
    <MainNavUl>
      <MainNavLi><MainNavLink to={DELIVERY}>Доставка</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to={PAYMENT}>Оплата</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to={WARRANTY}>Гарантия надежности</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to={CREDIT}>Кредитование</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to={BONUS}>Бонусная система</MainNavLink></MainNavLi>
    </MainNavUl>
  )
}

export default MainNavMenu