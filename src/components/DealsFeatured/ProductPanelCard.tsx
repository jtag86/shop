import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IProducts } from '../../redux/reducers/productsReducer'
import { device } from '../../styles/device'

const Wrapper = styled.div`
  margin-top: 50px;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const WrapperImage = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobileS} {
    width: 200px;
    height: 200px;
  }
`

const Image =styled.img`
  max-width: 100%;
  max-height: 100%;
`

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: 25px;
  color: #df3b3b;
  @media ${device.mobileS} {
    font-size: 20px;
  }
`
const ProductPriceSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: rgba(0,0,0,0.6);
  margin-left: 10px;
  @media ${device.mobileS} {
    font-size: 20px;
  }
`

const ProductName = styled(NavLink)`
  text-align: center;
  margin-top: 5px;
  text-decoration: none;
  font-size: 10px;
  font-weight: 400;
  color: #000000;
  white-space: nowrap;
  @media ${device.mobileS} {
    font-size: 20px;
  }
  `

interface Props {
  product: IProducts
}

const ProductPanelCard: React.FC<Props> = ({product}) => {
  return (
    <Wrapper>
      <FlexCol>
        <WrapperImage>
          <Image src={product.titleImage} />
        </WrapperImage>
        <ProductPrice>
          {product.cost - 10000}
          <ProductPriceSpan>
            {product.cost}
          </ProductPriceSpan>
        </ProductPrice>
        <ProductName to={`/product/${product.articul}`}>
            {product.params.brandArr.value}
            <br />
            {product.params.modelArr.value}
        </ProductName>
      </FlexCol>
    </Wrapper>
  )
}

export default ProductPanelCard