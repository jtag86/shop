import React from 'react'
import AppRouters from './utils/AppRouters'
import { GlobalStyle } from './styles/global';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

const App = () => {
  return (

		<div className="App">
		  <GlobalStyle />
		  <Header />
		  <AppRouters />
		  <Newsletter />
		  <Footer />
		  <Copyright />
		</div>

  );
}

export default App;