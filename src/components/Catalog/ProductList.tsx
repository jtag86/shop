import React, { useState, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem'
import { Box } from '@mui/material'
import ReactLoading from 'react-loading'
import { v4 } from 'uuid'
import { Pagination } from '@mui/material'
import { useAppSelector } from '../../hooks/hook'
import { typeProductsSelector } from '../../redux/selectors/selectors'
import { IProducts } from '../../redux/reducers/productsReducer'

const ProductList = () => {
  const {product} = useParams()
  const products = useAppSelector(state => typeProductsSelector(state, product!))
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 5
  const size = products.length
  let pagesCount = size!/productsPerPage
  const lastIndex = currentPage * productsPerPage
  const firstIndex = lastIndex - productsPerPage
  const currentProducts: IProducts[] = products.slice(firstIndex, lastIndex)
  
  console.log("productsPerPage:", productsPerPage)
  const handleChangePage = (event: ChangeEvent, value: number) => {
    setCurrentPage(value)
  }

  console.log("maxpages", pagesCount)
  return <Box>
    {
      currentProducts.length
      ?
      (
        <Box>
          <Box sx={{display: 'flex', justifyContent: 'center', margin: 3}}>
            <Pagination count={pagesCount} page={currentPage} onChange={(e: any, value) => handleChangePage(e, value)} showFirstButton showLastButton color="primary" />
          </Box>
          {currentProducts?.map(item => {
            return <ProductItem key={v4()} item={item}/>
          })}
          <Box sx={{display: 'flex', justifyContent: 'center', margin: 3}}>
            <Pagination count={pagesCount} page={currentPage} onChange={(e: any, value) => handleChangePage(e, value)} showFirstButton showLastButton color="primary" />
          </Box>
        </Box>
      ) : (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "300px"}}>
          <ReactLoading type="bars" color="#1976d2" height={'10%'} width={'5%'} />
        </Box>
      )
    }
  </Box>
}

export default ProductList