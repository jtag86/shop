import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import SearchButton from '@mui/icons-material/Search'

const Search = () => {
  return (
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '250px'},
        }}
      >
        <TextField 
          id="outlined-basic" 
          label="Поиск по сайту" 
          variant="outlined" 
          InputProps={{endAdornment: <SearchButton />}}
        />
      </Box>
  )
}

export default Search