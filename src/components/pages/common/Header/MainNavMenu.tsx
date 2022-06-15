import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../../../styles/device'

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
  font-size: 18px;
  font-weight: 400;
  color: #a19a9a;
  line-height: 60px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media ${device.laptop} {
    font-size: 14px;
  }
`



const MainNavMenu = () => {
  return (
    <MainNavUl>
      <MainNavLi><MainNavLink to="#">Доставка</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to="#">Оплата</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to="#">Гарантия надежности</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to="#">Кредитование</MainNavLink></MainNavLi>
      <MainNavLi><MainNavLink to="#">Бонусная система</MainNavLink></MainNavLi>
    </MainNavUl>
  )
}

export default MainNavMenu