import React, { useEffect } from 'react'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import { MAIN } from '../../utils/consts'
import bgImage from '../../assets/img/catalog_background.jpg'
import { useAppSelector } from '../../hooks/hook'
import { catalogSelector } from '../../redux/selectors/selectors'
import { Container } from '../../styles/global'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'
import MainNav from '../Header/MainNav'

const Wrapper = styled.section`
  
`
const BgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  background: transparent;
`

const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #cde4f1;
  background: linear-gradient(#FFFFFF, #cde4f1);
  opacity: 0.9;
`

const Bg = styled.div`
  background-image: url(${bgImage});
  min-height: 260px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const BgTitle = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
  font-size: clamp(1.0rem, -0.4286rem + 4.5714vw, 3rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

const Catalog = () => {
  const {category} = useParams()
  const products = useAppSelector(state => catalogSelector(state, category!))

  console.log(products)

  return (<>
    <MainNav show={false} />
    <BgWrapper>
      <Bg />
      <BgOverlay />
      <BgTitle>
        {products[0].catalog}
      </BgTitle>
    </BgWrapper>
    <ProductList products={products} />
  </>
  )
} 

export default Catalog

{/* <Header />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >

      <Box flexGrow={0} m={1}>
      </Box>
      <Box flexGrow={2}>
      </Box>
    </Box>
    <Box ml={2}>
      <Breadcrumbs>
        <Link underline='hover' href={MAIN}>
          Главная
        </Link>
        <Typography>Каталог</Typography>
      </Breadcrumbs>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Box flexGrow={2}>
        <ProductList />
      </Box>
    </Box>
    </Box> */}