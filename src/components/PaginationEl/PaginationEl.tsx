import { Pagination } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'

const PaginationEl = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [goods, setGoods] = useState([])
  const [goodsPerPage, setGoodsPerPage] = useState(20)

  const lastGoodsIndex = currentPage * goodsPerPage
  const firstGoodsIndex = lastGoodsIndex - goodsPerPage

  const handleChangePage = (event: ChangeEvent, value: number) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    const getPosts = async() => {
      const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${currentPage}`)
      console.log(posts.data)
      setGoods(posts.data)
    }

    getPosts()
  }, [currentPage])

  return (
    
    <Pagination count={10} page={currentPage} onChange={(e: any, value) => handleChangePage(e, value)} showFirstButton showLastButton color="primary" />
  )
}

export default PaginationEl