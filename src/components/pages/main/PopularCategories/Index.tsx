import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import styled from 'styled-components'
import { device } from '../../../../styles/device'
import { useAppSelector } from '../../../../hooks/hook'
import Card from './Card'

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import image1 from '../../../../assets/img/popular_categories/popular_1.png'
import image2 from '../../../../assets/img/popular_categories/popular_2.png'
import image3 from '../../../../assets/img/popular_categories/popular_3.png'
import image4 from '../../../../assets/img/popular_categories/popular_4.png'
import image5 from '../../../../assets/img/popular_categories/popular_5.png'
import Slider from '../../../UI/Slider';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  display: inline-block;
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

const RightArrow = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  z-index: 10;
  display: inline-block;
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

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

const Item1 = styled(Item)`
  background-color: cornflowerblue;
`

const Item2 = styled(Item)`
  background-color: coral;
`

const Item3 = styled(Item)`
  background-color: darkseagreen;
`


const PopularCategories = () => {
  const { loading, products } = useAppSelector(state => state.products)

  return !false ? 
    <Wrapper>
      <Flex>
        <Slider slidesToShow={3} slidesToMove={2}>
          <Item1>item1</Item1>
          <Item2>item2</Item2>
          <Item3>item3</Item3>
        </Slider>
      </Flex>
    </Wrapper>
  : null 
}

export default PopularCategories