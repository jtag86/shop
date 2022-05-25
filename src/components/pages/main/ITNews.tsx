import React from 'react'
import { Grid, Typography, Box, Link } from '@mui/material'
import image1 from '../../../assets/img/news/itnews1.jpg'
import image2 from '../../../assets/img/news/itnews2.jpg'
import image3 from '../../../assets/img/news/itnews3.jpg'
import { NEWS1 } from '../../../utils/consts'
import EditIcon from '@mui/icons-material/Edit'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const ITNews = () => {
  return (
    <Box p={2}>
      <Typography variant='h5' sx={{color: '#337ab7', fontWeight: 'light'}}>IT новости</Typography>
      <Grid container>
        <Grid item xs={4}>
          <Box m={1}>
            <img src={image1} style={{maxWidth: '100%'}} />
          </Box>
          <Link underline="none" sx={{fontSize: '20px'}} href={NEWS1}>Единственный в мире монитор с кадровой частотой 500 Гц: Asus анонсировали уникальный ROG Swift 500 Hz</Link>
          <Typography variant="body2">В конце года в продажу может поступить в продажу монитор ROG Swift 500 Hz для профессиональных киберспортсменов с самой высокой частотой кадров в мире.</Typography>
          <Box p={2} sx={{display: 'flex', alignItems: 'center'}}>
            <EditIcon fontSize='small'/>
            <Typography variant="body2">14 часов назад</Typography>
            &nbsp;
            &nbsp;
            <AccessTimeIcon fontSize='small'/>
            <Typography variant="body2">2 мин</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box m={1}>
            <img src={image2} style={{maxWidth: '100%'}} />
          </Box>
          <Link underline="none" sx={{fontSize: '20px'}} href={NEWS1}>Обновленный дизайн и высокоскоростная подсистема видеопамяти: GIGABYTE выпускает графические платы AMD Radeon в фирменном оригинальном исполнении</Link>
          <Typography variant="body2">Все новинки спроектированы на базе революционной микроархитектуры AMD RDNA 2, в активе которой оптимизация процессов 3D-конвейера и усовершенствованные алгоритмы в составе микрокода.</Typography>
          <Box p={2} sx={{display: 'flex', alignItems: 'center'}}>
            <EditIcon fontSize='small'/>
            <Typography variant="body2">14 часов назад</Typography>
            &nbsp;
            &nbsp;
            <AccessTimeIcon fontSize='small'/>
            <Typography variant="body2">2 мин</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box m={1}>
            <img src={image3} style={{maxWidth: '100%'}} />
          </Box>
          <Link underline="none" sx={{fontSize: '20px'}} href={NEWS1}>NVIDIA закроет нижний ценовой сегмент? Появился слух о новой ультрабюджетной GeForce GTX</Link>
          <Typography variant="body2">По данным инсайдеров, компания запланировала анонс новой бюджетной видеокарты, призванной «закрыть» нижний ценовой сегмент в семействе GeForce.</Typography>
          <Box p={2} sx={{display: 'flex', alignItems: 'center'}}>
            <EditIcon fontSize='small'/>
            <Typography variant="body2">14 часов назад</Typography>
            &nbsp;
            &nbsp;
            <AccessTimeIcon fontSize='small'/>
            <Typography variant="body2">2 мин</Typography>
          </Box>
        </Grid>
      </Grid>   
    </Box>
 
  )
}

export default ITNews