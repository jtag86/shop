import React from 'react'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { device } from '../../styles/device'
import { Container, Title, Row } from '../../styles/global';
import { useAppSelector } from '../../hooks/hook';
import { NavLink } from 'react-router-dom';
import { REGISTRATION } from '../../utils/consts';

const Bg = styled.div`
  background-color: #FAFAFA;
  @media ${device.mobileS} {
    display: none;
  }
`

const Wrapper = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  font-weight: 300;
  margin: auto;
`

const StyledPhoneIcon = styled(LocalPhoneIcon)`
  margin: 10px;
`

const StyledEmailIcon = styled(MailOutlineIcon)`
  margin: 10px;
`

const StyledPermIdentityIcon = styled(PermIdentityIcon)`
  margin: 10px;
`
const VerticalLine = styled.div`
  border-left: 1px #ccc solid; height:20px;
  margin: 10px;
`

const StyledLink = styled(NavLink)`
  font-size: clamp(0.5rem, 2vw, 1.2rem);
  color: #000;
  line-height: 1.06;
  text-align: center;
  width: '100%';
  text-decoration: none;

`

const TopBar = () => {

  const { auth } = useAppSelector(state => state.auth)

  return (
    <Bg>
      <Container>
        <Wrapper>
          <Row>
            <Row>
              <Row>
                <StyledPhoneIcon />
                <Title>+38 068 005 3570</Title>
              </Row>

              <Row>
                <StyledEmailIcon />
                <Title>fastsales@gmail.com</Title>
              </Row>
            </Row>

            <Row>
              <Row>
                <StyledPermIdentityIcon />
                {
                  auth
                  ?<Title>Name</Title>
                  :(
                    <StyledLink to={REGISTRATION}>Регистрация</StyledLink>
                  )
                }
                
              </Row>
              <VerticalLine />
              <Title>Войти</Title>
            </Row>
          </Row>
        </Wrapper>
      </Container>
    </Bg>
  )
}

export default TopBar