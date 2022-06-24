import React, { useEffect } from 'react'
import Benefits from '../components/Benefits/Benefits'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import News from '../components/News/News'
import ITNews from '../components/ITNews/ITNews'
import Footer from '../components/Footer/Footer'
import DealsFeatured from '../components/DealsFeatured/DealsFeatured'
import Banner from '../components/Banner/Banner'
import PopularCategories from '../components/PopularCategories/PopularCategories'
import BannerMB from '../components/BannerMB/BannerMB'
import Trends from '../components/Trends/Trends'
import Brands from '../components/Brands/Brands'
import Subscribe from '../components/Newsletter/Subscribe'
import { addProducts } from '../redux/actionCreators/addProducts'
import Header from '../components/Header/Header'
import Characters from '../components/Characters/Characters'

const Main = () => {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(addProducts())
  }, [])

  return <>
    <Banner />
    <Characters />
    <DealsFeatured />
    <PopularCategories />
    <BannerMB />
    <Trends />
    <Brands />
    <Subscribe />
  </>
}

export default Main