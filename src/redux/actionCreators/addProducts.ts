import { Dispatch } from "redux"
import { Action, ActionTypes} from '../actionTypes/actionProductTypes'
import { 
  books,
  phoneCases,
  chargersData,
  monopods,
  pushButtonPhones,
} from "../../assets/data/data"

import book1 from '../../assets/img/products/books/book1.jpg'
import book2 from '../../assets/img/products/books/book2.jpg'

import buttonPhone1 from '../../assets/img/products/buttonPhones/buttonPhones1.jpg'
import buttonPhone2 from '../../assets/img/products/buttonPhones/buttonPhones2.jpg'

import case1 from '../../assets/img/products/cases/case1.jpg'
import case2 from '../../assets/img/products/cases/case2.jpg'

import charger1 from '../../assets/img/products/chargers/charger1.jpg'
import charger2 from '../../assets/img/products/chargers/charger2.jpg'

import monopod1 from '../../assets/img/products/monopod/monopod1.jpg'
import monopod2 from '../../assets/img/products/monopod/monopod2.jpg'


const bookImages = [book1, book2]
const buttonPhoneImages = [buttonPhone1, buttonPhone2]
const caseImages= [case1, case2]
const chargerImages= [charger1, charger2]
const monopodImages= [monopod1, monopod2]

export const addProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    const bookArr = createProduct( books, bookImages)
    const buttonPhonesArr = createProduct( pushButtonPhones, buttonPhoneImages)
    const casesArr = createProduct( phoneCases, caseImages)
    const chargerArr = createProduct( chargersData, chargerImages)
    const monopodArr = createProduct( monopods, monopodImages)
    
    const result = [...bookArr, ...buttonPhonesArr, ...casesArr, ...chargerArr, ...monopodArr]

    dispatch({
      type: ActionTypes.PRODUCTS_GENERATING,
      payload: result,
      size: result.length
    })
  }
}

const createProduct = (processors: any, images: string[]) => {
  const dataArr = []
  for(let i = 0; i<10; i++) {
    let data = JSON.parse(JSON.stringify(processors))
    const rand = Math.floor(Math.random() * images.length)
    const url = images[rand]
  
    for(let key in data) {
      const rand = Math.floor(Math.random() * data[key].value.length)
      const temp = data[key]
      const randParam = temp.value[rand]
      data[key].value = randParam
      data[key].id = i
    }
    data.url = url
    data.articul = genArticul()
    dataArr.push(data)
  }

  return dataArr
}

export const genArticul = () => {
  return (Math.floor(Math.random() * 1000000) + 500000).toString()
}