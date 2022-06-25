import React from 'react'
import styled from 'styled-components/macro'
import { Container } from '../../styles/global'

const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #fafafa;
`

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const CopyrightText = styled.p`
  font-size: 12px;
  color: rgba(0,0,0,0.6);
`

const Copyright = () => {
  return (
    <Container>
      <Wrapper>
        <Bg>
          <Row>
            <div>
              <CopyrightText>Интернет-площадка. Бытовая и компьютерная техника, комплектующие, ноутбуки, смартфоны и аксессуары.</CopyrightText>
              <CopyrightText>© 2007—2022 </CopyrightText>
            </div>
            <div>
              <CopyrightText>Читайте отзывы покупателей и оценивайте качество магазина на Яндекс.Маркете</CopyrightText>
            </div>
          </Row>
        </Bg>
      </Wrapper>
    </Container>
  )
}

export default Copyright

