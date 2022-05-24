import React, { useEffect, useState } from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Rating, Box } from '@mui/material';


const Stars = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box 
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  )
}

export default Stars