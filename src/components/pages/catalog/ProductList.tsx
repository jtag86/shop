import React, { useEffect, useState, ChangeEvent } from 'react'
import ProductItem from './ProductItem'
import { useAppSelector } from '../../../hooks/hook'
import { Box } from '@mui/material'
import ReactLoading from 'react-loading'
import { v4 } from 'uuid'
import { Pagination, Typography } from '@mui/material'
import { IProducts } from '../../../redux/reducers/productsReducer'

const ProductList = () => {

  const { products, size } = useAppSelector(state => state.products)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [productsPerPage] = useState(10)

  const [currentProducts, setCurrentProducts] = useState<IProducts[]>([])
  const [maxPages, setMaxPages] = useState<number>()
  const handleChangePage = (event: ChangeEvent, value: number) => {
    setCurrentPage(value)
  }


  useEffect(() => {
    let pagesCount = size!/productsPerPage
    setMaxPages(pagesCount)
    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage
    if(products) setCurrentProducts(products.slice(firstIndex, lastIndex))
  }, [currentPage, products])

  return <Box>
    {
      !maxPages
      ?
      (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "300px"}}>
          <ReactLoading type="bars" color="#1976d2" height={'10%'} width={'5%'} />
        </Box>
      ) : (
        <Box>
          <Box sx={{display: 'flex', justifyContent: 'center', margin: 3}}>
            <Pagination count={maxPages} page={currentPage} onChange={(e: any, value) => handleChangePage(e, value)} showFirstButton showLastButton color="primary" />
          </Box>
          {currentProducts?.map(item => {
            return <ProductItem key={v4()} item={item}/>
          })}
          <Box sx={{display: 'flex', justifyContent: 'center', margin: 3}}>
            <Pagination count={maxPages} page={currentPage} onChange={(e: any, value) => handleChangePage(e, value)} showFirstButton showLastButton color="primary" />
          </Box>
        </Box>
      )
    }
  </Box>
}

export default ProductList