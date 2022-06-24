import React from 'react'
import { Row } from '../../styles/global'
import * as S from './ItemStyles'

type Props = {
  image: string,
  text: string,
}


const Item: React.FC<Props> = ({image, text}) => {
  return (
    <S.Wrapper>
      <Row>
        <S.ImageContainer>
          <S.Image src={image} />
        </S.ImageContainer>
        <S.Text>{text}</S.Text>
      </Row>
    </S.Wrapper>
  )
}

export default Item