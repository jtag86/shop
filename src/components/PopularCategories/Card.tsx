import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'

const WrapperLink = styled(NavLink)<{value: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.value ? "#FFF" : "#eff6fa"};
  text-decoration: none;

  @media ${device.tablet} {
    flex-basis: 30%;
  }


  height: 190px;
`

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobileS} {
    width: 70px;
    height: 70px;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Name = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 400;
  background: #FFFFFF;
  color: #000000;
  margin-top: 20px;
  line-height: 1.714;
  text-align: center;
  background-color: transparent;
`

interface Props {
  image: string,
  title: string,
  value: number,
  link: string,
}

const Card:React.FC<Props> = ({image, title, value, link}) => {
  return (
    <WrapperLink to={`/catalog/${link}`} value={value}>
      <ImageWrapper ><Image src={image} /></ImageWrapper>
      <Name >{title}</Name>
    </WrapperLink>
  )
}

export default Card