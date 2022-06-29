import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";

import { useAppSelector } from '../../hooks/hook'
import { v4 } from 'uuid'
import { ListItemButton, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { device } from '../../styles/device'
import { Row } from '../../styles/global';

const List = styled.div`
  position: absolute; 
  z-index: 10;
`
const Wrapper = styled.div`
  order: 2;
  flex-basis: 40%;
  @media ${device.tablet} {
    flex-basis: 100%;
    order: 3;
  }
  @media ${device.mobileL} {
    display: none;
  }
`

const InputWrapper = styled.div`
  border: solid 1px #e5e5e5;
  border-radius: 5px;
`

const SearchRow = styled.div`
  background-color: #fff;
  z-index: 101;
  height: 30px;
  padding: 20px;
  :hover {
    background-color: #ccc;
  }
  display: flex;
  align-items: center;
  width: 100%;
`

const Input = styled.input`
  border: none;
  height: 48px;
  outline: none;
  font-size: 20px;
  padding: 0 15px 0 15px;
  color: '#ccc';
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ccc;
    font-size: 18px;
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: #ccc;
    font-size: 18px;
    font-weight: 400;
  }
`

const SearchButton = styled.div`
  border-radius: 0 5px 5px 0;
  background-color: #0e8ce4;
  height: 50px;
  width: 53px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #444;
  font-weight: bold;
`



const Search = () => {
  const products = useAppSelector(state => state.products.products)
  const [query, setQuery] = useState<string>("")
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleClick = () => {
    setQuery("")
  }

  return <Wrapper>
    <InputWrapper>
      <Row>
        <Input 
          type="text"
          value={query}
          onChange={handleChange}
          placeholder= 'Поиск продуктов'
        />
        <SearchButton>
          <FaSearch style={{ color: "#FFF", fontSize: "25px"}} />
        </SearchButton>
      </Row>
    </InputWrapper>

    <List>
      {
        products.filter(product => {
          if (query === "") {
            return null
          } else if (product.params.brandArr.value.toLowerCase().includes(query.toLowerCase())) {
            return product
          }
        }).slice(0, 5).map(product => (
            <SearchRow key={product.articul}>
              <StyledLink to={`/product/${product.articul}`} onClick={handleClick}>
                {product.params.brandArr.value + " " + product.params.modelArr.value}
              </StyledLink>
            </SearchRow>
        ))
      }
    </List>
  </Wrapper>
}

export default Search