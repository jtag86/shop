import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import SearchButton from '@mui/icons-material/Search'
import { useAppSelector } from '../../../../hooks/hook'
import { v4 } from 'uuid'
import { ListItemButton, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { device } from '../../../../styles/device'

const List = styled.div`
  position: absolute; 
  z-index: 10;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledInputWrapper = styled.div`
  border: solid 1px #e5e5e5;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

`

const StyledInput = styled.input`
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

const StyledSearchButton = styled.div`
  border-radius: 0 5px 5px 0;
  background-color: #0e8ce4;
  height: 50px;
  width: 53px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Search = () => {
  const selector = useAppSelector(state => state.products.products)
  const [query, setQuery] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return <Flex>
    <StyledInputWrapper>
      <StyledInput 
        type="text"
        value={query}
        onChange={handleChange}
        placeholder= 'Поиск продуктов'
      />
      <StyledSearchButton>
        <SearchButton style={{ color: "#FFF"}} fontSize="large" />
      </StyledSearchButton>
    </StyledInputWrapper>

    <List>
      {
        selector.filter(product => {
          if (query === "") {
            return null
          } else if (product.brandArr.value.toLowerCase().includes(query.toLowerCase())) {
            console.log("product: ",product)
            return product
          }
        }).slice(0, 5).map(product => (
          <ListItemButton key={v4()}>
            <ListItemText primary={
              <NavLink style={{ textDecoration: 'none', color: '#444', fontWeight: 'bold'}} to={`/products/${product.articul}`} >
                {product.brandArr.value + " " + product.modelArr.value}
              </NavLink>
            } />
          </ListItemButton>
        ))
      }
    </List>
  </Flex>
}

export default Search