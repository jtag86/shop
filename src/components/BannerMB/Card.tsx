import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'
import { Container } from '../../styles/global'

const Wrapper = styled.div`

`

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const FlexLeft = styled.div`
  flex: 0 0 33.33333%;
`

const FlexRight = styled.div`
  flex: 0 0 30%;
`

const Title = styled.p`
  margin-top: 100px;
  font-size: 30px;
  font-weight: 500;
  @media ${device.tablet} {
    font-size: 20px;
  }
`

const TitleSpan = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #ff0000a6;
  @media ${device.tablet} {
    font-size: 20px;
  }
`
const Subtitle = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  font-weight: 300;
  color: #828282;
  line-height: 1.5;
  margin-top: 9px;
  @media ${device.tablet} {
    font-size: 12px;
  }
`

const Button = styled(NavLink)`
  margin-top: 30px;
  background: #0e8ce4;
  border-radius: 5px;
  width: 60px;
  height: 48px;
  display: block;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: #FFFFFF;
  padding-left: 35px;
  padding-right: 35px;
  text-decoration: none;
`

const ImageWrapper = styled.div`
  width: 400px;
  @media ${device.tablet} {
    width: 200px;
  }
  @media ${device.mobileS} {
    width: 100px;
  }
`

const Image = styled.img`
  max-width: 100%;
  min-height: 100%;
`

type Props = {
  title: string,
  titleSpan: string,
  subtitle: string,
  image: string,
  articul: string,
}

const Card: React.FC<Props> = ({title, titleSpan, subtitle, image, articul}) => {
  return (
    <Container>
      <Wrapper>
        <Flex>
          <FlexLeft>
            <Title>{title}<br/> <TitleSpan>{titleSpan}</TitleSpan> </Title>
            <Subtitle>{subtitle}</Subtitle>
            <Button to={`/product/${articul}`}>Купить</Button>
          </FlexLeft>
          <FlexRight>
            <ImageWrapper>
              <Image src={image}/>
            </ImageWrapper>
          </FlexRight>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default Card