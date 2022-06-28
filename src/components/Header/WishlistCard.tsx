import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { device } from '../../styles/device'
import { Row, Column } from '../../styles/global'
import { NavLink } from 'react-router-dom'
import { BASKET } from '../../utils/consts'
import { useAppSelector } from '../../hooks/hook'

const Wrapper = styled.div`
  flex-basis: 30%;
  order: 3;
  @media ${device.tablet} {
    order: 2;
  }
`

const StyledHeart = styled(FavoriteBorderIcon)`
  margin: 10px;
`

const StyledCard = styled(ShoppingCartOutlinedIcon)`
  color:  #333;
  margin: 10px;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #222;
`

const WishListTitle = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
`

const Text = styled.div`
  color: #a3a3a3;
  font-size: clamp(1rem, 2.0vw, 1.5rem);
  text-align: left;
  margin-top: 7px;

`

const WishlistCard = () => {
  const { basketCost } = useAppSelector(state => state.basket)



  return (
  <Wrapper>
    <Row>
      <Row>
        <StyledHeart fontSize="large" />
        <Column>
          <WishListTitle>Желания</WishListTitle>
          <Text>115</Text>
        </Column>
      </Row>
      <StyledNavLink to={BASKET}>
        <Row>
          <StyledCard fontSize="large" />
          <Column>
            <WishListTitle>Корзина</WishListTitle>
            <Text>{basketCost}₸</Text>
          </Column>
        </Row>
      </StyledNavLink>
    </Row>
    </Wrapper>
  )
}

export default WishlistCard