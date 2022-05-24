import { MAIN, CATALOG, PRODUCT } from "./consts";
import Main from '../components/pages/main/Main'
import Catalog from '../components/pages/catalog/Catalog'
import Product from '../components/pages/product/Product'

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
    path: CATALOG,
    Element: Catalog
  },
  {
    path: PRODUCT,
    Element: Product
  },
  {
    path: '*',
    Element: Main
  },
]