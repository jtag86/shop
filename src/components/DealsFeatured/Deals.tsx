import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import CarouselCard from './CarouselCard'
import { device } from '../../styles/device'
import { useAppSelector } from '../../hooks/hook'

const Wrapper = styled.div`
  flex-basis: 421px;
  width: 334px;
  box-shadow: 0px 10px 25px rgb(0 0 0 / 10%);
  border-radius: 5px;
  
  @media ${device.laptop} {
    flex-basis: 350px;
  }
  @media ${device.tablet} {
    flex-basis: 70%;
    width: 70%;
  }
  @media ${device.mobileL} {
    flex-basis: 50%;
    width: 380px;
  }
  @media ${device.mobileS} {
    flex-basis: 40%;
  }
`

const StyledCarousel = styled(Carousel)`
  width: 200px;
  position: relative;
`

const StyledLeftControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledRightControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-top: 20px;
  margin-left: 30px;
`


const Deals = () => {
  const { loading, products } = useAppSelector(state => state.products)

  let rand = Math.floor(Math.random() * products.length)
  const product1 = products[rand]
  rand = Math.floor(Math.random() * products.length)
  const product2 = products[rand]
  rand = Math.floor(Math.random() * products.length)
  const product3 = products[rand]

  return !loading ? 
    <Wrapper>
      <CardTitle>Предложение недели</CardTitle>
      <StyledCarousel
        cellSpacing={0}
        autoplay={true}
        wrapAround={true}
        slidesToShow={1}
        slidesToScroll={1}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
        speed={2000}
      >
        <CarouselCard product={product1} />
        <CarouselCard product={product2}/>
        <CarouselCard product={product3} />
      </StyledCarousel>
    </Wrapper>
    : null 
}

export default Deals