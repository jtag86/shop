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

const AllPagesContainer = styled.div<{width: number, offset: number, duration: number}>`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.offset}px);
  width: ${props => props.width}px;
  transition: translate;
  transition-duration: ${props => props.duration}ms;
  transition-property: transform;
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
  slidesToMove: number,
  infinite: boolean
}

const TRANSITION_DURATION = 300

const Slider:React.FC<Props> = ({children, slidesToShow, slidesToMove, infinite}) => {
  
  const windowRef = useRef<any>()

  const [pages, setPages] = useState<React.ReactElement[]>([])
  const [width, setWidth] = useState(0)
  const [currentPage, setCurrentPage] = useState(-2)
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })
  const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION)
  console.log("currentPage",currentPage)
  // console.log("transitionDuration",transitionDuration)

  const resizeHandler = () => {
    const _width = windowRef.current.offsetWidth
    setWidth(_width)
  }

  // useEffect(() => {
  //   if(transitionDuration === 0) {
  //     setTimeout(() => {
  //       setTransitionDuration(TRANSITION_DURATION)
  //     }, TRANSITION_DURATION)
  //   }
  // }, [transitionDuration])

    
  useEffect(() => {
    resizeHandler()
    setCurrentPage( -clonesCount.head)

    // console.log("setCurrentPage = 0")
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  useEffect(() => {
    if(!infinite) return
    const firstClone = 0
    const lastClone = -(pages.length - 1)
    const firstPage = firstClone - clonesCount.head
    const lastPage = -(pages.length - 1 - clonesCount.tail)

    if(currentPage === lastClone) {
      // setTimeout(() => {setCurrentPage(firstPage)}, TRANSITION_DURATION)
      setTransitionDuration(0)
      return
    }

    // if(currentPage === 0) {
    //   setCurrentPage(lastPage)
    //   // setTransitionDuration(0)
    //   setTimeout(() => {}, TRANSITION_DURATION)
    //   return
    // }
  }, [pages, clonesCount, currentPage])


  useEffect(() => {
    const arrayChildren = Children.toArray(children)

    const tailCount =  arrayChildren.length % slidesToMove;
    const tailArr:React.ReactElement[] = []

    for(let i = 0; i< tailCount; i++){
      tailArr.push(cloneElement(arrayChildren[i] as React.ReactElement, {
        style: {
          height: '100%',
          minWidth: `${width/slidesToShow}px`,
          maxWidth: `${width/slidesToShow}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }))
    } 

    setPages([
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
        ...tailArr
      ])

    console.log(tailCount, "tailCount")
    // setPages([
    //   // cloneElement(arrayChildren[arrayChildren.length-1] as React.ReactElement, {
    //   //   style: {
    //   //     height: '100%',
    //   //     minWidth: `${width/slidesToShow}px`,
    //   //     maxWidth: `${width/slidesToShow}px`,
    //   //     display: 'flex',
    //   //     justifyContent: 'center',
    //   //     alignItems: 'center'
    //   //   }
    //   // }),
    //   ,
    //   // cloneElement(arrayChildren[0] as React.ReactElement, {
    //   //   style: {
    //   //     height: '100%',
    //   //     minWidth: `${width/slidesToShow}px`,
    //   //     maxWidth: `${width/slidesToShow}px`,
    //   //     display: 'flex',
    //   //     justifyContent: 'center',
    //   //     alignItems: 'center'
    //   //   }
    //   // }),
    // ])
    // setClonesCount({ head: 1, tail: 1 })
  }, [width])

  const handleArrowLeft = () => {
    setCurrentPage(() => {
      const newSlider = currentPage + 1
      return Math.min(newSlider, 0)
    })
  }

  const handleArrowRight = () => {
    setCurrentPage(currentOffset => {
      const newOffset = currentOffset - 1
      const maxOffeset =  -(pages.length - 1)
      return Math.max(newOffset, maxOffeset)
    })
  }

  return (
    <MainContainer>
      <ArrowLeft onClick={handleArrowLeft} />
      <Window ref={windowRef}>
        <AllPagesContainer 
          width={width*(pages.length-1)}
          offset={currentPage*(width/slidesToShow*slidesToMove)}
          duration={transitionDuration}
        >
          {pages}
        </AllPagesContainer>
      </Window>
      <ArrowRight onClick={handleArrowRight} />

    </MainContainer>
  )
}

export default Slider