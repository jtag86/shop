import React, { useEffect } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import { device } from '../../../../styles/device'

const CatMenuContainer = styled.div`
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


const CatMenuUl = styled.ul<{show: boolean}>`
  margin: 0;
  padding-left: 0px;
  padding-top: 13px;
  position: absolute;
  top: 100%;
  left: 0px;
  min-width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 10px 25px rgb(0 0 0 / 10%);

  @media ${device.tablet} {
    display: ${props =>  props.show ? 'block' : 'none' }
  }
`
const CatMenuLi = styled.li`
  display: block;
  width: auto;
  height: 46px;
  border-bottom: solid 1px #f2f2f2;
  padding-left: 35px;
  padding-right: 30px;
  white-space: nowrap;
`

const CatMenua = styled.a`
  display: block;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  line-height: 46px;
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
    <CatMenuContainer onClick={ () => handleClickCat()}>
      <MenuIcon  style={{ color: "#FFF"}} />
      <CatMenuTitle>
        КАТЕГОРИИ
      </CatMenuTitle>
      <CatMenuUl show={show}>
        <CatMenuLi><CatMenua>Computers & Laptops</CatMenua></CatMenuLi>
        <CatMenuLi><CatMenua>Computers & Laptops</CatMenua></CatMenuLi>
        <CatMenuLi><CatMenua>Computers & Laptops</CatMenua></CatMenuLi>
        <CatMenuLi><CatMenua>Computers & Laptops</CatMenua></CatMenuLi>
        <CatMenuLi><CatMenua>Computers & Laptops</CatMenua></CatMenuLi>
        <CatMenuLi><CatMenua>Computers & Laptops</CatMenua></CatMenuLi>
      </CatMenuUl>
    </CatMenuContainer>
  )
}

export default Categories