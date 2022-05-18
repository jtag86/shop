import React from 'react'
import cl from'./ImageSlider.module.css'
import SimpleImageSlider from "react-simple-image-slider"
import slider1 from '../../assets/img/slider1.jpg'
import slider2 from '../../assets/img/slider2.jpg'
import slider3 from '../../assets/img/slider3.jpg'
import { Box } from '@mui/material'

const images = [
  { url: slider1 },
  { url: slider2 },
  { url: slider3 },
];

const ImageSlider = () => {
  return (
    <Box className={cl.image_slider}>
      <SimpleImageSlider
        width={800}
        height={300}
        images={images}
        showBullets={false}
        showNavs={true}
        />
    </Box>
  )
}

export default ImageSlider