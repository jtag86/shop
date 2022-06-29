import { Snackbar } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'
import { Container } from '../../styles/global'
import MainNav from '../Header/MainNav'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { signIn } from '../../redux/actionCreators/auth'

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-top: 50px;
`

const Button = styled.button`
  display: inline-block;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: #FFFFFF;
  padding-left: 35px;
  padding-right: 35px;
  outline: none;
  cursor: pointer;
  vertical-align: top;
  background: #0e8ce4;
  border-radius: 5px;
  height: 48px;
  margin-left: 80px;
  margin-bottom: 50px;
`

const Form = styled.div`
  max-width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 100px;
`

const UserName = styled.div`

`

const LastName = styled.div`

`

const Password = styled.div`

`

const FormLabel = styled.label`
  font-size: 15px;
  color: #111;
  margin-bottom: 10px;
`

const FormInput = styled.input`
  width: 300px;
  height: 30px;
  background: #FFFFFF;
  border: solid 1px #e5e5e5;
  border-radius: 5px;
  padding-left: 25px;
  font-size: 16px;
  outline: none;
  color: #111;
  margin-bottom: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const Registration = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const [openRegistr, setOpenRegistr] = React.useState(false);

  const handleClick  = () => {
    dispatch(signIn())
    setOpenRegistr(true);

  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpenRegistr(false);
	};



  return (
    <>
      <MainNav show={false} />
      <Container>
        <Title>Авторизация</Title>
        <Form>
          <Row>
            <UserName>
              <Column>
                <FormLabel>Имя</FormLabel>
                <FormInput type="text" />
              </Column>
            </UserName>
            <Password>
              <Column>
                <FormLabel>Пароль</FormLabel>
                <FormInput type="password" />
              </Column>
            </Password>
          </Row>
        </Form>
        <Snackbar
          open={openRegistr}
          autoHideDuration={2000}
          onClose={handleClose}
          message={"Вы успешно авторизовались"}
        />
        <Button onClick={handleClick}>Войти</Button>
      </Container>
    </>

  )
}

export default Registration