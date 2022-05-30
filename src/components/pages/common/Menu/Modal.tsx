import React, { useRef,  useState, MouseEvent, ElementType } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { v4 as uuidv4} from 'uuid'
import { Typography } from '@mui/material'
import { useOnClickOutside } from '../../../../hooks/hook'
import { NavLink } from 'react-router-dom'

interface IMenuList {
  title: boolean,
  text: string,
  link?: string
}

interface Props {
  show: boolean,
  text: Array<IMenuList> | null,
  onMouseLeave: () => void,
  onClose: () => void
}

const Modal: React.FC<Props> = ({show, text, onMouseLeave, onClose}) => {
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
          return ( item.title
            ?
            ( 
              <Typography 
                key={uuidv4()}
                sx={{
                  fontSize: '20px', 
                  color: '#000',
                  textIndent: '0px',
                  width: "600px",
                }}
              >
                {item.text}
              </Typography>
            ) : (
              <NavLink key={uuidv4()} style={{ textDecoration: 'none'}} to={`/catalog/${item.link}`} >
                <Box m={1} sx={{fontSize: '16px', color: '#333'}}>
                  {item.text}
                </Box>
              </NavLink>
            )

          )
      })}
      </Paper>
    </Box>
  )
}

export default Modal