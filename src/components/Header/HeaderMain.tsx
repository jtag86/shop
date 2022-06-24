import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/device'
import { Container, Row } from '../../styles/global'
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

const Logo = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: #0e8ce4;
  flex-basis: 20%;
  order: 1;
`

const HeaderMain = () => {
  return (
    <Container>
      <StyledRow>
        <Logo>Market</Logo>
        <Search />
        <WishlistCard />
      </StyledRow>
    </Container>
  )
}

export default HeaderMain