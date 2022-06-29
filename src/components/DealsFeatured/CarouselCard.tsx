import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IProducts } from '../../redux/reducers/productsReducer'
import { device } from '../../styles/device'
import Timer from './Timer'

interface Props {
  product: IProducts
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 35px;
`

const WrapperImage = styled.div`
  padding-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 234px;
  height: 234px;
  margin: 1;
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const StyledTitle = styled.p`
  padding-left: 50px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,0.5);
  margin-top: 33px;
`

const StyledCost = styled.p`
  padding-right: 50px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,0.6);
  margin-top: 33px;

`
const StyledName = styled(NavLink)`
  padding-top: 10px;
  padding-left: 50px;
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  text-decoration: none;
`

const StyledDiscount = styled.p`
  padding-top: 10px;
  padding-right: 50px;
  font-size: 24px;
  font-weight: 500;
  color: #df3b3b;
`

const WrapperAvailable = styled.div`
  width: 75%;
  margin-top: 19px;
`

const  AvailableText = styled.div`
  font-size: 12px;
  color: rgba(0,0,0,0.5);
  font-weight: 400;
`

const AvailableTitleSpan = styled.span`
  font-weight: 700;
`

const AvailableBar = styled.div`

  height: 10px;
  background: #e8e8e8;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
  display: block;
  position: relative;
  box-sizing: border-box;
`
const AvailableSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 5px;
  background: #0e8ce4;
  width: 20%;
`

const WrapperTimer = styled.div`
  margin-top: 30px;
  width: 75%;
  padding-bottom: 17px
`

const TimerTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`
const TimerSubtitle = styled.div`
  font-size: 12px;
  color: rgba(0,0,0,0.5);
`

interface Props {
  product: IProducts
}

const CarouselCard: React.FC<Props> = ({product}) => {
  return <Wrapper>
      <WrapperImage>
        <StyledImage src={product.titleImage} />
      </WrapperImage>
      <Flex>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledCost>{product.cost}</StyledCost>
      </Flex>
      <Flex>
        <StyledName to={`/product/${product.articul}`} >{product.params.brandArr.value + " " + product.params.modelArr.value}</StyledName>
        <StyledDiscount>{parseInt(product.cost) + 10000}</StyledDiscount>
      </Flex>
      <WrapperAvailable>
        <Flex>
          <AvailableText>
            Available: <AvailableTitleSpan>6</AvailableTitleSpan>
          </AvailableText>
          <AvailableText>
            Already Sold: <AvailableTitleSpan>28</AvailableTitleSpan>
          </AvailableText>
        </Flex>
        <AvailableBar>
          <AvailableSpan />
        </AvailableBar>
      </WrapperAvailable>
      <WrapperTimer>
        <Flex>
          <FlexColumn>
            <TimerTitle>
              Торопитесь
            </TimerTitle>
            <TimerSubtitle>
              Заканчивается через:
            </TimerSubtitle>
          </FlexColumn>
          <Timer />
        </Flex>
      </WrapperTimer>
    </Wrapper>
}

export default CarouselCard