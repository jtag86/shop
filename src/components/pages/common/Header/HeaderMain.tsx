import React from 'react'
import styled from 'styled-components'
import { device } from '../../../../styles/device'
import Search from './Search'
import { FlexCol } from '../../../../styles/components'
import WishlistCard from './WishlistCard'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  height: 175px;
  width: 1170px;

  @media ${device.laptop} {
    max-width: 992px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    max-width: 720px;
  }
  @media ${device.mobileL} {
    max-width: 550px;
    height: 75px;

  }
  @media ${device.mobileS} {
    max-width: 90%;
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
    <Wrapper>
      <Logo>Market</Logo>
      <Search />
      <WishlistCard />
    </Wrapper>
  )
}

export default HeaderMain