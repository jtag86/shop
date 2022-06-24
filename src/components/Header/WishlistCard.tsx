import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { device } from '../../styles/device'
import { Row, Column } from '../../styles/global'

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
  margin: 10px;
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

      <Row>
        <StyledCard fontSize="large" />
        <Column>
          <WishListTitle>Корзина</WishListTitle>
          <Text>$85</Text>
        </Column>
      </Row>
    </Row>
    </Wrapper>
  )
}

export default WishlistCard