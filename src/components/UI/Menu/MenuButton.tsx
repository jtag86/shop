import React from 'react'
import Button from '@mui/material/Button'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface Props {
  toggleClick: () => void
}

const MenuButton: React.FC<Props> = ({toggleClick}) => {
  return (
    <Button sx={{
      width: '300px',
      height: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '15px'
    }} onClick={toggleClick} variant="contained"> Каталог товаров <ChevronRightIcon style={{transform: "rotate(90deg)"}}/> </Button>
  )
}

export default MenuButton
