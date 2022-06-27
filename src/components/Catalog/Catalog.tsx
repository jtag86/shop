import React, { useEffect } from 'react'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import { MAIN } from '../../utils/consts'
import bgImage from '../../assets/img/catalog_background.jpg'
import { useAppSelector } from '../../hooks/hook'
import { catalogSelector } from '../../redux/selectors/selectors'
import { Container } from '../../styles/global'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'
import MainNav from '../Header/MainNav'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.section`
	padding-top: 80px;
    padding-bottom: 139px;
`
const BgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  background: transparent;
  z-index: 1;
`

const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #cde4f1;
  background: linear-gradient(#FFFFFF, #cde4f1);
  opacity: 0.9;
`

const Bg = styled.div`
  z-index: 1;

  background-image: url(${bgImage});
  min-height: 260px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const BgTitle = styled.h2`
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  text-shadow: rgb(0 0 0 / 1%) 0 0 1px;
  font-size: clamp(1.0rem, -0.4286rem + 4.5714vw, 3rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	@media ${device.tablet} {
		flex-wrap: wrap;
		justify-content: center;
    }
`

const Sidebar = styled.div`
	width: 100%;
	margin-left: 40px;
`

const SidebarSection = styled.div``

const SidebarTitle = styled.div`
	font-size: 18px;
    font-weight: 500;
`

const SidebarCategories = styled.div`
	margin-top: 37px;
	list-style: none;
    margin-bottom: 0px;
	display: flex;
	flex-direction: column;
	align-items: start;

`

const StyledNavLink = styled(NavLink)`
	color: rgba(0,0,0,0.5);
	margin-bottom: 7px;
	text-decoration: none;
	font-size: 14px;
    font-weight: 400;
	margin-bottom: 7px;
	:hover {
		color: #007bff;
	}
`

const Catalog = () => {
  const {category} = useParams()
  const products = useAppSelector(state => catalogSelector(state, category!))

  console.log(products[0])

  return (<>
    <MainNav show={false} />
    <BgWrapper>
      <Bg />
      <BgOverlay />
      <BgTitle>
        {products[0].catalog}
      </BgTitle>
    </BgWrapper>
	<Wrapper>
		<Container>
			<Row>
				<Sidebar>
					<SidebarSection>
						<SidebarTitle>
							Категории
						</SidebarTitle>
						<SidebarCategories>
							<StyledNavLink to={`/catalog/Материнские платы`}>Материнские платы</StyledNavLink>
							<StyledNavLink to={`/catalog/Процессоры`}>Процессоры</StyledNavLink>
							<StyledNavLink to={`/catalog/Оперативная память`}>Оперативная память</StyledNavLink>
							<StyledNavLink to={`/catalog/Видеокарты`}>Видеокарты</StyledNavLink>
							<StyledNavLink to={`/catalog/Жесткие диски`}>HDD</StyledNavLink>
							<StyledNavLink to={`/catalog/SSD диски`}>SSD</StyledNavLink>
							<StyledNavLink to={`/catalog/Блоки питания`}>Блоки питания</StyledNavLink>
							<StyledNavLink to={`/catalog/Корпуса`}>Корпуса</StyledNavLink>
							<StyledNavLink to={`/catalog/Смартфоны`}>Смартофны</StyledNavLink>
							<StyledNavLink to={`/catalog/Телефоны`}>Телефоны</StyledNavLink>
							<StyledNavLink to={`/catalog/Электронные книги`}>Электронные книги</StyledNavLink>
							<StyledNavLink to={`/catalog/Чехлы для телефона`}>Чехлы для телефонов</StyledNavLink>
							<StyledNavLink to={`/catalog/Моноподы`}>Монопод</StyledNavLink>
							<StyledNavLink to={`/catalog/Зарядные устройства`}>Зарядные устройства</StyledNavLink>
						</SidebarCategories>
					</SidebarSection>
				</Sidebar>
				<ProductList products={products} />
			</Row>
		</Container>
	</Wrapper>
  </>
  )
} 

export default Catalog