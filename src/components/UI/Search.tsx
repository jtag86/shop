import React, { ChangeEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import SearchButton from '@mui/icons-material/Search'
import { useAppSelector } from '../../hooks/hook'
import { v4 } from 'uuid'
import { List, ListItem, Typography, Link, ListItemButton, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Search = () => {
  const selector = useAppSelector(state => state.products.products)
  const [query, setQuery] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }



  return (<>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '1000px'},
        }}
      >
        <TextField 
          id="outlined-basic" 
          label="Поиск по сайту" 
          variant="outlined" 
          value={query}
          onChange={handleChange}
          InputProps={{endAdornment: <SearchButton />}}
        />
      </Box>
      <Box sx={{position: 'absolute', bgcolor: 'background.paper', zIndex: '10'}}>
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
      </Box>
      </>
  )
}

export default Search