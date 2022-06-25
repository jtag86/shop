import React from 'react'
import styled from 'styled-components'

import HeaderMain from './HeaderMain'
import TopBar from './TopBar'

const Wrapper = styled.div`
  width: 100%;
`

const Header = () => {
  return (
    <Wrapper>
      <TopBar />
      <HeaderMain />
    </Wrapper>

  )
}

export default Header