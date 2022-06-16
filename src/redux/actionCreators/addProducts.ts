import { Dispatch } from "redux"
import { Action, ActionTypes} from '../actionTypes/actionProductTypes'
import { 
  processors,
  motherboards,
  ram,
  video,
  hdd,
  ssd,
  powerSupply,
  pccases,
  chargersData,
  phoneCases,
  books,
  monopods,
  smartphones,
  pushButtonPhones,
} from "../../assets/data/data"

import proc1 from '../../assets/img/products/proc/proc1.jpg'
import proc2 from '../../assets/img/products/proc/proc2.jpg'
import proc3 from '../../assets/img/products/proc/proc3.jpg'
import proc4 from '../../assets/img/products/proc/proc4.jpg'
import proc5 from '../../assets/img/products/proc/proc5.jpg'

import mb1 from '../../assets/img/products/motherboard/mb1.jpg'
import mb2 from '../../assets/img/products/motherboard/mb2.jpg'
import mb3 from '../../assets/img/products/motherboard/mb3.jpg'
import mb4 from '../../assets/img/products/motherboard/mb4.jpg'
import mb5 from '../../assets/img/products/motherboard/mb5.jpg'

import ram1 from '../../assets/img/products/ram/ram1.jpg'
import ram2 from '../../assets/img/products/ram/ram2.jpg'
import ram3 from '../../assets/img/products/ram/ram3.jpg'
import ram4 from '../../assets/img/products/ram/ram4.jpg'
import ram5 from '../../assets/img/products/ram/ram5.jpg'

import video1 from '../../assets/img/products/videocards/videocard1.jpg'
import video2 from '../../assets/img/products/videocards/videocard2.jpg'
import video3 from '../../assets/img/products/videocards/videocard3.jpg'
import video4 from '../../assets/img/products/videocards/videocard4.jpg'
import video5 from '../../assets/img/products/videocards/videocard5.jpg'

import hdd1 from '../../assets/img/products/hdd/hdd1.jpg'
import hdd2 from '../../assets/img/products/hdd/hdd2.jpg'
import hdd3 from '../../assets/img/products/hdd/hdd3.jpg'
import hdd4 from '../../assets/img/products/hdd/hdd4.jpg'
import hdd5 from '../../assets/img/products/hdd/hdd5.jpg'

import ssd1 from '../../assets/img/products/ssd/ssd1.jpg'
import ssd2 from '../../assets/img/products/ssd/ssd2.jpg'
import ssd3 from '../../assets/img/products/ssd/ssd3.jpg'
import ssd4 from '../../assets/img/products/ssd/ssd4.jpg'
import ssd5 from '../../assets/img/products/ssd/ssd5.jpg'

import ps1 from '../../assets/img/products/powerSupplies/powersupply1.jpg'
import ps2 from '../../assets/img/products/powerSupplies/powersupply2.jpg'
import ps3 from '../../assets/img/products/powerSupplies/powersupply3.jpg'
import ps4 from '../../assets/img/products/powerSupplies/powersupply4.jpg'
import ps5 from '../../assets/img/products/powerSupplies/powersupply5.jpg'

import pccases1 from '../../assets/img/products/pccases/pccase1.jpg'
import pccases2 from '../../assets/img/products/pccases/pccase2.jpg'
import pccases3 from '../../assets/img/products/pccases/pccase3.jpg'
import pccases4 from '../../assets/img/products/pccases/pccase4.jpg'
import pccases5 from '../../assets/img/products/pccases/pccase5.jpg'

import book1 from '../../assets/img/products/books/book1.jpg'
import book2 from '../../assets/img/products/books/book2.jpg'


import case1 from '../../assets/img/products/cases/case1.jpg'
import case2 from '../../assets/img/products/cases/case2.jpg'

import charger1 from '../../assets/img/products/chargers/charger1.jpg'
import charger2 from '../../assets/img/products/chargers/charger2.jpg'

import monopod1 from '../../assets/img/products/monopod/monopod1.jpg'
import monopod2 from '../../assets/img/products/monopod/monopod2.jpg'

