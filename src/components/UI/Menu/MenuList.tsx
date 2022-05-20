import React, { useRef,  useState, MouseEvent, ElementType } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { v4 as uuidv4} from 'uuid'
import { Typography } from '@mui/material'
import { useOnClickOutside } from '../../../hooks/hook'

interface IMenuList {
  title: boolean,
  text: string
}

interface Props {
  show: boolean,
  text: Array<IMenuList> | null,
  onMouseLeave: () => void,
  onClose: () => void
}

const MenuList: React.FC<Props> = ({show, text, onMouseLeave, onClose}) => {
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, onClose)

  return (
    <Box
      sx={{
        position: "absolute",
        left: "295px",
        top: "0px",
        zIndex: "1",
        display: show ? 'flex' : 'none'
      }}
    >
      <Paper
        elevation={3}
        onMouseLeave={onMouseLeave}
        ref={ref}
        sx={{padding: '10px', paddingLeft: '20px'}}
      >
        {text?.map(item => {
          return (
            <Typography key={uuidv4()}
              sx={
                item.title 
                ?{fontSize: '20px', color: '#000', width: "600px"}
                :{fontSize: '15px', color: '#777', width: "600px", textIndent: '10px'}
              }
            >
            {item.text}
            </Typography>
          )
      })}
      </Paper>
    </Box>
  )
}

export default MenuList