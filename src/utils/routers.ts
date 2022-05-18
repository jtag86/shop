import { FILTER, MAIN } from "./consts";
import Main from '../components/Main/Main'
import Filter from '../components/Filter/Filter'

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
    path: FILTER,
    Element: Filter
  },
  {
    path: '*',
    Element: Main
  },
]