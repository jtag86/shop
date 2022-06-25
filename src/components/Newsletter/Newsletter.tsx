import React from 'react'
import styled from 'styled-components/macro'
import image from '../../assets/img/send.png'
import { Container } from '../../styles/global'
import Form from '../Footer/Form'

const Wrapper = styled.div`
  width: 100%;
  background: #fafafa;
  padding-top: 60px;
  padding-bottom: 60px;
  box-shadow: 0px 5px 20px rgb(0 0 0 / 10%);
`

const ImageWrapper = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const NewsletterTitle = styled.div`
  font-size: 18px;
  color: #000000;
  text-align: left;
`

const NewsletterText = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  font-weight: 400;
  color: #828282;
  text-align: left;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Column = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin-left: 40px;
`

const Subscribe = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <ImageWrapper>
            <Image src={image}/>
          </ImageWrapper>
          <Column>
            <NewsletterTitle>Подпишитесь на рассылку</NewsletterTitle>
            <NewsletterText>...и получите купон на 20% на первую покупку.</NewsletterText>
          </Column>
          <Form />
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Subscribe