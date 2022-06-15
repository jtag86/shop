import React from 'react'
import styled from 'styled-components'
import { device } from '../../../styles/device'
import bgImage from '../../../assets/img/banner_background.jpg'
import bannerProduct from '../../../assets/img/banner_product.png'
import { NavLink } from 'react-router-dom'

const WrapperBg = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: block;
  position: relative;
  z-index: -1;
  @media ${device.mobileL} {
    height: 300px;
  }
`
const Bg = styled.div`
  background-image: url(${bgImage});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  height: 175px;
  width: 1170px;

  @media ${device.laptop} {
    max-width: 972px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    width: 720px;
  }
  @media ${device.mobileL} {
    max-width: 500px;
    height: 75px;

  }
  @media ${device.mobileS} {
    max-width: 90%;
    height: 75px;
  }
`

const BannerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  height: 100%;
  width: 100%;
  position: relative;
`

const WrapperImage = styled.div`
  position: absolute;
  top: -5px;
  right: -52px;
  z-index: 0;
  width: 521px;
  @media ${device.mobileL} {
    width: 369px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const BannerContent = styled.div`
  z-index: 1;
  display: block;
  position: relative;
  box-sizing: border-box;
  margin-left: 33.333333%;
  margin-top: 60px;
  max-width: 41.6%;
  @media ${device.tablet} {
    margin-left: 0;
  }
`

const BannerText = styled.h1`
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1.166;
    color: #7599b2;
    text-transform: uppercase;
    letter-spacing: 0.038em;
    @media ${device.mobileL} {
      font-size: 20px;
    }
`

const BannerPrice = styled.div`
  font-size: 30px;
  color: #df3b3b;
  margin-top: 87px;
  @media ${device.mobileL} {
    font-size: 20px;
    margin-top: 30px;
  }
  `

const BannerDiscount = styled.span`
  display: inline-block;
  position: relative;
  color: #7e8285;
  margin-right: 14px;
  text-decoration: line-through;
`

const BannerProductName = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #000000;
  margin-top: 8px;
`

const BannerButton = styled.div`
  margin-top: 42px;
  display: inline-block;
  background: #0e8ce4;
  border-radius: 5px;
  height: 48px;
`
const Button = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: #FFFFFF;
  padding-left: 35px;
  padding-right: 35px;
  text-decoration: none;
`
const Banner = () => {
  return (
    <WrapperBg>
      <Bg>
        <Wrapper>
          <BannerRow>
            <BannerContent>
              <BannerText>
                Новая эра смартфонов
              </BannerText>
              <BannerPrice>
                <BannerDiscount>
                  150 000
                </BannerDiscount>
                  &nbsp; 125 000
              </BannerPrice>
              <BannerButton >
                <Button to="#">
                  Купить
                </Button>
              </BannerButton>
            </BannerContent>
            <WrapperImage>
              <Image src={bannerProduct} />
            </WrapperImage>
            
          </BannerRow>
        </Wrapper>
      </Bg>
    </WrapperBg>
  )
}

export default Banner