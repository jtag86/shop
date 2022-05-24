import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Buttons from './Buttons'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface Props {
  alwaysVisible: boolean
}

const Menu: React.FC<Props> = ({alwaysVisible}) => {
  const [visible, setVisible] = useState(false)

  const toggleClick = () => {
    setVisible(!visible)
  }

  const buttonVisible = alwaysVisible ? true : visible

  return (
    <Box>
      <Button 
        sx={{
          width: '300px',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '15px'
        }}
        onClick={toggleClick} 
        variant="contained"
      > 
        Каталог товаров 
        <ChevronRightIcon 
          sx={{
            transform: buttonVisible ? "rotate(270deg)" : "rotate(90deg)"
          }}
        /> 
      </Button>
      <Buttons visible={buttonVisible}/>
    </Box>
  )
}

export default Menu