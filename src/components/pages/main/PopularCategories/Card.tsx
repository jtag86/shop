import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IProducts } from '../../../../redux/reducers/productsReducer'
import { device } from '../../../../styles/device'

const Wrapper = styled.div<{value: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
 
  background-color: ${props => props.value ? "#FFF" : "#eff6fa"};


  @media ${device.tablet} {
    flex-basis: 30%;
  }
  @media ${device.mobileS} {
    flex-basis: 50%;
    :nth-child(odd) {
      background-color: #fff;
    }
  }

  height: 190px;
`

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Text = styled.p`
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
  value: number
}

const Card:React.FC<Props> = ({image, title, value}) => {
  console.log(value)
  return (
    <Wrapper value={value}>
      <ImageWrapper ><Image src={image} /></ImageWrapper>
      <Text>{title}</Text>
    </Wrapper>
  )
}

export default Card