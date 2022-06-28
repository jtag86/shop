import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import styled from 'styled-components/macro'
import { Item } from '../../redux/reducers/basketReducer'
import { device } from '../../styles/device'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { removeProductFromBasket } from '../../redux/actionCreators/addProductsToBasket'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border: solid 1px #e8e8e8;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  padding-top: 20px;
  padding-bottom: 10px;
  margin-top: 20px;
  @media ${device.mobileL} {
    padding-bottom: 30px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${device.mobileL} {
    flex-wrap: wrap;
  }
  @media ${device.mobileS} {
    flex-direction: column;
    align-items: start;
  }
`

const IconWrapper = styled.div`
  margin: 20px;
  @media ${device.mobileL} {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const ImageWrapper = styled.div`
  width: 133px;
  height: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
`

const Image = styled.img`
  max-width: 100%;
	max-height: 100%;
`

const BasketItemTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,0.5);
  padding-top: 20px;
  @media ${device.mobileL} {
    margin-left: 25px;
    margin-right: 10px;
  }

`

const BasketItemText = styled.div`
  font-size: 18px;
  margin-top: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${device.mobileL} {
    margin-top: 15px;
  }
`

const BasketItemName = styled.div`
  padding-left: 30px;
  width: 200px;
  @media ${device.mobileS} {
    display: flex;
    justify-content: start;
    padding-left: 0px;
  }
`

const BasketItemQuantity = styled.div`
  @media ${device.mobileS} {
    display: flex;
    justify-content: start;
  }
`

const BasketItemPrice = styled.div`
  @media ${device.mobileS} {
    display: flex;
    justify-content: start;
  }
`

const BasketItemTotal = styled.div`
  padding-right: 46px;
  @media ${device.mobileS} {
    display: flex;
    justify-content: start;
  }
`

const handleClick = (item: Item) => {
  
}

type Props = {
  item: Item
}

const BasketItem: React.FC<Props> = ({item}) => {
  const dispatch: Dispatch<any> = useDispatch()

  const handleClick = (item: Item) => {
    dispatch(removeProductFromBasket(item))
  }

  return (
    <Wrapper>
      <Row>
        <IconWrapper onClick={() => handleClick(item)}>
          <MdDeleteForever fontSize={25} />
        </IconWrapper>
        <ImageWrapper>
          <Image src={item.product.titleImage} />
        </ImageWrapper>
        <Row>
          <BasketItemName>
            <BasketItemTitle>Наименование</BasketItemTitle>
            <BasketItemText>{item.product.params.brandArr.value + " " + item.product.params.modelArr.value}</BasketItemText>
          </BasketItemName>
          <BasketItemQuantity>
            <BasketItemTitle>Количество</BasketItemTitle>
            <BasketItemText>{item.count}</BasketItemText>
          </BasketItemQuantity>
          <BasketItemPrice>
            <BasketItemTitle>Стоимость</BasketItemTitle>
            <BasketItemText>{item.product.cost}₸</BasketItemText>
          </BasketItemPrice>
          <BasketItemTotal>
            <BasketItemTitle>Итог</BasketItemTitle>
            <BasketItemText>{item.totalCost}₸</BasketItemText>
          </BasketItemTotal>
        </Row>

      </Row>      
    </Wrapper>
  )
}

export default BasketItem