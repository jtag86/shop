import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../styles/device'
import { Container, Row } from '../../styles/global'
import { MAIN } from '../../utils/consts'
import Search from './Search'
import WishlistCard from './WishlistCard'

const StyledRow = styled(Row)`
  flex-wrap: wrap;
  height: 175px;

  @media ${device.tablet} {
    justify-content: space-between;
  }
  @media ${device.mobileL} {
    height: 75px;
  }
`

const Logo = styled(NavLink)`
  font-size: 36px;
  font-weight: 500;
  color: #0e8ce4;
  flex-basis: 20%;
  order: 1;
  text-decoration: none;
`

const HeaderMain = () => {
  return (
    <Container>
      <StyledRow>
        <Logo to={MAIN}>Market</Logo>
        <Search />
        <WishlistCard />
      </StyledRow>
    </Container>
  )
}

export default HeaderMain