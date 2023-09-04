import React from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Slice';


const NavItem = ({item}) => {
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.login.value[0]);
  const handleClickUserStatus = () => {
    if(item?.title === '로그아웃') {
      dispatch(login(!userStatus));
    } 
  }
  return (
    <li className='icon' onClick={() => {handleClickUserStatus()}}>
      <img className='icon_img' src={item?.img} alt='icon'/>
      <p className='icon_title'>{item?.title}</p>
    </li>
  )
}

export default NavItem