import smartphone1 from '../../assets/img/products/smartphones/smartphone1.jpg'
import smartphone2 from '../../assets/img/products/smartphones/smartphone2.jpg'

import buttonPhone1 from '../../assets/img/products/buttonPhones/buttonPhones1.jpg'
import buttonPhone2 from '../../assets/img/products/buttonPhones/buttonPhones2.jpg'
import { IProducts } from "../reducers/productsReducer"

const procImages = [proc1, proc2, proc3, proc4, proc5]
const mbImages = [mb1, mb2, mb3, mb4, mb5]
const ramImages = [ram1, ram2, ram3, ram4, ram5]
const videoImages = [video1, video2, video3, video4, video5]
const hddImages = [hdd1, hdd2, hdd3, hdd4, hdd5]
const ssdImages = [ssd1, ssd2, ssd3, ssd4, ssd5]
const psImages = [ps1, ps2, ps3, ps4, ps5]
const pccasesImages = [pccases1, pccases2, pccases3, pccases4, pccases5]
const chargerImages= [charger1, charger2]
const caseImages= [case1, case2]
const bookImages = [book1, book2]
const monopodImages= [monopod1, monopod2]
const smartphoneImages= [smartphone1, smartphone2]
const buttonPhoneImages = [buttonPhone1, buttonPhone2]


export const addProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.PRODUCTS_GEN_PENDING
    })
    const procArr = createProduct( processors, procImages)
    const mbArr = createProduct( motherboards, mbImages)
    const ramArr = createProduct( ram, ramImages)
    const videoArr = createProduct( video, videoImages)
    const hddArr = createProduct( hdd, hddImages)
    const ssdArr = createProduct( ssd, ssdImages)
    const psArr = createProduct( powerSupply, psImages)
    const pccasesArr = createProduct( pccases, pccasesImages)
    const bookArr = createProduct( books, bookImages)
    const casesArr = createProduct( phoneCases, caseImages)
    const chargerArr = createProduct( chargersData, chargerImages)
    const monopodArr = createProduct( monopods, monopodImages)
    const smartPhoneArr = createProduct( smartphones, smartphoneImages)
    const buttonPhonesArr = createProduct( pushButtonPhones, buttonPhoneImages)
    const products = [
      ...procArr,
      ...mbArr,
      ...ramArr,
      ...videoArr,
      ...hddArr,
      ...ssdArr,
      ...psArr,
      ...pccasesArr,
      ...bookArr, 
      ...casesArr, 
      ...chargerArr, 
      ...monopodArr, 
      ...smartPhoneArr,
      ...buttonPhonesArr, 
    ]

    let weekProducts:IProducts[] = []
    let newProducts:IProducts[] = []
    let favProducts:IProducts[] = []

    for(let i = 0; i < 16; i++) {
      let rand = randomInteger(0, products.length)
      weekProducts.push(products[rand])
      rand = randomInteger(0, products.length)
      newProducts.push(products[rand])
      rand = randomInteger(0, products.length)
      favProducts.push(products[rand])
    }

    let bannerProducts:IProducts[] = []

    for(let i = 0; i < 4; i++) {
      let rand = randomInteger(0, mbArr.length)
      bannerProducts.push(mbArr[rand])
    }

    dispatch({
      type: ActionTypes.PRODUCTS_GEN_FINISHED,
      payload: products,
      weekProducts,
      newProducts,
      favProducts,
      bannerProducts,
      size: products.length,
    })
  }
}

  const createProduct = (product: any, images: string[]) => {
  const dataArr = []
  for(let i = 0; i<100; i++) {
    const rand = Math.floor(Math.random() * images.length)
    const url = images[rand]
    
    let data = JSON.parse(JSON.stringify(product))

    for(let key in data.params) {
      const rand = Math.floor(Math.random() * data.params[key].value.length)
      const temp = data.params[key]
      const randParam = temp.value[rand]
      data.params[key].value = randParam
      data.params[key].id = i
    }
    data.titleImage = url
    data.articul = genArticul()
    dataArr.push(data)
  }

  return dataArr
}

export const genArticul = () => {
  return (Math.floor(Math.random() * 1000000) + 500000).toString()
}

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
