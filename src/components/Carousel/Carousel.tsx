import React, { useState } from 'react'
import Carousel from 'nuka-carousel'
import CarouselCard from '../CarouselCard/CarouselCard'
import videocard from '../../assets/img/videocard.jpg'
import { Typography, Box } from '@mui/material'

interface Props {
  title: string,
  scrollNum: number
}

const CarouselEl: React.FC<Props> = ({title, scrollNum}) => {

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Box>
        <Typography variant="h5" sx={{color: "#444"}}  m={5} >
          {title}
        </Typography>
      </Box>

      <Carousel
        cellSpacing={0}
        autoplay={true}
        wrapAround={true}
        slidesToShow={5}
        slidesToScroll={scrollNum}
      >
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
        <CarouselCard image={videocard} cost={180000} text={"Видеокарта Gigabyte RTX 3050 Eagle, 8 GB, GeForce RTX 3050"}/>
      </Carousel>
    </div>

  )
}

export default CarouselEl