import React, { useEffect } from 'react'
import Menu from '../common/Menu/Menu'
import Navigation from '../common/Navigation'
import Benefits from './Benefits/Benefits'
import Header from '../common/Header/Header'
import CarouselMain from '../../UI/CarouselMain'
import CarouselEl from '../../UI/Carousel/Carousel'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import News from './News'
import ITNews from './ITNews'
import Footer from '../common/footer/Footer'
import { addProducts } from '../../../redux/actionCreators/addProducts'
import { resetProducts } from '../../../redux/actionCreators/resetProducts'
import Characters from './Characters'
import DealsFeatured from './DealsFeatured/DealsFeatured'
import Banner from './Banner'
import PopularCategories from './PopularCategories/Index'

const Main = () => {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(addProducts())
  }, [])

  return (<>
        <Header />
        <Banner />
        <Characters />
        <DealsFeatured />
        <PopularCategories />
  </>
        // <Box sx={{gridArea: 'sidebar'}} mx="auto">
        //   <Menu alwaysVisible={true}/>
        // </Box>
        // <Box sx={{gridArea: 'main'}}>
        //   <Navigation />
        //   <CarouselMain />
        //   <Benefits />
        // </Box>
        // <Box sx={{gridArea: 'content'}}>
        //   <CarouselEl title="Вам может понравиться" scrollNum={2}/>
        //   <CarouselEl title="Наши покупатели выбирают" scrollNum={1}/>
        //   <CarouselEl title="Новинки" scrollNum={3}/>
        //   <CarouselEl title="Кешбэк" scrollNum={3}/>
        //   <News />
        //   <ITNews />
        // </Box>
  )
}

export default Main