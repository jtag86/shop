import React from 'react'
import Table from '@mui/material/Table';
import { Container, Heading } from '../../styles/global';
import styled from 'styled-components/macro';
import { comments } from '../../assets/data/comments';
import Item from './Item';

const Title = styled.h4`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
`

const Wrapper = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`

const CommentsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Comments = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Отзывы покупателей</Heading>
          <CommentsContent>
            {
              comments.map(item => (
                <Item item={item} />
              ))
            }
          </CommentsContent>

      </Wrapper>
    </Container>
  )
}

export default Comments