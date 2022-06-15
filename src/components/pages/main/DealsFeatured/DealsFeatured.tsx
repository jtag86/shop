import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../../hooks/hook'
import { IProducts } from '../../../../redux/reducers/productsReducer'
import { device } from '../../../../styles/device'
import Deals from './Deals'
import Featured from './Featured'

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;

  @media ${device.desktop} {
    max-width: 1170px;
    font-size: 16px;
  }
  @media ${device.laptop} {
    max-width: 980px;
  }
  @media ${device.tablet} {
    max-width: 768px;
    flex-direction: column;
    align-items: center;
  }
`

const DealsFeatured = () => {

  return (
    <Wrapper>
      <Deals />
      <Featured />
    </Wrapper>
  )
}

export default DealsFeatured

