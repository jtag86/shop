import React from 'react'
import Carousel from 'nuka-carousel'
import { Typography, Box, Button } from '@mui/material'
import image1 from '../../assets/img/slider1.jpg'
import image2 from '../../assets/img/slider2.jpg'
import image3 from '../../assets/img/slider3.jpg'

const CarouselMain = () => {
  return (
    <Box mx='auto' m={2} mt={4}>
      <Carousel 
        cellSpacing={0}
        autoplay={true}
        wrapAround={true}
        slidesToShow={1}
        slidesToScroll={1}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
      >
        <img src={image1} style={{width: '100%'}}/>
        <img src={image2} style={{width: '100%'}}/>
        <img src={image3} style={{width: '100%'}}/>
      </Carousel>
    </Box>
  )
}

export default CarouselMain