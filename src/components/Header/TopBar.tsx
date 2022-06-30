import React from 'react'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { device } from '../../styles/device'
import { Container, Row } from '../../styles/global';
import { useAppSelector } from '../../hooks/hook';
import { NavLink } from 'react-router-dom';
import { REGISTRATION, SIGNIN } from '../../utils/consts';
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { signIn, signOut } from '../../redux/actionCreators/auth'

const Bg = styled.div`
  background-color: #FAFAFA;
  @media ${device.mobileS} {
    display: none;
  }
`

const Title = styled.p`
  font-size: clamp(0.625rem, 0.4167rem + 1.1111vw, 1.25rem);
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
  font-size: clamp(0.625rem, 0.4167rem + 1.1111vw, 1.25rem);
  color: #000;
  line-height: 1.06;
  text-align: center;
  text-decoration: none;
`

const RowCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopBar = () => {

  const dispatch: Dispatch<any> = useDispatch()

  const { auth } = useAppSelector(state => state.auth)



  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <Bg>
      <Container>
        <Wrapper>
          <Row>
            <RowCenter>
              <RowCenter>
                <StyledPhoneIcon />
                <Title>+38068005</Title>
              </RowCenter>

              <RowCenter>
                <StyledEmailIcon />
                <Title>fastsales@gmail.com</Title>
              </RowCenter>
            </RowCenter>

            <RowCenter>
              <RowCenter>
                {
                  auth
                  ?null
                  :(<>
                    <StyledLink to={REGISTRATION}>Регистрация</StyledLink>
                    <VerticalLine />
                  </>
                  )
                }
              </RowCenter>
              {
                auth
                ?<Title onClick={handleSignOut}>Выйти</Title>
                :<StyledLink to={SIGNIN}>Войти</StyledLink>
              }
            </RowCenter>
          </Row>
        </Wrapper>
      </Container>
    </Bg>
  )
}

export default TopBar