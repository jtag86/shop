import React from 'react'
import styled from 'styled-components/macro'
import Carousel from 'nuka-carousel'
import { device } from '../../../../styles/device'
import { useAppSelector } from '../../../../hooks/hook'
import Card from './Card'
import bgImage from '../../../../assets/img/banner_2_background.jpg'
import MBImage1 from '../../../../assets/img/asus_b550.png'
import MBImage2 from '../../../../assets/img/asus_prime.png'
import MBImage3 from '../../../../assets/img/gigobyte_aorus.png'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const WrapperBg = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  position: relative;
  z-index: 1;
`
const Bg = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`
const WrapperCarousel = styled.div`
  height: 580px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
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


const BannerMB = () => {
  const { loading, bannerProducts } = useAppSelector(state => state.products)

  let paramsMB1: string = ``
  let paramsMB2: string = ``
  let paramsMB3: string = ``

  if(!loading) {
    paramsMB1 = `${bannerProducts[0].params.brandArr.name}:${bannerProducts[0].params.brandArr.value}/
      ${bannerProducts[0].params.socket.name}:${bannerProducts[0].params.socket.value}/
      ${bannerProducts[0].params.arch.name}:${bannerProducts[0].params.arch.value}/
      ${bannerProducts[0].params.chipset.name}:${bannerProducts[0].params.chipset.value}/
      ${bannerProducts[0].params.support.name}:${bannerProducts[0].params.support.value}/
      ${bannerProducts[0].params.formFactor.name}:${bannerProducts[0].params.formFactor.value}/`

    paramsMB2 = `${bannerProducts[1].params.brandArr.name}:${bannerProducts[1].params.brandArr.value}/
      ${bannerProducts[1].params.socket.name}:${bannerProducts[1].params.socket.value}/
      ${bannerProducts[1].params.arch.name}:${bannerProducts[1].params.arch.value}/
      ${bannerProducts[1].params.chipset.name}:${bannerProducts[1].params.chipset.value}/
      ${bannerProducts[1].params.support.name}:${bannerProducts[1].params.support.value}/
      ${bannerProducts[1].params.formFactor.name}:${bannerProducts[1].params.formFactor.value}/`

    paramsMB3 = `${bannerProducts[2].params.brandArr.name}:${bannerProducts[2].params.brandArr.value}/
      ${bannerProducts[2].params.socket.name}:${bannerProducts[2].params.socket.value}/
      ${bannerProducts[2].params.arch.name}:${bannerProducts[2].params.arch.value}/
      ${bannerProducts[2].params.chipset.name}:${bannerProducts[2].params.chipset.value}/
      ${bannerProducts[2].params.support.name}:${bannerProducts[2].params.support.value}/
      ${bannerProducts[2].params.formFactor.name}:${bannerProducts[2].params.formFactor.value}/`
  }

  
  return !loading ? <WrapperBg>
    <Bg>
      <WrapperCarousel>
        <Carousel 
          cellSpacing={0}
          wrapAround={true}
          slidesToShow={1}
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
        >
          <Card 
            title={bannerProducts[0].params.brandArr.value } 
            titleSpan={bannerProducts[0].params.modelArr.value} 
            subtitle={paramsMB1} 
            image={MBImage1}
          />
          <Card 
            title={bannerProducts[1].params.brandArr.value } 
            titleSpan={bannerProducts[1].params.modelArr.value} 
            subtitle={paramsMB2} 
            image={MBImage2}
          />
          <Card 
            title={bannerProducts[2].params.brandArr.value } 
            titleSpan={bannerProducts[2].params.modelArr.value} 
            subtitle={paramsMB3} 
            image={MBImage3}
          />
        </Carousel>
      </WrapperCarousel>
    </Bg>
  </WrapperBg>
    : null
}

export default BannerMB