import React from 'react'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'

const Wrapper = styled.div`
  height: 100%;
  width: 1170px;
  margin: auto;

  @media ${device.laptop} {
    max-width: 972px;
  }

  @media ${device.tablet} {
    width: 720px;
  }
  @media ${device.mobileL} {
    max-width: 500px;
  }
  @media ${device.mobileS} {
    max-width: 400px;
  }
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

const LeftWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
`

const Category = styled.p`
  font-size: 12px;
  color: rgba(0,0,0,0.5);
`
const Title = styled.p`
  margin-top: 30px;
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

const Button = styled.a`
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
`

const Image = styled.img`
  max-width: 100%;
  min-height: 100%;
`

type Props = {
  title: string,
  titleSpan: string,
  subtitle: string,
  image: string
}

const Card: React.FC<Props> = ({title, titleSpan, subtitle, image}) => {
  return <Wrapper>
    <Flex>
      <FlexLeft>
        <LeftWrapper>
          <Category>Материнская плата</Category>
        </LeftWrapper>
        <Title>{title}<br/> <TitleSpan>{titleSpan}</TitleSpan> </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button href='#'>Купить</Button>
      </FlexLeft>
      <FlexRight>
        <ImageWrapper>
          <Image src={image}/>
        </ImageWrapper>
      </FlexRight>
    </Flex>
  </Wrapper>
}

export default Card