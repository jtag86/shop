import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../../../styles/device'
import Categories from './Categories'
import MainNavMenu from './MainNavMenu'
import MenuV from './MenuV'

const Bg = styled.div`
  width: 100%;
  border-top: solid 1px #f2f2f2;
  box-shadow: 0px 5px 20px rgb(0 0 0 / 10%);
  background: #FFFFFF;
  @media ${device.tablet} {
    margin-top: 0px;
  }

`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  position: relative;
  @media ${device.desktop} {
    max-width: 1170px;
  }
  @media ${device.laptop} {
    max-width: 992px;
  }
  @media ${device.tablet} {
    background: #0e8ce4;
    max-width: 720px;
    font-size: 12px;
  }
  @media ${device.mobileL} {
    max-width: 576px;
  }
  @media ${device.mobileS} {
    height: 35px;
  }
`

const MainNav = () => {
  const [showCat, setShowCat] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleClickCat = () => {
    setShowCat(!showCat)
    setShowMenu(false)
  }

  const handleClickMenu = () => {
    setShowCat(false)
    setShowMenu(!showMenu)
  }

  return (
    <Bg>
      <Wrapper>
        <Categories show={showCat} handleClickCat={handleClickCat}/>
        <MainNavMenu  />
        <MenuV show={showMenu} handleClickMenu={handleClickMenu} />
      </Wrapper>
    </Bg>
  )
}

export default MainNav