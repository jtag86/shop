import React from 'react'
import { routers } from './routers'
import { Routes, Route } from 'react-router-dom'

const AppRouters = () => {
  return (
    <Routes>
      {routers.map( ({path, Element}) => <Route key={path} path={path} element={<Element />}/>)}
    </Routes>
  )
}

export default AppRouters