import React, { useEffect, useState, useRef } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Box, Button, TextField, Typography } from '@mui/material'
import Slider from '../../UI/Slider'
import { useAppSelector } from '../../../hooks/hook'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import Slide from '@mui/material/Slide'


interface Props {
  containerRef: React.MutableRefObject<null>
}

const Filter: React.FC<Props> = ({containerRef}) => {
  const products = useAppSelector(state => state.products.products)
  const dispatch: Dispatch<any> = useDispatch()
  
  let timer = useRef<ReturnType<typeof setTimeout>>()


  const [buttonVisible, setButtonVisible] = useState(false)

  const [cost, setCost] = useState<number[]>([100000, 500000])
  const [cost2, setCost2] = useState<number[]>([100000, 500000])
  const [visibleCost, setVisibleCost] = useState(true)
  const [visibleCost2, setVisibleCost2] = useState(true)


  const handleVisibleCost = () => {
    setVisibleCost(!visibleCost)
  }

  const handleVisibleCost2 = () => {
    setVisibleCost2(!visibleCost2)
  }

  const setTimer = () => {
    if(timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setTimeout(() => {
        setButtonVisible(true)
      }, 100)
      setButtonVisible(false)
    }, 800)
  }

  const handleCost = (arr: number[]) => {
    setTimer()
    setCost(arr)
  }

  const handleCost2 = (arr: number[]) => {
    setCost2(arr)
  }

  return (
    <Box sx={{
        width: "300px", 
        backgroundColor: '#edf6fc',
      }}
    >
        <Box 
          sx={{
            position: 'fixed', 
            zIndex: '10', 
            top: '200px', 
            left: '230px'
          }}
          
        >
          <Slide direction="up" in={buttonVisible} container={containerRef.current}>
            <Button variant='contained' color='warning'>Изменить</Button>
          </Slide>
        </Box>
      <Typography variant='subtitle1' p={2}>
        Подбор параметров
      </Typography>
      <Typography
        sx={{
          margin: '0 auto', 
          fontSize: '15px',
          display: "inline-flex",
          alignItems: 'center',
          color: '#039be5'
        }}
        p={1}
        onClick={handleVisibleCost}
      >
        Цена в интернет-магазине 
        {visibleCost ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}
      </Typography>
      <Box
        sx={{
          display: visibleCost ? 'flex' : 'none',
          justifyContent: "space-around",
          borderRadius: "0px",
        }}
      >
        <TextField 
          size="small"
          sx={{backgroundColor: "white", width: "100px"}}
          value={cost[0]}
        />
        <TextField 
          size="small"
          sx={{backgroundColor: "white", width: "100px"}}
          value={cost[1]}
        />
      </Box>

      <Box
        sx={{
          display: visibleCost ? 'block' : 'none',
        }}
      >
        <Slider  value={cost} handleCost={handleCost} min={0} max={999999} />
      </Box>

      <Typography
        sx={{
          margin: '0 auto', 
          fontSize: '15px',
          display: "inline-flex",
          alignItems: 'center',
          color: '#039be5',
        }}
        p={1}
        onClick={handleVisibleCost2}
      >
        Цена товара недели 
        {visibleCost2?<ArrowDropDownIcon/>:<ArrowDropUpIcon/>}
      </Typography>

      <Box
        sx={{
          display: visibleCost2 ? 'flex' : 'none',
          justifyContent: "space-around",
          borderRadius: "0px"
        }}
      >
        <TextField 
          size="small"
          sx={{backgroundColor: "white", width: "100px"}}
          value={cost2[0]}
        />
        <TextField 
          size="small"
          sx={{backgroundColor: "white", width: "100px"}}
          value={cost2[1]}
        />
      </Box>

      <Box
        sx={{
          display: visibleCost2 ? 'block' : 'none',
        }}
      >
        <Slider value={cost2} handleCost={handleCost2} min={0} max={999999} />
      </Box>


    </Box>
  )
}

export default Filter