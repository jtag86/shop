import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import spark from '../../../assets/img/tecno_spark.jpg'
import xiaomi from '../../../assets/img/xiaomi.jpg'
import iphone from '../../../assets/img/iphone.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom'

const News = () => {
  const today = new Date();
  return (
    <Box m={3}>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant='h5' sx={{color: '#337ab7', fontWeight: 'light'}}>Новости и анонсы</Typography>
          <Grid container>
            <Grid item xs={3}>
              <Box sx={{width: '50px'}} mx="auto">
                <img style={{width: '100%'}} src={spark}/>
              </Box>
              <Grid container sx={{mt: 2}}>
                <Grid item xs={3}>
                  <CalendarMonthIcon sx={{color: '#777'}} fontSize="small"/>
                </Grid>
                <Grid item xs={9} sx={{color: '#777', }}>
                  {today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank">Поступление смартфонов Tecno</Link>
              <Typography variant="body2">Новые модели Spark GO 2022 и POP5 LTE поступили в продажу!</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Box sx={{width: '50px'}} mx="auto">
                <img style={{width: '100%'}} src={xiaomi}/>
              </Box>
              <Grid container sx={{mt: 2}}>
                <Grid item xs={3}>
                  <CalendarMonthIcon sx={{color: '#777'}} fontSize="small"/>
                </Grid>
                <Grid item xs={9} sx={{color: '#777', }}>
                  {today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Typography sx={{color: "#337ab7", marginBottom: 1}}>Xiaomi 12 и Redmi Note 11 Pro</Typography>
              <Typography variant="body2">Xiaomi 12, 12X, 12 Pro и Note 11 Pro уже в продаже</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Box sx={{width: '50px'}} mx="auto">
                <img style={{width: '100%'}} src={iphone}/>
              </Box>
              <Grid container sx={{mt: 2}}>
                <Grid item xs={3}>
                  <CalendarMonthIcon sx={{color: '#777'}} fontSize="small"/>
                </Grid>
                <Grid item xs={9} sx={{color: '#777', }}>
                  {today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Typography sx={{color: "#337ab7", marginBottom: 1}}>Помощь в выборе смартфона</Typography>
              <Typography variant="body2">Наш smart-консультант поможет с выбором идеального смартфона для вас!</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          1
        </Grid>
        <Grid item xs={4}>
          1
        </Grid>
      </Grid>
    </Box>

  )
}

export default News