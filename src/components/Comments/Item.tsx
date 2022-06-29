import React from 'react'
import styled from 'styled-components/macro'
import { Row } from '../../styles/global'

interface Props {
  item: any
}

const Wrapper = styled.div`
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  padding: 10px;
  margin: 10px;
  width: 100%;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-content: ;
`

const CommentDate = styled.div`
  margin-bottom: 20px;
  color: #999;
`

const CommentName = styled.div`
  width: 200px;
  text-align: left;
`

const CommentText = styled.div`
  width: 100%;

`


const Item: React.FC<Props> = ({item}) => {
  return (
    <Wrapper>
      <Row>
        <Column>
          <CommentDate>{item.date}</CommentDate>
          <CommentName>{item.name}</CommentName>
        </Column>
        <CommentText>{item.text}</CommentText>
      </Row>
    </Wrapper>
  )
}

export default Item