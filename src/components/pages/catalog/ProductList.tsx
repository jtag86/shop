import React, { useEffect, useState, ChangeEvent } from 'react'
import ProductItem from './ProductItem'
import { useAppSelector } from '../../../hooks/hook'
import { Box } from '@mui/material'
import ReactLoading from 'react-loading'
import { v4 } from 'uuid'
import { Pagination } from '@mui/material'
import { IProducts } from '../../../redux/reducers/productsReducer'

const ProductList = () => {

  const { loading, products, size } = useAppSelector(state => state.products)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [productsPerPage] = useState(10)
  const lastIndex = currentPage * productsPerPage
  const firstIndex = lastIndex - productsPerPage
  const [currentProducts, setCurrentProducts] = useState<IProducts[]>([])
  const [maxPages, setMaxPages] = useState<number>()
  const handleChangePage = (event: ChangeEvent, value: number) => {
    setCurrentPage(value)
  }


  useEffect(() => {
    let pagesCount = size!/productsPerPage
    setMaxPages(pagesCount)
    if(products) setCurrentProducts(products.slice(firstIndex, lastIndex))
  }, [currentPage, products])

  return (
    <div>
      <Pagination count={maxPages} page={currentPage} onChange={(e: any, value) => handleChangePage(e, value)} showFirstButton showLastButton color="primary" />
      {
        loading
        ?
        (
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "300px"}}>
            <ReactLoading type="bars" color="#1976d2" height={'10%'} width={'5%'} />
          </Box>
        ) : (
          currentProducts?.map(item => {
            return <ProductItem key={v4()} item={item}/>
          })
        )
      }
      <Pagination count={maxPages} page={currentPage} onChange={(e: any, value) => handleChangePage(e, value)} showFirstButton showLastButton color="primary" />

    </div>
  )
}

export default ProductList