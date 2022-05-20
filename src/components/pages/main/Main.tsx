import React from 'react'
import GroupButtons from '../../UI/Menu/GroupButtons'
import MenuButton from '../../UI/Menu/MenuButton'
import Navigation from '../common/Navigation'
import Benefits from './Benefits'
import Carousel from '../../UI/Carousel/Carousel'
import { Box } from '@mui/material'
import Header from './Header'

const Main = () => {
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
      <Box sx={{gridArea: 'sidebar'}}>
        <MenuButton toggleClick={() => {}} />
        <GroupButtons visible={true}/>
      </Box>
      <Box sx={{gridArea: 'main'}}>
        <Navigation />
        <Benefits />
      </Box>
      <Box sx={{gridArea: 'content'}}>
        <Carousel title={"Вам может понравится"} scrollNum={5} />
        <Carousel title={"Наши покупатели выбирают"} scrollNum={3} />
        <Carousel title={"Новинки"} scrollNum={4} />
        <Carousel title={"Товар недели"} scrollNum={1} />
        <Carousel title={"Кэшбэк"} scrollNum={1}/>
      </Box>
      <Box sx={{gridArea: 'footer'}}>
        FOOTER
      </Box>
    </Box>
  )
}

export default Main