import { Divider } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components/macro'
import { Heading, Text, Title } from '../../styles/global'
const Wrapper = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
`

const StyledDivider = styled(Divider)`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 20px;
`

const Warranty = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Гарантия на товар</Heading>
        <StyledDivider />
        <Text>
          Гарантийный период – это срок, во время которого клиент, обнаружив недостаток товара имеет право потребовать от продавца или изготовителя принять меры по устранению дефекта. Продавец должен устранить недостатки, если не будет доказано, что они возникли вследствие нарушений покупателем правил эксплуатации.
        </Text>
        <StyledDivider />

        <Title>С какого момента начинается гарантия?</Title>
        <ul>
          <li>с момента передачи товара потребителю, если в договоре нет уточнения;</li>
          <li>если нет возможности установить день покупки, то гарантия идёт с момента изготовления;</li>
          <li>на сезонные товары гарантия идёт с момента начала сезона;</li>
          <li>при заказе товара из интернет-магазина гарантия начинается со дня доставки.</li>
        </ul>
        <StyledDivider />

        <Title>Обслуживание по гарантии включает в себя:</Title>
        <ul>
          <li>устранение недостатков товара в сертифицированных сервисных центрах;</li>
          <li>обмен на аналогичный товар без доплаты;</li>
          <li>обмен на похожий товар с доплатой;</li>
          <li>возврат товара и перечисление денежных средств на счёт покупателя.</li>
        </ul>
      </Wrapper>
    </Container>
  )
}

export default Warranty