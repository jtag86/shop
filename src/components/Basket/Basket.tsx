import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { removeProductFromBasket } from '../../redux/actionCreators/addProductsToBasket'
import { useAppSelector } from '../../hooks/hook'
import { MAIN } from '../../utils/consts'
import styled from 'styled-components/macro'
import { Container } from '../../styles/global'
import Item from './BasketItem'
import { device } from '../../styles/device'
import MainNav from '../Header/MainNav'

const Wrapper = styled.section`
  width: 100%;
  padding-top: 93px;
  padding-bottom: 111px;
`

const BasketWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: auto;
`

const BasketTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
`

const BasketItems = styled.div`
  margin-top: 67px;
`

const BasketList = styled.div`

`

const BasketOrderTotal = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 30px;
  border: solid 1px #e8e8e8;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
`

const OrderTotalContent = styled.div`
  text-align: right!important;
  margin-left: 20px;
  @media ${device.mobileS} {
    text-align: left!important;

  }
`

const OrderTotalTitle = styled.div`
  display: inline-block;
  font-size: 14px;
  color: rgba(0,0,0,0.5);
  line-height: 60px;
`

const OrderTotalAmount = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  margin-left: 26px;
  line-height: 60px;
  padding-right: 46px;
`

const Buttons = styled.div`
  margin-top: 60px;
  text-align: right;
`

const Button = styled.div`
  display: inline-block;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: #FFFFFF;
  padding-left: 35px;
  padding-right: 35px;
  outline: none;
  cursor: pointer;
  vertical-align: top;
  background: #0e8ce4;
  border-radius: 5px;
  height: 48px;
`

const Basket = () => {
  const { items, basketCost } = useAppSelector(state => state.basket)

  return (<>
    <MainNav show={false} />
    <Wrapper>
      <Container>
        <BasketWrapper>
          <BasketTitle>Корзина</BasketTitle>
          <BasketItems>
            <BasketList>
              {
                items.map(item => (
                  <Item key={item.product.articul} item={item}/>
                ))
              }
            </BasketList>
          </BasketItems>
          <BasketOrderTotal>
              <OrderTotalContent>
                <OrderTotalTitle>Общий итог:</OrderTotalTitle>
                <OrderTotalAmount>{basketCost}₸</OrderTotalAmount>
              </OrderTotalContent>
          </BasketOrderTotal>
          <Buttons>
              <Button>Оформить заказ</Button>
          </Buttons>
        </BasketWrapper>
      </Container>
    </Wrapper>
    </>
  )
   
    
}

export default Basket

function products(products: any) {
  throw new Error('Function not implemented.')
}
