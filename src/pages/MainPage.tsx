import React from 'react'
import DealsFeatured from '../components/DealsFeatured/DealsFeatured'
import Banner from '../components/Banner/Banner'
import PopularCategories from '../components/PopularCategories/PopularCategories'
import BannerMB from '../components/BannerMB/BannerMB'
import Trends from '../components/Trends/Trends'
import Brands from '../components/Brands/Brands'
import Characters from '../components/Characters/Characters'
import MainNav from '../components/Header/MainNav'

const Main = () => {


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