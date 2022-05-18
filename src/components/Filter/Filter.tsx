import React, { useState } from 'react'
import GroupButtons from '../GroupButtons/GroupButtons'
import GoodsButton from '../GoodsButton/GoodsButton'
import { Box } from '@mui/material'
import './Filter.css'
import MainTopRow from '../MainTopRow/MainTopRow'
import FilterParameters from '../FilterParametrs/FilterParameters'
import FilterContent from '../FilterContent/FilterContent'

const Filter = () => {

  const [visible, setVisible] = useState(false)

  const toggleClick = () => {
    setVisible(!visible)
  }

  return (
    <Box className='filter'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box flexGrow={0} m={1}>
          <GoodsButton toggleClick={toggleClick} />
          <Box sx={{position: "absolute", zIndex: '2'}}>
            <GroupButtons visible={visible} />
          </Box>
        </Box>
        <Box flexGrow={2}>
          <MainTopRow />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box flexGrow={0} m={1}>
          <FilterParameters />
        </Box>
        <Box flexGrow={2}>
          <FilterContent />
        </Box>
      </Box>

      <footer>
        FOOTER
      </footer>
    </Box>
  )
}

export default Filter