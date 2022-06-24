import React from 'react'
import styled from 'styled-components/macro'
import { IProducts } from '../../redux/reducers/productsReducer'
import { Column, Row } from '../../styles/global'

const Wrapper = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 25px;
  margin: 20px;
  height: 250px;
`

const ImageWrapper = styled.div`
  width: 100px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const TrendCategory = styled.div`
  font-size: 12px;
  color: rgba(0,0,0,0.5);
  font-weight: 400;
  margin-top: 40px;
  text-align: left;
  width: 100%;
`

const TrendName = styled.div`
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TrendsPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  float: right;
`


type Props = {
  item: IProducts
}

const Card:React.FC<Props> = ({item}) => {
  return (
    <Wrapper>
      <Column>
        <ImageWrapper>
          <Image src={item.titleImage} />
        </ImageWrapper>
        <Column>
          <TrendCategory>{item.catalog}</TrendCategory>
          <Row>
            <TrendName>{item.params.modelArr.value}</TrendName>
            <TrendsPrice>{item.cost}</TrendsPrice>
          </Row>
        </Column>
      </Column>
    </Wrapper>
  )
}

export default Card