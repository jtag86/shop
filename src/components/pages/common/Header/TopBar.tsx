import React from 'react'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { device } from '../../../../styles/device'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Bg = styled.div`
  background-color: #FAFAFA;
`

const Wrapper = styled(Flex)`
  border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  font-weight: 300;
  line-height: 56px;
  margin: auto;

  @media ${device.desktop} {
    max-width: 1170px;
    font-size: 16px;
  }

  @media ${device.laptop} {
    max-width: 992px;
  }

  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.mobileL} {
    max-width: 576px;
  }

  @media ${device.mobileS} {
    display: none;
  }
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
      <Wrapper>
        <Flex>
          <Flex>
            <StyledPhoneIcon />
            +38 068 005 3570
          </Flex>

          <Flex>
            <StyledEmailIcon />
            fastsales@gmail.com
          </Flex>
        </Flex>

        <Flex>
          <Flex>
            <StyledPermIdentityIcon />
            Register
          </Flex>
          <VerticalLine />
          Sign in
        </Flex>
      </Wrapper>
    </Bg>
  )
}

export default TopBar