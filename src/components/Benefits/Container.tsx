import { Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
  image: string,
  text: string
}

const Container: React.FC<Props> = ({image, text}) => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: 'center',width: "150px"}}>
      <Box sx={{width: '50px'}}>
        <img src={image} style={{maxWidth: '100%'}} />
      </Box>
      <Typography sx={{textAlign: 'center'}} variant="body2">{text}</Typography>
    </Box>
  )
}

export default Container