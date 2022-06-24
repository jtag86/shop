import styled from "styled-components"
import { device } from "../../styles/device"

export const Wrapper = styled.div`
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  border: solid 1px #e8e8e8;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-basis: 19%;

  @media ${device.tablet} {
    flex-basis: 45%;
  }

  @media ${device.mobileL} {
    flex-basis: 90%;
  }

  &:hover {
    box-shadow: 0px 0px 25px rgb(0 0 10 / 10%);
  }
`

export const ImageContainer = styled.div`
  max-width: 50px;
  margin: 5px;
  @media ${device.tablet} {
    flex-basis: 45%;
    max-width: 80px;

  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Text = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  margin: 5px;
`