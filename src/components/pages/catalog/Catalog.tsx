import React, { useEffect } from 'react'
import Menu from '../common/Menu/Menu'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import Navigation from '../common/Navigation'
import ProductList from './ProductList'
import Header from '../common/Header'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { MAIN } from '../../../utils/consts'
import { useAppSelector } from '../../../hooks/hook'
import { useParams } from 'react-router-dom'

const Catalog = () => {
  const { loading } = useAppSelector(state => state.products)
  const containerRef = React.useRef(null);
  const dispatch: Dispatch<any> = useDispatch()
  const { product } = useParams()
  


  return loading 
  ? (
    null
  ) : (
    <Box
        ref={containerRef}
      >
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
        <Box ml={2}>
          <Breadcrumbs>
            <Link underline='hover' href={MAIN}>
              Главная
            </Link>
            <Typography>Каталог</Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box flexGrow={2}>
            <ProductList />
          </Box>
        </Box>
      </Box>
  )

  // return !loading &&
  //     
} 

export default Catalog