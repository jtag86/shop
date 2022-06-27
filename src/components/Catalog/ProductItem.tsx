import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro'

interface IItem {
  [key: string]: any
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 170px;
	padding-top: 40px;
	padding-bottom: 24px;

	text-align: center;
`

const ImageWrapper = styled.div`
	width: 115px;
	height: 115px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`

const ProductContent = styled.div`
	width: 100%;
`

const ProductPrice = styled.div`
	font-size: 16px;
	font-weight: 500;
	margin-top: 25px;
	width: 100%;
`

const ProductName = styled(NavLink)`
	text-align: center;
	display: inline-block;
	width: 90%;
	font-size: 14px;
	font-weight: 400;
	color: #000000;
	white-space: nowrap;
	text-decoration: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

`

interface Props {
  item: IItem
}

const ProductItem: React.FC<Props> = ({item}) => {

  return (
	<Wrapper>
		<ImageWrapper>
			<Image src={item.titleImage} />
		</ImageWrapper>
		<ProductContent>
			<ProductPrice>
				{item.cost}
			</ProductPrice>
			<ProductName to={`/product/${item.articul}`}>
				{item.params.brandArr.value + " " + item.params.modelArr.value}
			</ProductName>
		</ProductContent>
	</Wrapper>
  )
}

export default ProductItem