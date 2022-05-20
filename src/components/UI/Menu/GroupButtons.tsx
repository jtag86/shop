import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GroupButton from './GroupButton'
import { smartphones_gadgets, complect, notebooks, peripheral, orgtechnica } from '../../../assets/data/menuList'
import MenuList from './MenuList'



const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    }
  }
})

interface IMenuEl {
  element: boolean,
  text: Array<IMenuList> | null
}

interface IMenuList {
  title: boolean,
  text: string
}

interface Props {
  visible: boolean
}

const GroupGroupButtons: React.FC<Props> = ({visible}) => {
  const [data, setData] = React.useState<IMenuEl>({
    element: false,
    text: null
  })

  const handleMouseOver = (text: Array<IMenuList>) => {
    console.log("hello")
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
          sx={
            visible ? {width: '300px'} : {width: '300px', display: 'none'}
          }
          variant="contained"
          orientation='vertical'
          aria-label='vertical outlined button group'
        >
            <GroupButton onMouseOver={() => handleMouseOver(smartphones_gadgets)}>Смартфоны и гаджеты</GroupButton>
            <GroupButton onMouseOver={() => handleMouseOver(complect)}>Комплектующие</GroupButton>
            <GroupButton onMouseOver={() => handleMouseOver(notebooks)}>Ноутбуки и компьютеры</GroupButton>
            <GroupButton onMouseOver={() => handleMouseOver(peripheral)}>Компьютерная периферия</GroupButton>
            <GroupButton onMouseOver={() => handleMouseOver(orgtechnica)}>Оргтехника и расходные материалы</GroupButton>
        </ButtonGroup>
        <MenuList show={data.element} text={data.text} onMouseLeave={() => handleMouseLeave()} onClose={() => handleOnClickOutSide()}/>
      </ThemeProvider>
    </Box>

  )
}

export default GroupGroupButtons

 {/* <GroupButton>Ноутбуки и компьютеры</GroupButton>
            <GroupButton>Компьютерная периферия</GroupButton>
            <GroupButton>Оргтехника и расходные материалы</GroupButton>
            <GroupButton>Сетевое и серверное оборудование</GroupButton>
            <GroupButton>Телевизоры, аудио, фото, видео</GroupButton>
            <GroupButton>Бытовая техника и товары для дома</GroupButton>
            <GroupButton>Товары для геймеров</GroupButton>
            <GroupButton>Развлечения и отдых</GroupButton>
            <GroupButton>Автотовары</GroupButton>
            <GroupButton>Канцтовары</GroupButton>
            <GroupButton>Подарочные сертификаты</GroupButton> */}