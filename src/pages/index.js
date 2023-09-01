import React from 'react'
// library
import { Outlet } from 'react-router-dom'
// components
import Header from '../layouts/Header'
import Search from '../components/Search'
// style
import '../style/layout.scss';

const index = () => {
  return (
    <div>
      <Header />
      <Search />
      <Outlet />
    </div>
  )
}

export default index;
