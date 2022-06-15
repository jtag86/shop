import React from 'react'
import styled from 'styled-components'

import HeaderMain from './HeaderMain'
import MainNav from './MainNav'
import TopBar from './TopBar'

const Wrapper = styled.div`
  width: 100%;
`


const Header = () => {
  return (
    <Wrapper>
      <TopBar />
      <HeaderMain />
      <MainNav />
    </Wrapper>

  )
}

export default Header