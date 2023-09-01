import React from 'react'
// library
import { Link } from 'react-router-dom';
// components
import NavItem from './NavItem';
// imgs
import icon_ball from '../../assets/icon_ball.png';
import icon_login from '../../assets/icon_login.png';
import icon_heart from '../../assets/icon_heart.png';

const Nav = () => {
  const menu = [
    {img: icon_ball, path: '/', title: '포켓몬도감'},
    {img: icon_login, path: '/login', title: '로그인'},
    {img: icon_heart, path: '/wish', title: '즐겨찾기'},
  ];

  return (
    <div>
      <ul className='icon_box'>
        {menu.map((item, idx) => (
          <Link to = {item.path} key={idx}>
            <NavItem item={item} />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Nav;
