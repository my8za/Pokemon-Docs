import React from 'react'
// library
import { Outlet } from 'react-router-dom'
// components
import Header from '../layouts/Header'
import Search from '../components/search_bar/Search'
import Footer from '../layouts/Footer'

// style
import '../style/layout.scss';

const index = () => {
  return (
    <div>
      <Header />
      <Search />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index;
