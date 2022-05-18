import React from 'react'
import Button from '@mui/material/Button'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import cl from './GoodsButton.module.css'

interface Props {
  toggleClick: () => void
}

const GoodsButton: React.FC<Props> = ({toggleClick}) => {
  return (
    <Button onClick={toggleClick} className={cl.list_button} variant="contained"> Каталог товаров <ChevronRightIcon style={{transform: "rotate(90deg)"}}/> </Button>
  )
}

export default GoodsButton
