import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../../hooks/hook'
import { IProducts } from '../../../../redux/reducers/productsReducer'
import { device } from '../../../../styles/device'
import ProductPanelCard from './ProductPanelCard'
import Carousel from 'nuka-carousel'

const Wrapper = styled.div`
  margin-top: 30px;
  width: 700px;  
  @media ${device.laptop} {
    width: 600px;  
  }
  @media ${device.tablet} {
    margin-top: 120px;
    width: 750px;  
  }
  @media ${device.mobileL} {
    margin-top: 120px;
    width: 500px;  
  }
  @media ${device.mobileS} {
    margin-top: 50px;
    width: 80%;
  }
`

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  
`

const StyleUl = styled.ul`
  list-style: none;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
`

const StyleText = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: rgba(0,0,0,0.5);
  cursor: pointer;
  transition: all 200ms ease;
  @media ${device.mobileS} {
    font-size: 14px;
  }
`

const TabsLine = styled.div`
  width: 100%;
  height: 1px;
  background: #dadada;
  margin-top: 12px;
  position: relative;
`

const TabsLineSpan = styled.span<{left: number, spanWidth: number}>`
  position: absolute;
  top: -1px;
  left: ${p => p.left}px;
  width: ${p => p.spanWidth}px;
  height: 2px;
  background: #0e8ce4;
  transition: all 200ms ease;
`

const ProductPanel = styled.div`
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    justify-content: center;
  }
`

