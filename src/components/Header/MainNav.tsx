import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from '../../styles/device'
import { Container, Row } from '../../styles/global'
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
  @media ${device.tablet} {
    background: #0e8ce4;
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
      <Container>
        <Wrapper>
          <Row>
            <Categories show={showCat} handleClickCat={handleClickCat}/>
            <MainNavMenu  />
            <MenuV show={showMenu} handleClickMenu={handleClickMenu} />
          </Row>
        </Wrapper>
      </Container>
    </Bg>
  )
}

export default MainNav