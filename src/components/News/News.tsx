import React, { useState } from 'react'
import { Grid, Box, Typography, Link, Paper, FormGroup, FormControlLabel, Button, LinearProgress } from '@mui/material'
import spark from '../../../assets/img/tecno_spark.jpg'
import xiaomi from '../../../assets/img/xiaomi.jpg'
import iphone from '../../../assets/img/iphone.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Checkbox from '@mui/material/Checkbox';
import { NEWS1, COMMENTS } from '../../utils/consts'

const News = () => {

  const [commentsMode, setCommentsMode] = useState(false)
  const [progress, setProgress] = React.useState(0);

  const handleClick = () => {
    setCommentsMode(!commentsMode)
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const commonProgressStyles = {
    bgcolor: 'background.paper',
    color: '#ccc',
    m: 1,
    p: 2,
    border: 1,
    borderRadius: '5px'
  };

  const today = new Date();
  return (
    <Box m={3}>
      <Grid container>
        <Grid item xs={4}>
          <Box m={2}>
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
                <Link underline="none" href={NEWS1}>Поступление смартфонов Tecno</Link>
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
                <Link underline="none" href={NEWS1}>Xiaomi 12 и Redmi Note 11 Pro</Link>
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
                <Link underline="none" href={NEWS1}>Помощь в выборе смартфона</Link>
                <Typography variant="body2">Наш smart-консультант поможет с выбором идеального смартфона для вас!</Typography>
              </Grid>
            </Grid>
          </Box>


        </Grid>
        <Grid item xs={4}>
          <Box m={2}>
            <Link underline="none" href={COMMENTS} >
              <Typography variant='h5' sx={{color: '#337ab7', fontWeight: 'light', textDecoration: 'none'}}>Отзывы покупателей</Typography>
            </Link>

            <Grid container>
              <Grid item xs={3}>
                <Box sx={{width: '50px', backgroundColor: "#639114", height: '50px', borderRadius: '50%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}} mx="auto">
                  <Typography variant = 'h4'>5</Typography>
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
                <Typography>Татьяна</Typography>
                <Box sx={{overflow: 'auto', height: '60px'}}>
                  <Typography variant="body2">За всё время покупок с Белого Ветра, для меня пока один из лучших магазинов, по качеству обслуживания менеджеров, ну и много других плюсов таких как проверка товара на брак перед отправкой, перечень всех положенных документов, а не как в других магазинах чек и гарантия и всё на этом до свидания, ну и доставка в принципе нормальная конечно не как у Kaspi ну и тоже не плохо.</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <Box sx={{width: '50px', backgroundColor: "#639114", height: '50px', borderRadius: '50%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}} mx="auto">
                  <Typography variant = 'h4'>5</Typography>
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
                <Typography>Талгат</Typography>
                <Box sx={{overflow: 'auto', height: '60px'}}>
                  <Typography variant="body2">Вежливо, культурно. Приятно разговаривать с менеджерами компании. Все молодцы!</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <Box sx={{width: '50px', backgroundColor: "#639114", height: '50px', borderRadius: '50%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}} mx="auto">
                  <Typography variant = 'h4'>5</Typography>
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
                <Typography>Кирилл </Typography>
                <Box sx={{overflow: 'auto', height: '60px'}}>
                  <Typography variant="body2">Днем заказал, вечером получил. Быстро и оперативно.</Typography>
                </Box>
              </Grid>
            </Grid>

          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box m={2}>
            <Link underline="none" href={COMMENTS} >
              <Typography variant='h5' sx={{color: '#337ab7', fontWeight: 'light', textDecoration: 'none'}}>Опросы</Typography>
            </Link>
            {
              !commentsMode
              ? (
                  <Paper elevation={1}>
                    <Box m={2} >
                      <Typography >Нужен ли сайту раздел с обзорами на товары от клиентов?</Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox   size="small" />} label={<Typography variant="body2">Да, я бы поделился личным опытом с удовольствием</Typography>}/>
                        <FormControlLabel control={<Checkbox   size="small" />} label={<Typography variant="body2">Да, но стал бы писать минимум за 1000 шопиков</Typography>}/>
                        <FormControlLabel control={<Checkbox   size="small" />} label={<Typography variant="body2">Да, это поможет мне с выбором, писать сам не буду</Typography>}/>
                        <FormControlLabel control={<Checkbox   size="small" />} label={<Typography variant="body2">Не понимаю зачем он нужен, на youtube все уже есть</Typography>}/>
                      </FormGroup>
                      <Button onClick={handleClick}>Голосовать</Button>
                    </Box>
                  </Paper>
              ) : (
                <Box>
                  <Paper elevation={1}>
                    <Box py={2} >
                      <Box m={2}>
                        <Typography >Нужен ли сайту раздел с обзорами на товары от клиентов?</Typography>
                      </Box>
                      <Box sx={{...commonProgressStyles, }}>
                        <LinearProgress variant="determinate" value={progress} />
                      </Box>
                      <Box sx={{...commonProgressStyles, }}>
                        <LinearProgress variant="determinate" value={progress} />
                      </Box>
                      <Box sx={{...commonProgressStyles, }}>
                        <LinearProgress variant="determinate" value={progress} />
                      </Box>
                      <Box sx={{...commonProgressStyles, }}>
                        <LinearProgress variant="determinate" value={progress} />
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              )
            }
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default News