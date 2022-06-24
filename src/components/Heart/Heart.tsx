import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Box, Typography } from '@mui/material'

const Heart = () => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  return (
    <Box onClick={handleClick} sx={{display: "flex", flexDirection: "column", alignItems: "center", width: '200px', height: '100px', justifyContent: "center"}}>
      {
        state 
        ? ( <>
          <FavoriteBorderIcon fontSize="large" color='warning'/>
          <Typography>Мне нравится</Typography>
        </>
        ) : (<>
            <FavoriteIcon fontSize="large" color='warning'/>
            <Typography sx={{textAlign: "center"}}>Мне понравилось</Typography>
        </>
        )
      }
    </Box>
  )
}

export default Heart