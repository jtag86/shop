import React, { useEffect } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { device } from '../../styles/device'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.div`
  z-index: 2;
  width: 260px;
  height: 60px;
  background: #0e8ce4;
  padding-left: 35px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media ${device.laptop} {
    font-size: 16px;
    width: 200px;
  }
  @media ${device.mobileS} {
    height: 35px;
  }
`

const CatMenuTitle = styled.div`
  margin-left: 20px;
`

const Ul = styled.ul<{show: boolean}>`
  margin: 0;
  padding-left: 0px;
  padding-top: 13px;
  position: absolute;
  top: 100%;
  left: 0px;
  min-width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 10px 25px rgb(0 0 0 / 10%);
  display: ${props =>  props.show ? 'block' : 'none' }

`
const Li = styled.li`
  display: block;
  width: auto;
  height: 26px;
  border-bottom: solid 1px #f2f2f2;
  padding-left: 35px;
  padding-right: 30px;
  white-space: nowrap;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  line-height: 26px;
  text-decoration: none;
  @media ${device.laptop} {
    font-size: 14px;
  }
`

interface Props {
  show: boolean,
  handleClickCat: () => void
}

const Categories: React.FC<Props> = ({show, handleClickCat}) => {
  return (
    <Wrapper onClick={ () => handleClickCat()}>
      <MenuIcon  style={{ color: "#FFF"}} />
      <CatMenuTitle>
        КАТЕГОРИИ
      </CatMenuTitle>
      <Ul show={show}>
        <Li><StyledNavLink to={`/catalog/Материнские платы`}>Материнские платы</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Процессоры`}>Процессоры</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Оперативная память`}>Оперативная память</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Видеокарты`}>Видеокарты</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Жесткие диски`}>HDD</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/SSD диски`}>SSD</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Блоки питания`}>Блоки питания</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Корпуса`}>Корпуса</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Смартфоны`}>Смартфоны</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Телефоны`}>Телефоны</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Электронные книги`}>Электронные книги</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Чехлы для телефона`}>Чехлы для телефонов</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Моноподы`}>Моноподы</StyledNavLink></Li>
        <Li><StyledNavLink to={`/catalog/Зарядные устройства`}>Зарядные устройства</StyledNavLink></Li>
      </Ul>
    </Wrapper>
  )
}

export default Categories