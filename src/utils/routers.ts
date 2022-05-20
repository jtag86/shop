import { PRODUCTS, MAIN } from "./consts";
import Main from '../components/pages/main/Main'
import Goods from '../components/pages/catalog/Catalog'

interface Props {
  path: string,
  Element: any
}


export const routers: Array<Props> = [
  {
    path: MAIN,
    Element: Main
  },
  {
    path: PRODUCTS,
    Element: Goods
  },
  {
    path: '*',
    Element: Main
  },
]