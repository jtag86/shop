import React, { useEffect, useState, Children, cloneElement, useRef } from 'react'
import styled from 'styled-components/macro'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MainContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`

const Window = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;

`

const AllPagesContainer = styled.div<{width: number, offset: number}>`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.offset}px);
  width: ${props => props.width}px;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`

const ArrowLeft = styled(FaChevronLeft)`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
`

const ArrowRight = styled(FaChevronRight)`
  position: absolute;
  top: 0px;
  left: 100px;
  z-index: 10;

`

type Props = {
  children: React.ReactNode,
  slidesToShow: number,
  slidesToMove: number
}

const Slider:React.FC<Props> = ({children, slidesToShow, slidesToMove}) => {
  
  const windowRef = useRef<any>()

  const [pages, setPages] = useState<React.ReactElement[]>([])
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(0)
  const [currentSlider, setCurrentSlider] = useState(0)

  const resizeHandler = () => {
    const _width = windowRef.current.offsetWidth
    setWidth(_width)
  }

  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  useEffect(() => {
    const arrayChildren = Children.toArray(children)
    setPages([
      cloneElement(arrayChildren[arrayChildren.length-1] as React.ReactElement, {
        style: {
          height: '100%',
          minWidth: `${width/slidesToShow}px`,
          maxWidth: `${width/slidesToShow}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }),
      ...Children.map(arrayChildren as React.ReactElement[], child => {
        return cloneElement(child as JSX.Element, {
          style: {
            height: '100%',
            minWidth: `${width/slidesToShow}px`,
            maxWidth: `${width/slidesToShow}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        })
      }),
      cloneElement(arrayChildren[0] as React.ReactElement, {
        style: {
          height: '100%',
          minWidth: `${width/slidesToShow}px`,
          maxWidth: `${width/slidesToShow}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }),
    ])
    setOffset(() => {
      const newOffset = currentSlider * width
      return Math.min(newOffset, 0)
    })
  }, [width])




  const handleArrowLeft = () => {
    setCurrentSlider(() => {
      const newSlider = currentSlider + 1
      return Math.min(newSlider, 0)
    })
  }

  const handleArrowRight = () => {
    setCurrentSlider(currentOffset => {
      const newOffset = currentOffset - 1
      const maxOffeset =  -(pages.length - 1)
      return Math.max(newOffset, maxOffeset)
    })
  }

  return (
    <MainContainer>
      <ArrowLeft onClick={handleArrowLeft} />
      <Window ref={windowRef}>
        <AllPagesContainer width={width*(pages.length-1)} offset={currentSlider*(width/slidesToShow*slidesToMove)}>
          {pages}
        </AllPagesContainer>
      </Window>
      <ArrowRight onClick={handleArrowRight} />

    </MainContainer>
  )
}

export default Slider