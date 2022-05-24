import React, { useState, useEffect } from 'react'
import Menu from '../common/Menu/Menu'
import { Box } from '@mui/material'
import Navigation from '../common/Navigation'
import Filter from './Filter'
import ProductList from './ProductList'
import Header from '../common/Header'
import { Dispatch } from 'redux'
import { getProducts } from '../../../redux/actionCreators/getProducts'
import { useDispatch } from 'react-redux'



const Catalog = () => {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box flexGrow={0} m={1}>
          <Menu alwaysVisible={false} />
        </Box>
        <Box flexGrow={2}>
          <Navigation />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box flexGrow={0} m={1}>
          <Filter />
        </Box>
        <Box flexGrow={2}>
          <ProductList />
        </Box>
      </Box>

      <footer>
        FOOTER
      </footer>
    </Box>
  )
}

export default Catalog