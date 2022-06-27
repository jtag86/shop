import React, {useState} from 'react'
import styled from 'styled-components/macro'
import { FaAngleUp } from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa"
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { addProductsToBasket } from '../../redux/actionCreators/addProductsToBasket'
import { IProducts } from '../../redux/reducers/basketReducer'
const StyledForm = styled.form`
	
`

const ProductQuantity = styled.div`
	width: 182px;
    height: 50px;
    border: solid 1px #e5e5e5;
    border-radius: 5px;
    overflow: hidden;
    padding-left: 25px;
    margin-right: 30px;
	position: relative;
	margin-top: 53px;
	span {
		height: 50px;
		font-size: 16px;
		font-weight: 300;
		color: rgba(0,0,0,0.5);
		line-height: 50px;
	}
`

const Quantity = styled.div`
    display: inline-block;
    width: 30px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 300;
    color: rgba(0,0,0,0.5);
    text-align: left;
    padding-left: 9px;
    line-height: 50px;
`

const QuantityButtons = styled.div`
	position: absolute;
	top: 0;
    right: 0;
    height: 100%;
    width: 29px;
    border-left: solid 1px #e5e5e5;
`

const QuantityInc = styled.div`
	padding-bottom: 2px;
    justify-content: flex-end;
    border-top-right-radius: 5px;
	display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50%;
    cursor: pointer;
`

const QuantityDec = styled.div`
	padding-top: 2px;
    justify-content: flex-start;
    border-bottom-right-radius: 5px;
	display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50%;
    cursor: pointer;
`


const ArrowUp = styled(FaAngleUp)`
	font-size: 20px;
    color: rgba(0,0,0,0.3);
    pointer-events: none;
`

const ArrowDown = styled(FaAngleDown)`
	font-size: 20px;
    color: rgba(0,0,0,0.3);
    pointer-events: none;
`

const ProductPrice = styled.div`
	display: inline-block;
    font-size: 24px;
    font-weight: 500;
    margin-top: 75px;
    clear: left;
`

const ButtonWrapper = styled.div`
	margin-top: 43px;
`


const ProductButton = styled.input`
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
	background: #0e8ce4;
    border-radius: 5px;
    height: 48px;
	transition: all 200ms ease;
`

type Props = {
	product: IProducts;
}

const Form: React.FC<Props> = ({product}) => {
	const dispatch: Dispatch<any> = useDispatch()
	
	const handleClick  = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(addProductsToBasket({product: product, count: quantity}))
		console.log("il")
	}
	
	const [quantity, setQuantity] = useState(1)
	
	const handleQuantityInc = () => {
		const value = quantity + 1
		setQuantity(value)
	}
	
	const handleQuantityDec = () => {
		const value = quantity - 1
		setQuantity(value)
	}
	
	return (
		<StyledForm onSubmit={handleClick}>
			<ProductQuantity>
				<span>Количество</span>
				<Quantity>{quantity}</Quantity>
				<QuantityButtons>
					<QuantityInc onClick={handleQuantityInc}>
						<ArrowUp />
					</QuantityInc>
					<QuantityDec onClick={handleQuantityDec}>
						<ArrowDown />
					</QuantityDec>
				</QuantityButtons>
			</ProductQuantity>
			<ProductPrice>
				{product.cost}
			</ProductPrice>
			<ButtonWrapper>
				<ProductButton type="submit" value="Добавить в корзину" />
			</ButtonWrapper>
		</StyledForm>
	)
}

export default Form