import Carousel from 'nuka-carousel'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import styled from 'styled-components/macro'
import Card from './Card'
import bgImage from '../../assets/img/trends_background.jpg'
import { device } from '../../styles/device'
import { useAppSelector } from '../../hooks/hook'
import { Container } from '../../styles/global'

const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  position: relative;
`

const Bg = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(203, 225, 238, 0.3);
`

const LeftArrow = styled.div`
  width: 36px;
  height: 36px;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const RightArrow = styled.div`
  width: 36px;
  height: 36px;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
  font-size: 36px;
  margin-top: 70px;
  margin-bottom: 40px;
  width: 100%;
  text-align: left;
  @media ${device.tablet} {
    margin-left: 50px;
  }
`

const CarouselWrapper = styled.div`
  height: 100%;
  max-width: 850px;
  margin-top: 80px;
  
  @media ${device.laptop} {
    max-width: 690px;
  }
  @media ${device.tablet} {
    margin-top: 10px;
  }
  @media ${device.mobileL} {
    max-width: 500px;
  }
  @media ${device.mobileS} {
    max-width: 100%;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: center;

  }
  @media ${device.mobileS} {
    justify-content: center;

  }
`

const Trends = () => {
  const { loading, trendProducts } = useAppSelector(state => state.products)
  const [countsElemCarousel, setCountsElemCarousel] = useState(1)

  const handleWidthCarousel = () => {
    const {innerWidth} = getWindowSize()
    if(innerWidth > 1200) setCountsElemCarousel(3)
    else if(innerWidth > 992 ) setCountsElemCarousel(3)
    else if(innerWidth > 576) setCountsElemCarousel(2)
    else if(innerWidth > 450) setCountsElemCarousel(1)
  }

  useEffect(() => {
    handleWidthCarousel()
    setInterval(() => {
      window.addEventListener('resize', handleWidthCarousel, { once: true });
    }, 100)
  }, [])

  return !loading ?
    <Wrapper>
      <Bg />
      <BgOverlay />
      <Container>
        <Wrapper>
          <Row>
            <Title>Тренды 2022</Title>
            <CarouselWrapper>
              <Carousel
                wrapAround={true}
                slidesToShow={countsElemCarousel}
                slidesToScroll={1}
                renderCenterLeftControls={({previousSlide}) => (
                  <LeftArrow onClick={previousSlide}>
                    <MdArrowBackIosNew />
                  </LeftArrow>
                )}
                renderCenterRightControls={({nextSlide }) => (
                  <RightArrow onClick={nextSlide }>
                    <MdArrowForwardIos />
                  </RightArrow>
                )}
                renderBottomCenterControls ={null}
              >
                {
                  trendProducts.map( item => (
                    <Card item={item} key={item.articul} />
                  ))
                }
              </Carousel>
            </CarouselWrapper>
          </Row>
        </Wrapper>
      </Container>
    </Wrapper>
  :null
}

export default Trends

const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}



