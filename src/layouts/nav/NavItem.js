import React from 'react'

const NavItem = ({item}) => {
  return (
    <li className='icon'>
      <img className='icon_img' src={item?.img} alt='icon'/>
      <p className='icon_title'>{item?.title}</p>
    </li>
  )
}

export default NavItem
