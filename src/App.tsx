import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import AppRouters from './components/AppRouters/AppRouters'

function App() {
  return (
    <div className="App">
      <header style={{paddingBottom: '20px'}}>
        <Header  />
      </header>
      <AppRouters />
    </div>
  );
}

export default App;