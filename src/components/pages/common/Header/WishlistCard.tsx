import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { device } from '../../../../styles/device'

const FlexOrder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 30%;
  order: 3;
  @media ${device.tablet} {
    order: 2;
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 40%;
`

const StyledHeart = styled(FavoriteBorderIcon)`
  margin: 10px;
  
`

const StyledCard = styled(ShoppingCartOutlinedIcon)`
  margin: 10px;
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

const WishListTitle = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
`

const Text = styled.div`
  color: #a3a3a3;
  font-size: 14px;
  text-align: left;
  margin-top: 7px;

`

const WishlistCard = () => {
  return (<FlexOrder>
      <Flex>
        <StyledHeart fontSize="large" />
        <FlexCol>
          <WishListTitle>Желания</WishListTitle>
          <Text>115</Text>
        </FlexCol>
      </Flex>

      <Flex>
        <StyledCard fontSize="large" />
        <FlexCol>
          <WishListTitle>Корзина</WishListTitle>
          <Text>$85</Text>
        </FlexCol>
      </Flex>
    </FlexOrder>
  )
}

export default WishlistCard