import React, { useEffect } from 'react'
import Menu from '../common/Menu/Menu'
import Navigation from '../common/Navigation'
import Benefits from './Benefits/Benefits'
import { Box } from '@mui/material'
import Header from '../common/Header'
import Footer from '../common/Footer'
import CarouselMain from '../../UI/CarouselMain/CarouselMain'
import CarouselEl from '../../UI/Carousel/Carousel'
import { Dispatch } from 'redux'
import { getProducts } from '../../../redux/actionCreators/getProducts'
import { useDispatch } from 'react-redux'
import News from './News'


const Main = () => {
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])


  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gridTemplateAreas:
      `"header header"
       "sidebar main"
       "content content"
       "footer footer"`,
    }}>
      <Box sx={{gridArea: 'header'}}>
        <Header />
      </Box>
      <Box sx={{gridArea: 'sidebar', height: '500px'}}>
        <Menu alwaysVisible={true}/>
      </Box>
      <Box sx={{gridArea: 'main'}}>
        <Navigation />
        <CarouselMain />
        <Benefits />
      </Box>
      <Box sx={{gridArea: 'content'}}>
        <CarouselEl title="Вам может понравиться" scrollNum={2}/>
        <CarouselEl title="Наши покупатели выбирают" scrollNum={1}/>
        <CarouselEl title="Новинки" scrollNum={3}/>
        <CarouselEl title="Кешбэк" scrollNum={3}/>
        <News />
      </Box>
      <Box sx={{gridArea: 'footer'}}>
        <Footer />
      </Box>
    </Box>
  )
}

export default Main