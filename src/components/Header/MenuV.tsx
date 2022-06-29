import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { device } from '../../styles/device'
import { NavLink } from 'react-router-dom'
import { BONUS, CATALOG, CREDIT, DELIVERY, PAYMENT, WARRANTY } from '../../utils/consts'

const CatMenuContainer = styled.div`
  @media ${device.desktop} {
    display: none;
  }
  @media ${device.tablet} {
    flex-basis: 160px;
    height: 60px;
    background: #0e8ce4;
    padding-left: 35px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
    margin-left: 20px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    font-size: 16px;
    display: flex;
    @media ${device.mobileS} {
     height: 35px;
    }
  }
`

const CatMenuTitle = styled.div`
  margin-right: 20px;
`

const CatMenuUl = styled.ul<{show: boolean}>`
  @media ${device.desktop} {
    display: none;
  }
  @media ${device.tablet} {
    margin: 0;
    margin-top: 13px;
    padding-left: 0px;
    position: absolute;
    top: 100%;
    left: 0px;
    min-width: 100%;
    background: #0e8ce4;

    box-shadow: 0px 10px 25px rgb(0 0 0 / 10%);
    display: ${props => props.show ? "block" : "none"}
  }
`

const CatMenuLi = styled.li`
  margin: auto;
  display: block;
  width: 95%;
  height: 46px;
  border-bottom: solid 1px #2798e7;
  white-space: nowrap;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  color: #FFFFFF;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
`

interface Props {
  show: boolean;
  handleClickMenu: () => void;
}

const MenuV:React.FC<Props> = ({show, handleClickMenu}) => {
  return (<>
      <CatMenuContainer onClick={() => handleClickMenu()}>
        <CatMenuTitle>МЕНЮ</CatMenuTitle>
        <MenuIcon  style={{ color: "#FFF"}} />
      </CatMenuContainer>
      <CatMenuUl show={show}>
          <CatMenuLi><StyledNavLink to={DELIVERY}>Доставка</StyledNavLink></CatMenuLi>
          <CatMenuLi><StyledNavLink to={PAYMENT}>Оплата</StyledNavLink></CatMenuLi>
          <CatMenuLi><StyledNavLink to={WARRANTY}>Гарантия надежности</StyledNavLink></CatMenuLi>
          <CatMenuLi><StyledNavLink to={CREDIT}>Кредитование</StyledNavLink></CatMenuLi>
          <CatMenuLi><StyledNavLink to={BONUS}>Бонусная система</StyledNavLink></CatMenuLi>
      </CatMenuUl>
    </>
  )
}

export default MenuV