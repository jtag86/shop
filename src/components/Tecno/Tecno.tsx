import React from 'react'
import { Box, Breadcrumbs, Grid, Link, Typography, Paper } from '@mui/material'
import image1 from '../assets/img/news/news1.jpg'
import image2 from '../assets/img/news/news2.jpg'
import image3 from '../assets/img/news/news3.jpg'
import image4 from '../assets/img/news/news4.jpg'
import image5 from '../assets/img/news/news5.jpg'
import image6 from '../assets/img/news/news6.jpg'
import image7 from '../assets/img/news/news7.jpg'
import image8 from '../assets/img/news/news8.jpg'
import image9 from '../assets/img/news/news9.jpg'
import Header from '../Header/Header'

const Tecno = () => {
  return (
    <Box m={4} sx={{display: "flex", flexDirection: 'column', alignItems: 'center'}} >
      <Header />
      <Grid container>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={8}>
        </Grid>
      </Grid>

      <Box m={5}>
        <Typography variant="h4">Поступление смартфонов Tecno</Typography>
      </Box>
      <Paper sx={{width: '500px'}}>
        <img src={image1} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={5}>
        <Typography variant="body1">Смартфоны Tehno поступили в магазины и интернет-магазин. Среди уже знакомых нам серий Spark, Pova, Camon и POP5 появились новые для нашего ассортимента модели – Spark GO 2022 и POP5 LTE.</Typography>
      </Box>
      <Box m={5}>
        <Typography variant="h4">Tecno Spark GO 2022</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image2} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={5}>
        <Typography variant="body1">Вы всегда будете на связи! Энергоемкий аккумулятор 5000 мАч и SPARK GO 2022 с оптимизированным энергопотреблением обеспечат длительное время работы.</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image3} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={5}>
        <Typography variant="h6">Большой экран и система стереозвука DTS</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Идеальное сочетание экрана 16,56 см (6,5 дюйма) HD+ с выемкой в виде точки и системы стереозвука DTS. Вас ждет визуальное наслаждение кинематографического качества.</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image4} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={2}>
        <Typography variant="h6">Современный и футуристический дизайн</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Смелый и современный дизайн с ослепительным корпусом и крупными символами говорит сам за себя: серия SPARK официально вступила в эру инновационного внешнего вида.</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image5} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={2}>
        <Typography variant="h6">Soplay 2.0 - Каждый может стать музыкальным продюсером</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Записывайте свой голос, создавайте различные ритмы и свою уникальную музыку. Создавайте рингтоны одним нажатием кнопки. Подключение к Интернету не требуется. Вы можете создавать музыку в любое время, используя высококачественные пакеты звуковых эффектов.</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image6} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={2}>
        <Typography variant="h6">Улучшенная работа. Стабильная и бесперебойная. В любое время.</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Используйте свое устройство по максимуму одним нажатием кнопки. Работа в режиме многозадачности также остается удобной. Даже при слабом сигнале сети обеспечивается стабильная работа. SPARK GO 2022 отличается сверхплавной работой.</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image7} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={2}>
        <Typography variant="h6">Повышенная детализация снимков. Распознавание сцен с ИИ</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Хотите выделить окружающие детали или объект на фото? Эффект боке может фокусироваться на определенных точках света и одновременно размывать фон. Камера с ИИ может оптимизировать фотографии в соответствии с различными сценами, а также улучшать четкость и реалистичность фотографий с уровнем распознавания сцены до 90 %.</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="h6">Панорамная съемка собственной разработки. Режим HDR</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Обширные пейзажи, собрание множества людей... Хотите уместить все это на одной фотографии? Панорамная съемка собственной разработки SPARK GO 2022 поможет вам в этом! Что делать, если освещение плохое?.</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Включив режим HDR, можно делать снимки с подсветкой и при этом сохранять все окружающие вас детали.</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image8} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={2}>
        <Typography variant="h4">Детский режим. Отслеживание активности детей в интернете в реальном времени.</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Ограничьте содержимое и время игр, чтобы обезопасить детей. Также можно предотвратить использование детьми нежелательных приложений и контролировать время, которое они проводят за своими мобильными телефонами.</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Наиболее важно то, что при использовании телефона лежа ребенку придет уведомление о том, что необходимо поменять неправильную позу.</Typography>
      </Box>
      <Box >
        <Typography variant="body1">Технические характеристики:</Typography>
      </Box>
      <Box>
        <ul>
          <li>Дисплей: 6.5", HD+ с выемкой в виде точки</li>
          <li>Процессор: 4 ядра</li>
          <li>Оперативная память: 2 ГБ</li>
          <li>Внутренняя память: 32 ГБ</li>
          <li>Аккумулятор: 5000 мАч</li>
          <li>Беспроводные интерфейсы: Wi-Fi, Bluetooth, NFC</li>
          <li>Биометрия: сканер отпечатков пальцев</li>
          <li>Цвет: Turquoise Cyan / Atlantic Blue / Iris Purple / Ice Silver</li>
        </ul>
      </Box>
      <Box >
        <Typography variant="h4">Tecno POP5 LTE</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Обновленная версия LTE может похвастаться не только поддержкой 4G сетей, новинка получит увеличенный до 6.52" дисплей HD+ (720 x 1600), а также немного переработанный блок камер.</Typography>
      </Box>
      <Paper sx={{width: '900px'}}>
        <img src={image9} style={{maxWidth: '100%'}}/>
      </Paper>
      <Box m={2}>
        <Typography variant="body1">POP 5 LTE оснащен энергоемким аккумулятором 5000 мАч с длительным временем работы. Забудьте о частой подзарядке.</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Ожидаемое поступление:</Typography>
      </Box>
      <Box>
        <ul>
          <li>Tecno POVA2 (4+64) Dazzle Black </li>
          <li>Tecno POVA2 (4+64) Polar Silver</li>
          <li>Tecno POVA2 (4+64) Energy Blue</li>
          <li>Tecno POVA2 (4+128) Polar Silver</li>
          <li>Tecno POVA2 (4+128) Energy Blue</li>
          <li>Tecno Spark 8P (4+128) Atlantic blue</li>
          <li>Tecno Spark 8P (4+128) Turquoise Cyan</li>
          <li>Tecno Spark 8P (4+64) Tahiti Gold</li>
          <li>Tecno Spark 8P (4+64) Turquoise Cyan</li>
          <li>Tecno Spark 8P (4+64) Atlantic Blue</li>
          <li>Tecno Spark 7 (2+32) Magnet black</li>
          <li>Tecno Spark 7 (2+32) Spruce Green</li>
          <li>Tecno Spark 7 (2+32) Morpheus Blue</li>
          <li>Tecno Spark 7 (4+64) Magnet black</li>
          <li>Tecno Spark 7 (4+64) Spruce Green</li>
          <li>Tecno Spark 7 (4+64) Morpheus Blue</li>
          <li>Tecno Spark GO 2022 (2+32) Ice Silver</li>
          <li>Tecno Spark GO 2022 (2+32) Atlantic Blue</li>
          <li>Tecno Spark GO 2022 (2+32) Turquoise Cyan</li>
          <li>Tecno Camon 18 (6+128) Dusk Grey</li>
          <li>Tecno Camon 18P (8+128) Dusk Grey</li>
          <li>Tecno POP5 LTE (2+32) Ice Blue</li>
          <li>Tecno POP5 LTE (2+32) Deepsea Luster</li>
        </ul>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Параметры могут отличаться от представленных в данном анонсе.</Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">Количество показов: 479.</Typography>
      </Box>
    </Box>
  )
}

export default Tecno