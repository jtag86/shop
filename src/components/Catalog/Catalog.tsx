import React, { useEffect } from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import ProductList from './ProductList'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import { addProducts } from '../../redux/actionCreators/addProducts'
import { resetProducts } from '../../redux/actionCreators/resetProducts'
import { MAIN } from '../../utils/consts'

const Catalog = () => {
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(addProducts())
    return (() => {
      dispatch(resetProducts)
    })
  }, [])

  const containerRef = React.useRef(null)
  const { product } = useParams()

  return <Box
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
      </Box>
      <Box flexGrow={2}>
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
} 

export default Catalog