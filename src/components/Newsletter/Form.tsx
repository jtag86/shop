import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { device } from '../../styles/device'
import Snackbar from '@mui/material/Snackbar'

const StyledForm = styled.form`
  width: 600px;
  vertical-align:middle;
  margin-left: 40px;
  @media ${device.tablet} {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }

`

const Input = styled.input`
  width: 300px;
  height: 50px;
  background: #FFFFFF;
  border: solid 1px #e5e5e5;
  border-radius: 5px;
  padding-left: 25px;
  font-size: 16px;
  outline: none;
  color: #0e8ce4;
  @media ${device.mobileS} {
    width: 100%;
    height: 40px;
  }
`

const Submit = styled.input`
  width: 153px;
  height: 50px;
  background: #0e8ce4;
  color: #FFFFFF;
  line-height: 50px;
  font-size: 18px;
  border: none;
  outline: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  @media ${device.mobileS} {
    width: 113px;
    height: 40px;
    border-radius: 5px;
    line-height: 0px;
    font-size: 12px;
    margin-top: 20px;
  }
`

const NewsletterUnsubscribe = styled.div`
  text-align: right;
  height: 50px;
  display: inline-block;
  margin-left: 20px;
  @media ${device.mobileS} {
    width: 100%;
    text-align: center;
    margin-left: 0px;
  }
`
const NewsletterUnsubscribeLink = styled.div`
  font-size: 10px;
  color: #0e8ce4;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 50px;
  text-decoration: none;
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${device.mobileL} {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Form = () => {
  const [name, setName] = useState("");
  const [openSubscribe, setOpenSubscribe] = React.useState(false);
  const [openUnsubscribe, setOpenUnsubscribe] = React.useState(false);

  const handleClick  = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
	setOpenSubscribe(true);
  }
  const handleClick2  = (event: React.MouseEvent) => {
    event.preventDefault();
	setOpenUnsubscribe(true);
  }
  
	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpenSubscribe(false);
	};
	
	const handleClose2 = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpenUnsubscribe(false);
	};

  return (
    <StyledForm onSubmit={handleClick }>
      <Row>
        <Input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Submit type="submit" value="Подписаться" />
        <NewsletterUnsubscribe>
          <NewsletterUnsubscribeLink onClick={e => handleClick2(e)} >отписаться</NewsletterUnsubscribeLink>
        </NewsletterUnsubscribe>
      </Row>
	  <Snackbar
        open={openSubscribe}
        autoHideDuration={2000}
		    onClose={handleClose}
        message={"Подписка оформлена"}
      />
	  <Snackbar
        open={openUnsubscribe}
        autoHideDuration={2000}
		onClose={handleClose2}
        message={"Вы отписались"}
      />
    </StyledForm>
  )
}

export default Form