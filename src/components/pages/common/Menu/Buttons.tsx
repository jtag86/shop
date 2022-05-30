import React from 'react'
import { ButtonGroup, Box, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { smartphones_gadgets, complect } from '../../../../assets/data/menuList'
import Modal from './Modal'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    }
  }
})

interface IModal {
  title: boolean,
  text: string
}

interface IData {
  element: boolean,
  text: Array<IModal> | null
}



interface Props {
  visible: boolean
}

const Buttons: React.FC<Props> = ({visible}) => {
  const [data, setData] = React.useState<IData>({
    element: false,
    text: null
  })

  const handleMouseOver = (text: Array<IModal>) => {
    setData({
      element: true,
      text: text
    })
  }

  const handleMouseLeave = () => {
    setData({
      element: false,
      text: null
    })
  }

  const handleOnClickOutSide = () => {
    setData({
      element: false,
      text: null
    })
  }

  return (
    <Box 
      sx={{
        marginTop: "1px",
        position: 'relative'
      }}
    >
      <ThemeProvider theme={theme}>
        <ButtonGroup
          sx={{
            width: '250px',
            display: visible ? 'inline-flex' : 'none',
            position: 'absolute',
            zIndex: '2',
            marginTop: 1
          }}
          variant="contained"
          orientation='vertical'
          aria-label='vertical outlined button group'
        >
            <Button onMouseOver={() => handleMouseOver(smartphones_gadgets)}>Комплектующие</Button>
            <Button onMouseOver={() => handleMouseOver(complect)}>Ноутбуки и компьютеры</Button>
            <Button onMouseOver={() => handleMouseOver(smartphones_gadgets)}>Компьютерная периферия</Button>
            <Button onMouseOver={() => handleMouseOver(complect)}>Оргтехника и расходные материалы</Button>
            <Button onMouseOver={() => handleMouseOver(smartphones_gadgets)}>Комплектующие</Button>
            <Button onMouseOver={() => handleMouseOver(complect)}>Ноутбуки и компьютеры</Button>
            <Button onMouseOver={() => handleMouseOver(smartphones_gadgets)}>Компьютерная периферия</Button>
            <Button onMouseOver={() => handleMouseOver(complect)}>Оргтехника и расходные материалы</Button>
            <Button onMouseOver={() => handleMouseOver(smartphones_gadgets)}>Комплектующие</Button>
            <Button onMouseOver={() => handleMouseOver(complect)}>Ноутбуки и компьютеры</Button>
            <Button onMouseOver={() => handleMouseOver(smartphones_gadgets)}>Компьютерная периферия</Button>
            <Button onMouseOver={() => handleMouseOver(complect)}>Оргтехника и расходные материалы</Button>
        </ButtonGroup>
        <Modal show={data.element} text={data.text} onMouseLeave={() => handleMouseLeave()} onClose={() => handleOnClickOutSide()}/>
      </ThemeProvider>
    </Box>

  )
}

export default Buttons
