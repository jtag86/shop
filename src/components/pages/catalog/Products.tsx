import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductsCard from './ProductsCard'
import { Dispatch } from 'redux'
import Pagination from '../../UI/Pagination'
import { getGoods } from '../../../redux/actionCreators/getGoods'
import { useAppSelector } from '../../../hooks/hook'

const Products = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const { loading, goods, error } = useAppSelector(state => state.goods)

  useEffect(() => {
    dispatch(getGoods())
  }, [])

  return (
    <div>
      {
        goods?.map(item => {
          return <ProductsCard item={item}/>
        })
      }
      
      <Pagination />
    </div>
  )
}

export default Products