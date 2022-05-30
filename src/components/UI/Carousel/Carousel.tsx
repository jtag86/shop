import React from 'react'
import Carousel from 'nuka-carousel'
import CarouselCard from './CarouselCard'
import { Typography, Box, Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useAppSelector } from '../../../hooks/hook'

interface Props {
  title: string,
  scrollNum: number,
}

const CarouselEl: React.FC<Props> = ({title, scrollNum}) => {
  const { loading, products } = useAppSelector(state => state.products)
  const rand = (length: number) => {
    return Math.floor(Math.random() * length)
  }

  return !loading 
      ? <Box mx={5} my={10} mt={4}>
          <Box>
            <Typography variant="h4" sx={{color: "#337ab7"}}  m={1} >
              {title}
            </Typography>
            <hr/>
          </Box>
  
          <Carousel
            cellSpacing={0}
            autoplay={true}
            wrapAround={true}
            slidesToShow={5}
            slidesToScroll={scrollNum}
            withoutControls={false}
            renderCenterLeftControls={({ previousSlide }) => (
              <Box
                sx={{
                  position: 'absolute',
                  top: "-208px",
                  left: "1140px"
                }}
              >
                <Button>
                  <ArrowBackIosIcon onClick={previousSlide} color="primary" fontSize='large'/>
                </Button>
              </Box>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Box 
                sx={{
                  position: 'absolute',
                  top: "-208px",
                  left: "-100px"
                }}
              >
                <Button>
                  <ArrowForwardIosIcon onClick={nextSlide} color="primary" fontSize='large'/>
                </Button>
              </Box>
            )}
          >
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
            <CarouselCard product={products![rand(products!.length)]}/>
          </Carousel>
        </Box>       
      : null
}

export default CarouselEl