const Featured = () => {
  const [countsElemCarousel, setCountsElemCarousel] = useState(1)

  const handleWidthCarousel = () => {
    const {innerWidth} = getWindowSize()
    if(innerWidth > 992) setCountsElemCarousel(4)
    if(innerWidth <= 992) setCountsElemCarousel(4)
    if(innerWidth <= 768) setCountsElemCarousel(3)
    if(innerWidth <= 576) setCountsElemCarousel(1)
  }

  useEffect(() => {
    handleWidthCarousel()
    setInterval(() => {
      window.addEventListener('resize', handleWidthCarousel, { once: true });
    }, 100)
  }, [])

  const leftRef  = useRef<HTMLLIElement>(null);
  const centerRef = useRef<HTMLLIElement>(null)
  const rightRef = useRef<HTMLLIElement>(null)

  const { loading, featuredProducts } = useAppSelector(state => state.products)
  const weekProducts = featuredProducts.weekProducts
  const newProducts = featuredProducts.newProducts
  const favProducts = featuredProducts.favProducts


  const [productTab, setProductTab] = useState(1)
  const [spanX, setSpanX] = useState(0)
  const [spanWidth, setSpanWidth] = useState(122)

  const handleClick = (value: number) => {
    switch(value){
      case 1:
        setSpanX(leftRef.current!.offsetLeft)
        setSpanWidth(leftRef.current!.offsetWidth)
        setProductTab(1)
        break;
      case 2:
        setSpanX(centerRef.current!.offsetLeft)
        setSpanWidth(centerRef.current!.offsetWidth)
        setProductTab(2)
        break;
      case 3:
        setSpanX(rightRef.current!.offsetLeft)
        setSpanWidth(rightRef.current!.offsetWidth)
        setProductTab(3)
        break;
      default: setSpanX(0)
    }
  } 

  return !loading ?  <Wrapper>

    <Tabs>
      <StyleUl>
          <li ref={leftRef} onClick={() => handleClick(1)}>
            <StyleText>Товар года</StyleText>
          </li>
          <li ref={centerRef} onClick={() => handleClick(2)}>
            <StyleText>Новинки</StyleText>
          </li>
          <li ref={rightRef} onClick={() => handleClick(3)}>
            <StyleText>Вам может понравится</StyleText>
          </li>
      </StyleUl>
      <TabsLine>
        <TabsLineSpan left={spanX} spanWidth={spanWidth}/>
      </TabsLine>
    </Tabs>
    <ProductPanel>
        {
          (() => {
            switch(productTab) {
              case 1:
                return <>
                  <Carousel 
                    cellSpacing={0}
                    wrapAround={true}
                    slidesToShow={countsElemCarousel}
                    slidesToScroll={1}
                    renderCenterLeftControls={null}
                    renderCenterRightControls={null}
                    renderBottomCenterControls={null}
                  >
                    <ProductPanelCard product={weekProducts[0]} />
                    <ProductPanelCard product={weekProducts[1]} />
                    <ProductPanelCard product={weekProducts[2]} />
                    <ProductPanelCard product={weekProducts[3]} />
                    <ProductPanelCard product={weekProducts[4]} />
                    <ProductPanelCard product={weekProducts[5]} />
                    <ProductPanelCard product={weekProducts[6]} />
                    <ProductPanelCard product={weekProducts[7]} />
                  </Carousel>
                  <Carousel 
                    cellSpacing={0}
                    wrapAround={true}
                    slidesToShow={countsElemCarousel}
                    slidesToScroll={1}
                    renderCenterLeftControls={null}
                    renderCenterRightControls={null}
                    renderBottomCenterControls={null}
                  >
                    <ProductPanelCard product={weekProducts[8]} />
                    <ProductPanelCard product={weekProducts[9]} />
                    <ProductPanelCard product={weekProducts[10]} />
                    <ProductPanelCard product={weekProducts[11]} />
                    <ProductPanelCard product={weekProducts[12]} />
                    <ProductPanelCard product={weekProducts[13]} />
                    <ProductPanelCard product={weekProducts[14]} />
                    <ProductPanelCard product={weekProducts[15]} />
                  </Carousel>
                </>

              case 2: 
                return <>
                <Carousel 
                  cellSpacing={0}
                  wrapAround={true}
                  slidesToShow={countsElemCarousel}
                  slidesToScroll={1}
                  renderCenterLeftControls={null}
                  renderCenterRightControls={null}
                  renderBottomCenterControls={null}
                >
                  <ProductPanelCard product={newProducts[0]} />
                  <ProductPanelCard product={newProducts[1]} />
                  <ProductPanelCard product={newProducts[2]} />
                  <ProductPanelCard product={newProducts[3]} />
                  <ProductPanelCard product={newProducts[4]} />
                  <ProductPanelCard product={newProducts[5]} />
                  <ProductPanelCard product={newProducts[6]} />
                  <ProductPanelCard product={newProducts[7]} />
                </Carousel>
                <Carousel 
                  cellSpacing={0}
                  wrapAround={true}
                  slidesToShow={countsElemCarousel}
                  slidesToScroll={1}
                  renderCenterLeftControls={null}
                  renderCenterRightControls={null}
                  renderBottomCenterControls={null}
                >
                  <ProductPanelCard product={newProducts[8]} />
                  <ProductPanelCard product={newProducts[9]} />
                  <ProductPanelCard product={newProducts[10]} />
                  <ProductPanelCard product={newProducts[11]} />
                  <ProductPanelCard product={newProducts[12]} />
                  <ProductPanelCard product={newProducts[13]} />
                  <ProductPanelCard product={newProducts[14]} />
                  <ProductPanelCard product={newProducts[15]} />
                </Carousel>
              </>

              case 3:
                return <>
                  <Carousel 
                    cellSpacing={0}
                    wrapAround={true}
                    slidesToShow={countsElemCarousel}
                    slidesToScroll={1}
                    renderCenterLeftControls={null}
                    renderCenterRightControls={null}
                    renderBottomCenterControls={null}
                  >
                    <ProductPanelCard product={favProducts[0]} />
                    <ProductPanelCard product={favProducts[1]} />
                    <ProductPanelCard product={favProducts[2]} />
                    <ProductPanelCard product={favProducts[3]} />
                    <ProductPanelCard product={favProducts[4]} />
                    <ProductPanelCard product={favProducts[5]} />
                    <ProductPanelCard product={favProducts[6]} />
                    <ProductPanelCard product={favProducts[7]} />
                  </Carousel>
                  <Carousel 
                    cellSpacing={0}
                    wrapAround={true}
                    slidesToShow={countsElemCarousel}
                    slidesToScroll={1}
                    renderCenterLeftControls={null}
                    renderCenterRightControls={null}
                    renderBottomCenterControls={null}
                  >
                    <ProductPanelCard product={favProducts[8]} />
                    <ProductPanelCard product={favProducts[9]} />
                    <ProductPanelCard product={favProducts[10]} />
                    <ProductPanelCard product={favProducts[11]} />
                    <ProductPanelCard product={favProducts[12]} />
                    <ProductPanelCard product={favProducts[13]} />
                    <ProductPanelCard product={favProducts[14]} />
                    <ProductPanelCard product={favProducts[15]} />
                  </Carousel>
                </>
                

            }
          })()
        }

    </ProductPanel>
  </Wrapper>
  : null
}

export default Featured

const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

