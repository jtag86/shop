import React from 'react'
import { Button, Link, TextField } from '@mui/material'
import Box from '@mui/material/Box/Box'
import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import { styled } from '@mui/material/styles'
import { borderColor } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import RedditIcon from '@mui/icons-material/Reddit'

const Footer = () => {

  const CustomButton = styled(Button)({
    color: '#bbb',
    borderColor: "#ccc"
  })

  const BoxProps = {
    '&:hover': {border: "4px solid white"},  
    boxSizing: 'border-box',
    borderRadius: '50%', 
    backgroundColor: '#66afe9', 
    width: '50px', 
    height: '50px',  
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }

  return (<>
      <Box sx={{bgcolor: '#333'}}>
        <Box mx="auto" p={5} sx={{width: '1400px'}}>
          <Grid container  >
            <Grid item xs={3}>
              <Typography fontWeight='fontWeightBold' variant="h5" sx={{color: '#c8cece'}}>Интернет-магазин</Typography>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="">Оплата</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Доставка</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Кредитование</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Акции</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Отзывы</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Полезные рассылки</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Подарочные сертификаты</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Гарантийное обслуживание</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Юридическим лицам</Link></Box>
            </Grid>
            <Grid item xs={3}>
              <Typography fontWeight='fontWeightBold' variant="h5" sx={{color: '#c8cece'}}>Помощь</Typography>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Как заказать</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Бонусная система</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Что такое Шопики</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Статусы заказов</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Вопросы и ответы</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Форум</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Конфигуратор компьютера</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Помощь в выборе смартфона</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Калькулятор блока питания</Link></Box>
            </Grid>
            <Grid item xs={3}>
              <Typography fontWeight='fontWeightBold' variant="h5" sx={{color: '#c8cece'}}>Компания</Typography>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">О компании</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Прайс-листы</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Salem Sale</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Комиссионный магазин</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Вакансии</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Новости</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Гарантия надёжности</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Арендодателям</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Благотворительность</Link></Box>
            </Grid>
            <Grid item xs={3}>
              <Typography fontWeight='fontWeightBold' variant="h5" sx={{color: '#c8cece'}}>Контакты</Typography>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Адреса и телефоны</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Написать нам</Link></Box>
              <Box><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Telegram-бот</Link></Box>
              <Box mb={1}><Link underline="hover" sx={{color: '#c8cece', fontSize: '18px'}} href="#">Узнайте о скидках и акциях первым!</Link></Box>
              <TextField inputProps={{ style: { color: "white" } }} variant='standard' />
              <CustomButton sx={{marginLeft: 1}} variant='outlined' color="info">ПОДПИСАТЬСЯ</CustomButton>
              <Box mb={1}><Link underline="hover" sx={{color: '#c8cece', fontSize: '10px', lineHeight: '0.7'}} href="#">Нажимая на кнопку "Подписаться", я соглашаюсь с Политикой конфиденциальности</Link></Box>
              <Box mr={4}>
                <CustomButton fullWidth={true} variant='outlined' color="info">ПОДПИСАТЬСЯ НА УВЕДОМЛЕНИЯ</CustomButton>
              </Box>
              <Box m={2}>
                <Typography sx={{color: '#c8cece', fontSize: '14px'}}>Давайте дружить в соцсетях!</Typography>
              </Box>
              <Box mr={4} sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Box 
                  sx={{...BoxProps}}
                >
                  <InstagramIcon fontSize="large" />
                </Box>
                <Box 
                  sx={{...BoxProps}}
                >
                  <YouTubeIcon fontSize="large" />
                </Box>
                <Box 
                  sx={{...BoxProps}}
                >
                  <FacebookIcon fontSize="large" />
                </Box>
                <Box 
                  sx={{...BoxProps}}
                >
                  <TelegramIcon fontSize="large" />
                </Box>
                <Box 
                  sx={{...BoxProps}}
                >
                  <RedditIcon fontSize="large" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{bgcolor: '#222425'}}>
        <Box mx="auto" p={5} sx={{width: '1400px'}}>
          <Grid container>
            <Grid item xs={4}>
              <Typography sx={{color: '#c8cece', fontSize: '14px'}}>© 2007—2022 ТОО «Белый Ветер KZ»</Typography>
              <Typography sx={{color: '#c8cece', fontSize: '10px'}}>Интернет-площадка "Интернет-магазин Белый Ветер". Бытовая и компьютерная техника, комплектующие, ноутбуки, смартфоны и аксессуары в гг. Алматы, Нур-Султан (Астана) и других городах Казахстана. Публичный договор   Политика конфиденциальности  Карта сайта</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color: '#c8cece', fontSize: '18px', display: 'flex', justifyContent: 'center'}}>Мы доставили заказов</Typography>
              <Typography sx={{color: '#c8cece', fontSize: '40px', display: 'flex', justifyContent: 'center'}}>1 245 784</Typography>

            </Grid>
            <Grid item xs={4}>
              <Typography sx={{color: '#c8cece', fontSize: '14px', display: 'flex', justifyContent: 'center'}}>Читайте отзывы покупателей и оценивайте качество магазина на Яндекс.Маркете</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Footer