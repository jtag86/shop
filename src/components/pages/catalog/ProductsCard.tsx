import React from 'react'
import { Card, Box, Typography, Button, Paper, Link } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

interface IItem {
  [key: string]: string
}

interface Props {
  item: IItem
}


const ProductsCard: React.FC<Props> = ({item}) => {
  return (
    <Card sx={{margin: 3}}>
      <Box sx={{display: 'flex', justifyContent: "space-between"}}>
        <Paper elevation={3} sx={{width: 200, margin: 2, padding: 1}}>
          <img style={{width: '100%'}} src={item.url} loading="lazy"/>
        </Paper>

        <Box>
          <Link underline='none'>{`${item.brandArr} ${item.modelArr} `}</Link>
          <Typography variant='subtitle1'>Артикул</Typography>
          <Typography>text</Typography>
        </Box>

        <Box>
          <Typography>cost</Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button >Купить</Button>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button sx={{display: 'block'}}>Оформить кредит</Button>
          </Box>
          <Box sx={{display: 'flex',  alignItems: 'center', justifyContent: 'space-around'}}>
            <FavoriteBorderIcon color="warning" fontSize='large'/>
            <ScaleRoundedIcon />
          </Box>
        </Box>
      </Box>
      <Box  sx={{display: 'flex'}}>
        <Box sx={{display: 'flex'}}>
          <StarBorderOutlinedIcon color='warning'/>
          <StarBorderOutlinedIcon color='warning'/>
          <StarBorderOutlinedIcon color='warning'/>
          <StarBorderOutlinedIcon color='warning'/>
          <StarOutlinedIcon color='warning'/>
        </Box>
        <Typography>
          <Box component="span" sx={{color: '#337ab7'}}>
            Отзывы [1]
          </Box>
          Рекомендовано 1 раз
        </Typography>
      </Box>
    </Card>
  )
}

export default ProductsCard