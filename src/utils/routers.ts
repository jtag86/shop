import BasketPage from "../pages/BasketPage";
import CommentsPage from "../pages/CommentsPage";
import { MAIN, CATALOG, PRODUCT, NEWS1, COMMENTS, BASKET, DELIVERY, PAYMENT, RELIABILITY, REGISTRATION, SIGNIN, WARRANTY, CREDIT, BONUS, LEGAL, PERSONALDATE } from "./consts";
import DeliveryPage from "../pages/DeliveryPage";
import PaymentPage from "../pages/PaymentPage";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import MainPage from "../pages/MainPage";
import TecnoPage from "../pages/TecnoPage";
import ReliabilityPage from "../pages/ReliabilityPage";
import RegistrationPage from "../pages/RegistrationPage";
import SignInPage from "../pages/SignInPage";
import WarrantyPage from "../pages/WarrantyPage";
import CreditPage from "../pages/CreditPage";
import BonusPage from "../pages/BonusPage";
import LegalPage from "../pages/LegalPage";
import PersonalDatePage from "../pages/PersonalDatePage";

interface Props {
  path: string,
  Element: any
}

export const routers: Array<Props> = [
  {
    path: MAIN,
    Element: MainPage
  },
  {
    path: CATALOG,
    Element: CatalogPage
  },
  {
    path: PRODUCT,
    Element: ProductPage
  },
  {
    path: NEWS1,
    Element: TecnoPage
  },
  {
    path: COMMENTS,
    Element: CommentsPage
  },
  {
    path: BASKET,
    Element: BasketPage
  },
  {
    path: DELIVERY,
    Element: DeliveryPage
  },
  {
    path: PAYMENT,
    Element: PaymentPage
  },
  {
    path: RELIABILITY,
    Element: ReliabilityPage
  },
  {
    path: REGISTRATION,
    Element: RegistrationPage
  },
  {
    path: SIGNIN,
    Element: SignInPage
  },
  {
    path: WARRANTY,
    Element: WarrantyPage
  },
  {
    path: CREDIT,
    Element: CreditPage
  },
  {
    path: BONUS,
    Element: BonusPage
  },
  {
    path: LEGAL,
    Element: LegalPage
  },
  {
    path: PERSONALDATE,
    Element: PersonalDatePage
  },
  {
    path: '*',
    Element: MainPage
  },
]