import React from 'react'
import styled from 'styled-components'
import { FlexCol, FlexSpaceAround } from '../../../styles/components'
import { device } from '../../../styles/device'
import DeliveryImage from '../../../assets/img/icons/benefits-delivery.png'
import benefitsPayment from '../../../assets/img/icons/benefits-payment.png'
import BenefitsSupport from '../../../assets/img/icons/benefits-support.png'
import BenefitsBonus from '../../../assets/img/icons/benefits-bonus.png'
import benefitsWarranty from '../../../assets/img/icons/benefits-warranty.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 50px;
  max-width: 1170px;

  @media ${device.laptop} {
    max-width: 992px;
  }
  
  @media ${device.tablet} {
    margin-top: 10px;
    max-width: 720px;
  }
  @media ${device.mobileL} {
    max-width: 576px;
  }
  @media ${device.mobileS} {
    max-width: 100%;
  }
`

const Item = styled.div`
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  border: solid 1px #e8e8e8;
  height: 100px;
  width: 100%;
  flex-basis: 18%;
  flex-shrink: 1;
  margin: 10px;

  @media ${device.laptop} {
    flex-basis: 17%;
  }

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

const ImageContainer = styled.div`
  max-width: 50px;
  max-height: 50px;
  margin: 10px;
`

const StyledImage = styled.img`
  width: 100%;
`

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-right: 20px;
`

const Characters = () => {
  return (
    <Wrapper>
      <Item>
        <FlexSpaceAround>
          <ImageContainer>
            <StyledImage src={DeliveryImage} />
          </ImageContainer>
          <Text>Доставка по всей <br/> стране</Text>
        </FlexSpaceAround>
      </Item>
      <Item>
        <FlexSpaceAround>
          <ImageContainer>
            <StyledImage src={BenefitsSupport} />
          </ImageContainer>
          <Text>Поддержка 7 дней <br/> в неделю</Text>
        </FlexSpaceAround>
      </Item>
      <Item>
        <FlexSpaceAround>
          <ImageContainer>
            <StyledImage src={benefitsPayment} />
          </ImageContainer>
          <Text>Оплата наличными <br/> при получении</Text>
        </FlexSpaceAround>
      </Item>
      <Item>
        <FlexSpaceAround>
          <ImageContainer>
            <StyledImage src={BenefitsBonus} />
          </ImageContainer>
          <Text>Накопительная бонусная <br/> система</Text>
        </FlexSpaceAround>
      </Item>
      <Item>
        <FlexSpaceAround>
          <ImageContainer>
            <StyledImage src={benefitsWarranty} />
          </ImageContainer>
          <Text>Гарантия качества</Text>
        </FlexSpaceAround>
      </Item>
    </Wrapper>
  )
}

export default Characters