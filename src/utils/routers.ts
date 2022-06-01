import { MAIN, CATALOG, PRODUCT, NEWS1, COMMENTS, BASKET } from "./consts";
import Main from '../components/pages/main/Main'
import Catalog from '../components/pages/catalog/Catalog'
import Product from '../components/pages/product/Product'
import Tecno from "../components/pages/news/Tecno"
import Comments from "../components/pages/main/Comments";
import Basket from "../components/pages/basket/Basket";

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
    path: NEWS1,
    Element: Tecno
  },
  {
    path: COMMENTS,
    Element: Comments
  },
  {
    path: BASKET,
    Element: Basket
  },
  {
    path: '*',
    Element: Main
  },
]