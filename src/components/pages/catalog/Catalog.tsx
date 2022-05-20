import React, { useState } from 'react'
import GroupButtons from '../../UI/Menu/GroupButtons'
import MenuButton from '../../UI/Menu/MenuButton'
import { Box } from '@mui/material'
import Navigation from '../common/Navigation'
import Filter from './Filter'
import Products from './Products'

const Goods = () => {
  const [visible, setVisible] = useState(false)
  const toggleClick = () => {
    setVisible(!visible)
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box flexGrow={0} m={1}>
          <MenuButton toggleClick={toggleClick} />
          <Box sx={{position: "absolute", zIndex: '2'}}>
            <GroupButtons visible={visible} />
          </Box>
        </Box>
        <Box flexGrow={2}>
          <Navigation />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box flexGrow={0} m={1}>
          <Filter />
        </Box>
        <Box flexGrow={2}>
          <Products />
        </Box>
      </Box>

      <footer>
        FOOTER
      </footer>
    </Box>
  )
}

export default Goods