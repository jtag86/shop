import React from 'react'
import styled from 'styled-components/macro'
import Carousel from 'nuka-carousel'
import Card from './Card'
import bgImage from '../../assets/img/banner_2_background.jpg'
import MBImage1 from '../../assets/img/asus_b550.png'
import MBImage2 from '../../assets/img/asus_prime.png'
import MBImage3 from '../../assets/img/gigobyte_aorus.png'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { device } from '../../styles/device'
import { useAppSelector } from '../../hooks/hook'

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
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 80px;
  
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

const SliderControlBottomCenter = styled.div`
  position: absolute;
  bottom: 50px;
  @media ${device.mobileL} {
    display: none;
  }
`
const SliderControlBottomCenterUl = styled.ul`
  position: relative;
  top: 100px;
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`

const SliderControlBottomCenterLi = styled.li`
  
`

const SliderControlBottomCenterButton = styled.div<{currentSlide: number, num: number}>`
  cursor: pointer;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${props => props.currentSlide === props.num ? "#0e8ce4" : "white"};
  margin-left: 10px;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
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
          renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => 
            <SliderControlBottomCenter>
              <SliderControlBottomCenterUl>
                {[...Array(slideCount)].map((e, key) => 
                  <SliderControlBottomCenterLi   key={key}>
                    <SliderControlBottomCenterButton currentSlide={currentSlide} num={key} onClick={() => goToSlide(key)}/>
                  </SliderControlBottomCenterLi>
                )}
              </SliderControlBottomCenterUl>
            </SliderControlBottomCenter>
          }
        >
          <Card 
            title={bannerProducts[0].params.brandArr.value}
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