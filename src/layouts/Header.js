import React from 'react'
// components
import Nav from './nav/Nav'
// img
import logo from '../assets/main_logo.png';
// style
import './header.scss';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <header id='header'>
      <h1 onClick={()=>{navigate('/')}}>
        <img src={logo} alt='logo' />
      </h1>
      <Nav />
    </header>
  )
}

export default Header
