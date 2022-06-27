import React, { useEffect, MouseEvent } from 'react'
import { useParams } from 'react-router-dom'
import {v4} from 'uuid'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hook';
import { productSelector } from '../../redux/selectors/selectors';
import { addProductsToBasket } from '../../redux/actionCreators/addProductsToBasket';
import { CATALOG, MAIN } from '../../utils/consts';
import Heart from '../Heart/Heart';
import { Container } from '../../styles/global'
import styled from 'styled-components/macro'
import Form from './Form'
import MainNav from '../Header/MainNav'
import { device } from '../../styles/device'

const Wrapper = styled.div`
	padding-top: 110px;
    padding-bottom: 140px;
`

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	
	@media ${device.tablet} {
		flex-wrap: wrap;
		justify-content: center;
	}
`

const ImageWrapper = styled.div`
    flex-basis: 50%;
    height: 525px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
    overflow: hidden;
    padding: 15px;
	@media ${device.tablet} {
		flex-basis: 80%;
	}
`

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`

const ProductDescription = styled.div`
	padding-left: 50px;
	flex-basis: 35%;
	@media ${device.tablet} {
		margin-top: 50px;
		flex-basis: 80%;
		padding-left: 0px;
	}
`

const ProductCategory = styled.div`
	font-size: 12px;
    color: rgba(0,0,0,0.5);
`

const ProductName = styled.div`
	font-size: 30px;
    font-weight: 500;
    margin-top: 11px;
`

const ProductText = styled.p`
	margin-top: 27px;
	font-family: 'Rubik', sans-serif;
    font-size: 14px;
    line-height: 1.7;
    font-weight: 400;
    color: #828282;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
`

const Product = () => {
  const {articul} = useParams()
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const product = useAppSelector(state => productSelector(state, articul!))

	let params = ''
	if(product) {
		for( let key in product.params) {
			console.log(product.params[key])
			const str = product.params[key].name + ": " + product.params[key].value + " / "
			params+=str
		}
	}

  return product ?
	<>
		<MainNav show={false} />
		<Container>
			<Wrapper>
				<Row>
					<ImageWrapper>
						<Image src={product.titleImage} />
					</ImageWrapper>
					<ProductDescription>
						<ProductCategory>
							{product.catalog}
						</ProductCategory>
						<ProductName>
							{product.params.brandArr.value + " " + product.params.modelArr.value}
						</ProductName>
						<ProductText>
						{params}
						</ProductText>
						<Form product={product}/>
					</ProductDescription>
				</Row>
			</Wrapper>
		</Container>
	</>
  : null
}

export default Product