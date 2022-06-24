import React from 'react'
import AppRouters from './utils/AppRouters'
import { GlobalStyle } from './styles/global';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AppRouters />
    </div>
  );
}

export default App;