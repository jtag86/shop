import React from 'react'
import GroupButtons from '../GroupButtons/GroupButtons'
import GoodsButton from '../GoodsButton/GoodsButton'
import MainTopRow from '../MainTopRow/MainTopRow'
import ImageSlider from '../ImageSlider/ImageSlider'
import MainBottomRow from '../MainBottomRow/MainBottomRow'
import Carousel from '../Carousel/Carousel'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <aside>
        <GoodsButton toggleClick={() => {}} />
        <GroupButtons visible={true}/>
      </aside>
      <main>
        <MainTopRow />
        <ImageSlider />
        <MainBottomRow />
      </main>
      <div className='content'>
        <Carousel title={"Вам может понравится"} scrollNum={5} />
        <Carousel title={"Наши покупатели выбирают"} scrollNum={3} />
        <Carousel title={"Новинки"} scrollNum={4} />
        <Carousel title={"Товар недели"} scrollNum={1} />
        <Carousel title={"Кэшбэк"} scrollNum={1}/>
      </div>
      <footer>
        FOOTER
      </footer>
    </div>
  )
}

export default Main