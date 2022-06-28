import { Snackbar } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'
import { Container } from '../../styles/global'
import MainNav from '../Header/MainNav'

const RegistrTitle = styled.div`
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

const Phone = styled.div`

`

const Email = styled.div`

`
const Password = styled.div`

`
const ConfirmPassword = styled.div`

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

  const [openRegistr, setOpenRegistr] = React.useState(false);

  const handleClick  = () => {

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
        <RegistrTitle>Регистрация</RegistrTitle>
        <Form>
          <Row>
            <UserName>
              <Column>
                <FormLabel>Имя</FormLabel>
                <FormInput type="text"  />
              </Column>
            </UserName>
            <LastName>
              <Column>
                <FormLabel>Фамилия</FormLabel>
                <FormInput type="text" />
              </Column>
            </LastName>
          </Row>
          <Row>
            <Phone>
              <Column>
                <FormLabel>Телефон</FormLabel>
                <FormInput type="phone" />
              </Column>
            </Phone>
            <Email>
              <Column>
                <FormLabel>E-mail</FormLabel>
                <FormInput type="email" />
              </Column>
            </Email>
          </Row>
          <Row>
            <Password>
              <Column>
                <FormLabel>Пароль</FormLabel>
                <FormInput type="password" />
              </Column>
            </Password>
            <ConfirmPassword>
              <Column>
                <FormLabel>Подтвердить пароль</FormLabel>
                <FormInput type="password" />
              </Column>
            </ConfirmPassword>
          </Row>
        </Form>
        <Snackbar
          open={openRegistr}
          autoHideDuration={2000}
          onClose={handleClose}
          message={"Регистрация Аккаунта завершена"}
        />
        <Button onClick={handleClick}>Создать аккаунт</Button>
      </Container>
    </>

  )
}

export default Registration