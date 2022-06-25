import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import DealsFeatured from '../components/DealsFeatured/DealsFeatured'
import Banner from '../components/Banner/Banner'
import PopularCategories from '../components/PopularCategories/PopularCategories'
import BannerMB from '../components/BannerMB/BannerMB'
import Trends from '../components/Trends/Trends'
import Brands from '../components/Brands/Brands'
import { addProducts } from '../redux/actionCreators/addProducts'
import Characters from '../components/Characters/Characters'
import Footer from '../components/Footer/Footer'
import Newsletter from '../components/Newsletter/Newsletter'
import MainNav from '../components/Header/MainNav'

const Main = () => {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(addProducts())
  }, [])

  return <>
    <MainNav show={false} />
    <Banner />
    <Characters />
    <DealsFeatured />
    <PopularCategories />
    <BannerMB />
    <Trends />
    <Brands />
  </>
}

export default Main