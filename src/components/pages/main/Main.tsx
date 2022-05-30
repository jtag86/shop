import React, { useEffect } from 'react'
import Menu from '../common/Menu/Menu'
import Navigation from '../common/Navigation'
import Benefits from './Benefits/Benefits'
import { Box } from '@mui/material'
import Header from '../common/Header'
import CarouselMain from '../../UI/CarouselMain'
import CarouselEl from '../../UI/Carousel/Carousel'
import { Dispatch } from 'redux'
import { getProducts } from '../../../redux/actionCreators/getProducts'
import { resetProducts } from '../../../redux/actionCreators/resetProducts'
import { useDispatch } from 'react-redux'
import News from './News'
import ITNews from './ITNews'
import Footer from '../common/footer/Footer'


const Main = () => {
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    return () => {
      dispatch(resetProducts())
    }
  }, [])


  return (<>
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gridTemplateAreas:
      `"header header"
       "sidebar main"
       "content content"`,
    }}>
      <Box sx={{gridArea: 'header'}}>
        <Header />
      </Box>
      <Box sx={{gridArea: 'sidebar'}} mx="auto">
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
        <ITNews />
      </Box>

    </Box>
    </>
  )
}

export default Main