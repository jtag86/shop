import styled, { createGlobalStyle } from 'styled-components/macro'
import { device } from './device'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;

  }
  * {
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  
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
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: '#403ae3';
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`

export const Title = styled.p<{margin?: number, inverse?: boolean, width?: number}>`
  font-size: clamp(0.5rem, 2vw, 1.2rem);
  margin: ${({margin}) => (margin?margin: '')};
  color: ${({inverse}) => (inverse ? '#403ae3' : "fff")};
  line-height: 1.06;
  text-align: center;
  width: ${({width}) => (width ? width : '100%')};
`

export const Row = styled.div<{justifyContent?: string}>`
  display: flex;
  justify-content: ${({justifyContent}) => (justifyContent?justifyContent: "space-between")};
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`