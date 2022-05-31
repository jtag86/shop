import { Dispatch } from "redux"
import { Action, ActionTypes} from '../actionTypes/actionProductTypes'
import { IProducts } from "../reducers/productsReducer"
import { processors } from "../../assets/data"
import proc1 from '../../assets/img/products/proc/proc1.jpg'
import proc2 from '../../assets/img/products/proc/proc2.jpg'
import proc3 from '../../assets/img/products/proc/proc3.jpg'
import proc4 from '../../assets/img/products/proc/proc4.jpg'
import proc5 from '../../assets/img/products/proc/proc5.jpg'
const procImages = [proc1, proc2, proc3, proc4, proc5]



export const addProducts = () => {
  return async (dispatch: Dispatch<Action>) => {

    const data = createProduct(processors, procImages)

    try {
      dispatch({
        type: ActionTypes.PRODUCTS_GENERATING,
        payload: data
      })
    } catch(e) {
      dispatch({
        type: ActionTypes.GET_PRODUCTS_FAIL,
        payload: (e as Error).message
      })
    }
  }
}

const createProduct = (processors: any, images: string[]) => {
  const dataArr = []
  for(let i = 0; i<20; i++) {
    let data = JSON.parse(JSON.stringify(processors))
    const rand = Math.floor(Math.random() * images.length)
    const url = images[rand]
  
    for(let key in data) {
      const rand = Math.floor(Math.random() * data[key].value.length)
      
      const temp = data[key]
      const randParam = temp.value[rand]
      data[key].value = randParam
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