import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Carousel from 'nuka-carousel'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import image1 from '../../assets/img/brands/brands_1.jpg'
import image2 from '../../assets/img/brands/brands_2.jpg'
import image3 from '../../assets/img/brands/brands_3.jpg'
import image4 from '../../assets/img/brands/brands_4.jpg'
import image5 from '../../assets/img/brands/brands_5.jpg'
import image6 from '../../assets/img/brands/brands_6.jpg'
import image7 from '../../assets/img/brands/brands_7.jpg'
import image8 from '../../assets/img/brands/brands_8.jpg'
import { Container } from '../../styles/global'

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
  z-index: 11;
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
const Wrapper = styled.div`
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`

const CarouselWrapper = styled.div`
  border: solid 1px #e8e8e8;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  padding-left: 20px;
  padding-right: 20px;
  width: 90%;
`

const ImageWrapper = styled.div`
  width: 100px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Brands = () => {
  const [countsElemCarousel, setCountsElemCarousel] = useState(1)

  const handleWidthCarousel = () => {
    const {innerWidth} = getWindowSize()
    if(innerWidth > 1200) setCountsElemCarousel(5)
    else if(innerWidth > 992 ) setCountsElemCarousel(5)
    else if(innerWidth > 576) setCountsElemCarousel(3)
    else if(innerWidth > 450) setCountsElemCarousel(2)
  }

  useEffect(() => {
    handleWidthCarousel()
    setInterval(() => {
      window.addEventListener('resize', handleWidthCarousel, { once: true });
    }, 100)
  }, [])

  return (
    <Container>
      <Wrapper>
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
            renderBottomCenterControls={null}
          >
            <ImageWrapper>
              <Image src={image1} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={image2} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={image3} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={image4} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={image5} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={image6} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={image7} />
            </ImageWrapper>
            <ImageWrapper>
              <Image src={image8} />
            </ImageWrapper>
          </Carousel>
        </CarouselWrapper>
      </Wrapper>
    </Container>
  )
}

export default Brands

const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}



