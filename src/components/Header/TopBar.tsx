import React from 'react'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { device } from '../../styles/device'
import { Container, Title, Row } from '../../styles/global';

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

const TopBar = () => {
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
                <Title>Register</Title>
              </Row>
              <VerticalLine />
              <Title>Sign in</Title>
            </Row>
          </Row>
        </Wrapper>
      </Container>
    </Bg>
  )
}

export default TopBar