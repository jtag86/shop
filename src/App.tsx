import React from 'react'
import { createGlobalStyle } from 'styled-components'
import AppRouters from './components/common/AppRouters'
import Footer from './components/pages/common/footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;

  }
  * {
    margin: 0;
    padding: 0;
  }
`


const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRouters />
    </div>
  );
}

export default App;