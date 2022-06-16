import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import styled from 'styled-components'
import { device } from '../../../../styles/device'
import { useAppSelector } from '../../../../hooks/hook'
import Card from './Card'
import Carousel from 'nuka-carousel'

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import image1 from '../../../../assets/img/popular_categories/popular_1.png'
import image2 from '../../../../assets/img/popular_categories/popular_2.png'
import image3 from '../../../../assets/img/popular_categories/popular_3.png'
import image4 from '../../../../assets/img/popular_categories/popular_4.png'
import image5 from '../../../../assets/img/popular_categories/popular_5.png'
import Slider from '../../../UI/Slider';

const WrapperCarousel = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  @media ${device.desktop} {
    max-width: 1170px;
    font-size: 16px;
  }
  @media ${device.laptop} {
    max-width: 992px;
  }
  @media ${device.tablet} {
    flex-wrap: wrap;
    max-width: 720px;
  }
  @media ${device.mobileL} {
    max-width: 576px;
    justify-content: center;
  }

  @media ${device.mobileS} {
    max-width: 455px;
  }
`
const Heading = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #000000;
  flex: 0 0 25%;
  margin-top: 20px;
  @media ${device.tablet} {
    margin-bottom: 10px;
  }

`

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media ${device.tablet} {
    flex-wrap: wrap;
    gap: 1rem;
  }
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


const PopularCategories = () => {
  const [countsElemCarousel, setCountsElemCarousel] = useState(1)

  console.log("countsElemCarousel",countsElemCarousel)

  const handleWidthCarousel = () => {
    const {innerWidth} = getWindowSize()
    console.log(innerWidth)
    if(innerWidth > 1200) setCountsElemCarousel(4)
    else if(innerWidth > 768 ) setCountsElemCarousel(4)
    else if(innerWidth > 576) setCountsElemCarousel(2)
  }

  useEffect(() => {
    handleWidthCarousel()
    setInterval(() => {
      window.addEventListener('resize', handleWidthCarousel, { once: true });
    }, 100)
  }, [])

  const { loading, products } = useAppSelector(state => state.products)
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return !false ? 
    <WrapperCarousel>
      <Carousel
        wrapAround={true}
        slidesToShow={countsElemCarousel}
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
        <Card image={image1} title="Смартфоны" value={1} />
        <Card image={image2} title="Мониторы" value={0}/>
        <Card image={image3} title="Видеокарты" value={1}/>
        <Card image={image4} title="HDD" value={0}/>
      </Carousel> 
    </WrapperCarousel>
  : null 
}

export default PopularCategories

const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}



